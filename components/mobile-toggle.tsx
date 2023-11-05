"use client"
import {Menu} from "lucide-react";

import {
    Sheet,
    SheetContent, SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";
interface MobileToggleProps{
    links: string[],
    activeLink: string
}
export const MobileToggle = ({links, activeLink}: MobileToggleProps) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const toggleSheet = () => {
        setIsSheetOpen(!isSheetOpen);
    };
    const closeSheet = () => {
        setIsSheetOpen(false);
    };
    return(
        <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
            <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className={"md:hidden"} onClick={toggleSheet}>
                    <Menu className={"text-white h-6 w-6"}/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetTitle className={"text-indigo-950 text-2xl text-center font-bold"}>
                    COMPUTER SOCIETY OF INDIA
                </SheetTitle>
                <div className={"flex flex-col p-2 m-2"}>
                    {links.map((link) => (
                        <div className={"pt-3 pb-3"}>
                        <Link legacyBehavior key={link} href={`/${link}`}>
                            <a
                                className={`hover:underline capitalize ${
                                    activeLink.includes(link) ? 'font-bold' : ''
                                }`}
                                onClick={closeSheet}
                            >
                                {link === '/' ? 'Home' : link}
                            </a>
                        </Link>
                        </div>
                    ))}
                </div>
            </SheetContent>

        </Sheet>
    )

}