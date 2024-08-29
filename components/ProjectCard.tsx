export default function ProjectCard({ description, photo, year, title  }: { description: string, photo: string, year:number, title:string }) {
    return (
        <div className={` w-full bg-cover relative rounded-md hover:scale-110 transition duration-700 hover:z-50 hover:shadow-2xl hover:cursor-pointer`} style={{ backgroundImage: `url(${photo})` }}>
            <div className={"bg-black w-full h-2/5 absolute bottom-0 text-white flex flex-col justify-center items-center rounded-b-md"} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 className={"text-3xl"}>{title}</h1>
                <p className={"text-xl"}>{year}</p>
                <p className={"text-xl"}>{description}</p>
            </div>
        </div>
    );
}