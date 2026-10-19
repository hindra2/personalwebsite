import { useEffect, useState } from "react";

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

    useEffect(() => {
        const scrollView = document.getElementById(scrollViewId);

        // A short last section never reaches the observer band, so it's
        // claimed whenever the view is scrolled to the bottom.
        const claimLastAtBottom = () => {
            if (!scrollView) return;
            const { scrollTop, clientHeight, scrollHeight } = scrollView;
            if (scrollTop + clientHeight >= scrollHeight - 2) {
                setActiveSection(sections[sections.length - 1]?.id);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
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

        scrollView?.addEventListener("scroll", claimLastAtBottom, {
            passive: true,
        });

        return () => {
            observer.disconnect();
            scrollView?.removeEventListener("scroll", claimLastAtBottom);
        };
    }, [sections, scrollViewId]);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
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
