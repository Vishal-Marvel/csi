"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {cn} from "@/lib/utils";
import {MobileToggle} from "@/components/mobile-toggle";

interface NavProps{
    fixed:boolean,
}

export const Navigator = ({fixed}: NavProps) => {
    const [activeLink, setActiveLink] = useState('/');
    const path = usePathname();

    useEffect(() => {
        setActiveLink(path.length > 1 ? path.substring(1) : path);
    }, [path]);


    // Define an array of link labels
    const links = ['home', 'committee', 'events'];

    return (

        <div className={cn(" p-2 bg-indigo-950 transition-all duration-100", fixed?"fixed top-0 left-0 right-0 z-10":"")}>

                <div className={"hidden md:flex justify-around text-white"}>
                    {links.map((link) => (
                        <Link legacyBehavior key={link} href={`/${link!=="home" ? link : ""}`}>
                            <a
                                className={`hover:underline capitalize ${
                                    activeLink.includes(link) || activeLink==="/"&&link==="home" ? 'font-bold' : ''
                                }`}
                            >
                                {link === '/' ? 'Home' : link}
                            </a>
                        </Link>
                    ))}
                </div>
            <div className={"md:hidden flex items-center"}>
                <MobileToggle links={links} activeLink={activeLink}/>
                <span className={`capitalize font-bold text-white justify-center`}>{activeLink === '/' ? 'Home' : activeLink}</span>
            </div>
        </div>

    );
};
