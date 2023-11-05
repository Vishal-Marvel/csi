"use client"
import Image from "next/image";

import logo1 from "@/public/csilogo.jpg"
import {useEffect, useRef, useState} from "react";
import {Navigator} from "@/components/navigator";

export const Header = () => {
    const [fixed ,setFixed] = useState(false)
    const headerRef = useRef(null);

    const handleScroll = () => {
        const header = headerRef.current as HTMLElement | null;
        if (header) {
            if (window.scrollY >= header.offsetHeight) {
                // Add a CSS class to apply styles for the fixed navbar
                setFixed(true)
            } else {
                // Remove the CSS class to restore default styles
                setFixed(false)
            }
        }
    };


    // Attach the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div ref={headerRef} className={"flex md:justify-between justify-center flex-row p-2 m-1"}>
                    <Image
                        className="p-3 hidden md:flex"
                        src={logo1}
                        alt="CSI Logo"
                        width={100}
                        height={100}
                    />
                <Image
                    className="p-3"
                    src={logo1}
                    alt="CSI Logo"
                    width={100}
                    height={100}
                />
                <Image
                    className="p-3 hidden md:flex"
                    src={logo1}
                    alt="CSI Logo"
                    width={100}
                    height={100}
                />
            </div>
            <Navigator fixed={fixed}/>
        </div>

    )
}