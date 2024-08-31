import { useState } from "react";

export default function ProjectCard({ owner, photo, year, title, system, location }: { owner: string, location: string, system: string, photo: string, year: number, title: string }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`relative w-full md:h-full bg-center bg-cover rounded-md overflow-hidden hover:cursor-pointer transition-transform duration-700 ${hover && 'scale-110'} hover:z-50 hover:shadow-2xl `}
            style={{ backgroundImage: `url(${photo})` }}
        >
            {/* Title Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-700 ${hover ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className="text-2xl text-white text-center">{title}</h1>
            </div>

            {/* Details Overlay */}
            <div
                className={`text-center absolute inset-0 text-white flex flex-col items-center justify-center bg-black bg-opacity-75 rounded-md p-5 transition-transform duration-700 ease-in-out ${hover ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
                <p className={"text"}>({owner})</p>
                <p className={"text"}>{location} {year}</p>
                <p className={"text"}>System - {system}</p>
            </div>
        </div>
    );
}