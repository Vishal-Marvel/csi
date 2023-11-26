"use client"
import Image from "next/image";

import csiKpmLogo from "@/public/csilogo-kpm.webp"
import saiRamLogo from "@/public/sairam-logo.webp"
import sec from "@/public/SEC.webp"
import chairman from "@/public/chairman.webp"
import {useEffect, useRef, useState} from "react";
import {Navigator} from "@/components/navigator";
import {FloatNavigator} from "@/components/float-navigator";

export const Header = () => {
    const [fixed, setFixed] = useState(false)
    const headerRef = useRef(null);

    const handleScroll = () => {
        const header = headerRef.current as HTMLElement | null;
        if (header) {
            if (window.scrollY >= header.offsetHeight + 10) {
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
            <div ref={headerRef} className={"flex justify-between align-middle flex-col md:flex-row p-2 m-1"}>
                {/* CSI Logo (Hidden in Mobile View) */}
                <Image
                    className="p-3 object-contain md:flex hidden"
                    src={sec}
                    alt="CSI Logo"
                    width={120}
                    height={10}
                />

                {/* Div Container (Top in Mobile View) */}
                <div className={"flex-col order-first md:order-none justify-center text-center"}>
                    <div className={"flex justify-center"}>
                        {/* Sai Ram Logo (Centered) */}
                        <Image
                            className="p-3 object-contain"
                            src={saiRamLogo}
                            alt="Sairam Logo"
                            width={255}
                            height={5}
                        />
                        <div className={" mt-5 mb-5 pr-0.5 border-amber-950 bg-black"}></div>

                        {/* Chairman Image (Centered) */}
                        <Image
                            className="p-3 object-contain"
                            src={chairman}
                            alt="Chairman"
                            width={90}
                            height={10}
                        />
                    </div>
                    <span className={"font-bold text-indigo-950 text-2xl "}> COMPUTER SOCIETY OF INDIA</span>
                </div>

                {/* CSI Logo and KPM Logo (Hidden in Desktop View) */}
                <div className={"flex justify-center md:hidden"}>
                    {/* CSI Logo (Hidden in Desktop View) */}
                    <Image
                        className="p-3 object-contain"
                        src={sec}
                        alt="CSI Logo"
                        width={120}
                        height={10}
                    />

                    {/* CSI KPM Logo (Hidden in Desktop View) */}
                    <Image
                        className="p-3 object-contain"
                        src={csiKpmLogo}
                        alt="CSI KPM Logo"
                        width={140}
                        height={10}
                    />
                </div>

                {/* CSI KPM Logo (Hidden in Mobile View) */}
                <Image
                    className="p-3 object-contain md:flex hidden"
                    src={csiKpmLogo}
                    alt="CSI KPM Logo"
                    width={140}
                    height={10}
                />
            </div>

            {/**
             * Navigator component that provides navigation links.
             * @component
             * @param {boolean} fixed - Determines whether the Navigator should be fixed at the top.
             */
            }
            <Navigator/>
            <FloatNavigator fixed={fixed}/>

        </div>

    )
}