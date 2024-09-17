'use client'
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import Link from "next/link";
import {useEffect, useState} from "react";
import Services from "@/app/sections/Services";
import Values from "@/app/sections/Value";
import Image from "next/image";
import Contact from "@/app/sections/Contact";

export default function About(){
    const personnel = [
        {
            name: "Zaw Lwin Cho",
            position: "Project Manager",
            education: "BE (Mech:)"
        },
        {
            name: "Aye Thwin",
            position: "Project Engineer",
            education: "-"
        },
        {
            name: "Ko Ko Naing",
            position: "Project Engineer",
            education: "AGTI (EP)"
        },
        {
            name: "Khun Zaw Aung",
            position: "Project Engineer",
            education: "BE (Mech:)"
        },
        {
            name: "Aung Thu",
            position: "Welder/Fitter",
            education: "-"
        },
        {
            name: "Aung Ko Ko Oo",
            position: "Welder/Fitter",
            education: "-"
        },
        {
            name: "Sithu Win",
            position: "Welder/Fitter",
            education: "-"
        },
        {
            name: "Ye Thiha",
            position: "Installer",
            education: "-"
        },
        {
            name: "Htwe Htwe Aung",
            position: "Installer",
            education: "-"
        },
        {
            name: "Zin Phyoe Aung",
            position: "Installer",
            education: "-"
        },
        {
            name: "Khant Wai Phyoe Thu",
            position: "Installer",
            education: "-"
        },
        {
            name: "Kyaw Zay Tun",
            position: "Installer",
            education: "-"
        },
        {
            name: "Zarni Myo Aung",
            position: "Installer",
            education: "-"
        },
        {
            name: "Myo Min Oo",
            position: "Installer",
            education: "-"
        },
        {
            name: "Paizay Myo Aung",
            position: "Installer",
            education: "-"
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };
    return (
        <main className="min-h-screen  z-10 relative" id={"landing"}>
            <nav
                className={`navbar navbar-expand-lg flex justify-between items-center fixed p-10 z-40 top-0 left-0 w-full transition-all duration-500 shadow-md p-5 bg-white`}>
                <Link href={"/"} id={"logo"} className={"flex items-center justify-center "}>
                    <img src="/assets/LiveAlarmLogo.svg" alt="Logo" width={70} height={70}/>
                    <p style={{color: "#00FF0A", textShadow: "0px 2px 3px rgba(0, 0, 0, .75)"}}
                       className={"ml-3 text-xl"}>Live Alarm <br/><span style={{color: "#FAFF00"}}>Engineering</span>
                    </p>
                </Link>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    {isMobileMenuOpen ? <button onClick={toggleMobileMenu} id={"cross"}
                                                className={` text-black text-5xl z-50 relative transition duration-1000 transform mr-2`}>
                        x
                    </button> : <button onClick={toggleMobileMenu} id={"burger"}
                                        className={`text-black  z-50 text-5xl relative transition duration-1000 transform`}>
                        ☰
                    </button>}

                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 flex flex-col items-center justify-center bg-white text-black transition-transform transform duration-700 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <Link href={"#about"} onClick={toggleMobileMenu} className="p-4">About</Link>
                    <Link href={"#services"} onClick={toggleMobileMenu} className="p-4">Services</Link>
                    <Link href={"#projects"} onClick={toggleMobileMenu} className="p-4">Projects</Link>
                    <Link href={"#contact"} onClick={toggleMobileMenu} className="p-4">Contact</Link>
                </div>

                {/* Desktop Menu */}
                <div id={"nav-links"}
                     className={`hidden md:flex justify-between w-6/12 text-xl text-black`}>

                    <Link href={"#about"}>About</Link>
                    <Link href={"#services"}>Services</Link>
                    <Link href={"#projects"}>Projects</Link>
                    <Link href={"#contact"}>Contact</Link>
                </div>
                <style jsx>{`
                    #cross {
                        animation: cross 250ms linear;
                    }

                    #cross:active {
                        animation: cross 250ms linear reverse;
                    }

                    #burger {
                        animation: burger 250ms linear;
                    }

                    #burger:active {
                        animation: burger 250ms linear reverse;
                    }

                    @keyframes cross {
                        from {
                            scale: 0;
                            rotate: 145deg;
                        }
                        to {
                            scale: 1;
                        }
                    }

                    @keyframes burger {
                        from {
                            scale: 0;
                            rotate: 145deg;
                        }
                        to {
                            scale: 1;
                        }
                    }
                `}</style>
            </nav>
            <div className={"bg-white rounded-xl w-full z-30 relative py-5"}
                 style={{marginTop: "10vh", height: "100%"}}>
                <div className={"w-1 h-1"}></div>
                <Title title={"Why you need Fire Protection System?"}/>
                <p className={'lg:text-lg lg:w-8/12 w-11/12 font-light lg:text-center mx-auto my-10 tracking-widest'} style={{lineHeight: "2.1rem"}}>
                    In line with the country aim to uplift infrastructure developments that have transformed the lives
                    of the Myanmar people, Live Alarm Engineering has the latest high-tech, well-designed and
                    sophisticated fire protection system to help to protect your commercial building by complying
                    international standards. Early detection and fighting is vital. Fires cause loss of property and
                    loss of
                    jobs. The difference between losing and saving your business will likely be decided during the first
                    five minutes of a fire. Your odds of surviving a fire are 100% better if a working fire protection
                    system has been installed. Without qualified protection, not only ineligible for Fire Safety
                    Insurance
                    (local & international), but also lost your properties. That’s why; fire protection system shall be
                    installed in Movie Theatres, Grocery and Convenient Stores, Restaurants, Schools, Malls, Banks,
                    Dorms, Nursing Homes, Hospitals, Libraries, Airport, Sub way stations & tunnels, Power house,
                    Ware house, Factories and more....
                </p>
                <Title title={"What we do?"}/>
                <div className={"grid lg:grid-cols-2 lg:grid-rows-2 lg:w-8/12 w-11/12 mx-auto gap-16 m-10 text-lg"}>
                    <div className="bg-green-100 h-full p-5 rounded-md shadow-xl">
                        <h1 className={"text-center text-2xl font-bold underline mb-8"}>Design</h1>
                        <ul className={"space-y-3"}>
                            <li>&#10003; Fire Hazard Class/Level?</li>
                            <li>&#10003; Budget?</li>
                            <li>&#10003; Minimum Requirement?</li>
                            <li>&#10003; Follows CPs, S.S & Project Specifications?</li>
                            <li>&#10003; Modernistic, Ability & Long life for next 20 years?</li>
                            <li>&#10003; Interfacing?</li>
                            <li>&#10003; System update/upgrade?</li>
                            <li>&#10003; Self alone or Communicate to others (buildings, Fire Brigade/etc...)?</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-100 h-full p-5 rounded-md shadow-xl">
                        <h1 className={"text-center text-2xl font-bold underline mb-8"}>Installation</h1>
                        <ul className={"space-y-3"}>
                            <li>&#10003; Fire Hazard Class/Level?</li>
                            <li>&#10003; Budget?</li>
                            <li>&#10003; Minimum Requirement?</li>
                            <li>&#10003; Follows CPs, S.S & Project Specifications?</li>
                            <li>&#10003; Modernistic, Ability & Long life for next 20 years?</li>
                            <li>&#10003; Interfacing?</li>
                            <li>&#10003; System update/upgrade?</li>
                            <li>&#10003; Self alone or Communicate to others (buildings, Fire Brigade/etc...)?</li>
                        </ul>
                    </div>
                    <div className="bg-green-100 lg:bg-yellow-100 h-full p-5 rounded-md shadow-xl">
                        <h1 className={"text-center text-2xl font-bold underline mb-8"}>Demolishing</h1>
                        <ul className={"space-y-3"}>
                            <li>&#10003; Effect to existing system?</li>
                            <li>&#10003; Follows Project Specifications?</li>
                            <li>&#10003; Phase by phase or Categorized?</li>
                            <li>&#10003; Well-trained or Skill-full workers?</li>
                            <li>&#10003; Method of Statements?</li>
                            <li>&#10003; Follows Health, Safety & Environment (HSE) and Risk assessments?</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-100 lg:bg-green-100 h-full p-5 rounded-md shadow-xl">
                        <h1 className={"text-center text-2xl font-bold underline mb-8"}>Project Documentation</h1>
                        <ul className={" text-lg"}>
                            <li>&#10003; Consolidate Installation Program (CIP)?</li>
                            <li>&#10003; Variation Order (VO) from Tender?</li>
                            <li>&#10003; Add-in & Additional works (A&A)?</li>
                            <li>&#10003; Office Documents (progress, schedule, report, PTW, MoS, RA, MoM, DO, etc…)?
                            </li>
                            <li>&#10003; System Wide Co-ordination (SWC)?</li>
                            <li>&#10003; Inspection Check Lists?</li>
                            <ul className={"ml-5 text-sm"}>
                                <li>i. Installation</li>
                                <li>ii. Individual Self-Testing & Commissioning</li>
                                <li>iii. Interface/ Integrated Testing & Commissioning</li>
                            </ul>
                            <li>&#10003; Material Submission for approval?</li>
                            <li>&#10003; Drawings?</li>
                            <ul className={"ml-5 text-sm"}>
                                <li>i. Tender Working drawing (Plan)</li>
                                <li>ii. Combined System wide Drawing (CSD)</li>
                                <li>iii. System Enlargement Drawing (SEM)</li>
                                <li>iv. As build Working drawing (Plan)</li>
                            </ul>
                            <li>&#10003; Training & Manual Documents?</li>
                            <li>&#10003; Operation & Maintenance Documents (O & M)?</li>
                            <li>&#10003; Defect Liability Period (DLP)?</li>
                            <li>&#10003; Project Hand-over?</li>
                        </ul>
                    </div>
                </div>
                <Values/>
                <Title title={"Organization Chart"}/>
                <br/>
                <br/>
                <Image className={"lg:w-7/12 mx-auto px-5"} src={"/assets/OrganizationChart.png"} alt={"Organization Chart"}
                       width={800} height={800}/>
                <table className="w-8/12 mx-auto my-20 table-auto border-collapse border border-gray-400">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">S/N</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Position</th>
                        <th className="border border-gray-300 px-4 py-2">Education</th>
                    </tr>
                    </thead>
                    <tbody>
                    {personnel.map((person,index)=>(
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.position}</td>
                            <td className="border border-gray-300 px-4 py-2">{person.education}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <Contact/>
                <p className={"text-center font-light font-xs"}>© 2024 LIVE ALARM ENGINEERING COMPANY LIMITED All Rights
                    Reserved</p>
            </div>
        </main>
    );
}