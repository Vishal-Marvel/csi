import {StaticImageData} from "next/image";
import hello from "@/public/csilogo.webp";
import {CustomCard} from "@/components/customCard";

const Events = () => {
    const events: { name: string, image: StaticImageData }[] = [
        {name: "Event1", image: hello}
    ]

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-1 justify-items-center ">
                {events.map((member, index) => (
                    <CustomCard key={index} member={member}/>
                ))
                }
            </div>
        </div>
    )
}
export  default Events