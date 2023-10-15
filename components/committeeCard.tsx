import {Card, CardContent} from "@/components/ui/card";
import Image, {StaticImageData} from "next/image";

interface CommitteeCardProps {
    source: StaticImageData,
    alter: string
}
export const CommitteeCard = ({
    source, alter
                              } : CommitteeCardProps) => {
    return (
        <div className={"m-2 p-2"}>
            <Card className={"w-[300px] "}>
                <CardContent>
                    <Image src={source} alt={alter} height={300} width={200}/>
                    <span>
                        Details
                    </span>
                    <p>
                        Description
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}