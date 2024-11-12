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

    const isSolutionsLabel = links[hovering!]?.label === "Solutions";
    const isResourcesLabel = links[hovering!]?.label === "Resources";


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
                <Link to={"/"} className="flex items-center w-[123px] h-[35px] outline-none border-none">
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
                                `absolute top-20  ${isResourcesLabel ? "right-40 max-w-[379px] mx-auto" : "right-36 max-w-[512px]  mx-auto"} w-full`,
                                hovering || hovering === 0
                                    ? "opacity-100"
                                    : "opacity-0 border-none"
                            )}
                            onMouseLeave={() => setHovering(null)}
                        >
                            <div className={`${isSolutionsLabel && "max-w-[512px]"} ${isResourcesLabel && "max-w-[379px]"} mx-auto p-4 bg-white shadow-sm rounded-md `}>

                                {hovering !== null &&
                                    links[hovering].subLinks?.map((subLink, index) => {

                                        return (
                                            <React.Fragment key={index}>
                                                <div className={cn(`grid grid-cols-1 gap-y-6 h-full ${isSolutionsLabel && "lg:grid-cols-2"} ${isResourcesLabel && "lg:grid-cols-1"} `)}>
                                                    {subLink.subMenu && (
                                                        <>
                                                            {subLink.subMenu.map((menuItem) => (
                                                                <Link
                                                                    key={menuItem.label}
                                                                    to={menuItem.href}
                                                                    onClick={toggleMenu}
                                                                    className="text-muted block text-sm hover:text-accent transition duration-300 hover:bg-primary/5 rounded-md px-4 py-2"
                                                                >
                                                                    <div className="flex flex-col gap-2">
                                                                        <span className="text-gray-800 font-bold">{menuItem.label}</span>
                                                                        <span className="text-gray-700 text-sm">{menuItem.description}</span>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default DesktopNav;