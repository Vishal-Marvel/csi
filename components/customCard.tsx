import {Card, CardContent} from "@/components/ui/card";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface CommitteeCardProps {
    source: StaticImageData,
    alter: string,
    link?: string
}
export const CustomCard = ({
    source, alter, link
                              } : CommitteeCardProps) => {
    return (
        <div className={"m-2 p-2 "}>

            {link ? (
                <Link href={link}>

                        <Card className="w-[300px]">
                            <CardContent>
                                <div className="flex justify-center">
                                    <Image src={source} alt={alter} height={300} width={200} />
                                </div>
                                <span>Details</span>
                                <p>Description</p>
                            </CardContent>
                        </Card>

                </Link>
            ) : (
                <Card className="w-[300px]">
                    <CardContent>
                        <div className="flex justify-center">
                            <Image src={source} alt={alter} height={300} width={200} />
                        </div>
                        <span>Details</span>
                        <p>Description</p>
                    </CardContent>
                </Card>
            )}

        </div>
    )
}