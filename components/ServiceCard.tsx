
import Image from "next/image";

export default function ServiceCard({ description, photo, index, title  }: { description: string, photo: string, index:number, title:string }) {
    let bullets = description.split('.');
    bullets.pop();
    return (
        <>

            <div
                className={`w-8/12 bg-white rounded-lg shadow-xl z-20 mx-auto  p-10 `}>
                <h1 className={"text-3xl text-center font-light mb-10"}>{title}</h1>
                <div className={`flex items-center justify-between ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                <Image src={photo} alt={"Service Icon"} width={300} height={300} className={`${index===3 && 'w-[150px]'}`}/>
                <ul className={"list-disc w-6/12"}>
                    {bullets.map((bullet, index) => (
                        <li key={index} className={"my-2 text-lg"}>{bullet}.</li>
                    ))}
                </ul>
                </div>
            </div>
        </>
    )
}