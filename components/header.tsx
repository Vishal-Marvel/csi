
import Image from "next/image";

import logo1 from "@/public/csilogo.jpg"


export const Header = () => {
    return (
        <div className={"flex justify-between flex-row p-2 m-1"}>
            <Image
                className="p-3"
                src={logo1}
                alt="CSI Logo"
                width={100}
                height={100}
            ></Image> <Image
                className="p-3"
                src={logo1}
                alt="CSI Logo"
                width={100}
                height={100}
            ></Image> <Image
                className="p-3"
                src={logo1}
                alt="CSI Logo"
                width={100}
                height={100}
            ></Image>
        </div>
    )
}