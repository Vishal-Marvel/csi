import {MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className={"justify-between pt-2 mt-1"}>
            <div className={"bg-indigo-950 p-1 w-full"}></div>

            <div className={"bg-yellow-50 pb-4 h-fit"}>

                <div className={"ml-4 grid md:grid-cols-3 grid-cols-1 md:justify-items-center gap-5"}>
                    <div className={"pb-2"}>
                        <div className="m-2 relative">
                            <span className="text-2xl text-indigo-850 font-bold group">
                                CONTACT
                                <span
                                    className={"group bg-yellow-300 h-1 p-1 w-[40px] absolute -bottom-1.5 origin-left left-1 transform transition-all group-hover:w-[100px]"}>
                                </span>
                            </span>
                        </div>
                        <div className={"flex items-center group p-2"}>
                            <MapPin
                                className={"h-4 w-4 m-2 transform transition-transform group-hover:-translate-y-1"}/>
                            <span
                                className={"uppercase text-indigo-900 font-semibold"}>Sri Sai Ram engineering College</span>

                        </div>
                        <div className={"ml-10"}>
                            <p className={"italic"}>
                                Sai Leo Nagar, West Tambaram,<br/>
                                Chennai - 600 044,<br/>
                                Tamil Nadu. India
                            </p>
                        </div>
                    </div>
                    <div className={"flex-col items-center md:translate-y-5"}>
                        <Link href="tel:04422512222">
                            <div className="flex items-center group">
                                <Phone className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5" />
                                <span className="block">
                                        04422512222
                                </span>
                            </div>
                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <div className="flex items-center group">
                                <Mail className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5"/>
                                <span className="block">
                                    sairam@sairam.edu.in
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className={"justify-items-center grid grid-cols-4 md:grid-cols-1 md:gap-2 gap-5 mr-3 pr-3"}>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <Facebook className="md:h-7 md:w-7 h-6 w-6 m-2 transition-transform hover:-translate-y-1.5"/>

                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <Instagram className="md:h-7 md:w-7 h-6 w-6 m-2 transition-transform hover:-translate-y-1.5"/>

                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <Linkedin className="md:h-7 md:w-7 h-6 w-6 m-2 transition-transform hover:-translate-y-1.5"/>

                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <Youtube className="md:h-7 md:w-7 h-6 w-6 m-2 transition-transform hover:-translate-y-1.5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}