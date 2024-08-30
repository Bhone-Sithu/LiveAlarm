'use client'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [navBackground, setNavBackground] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav
            className={`navbar navbar-expand-lg flex justify-between items-center fixed p-10 z-40 top-0 left-0 w-full transition-all duration-500 ${navBackground ? 'shadow-md p-5 bg-white' : ''}`}>
            <div id={"logo"} className={"flex items-center justify-center "}>
                <img src="/assets/LiveAlarmLogo.svg" alt="Logo" width={70} height={70}/>
                <p style={{color: "#00FF0A", textShadow: "0px 2px 3px rgba(0, 0, 0, .75)"}}
                   className={"ml-3 text-xl"}>Live Alarm <br/><span style={{color: "#FAFF00"}}>Engineering</span></p>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                {isMobileMenuOpen ? <button onClick={toggleMobileMenu} id={"cross"}
                                            className={` text-black text-5xl z-50 relative transition duration-1000 transform mr-2`}>
                    x
                </button> : <button onClick={toggleMobileMenu} id={"burger"}
                                    className={`${navBackground ? 'text-black' : 'text-white'}  z-50 text-5xl relative transition duration-1000 transform`}>
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
                 className={`hidden md:flex justify-between w-6/12 text-xl ${navBackground ? 'text-black ' : 'text-gray-200'}`}>

                <Link href={"#about"}>About</Link>
                <Link href={"#services"}>Services</Link>
                <Link href={"#projects"}>Projects</Link>
                <Link href={"#contact"}>Contact</Link>
            </div>
            <style jsx>{`
                #cross{
                    animation: cross 250ms linear;
                }
                #cross:active {
                    animation: cross 250ms linear reverse;
                }
                #burger{
                    animation: burger 250ms linear;
                }
                #burger:active {
                    animation: burger 250ms linear reverse;
                }
                @keyframes cross {
                    from{
                        scale:0;
                        rotate:145deg;
                    }
                    to{
                        scale:1;
                    }
                }
                @keyframes burger {
                    from{
                        scale:0;
                        rotate:145deg;
                    }
                    to{
                        scale:1;
                    }
                }
            `}</style>
        </nav>
    );
}