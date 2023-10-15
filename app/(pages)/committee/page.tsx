import {Navigator} from "@/components/navigator";
import {CommitteeCard} from "@/components/committeeCard";
import {StaticImageData} from "next/image";
import hello from '@/public/csilogo.jpg'

const Committee =()=>{
    const committee = ["Vishal", "Vishal1", "Vishal2"]
    const committeeImages: StaticImageData[] = [hello, hello, hello]

    return (
        <div>

            <Navigator label={"Committee"}/>
            {committee.map((member, index)=>(
                    <CommitteeCard key={index} source={committeeImages[index]} alter={member}/>
                ))
            }
        </div>
    )
}
export default Committee;