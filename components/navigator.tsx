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
        <div className="flex justify-between pr-60 pl-60 p-1 bg-blue-500 text-white">
            {links.map((link) => (
                <Link legacyBehavior key={link} href={`/${link.toLowerCase()}`}>
                    <a className={`hover:underline ${link === activeLink ? "text-black" : ""}`}>
                        {link === "/" ? "Home" : link}
                    </a>
                </Link>
            ))}
        </div>
    );
};
