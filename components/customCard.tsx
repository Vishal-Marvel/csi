import {Card, CardContent} from "@/components/ui/card";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface CommitteeCardProps {
    member: { name: string, image: StaticImageData, role: string },
    link?: string
}
export const CustomCard = ({
                               member, link
                           }: CommitteeCardProps) => {
    return (
        <div className={"m-2 p-2 "}>

            {link ? (
                <Link href={link}>
                    <Card className="w-[300px]">
                        <CardContent>
                            <div className="flex-col justify-center">
                                <Image src={member.image} alt={member.name} height={300} width={200}/>
                                <span className={"font-bold"}>{member.name}</span>
                                <span>{member.role}</span>
                            </div>

                        </CardContent>
                    </Card>
                </Link>
            ) : (
                <Card className="w-[300px]">
                    <CardContent>
                        <div className="flex justify-center">
                            <Image src={member.image} alt={member.name} className={"object-cover"}/>

                        </div>
                        <div className={"flex-col text-center"}>
                            <span className={"font-bold"}>{member.name}</span>
                            <br/>
                            <span>{member.role}</span>
                        </div>
                    </CardContent>
                </Card>
            )}

        </div>
    )
}