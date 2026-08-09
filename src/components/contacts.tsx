import {
    Mail,
    Linkedin,
    Github,
    FileUser,
    type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

const links: { label: string; icon: LucideIcon; href: string }[] = [
    {
        label: "Email",
        icon: Mail,
        href: "mailto:harold.d.indra.uni@gmail.com",
    },
    {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/hindra2",
    },
    {
        label: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/harold-indra-4734b9296/",
    },
    {
        label: "Resume",
        icon: FileUser,
        href: "/resume.pdf",
    },
];

export const Contact = () => {
    return (
        <div className="flex gap-8">
            {links.map(({ label, icon: Icon, href }) => (
                <motion.a
                    key={label}
                    href={href}
                    // mailto: should hand off to the mail client, not open a blank tab
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-text hover:text-overlay2"
                >
                    <Icon size={32} />
                </motion.a>
            ))}
        </div>
    );
};
