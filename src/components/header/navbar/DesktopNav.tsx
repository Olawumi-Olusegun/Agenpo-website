import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { links } from "./navLinks";
import { cn } from "../../../utils/cn";



const DesktopNav = () => {
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovering, setHovering] = useState<number | null>(null);
    const subRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY >= 20) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleMouseEnter(index: number) {
        if (links[index].subLinks) {
            setHovering(index);
        } else {
            setHovering(null);
        }
    }

    const toggleMenu = () => {
        setHovering(null);
    };

    return (
        <header
            className={cn("hidden lg:block fixed top-0 pt-5 left-0 right-0 z-[100] w-full bg-[#FAFAFA] transition-all", isScrolled && "bg-[#FAFAFA]")}>
            <div className="max-w-[1087px] mx-auto flex h-20 bg-white rounded-full px-5 items-center justify-between">
                <Link to={"/"} className="flex items-center w-[123px] h-[35px] ">
                    <img src="./assets/images/Agenpo-logo-large.png" alt="Agenpo Logo" className="w-full h-full object-cover object-center" />
                </Link>

                <div className="hidden lg:flex items-center gap-x-10">
                    <nav
                        className="flex items-center gap-3"
                        onMouseLeave={() => {
                            if (!subRef.current) {
                                setHovering(null);
                            }
                        }}
                    >
                        {links.map((link, index) => (
                            <div
                                key={link.label}
                                className="block group"
                                onMouseEnter={() => handleMouseEnter(index)}

                            >
                                <Link
                                    to={link.href}
                                    className={cn(
                                        "relative text-gray-700 flex items-center gap-x-0.5 group-hover:text-primary transition-all duration-300 px-3 py-1 rounded-md ",
                                        pathname === link.href &&
                                        "text-primary",
                                        hovering === index &&
                                        "text-primary bg-secondary"
                                    )}
                                >
                                    {
                                        pathname === link.href && <div className="absolute h-1.5 w-1.5 bg-primary rounded-full bottom-0 left-1/2 -translate-x-1/2" />
                                    }

                                    {link.label}
                                    {link.subLinks && (
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 transition-all group-hover:text-accent",
                                                hovering === index && "rotate-180"
                                            )}
                                        />
                                    )}
                                </Link>
                            </div>
                        ))}

                        <div
                            ref={subRef}
                            className={cn(
                                "absolute top-20 left-0 w-full bg-background transition-all ease-in-out",
                                hovering || hovering === 0
                                    ? "opacity-100"
                                    : "opacity-0 border-none"
                            )}
                            onMouseLeave={() => setHovering(null)}
                        >
                            <div className="max-w-7xl mx-auto gap-6 p-5 bg-white shadow-sm ">
                                {hovering !== null &&
                                    links[hovering].subLinks?.map((subLink, index) => (
                                        <React.Fragment key={index}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full">
                                                {subLink.subMenu && (
                                                    <>
                                                        {subLink.subMenu.map((menuItem) => (
                                                            <Link
                                                                key={menuItem.label}
                                                                to={menuItem.href}
                                                                onClick={toggleMenu}
                                                                className="text-muted block text-sm hover:text-accent transition"
                                                            >
                                                                <div className="flex flex-col gap-3">
                                                                    <span className="text-xl text-gray-800 font-bold">{menuItem.label}</span>
                                                                    <span className="text-base  text-neutral-70">{menuItem.description}</span>
                                                                    <span className="group flex items-center gap-2 text-primary-70 hover:text-primary-70/80">
                                                                        <span className="text-base">Learn More</span>
                                                                        <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </>
                                                )}
                                            </div>

                                        </React.Fragment>
                                    ))}
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default DesktopNav;