'use client'
import ProjectCard from "@/components/ProjectCard";
import React, {useState} from "react";

let ProjectList = [
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg"
    },
]
const ITEMS_PER_PAGE = 8;
export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalPages = Math.ceil(ProjectList.length / ITEMS_PER_PAGE);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const getCurrentItems = () => {
        const start = currentIndex * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return ProjectList.slice(start, end);
    };

    return (
        <>
            <div className={"w-full h-screen my-20 px-10  relative "}>
                <div
                    className="grid grid-cols-4 grid-rows-2 gap-3 w-full h-full transition-transform duration-500 ease-out"
                    // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {
                        getCurrentItems().map((item, index) => (
                            <><ProjectCard description={item.description} photo={item.photo} year={item.year}
                                           title={item.title}/></>
                        ))
                    }
                </div>
                {/* Previous Arrow */}
                <button
                    onClick={goToPreviousSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full w-[6%] h-[10%] ml-1 bg-gradient-to-br from-green-300 to-yellow-300 z-50 hover:scale-110 transition duration-500 ease-out"
                >
                   <p className={"text-black text-5xl font-bold"}>&lt;</p>
                </button>

                {/* Next Arrow */}
                <button
                    onClick={goToNextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full w-[6%] h-[10%] ml-1 bg-gradient-to-br from-green-300 to-yellow-300 z-50 hover:scale-110 transition duration-500 ease-out"
                >
                    <p className={"text-black text-5xl font-bold"}>&gt;</p>
                </button>
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({length: totalPages}).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentIndex ? "bg-gradient-to-br from-green-300 to-yellow-300" : "bg-gray-300"
                }`}
            />
        ))}
    </div>
    </>
)
    ;
}