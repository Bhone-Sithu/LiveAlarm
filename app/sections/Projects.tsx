'use client'
import ProjectCard from "@/components/ProjectCard";
import React, {useEffect, useState} from "react";

let ProjectList = [
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangon"
    },
    {
        title: "Vantage Tower (Kitchen & Data Center)",
        owner: "Myint & Associate Co., Ltd",
        system: "Wet Chem, NN100",
        year: 2015,
        photo: "/assets/vantage-tower.jpg",
        location:"Yangons"
    },

]
const DEFAULT_ITEMS_PER_PAGE = 4;
export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

    // Determine the number of items per page based on screen size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1280) {
                // xl
                setItemsPerPage(8);
            } else if (window.innerWidth >= 1024) {
                // lg
                setItemsPerPage(6);
            } else {
                // xs to md
                setItemsPerPage(4);
            }
        };

        updateItemsPerPage(); // Set items per page on initial load
        window.addEventListener("resize", updateItemsPerPage); // Update items per page on window resize

        return () => window.removeEventListener("resize", updateItemsPerPage); // Clean up event listener on component unmount
    }, []);

    const totalPages = Math.ceil(ProjectList.length / itemsPerPage);

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
        const start = currentIndex * itemsPerPage;
        const end = start + itemsPerPage;
        return ProjectList.slice(start, end);
    };

    return (
        <>
            <div  className={"w-full md:h-screen h-[600px] my-20 px-10  relative "}>
                <div
                    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-3 w-full h-full transition-transform duration-500 ease-out"
                    // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {
                        getCurrentItems().map((item, index) => (
                            <ProjectCard location={item.location} owner={item.owner} photo={item.photo} year={item.year}
                                           title={item.title} key={index} system={item.system} />
                        ))
                    }
                </div>
                {/* Previous Arrow */}
                <button
                    onClick={goToPreviousSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full w-[15%] md:w-[6%] md:h-[10%] ml-1 bg-gradient-to-br from-green-300 to-yellow-300 z-50 active:scale-125 transition duration-500 ease-out"
                >
                   <p className={"text-black text-5xl font-bold"}>&lt;</p>
                </button>

                {/* Next Arrow */}
                <button
                    onClick={goToNextSlide}
                    className="absolute top-1/2 right-1 transform -translate-y-1/2 p-2 bg-black text-white rounded-full w-[15%] md:w-[6%] h-[10%] ml-1 bg-gradient-to-br from-green-300 to-yellow-300 z-50  active:scale-125 transition duration-500 ease-out"
                >
                    <p className={"text-black text-5xl font-bold "}>&gt;</p>
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