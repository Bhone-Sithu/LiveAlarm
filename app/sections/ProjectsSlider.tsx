'use client'
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const ProjectList = [
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
    {
        description: "Kitchen & Data Center",
        year: 2015,
        title: "Vantage Tower",
        photo: "/assets/vantage-tower.jpg",
    },
];

const ITEMS_PER_PAGE = 8;

export default function ProjectsSlider() {
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
        <div className="relative w-full h-screen my-20 px-10">
            {/* Slider Container */}
            <div className="flex items-center justify-center h-screen">
                <div className="w-full h-screen">
                    <div className="relative overflow-hidden">
                        {/* Slider Content */}
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {getCurrentItems().map((item, index) => (
                                <div className="min-w-full h-screen" key={index}>
                                    <ProjectCard
                                        description={item.description}
                                        photo={item.photo}
                                        year={item.year}
                                        title={item.title}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Previous Arrow */}
                        <button
                            onClick={goToPreviousSlide}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full"
                        >
                            &lt;
                        </button>

                        {/* Next Arrow */}
                        <button
                            onClick={goToNextSlide}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${
                            index === currentIndex ? "bg-black" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}