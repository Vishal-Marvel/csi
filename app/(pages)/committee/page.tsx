import {Navigator} from "@/components/navigator";
import {CustomCard} from "@/components/customCard";
import {StaticImageData} from "next/image";
import hello from '@/public/csilogo.jpg'

const Committee =()=>{
    const committee = ["Vishal", "Vishal1", "Vishal2", "Vishal", "Vishal1", "Vishal2", "Vishal", "Vishal1", "Vishal2"]
    const committeeImages: StaticImageData[] = [hello, hello, hello, hello, hello, hello, hello, hello, hello]

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-1 justify-items-center">
            {committee.map((member, index)=>(
                    <CustomCard key={index} source={committeeImages[index]} alter={member}/>
                ))
            }
            </div>
        </div>
    )
}
export default Committee;