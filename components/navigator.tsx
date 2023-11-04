"use client"
import Link from "next/link";
import { useState } from "react";

interface NavigatorProps {
    label: string;
}

export const Navigator = ({ label }: NavigatorProps) => {
    const [activeLink, setActiveLink] = useState(label);

    // Define an array of link labels
    const links = ["/", "Committee", "Events"];

    return (
        <div className="flex justify-around p-1 bg-indigo-950 text-white">
            {links.map((link) => (
                <Link legacyBehavior key={link} href={`/${link.toLowerCase()}`}>
                    <a className={`hover:underline ${link === activeLink ? "font-bold" : ""}`}>
                        {link === "/" ? "Home" : link}
                    </a>
                </Link>
            ))}
        </div>
    );
};
