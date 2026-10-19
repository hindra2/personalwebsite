import { useEffect, useRef, useState } from "react";

import { SectionButton } from "@/components/section-button";

export const SideNav = ({
    sections,
    scrollViewId,
}: {
    sections: { id: string; label: string }[];
    /** The element that scrolls on desktop, used as the observer root. */
    scrollViewId: string;
}) => {
    const [activeSection, setActiveSection] = useState(sections[0]?.id);

    // Set while a nav click is smooth-scrolling, so the sections it passes on
    // the way don't each take the highlight. Cleared once scrolling settles.
    const scrollLock = useRef<number | null>(null);

    const holdScrollLock = () => {
        if (scrollLock.current !== null) clearTimeout(scrollLock.current);
        scrollLock.current = window.setTimeout(() => {
            scrollLock.current = null;
        }, 150);
    };

    useEffect(() => {
        const scrollView = document.getElementById(scrollViewId);

        // A short last section never reaches the observer band, so it's
        // claimed whenever the view is scrolled to the bottom.
        const claimLastAtBottom = () => {
            if (!scrollView || scrollLock.current !== null) return;
            const { scrollTop, clientHeight, scrollHeight } = scrollView;
            if (scrollTop + clientHeight >= scrollHeight - 2) {
                setActiveSection(sections[sections.length - 1]?.id);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (scrollLock.current !== null) return;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
                claimLastAtBottom();
            },
            {
                root: scrollView,
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            },
        );

        sections
            .map((section) => document.getElementById(section.id))
            .filter((section) => section !== null)
            .forEach((section) => observer.observe(section));

        const onScroll = () => {
            if (scrollLock.current !== null) holdScrollLock();
            else claimLastAtBottom();
        };

        scrollView?.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observer.disconnect();
            scrollView?.removeEventListener("scroll", onScroll);
        };
    }, [sections, scrollViewId]);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        // Also releases the lock if the click doesn't scroll at all.
        holdScrollLock();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex-col text-sm mt-5 space-y-3 gap-2 hidden md:flex">
            {sections.map((section) => (
                <SectionButton
                    key={section.id}
                    title={section.label}
                    isActive={activeSection === section.id}
                    onClick={() => scrollToSection(section.id)}
                />
            ))}
        </div>
    );
};
