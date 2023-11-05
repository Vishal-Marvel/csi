import {MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className={"justify-between pt-2 mt-1"}>
            <div className={"bg-indigo-950 p-1 w-full"}></div>

            <div className={"bg-yellow-50 p-2"}>

                <div className={"pb-2 ml-4 grid lg:grid-cols-3 md:grid-cols-1 justify-items-center gap-5"}>
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
                    <div className={"flex-col items-center xl:translate-y-5"}>
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
                                <Mail className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5" />
                                <span className="block">
                                    sairam@sairam.edu.in
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className={"flex-col mr-3 pr-3 xl:translate-y-2"}>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <div className="flex items-center group">
                                <Facebook className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5"/>
                                <span className="block">
                                            sairam@sairam.edu.in
                                        </span>
                            </div>
                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <div className="flex items-center group">
                                <Instagram className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5"/>
                                <span className="block">
                                            sairam@sairam.edu.in
                                        </span>
                            </div>
                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <div className="flex items-center group">
                                <Linkedin className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5"/>
                                <span className="block">
                                            sairam@sairam.edu.in
                                        </span>
                            </div>
                        </Link>
                        <Link href="mailto:sairam@sairam.edu.in">
                            <div className="flex items-center group">
                                <Youtube className="h-5 w-5 m-2 transition-transform group-hover:-translate-y-1.5"/>
                                <span className="block">
                                            sairam@sairam.edu.in
                                        </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}