import {CustomCard} from "@/components/customCard";
import {StaticImageData} from "next/image";
import amothini from '@/public/amothini.webp'
import aravintharaj from '@/public/aravintharaj.webp'
import dineshbabbu from '@/public/babbu.webp'
import periasamy from '@/public/periasamy.webp'
import priya from '@/public/priya.webp'
import varsha from '@/public/varsha.webp'
import venkatram from '@/public/venkatram.webp'
import vishal from '@/public/vishal.webp'
import saikawshik from '@/public/saikawshik.webp'


const Committee = () => {
    const member: { name: string, image: StaticImageData, role: string } =
        {name: "Dr. B. Latha", image: periasamy, role: "HOD/CSE"}
    const staffs: { name: string, image: StaticImageData, role: string }[] = [
        {name: "Dr. J. K. Periasamy", image: periasamy, role: "SBC-CSI & Asso. Prof/CSE"},
        {name: "Dr. B. Priya", image: priya, role: "SBC-CSI & Asso. Prof/CSE"},
    ]
    const committee: { name: string, image: StaticImageData, role: string }[] = [
        {name: "Mr. Aravintharaj S", image: aravintharaj, role: "Chairman"},
        {name: "Ms. Amothini A", image: amothini, role: "Vice Chairman"},
        {name: "Mr. Venkat Ram S", image: venkatram, role: "Secretary"},
        {name: "Ms. Varsha S", image: varsha, role: "Vice Secretary"},
        {name: "Mr. Dhinesh Babbu A", image: dineshbabbu, role: "Treasurer"},
        {name: "Mr. Sai Kaushik", image: saikawshik, role: "Vice Treasurer"},
        {name: "Mr. Vishal N", image: vishal, role: "Web Master"},
    ]

    return (
        <div>
            <div className="flex justify-items-center justify-center">
                <CustomCard member={member}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 m-1 justify-items-center">
                {staffs.map((member, index) => (
                    <CustomCard key={index} member={member}/>
                ))
                }
            </div>
            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-1 justify-items-center">*/}
            <div className="flex flex-wrap m-1 justify-items-center justify-center">
                {committee.map((member, index) => (
                    <CustomCard key={index} member={member}/>
                ))
                }
            </div>
        </div>
    )
}
export default Committee;