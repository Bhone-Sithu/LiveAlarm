'use client'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 650) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg flex justify-between items-center fixed p-10 z-40 top-0 left-0 w-full transition-all duration-500 ${navBackground ? 'shadow-md p-5 bg-white' : ''}`}>
            <div id={"logo"} className={"flex items-center justify-center"}>
                <img src="/assets/LiveAlarmLogo.svg" alt="Logo" width={70} height={70}/>
                <p style={{color: "#00FF0A", textShadow: "0px 2px 3px rgba(0, 0, 0, .75)"}}
                   className={"ml-3 text-xl"}>Live Alarm <br/><span style={{color: "#FAFF00"}}>Engineering</span></p>
            </div>

            <div id={"nav-links"} className={`flex justify-between w-6/12  text-xl ${navBackground ? 'text-black ' : 'text-gray-200'}`}>
                <Link  href={"#"}>Home</Link>
                <Link  href={"#"}>About</Link>
                <Link href={"#"}>Services</Link>
                <Link  href={"#"}>Contact</Link>
            </div>
        </nav>
    );
}