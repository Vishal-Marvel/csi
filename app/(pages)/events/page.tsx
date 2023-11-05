import {Navigator} from "@/components/navigator";
import {StaticImageData} from "next/image";
import hello from "@/public/csilogo.jpg";
import {CustomCard} from "@/components/customCard";

const Events = () => {
    const events = ["Vishal", "Vishal1", "Vishal2", "Vishal", "Vishal1", "Vishal2", "Vishal", "Vishal1", "Vishal2"]
    const eventImages: StaticImageData[] = [hello, hello, hello, hello, hello, hello, hello, hello, hello]

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-1 justify-items-center ">
                {events.map((member, index)=>(
                    <CustomCard key={index} source={eventImages[index]} alter={member} link={"events/"+member}/>
                ))
                }
            </div>
        </div>
    )
}
export  default Events