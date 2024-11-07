import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { links } from "./navLinks";
import { cn } from "../../../utils/cn";

export default function MobileNav() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openedMenu, setOpenedMenu] = useState<number | null>(null);


    function handleClick(index: number) {
        setOpenedMenu(openedMenu === index ? null : index);
    }

    useEffect(() => {
        const handleWidthAdjust = () => {
            if (window.innerWidth >= 20) {
                setMenuOpen(false);
                setOpenedMenu(null)
            }
        }
        window.addEventListener("resize", handleWidthAdjust);

        return () => window.removeEventListener("resize", handleWidthAdjust)
    }, [])

    useEffect(() => {
        setMenuOpen(false);
        setOpenedMenu(null)
    }, [pathname]);

    return (
        <>
            <div className="lg:hidden fixed bg-white top-0 left-0 z-[90] w-full flex items-center px-3 py-5 justify-between">

                <Link to={"/"} onClick={() => setMenuOpen(false)} className="flex items-center lg:hidden">
                    <img src="./assets/images/Agenpo-logo-large.png" alt="Agenpo Logo" className="w-full h-full object-cover object-center" />
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl text-primary-90 lg:hidden"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={menuOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

            </div>

            <div
                className={cn(
                    "bg-white flex overflow-y-auto flex-col px-6 pt-5 h-full min-h-screen fixed left-0 top-0 z-[999] lg:hidden border-r border-accent w-[75%] transition-all duration-300 ease-in-out",
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between ">
                    <Link to={"/"} onClick={() => setMenuOpen(false)} className="flex items-center">
                        <img src="./assets/images/Agenpo-logo-large.png" alt="Agenpo Logo" className="w-full h-full object-cover object-center" />
                    </Link>
                </div>
                <nav className="flex flex-col gap-4 pt-1.5 pr-2 overflow-y-scroll maiaddy-custom-scrollbar">
                    {links.map((link, index) => (
                        <div key={`${link.label}-${index}`}>

                            {
                                link?.subLinks ? (
                                    <button
                                        onClick={() => handleClick(index)}
                                        className={cn(
                                            "text-muted w-full hover:cursor-pointer rounded-md font-semibold text-neutral-80 hover:text-accent hover:bg-primary-90 hover:text-white transition duration-300 ease-in-out py-2 px-2 flex items-center justify-between",
                                            pathname === link.href && "bg-primary-90 text-white",
                                            openedMenu === index && "bg-primary-90 text-white"
                                        )}
                                    >
                                        {link.label}
                                        {link.subLinks && (
                                            <ChevronDown
                                                className={cn(
                                                    "transition-all cursor-pointer duration-300",
                                                    openedMenu === index ? "rotate-180" : ""
                                                )}
                                            />
                                        )}
                                    </button>
                                )
                                    : (
                                        <Link
                                            to={link.href}
                                            className={cn(
                                                "text-muted w-full hover:cursor-pointer rounded-md font-semibold text-neutral-80 hover:text-accent hover:bg-primary-90 hover:text-white transition duration-300 ease-in-out py-2 px-2 flex items-center justify-between",
                                                pathname === link.href && "bg-primary-90 text-white",
                                                openedMenu === index && "bg-primary-90 text-white"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    )
                            }
                            {openedMenu === index && (
                                <div className="pl-2 mt-1.5 ">
                                    {link.subLinks?.map((subLink, idx) => (
                                        <React.Fragment key={idx}>
                                            <div className="space-y-2 border-l">
                                                {subLink.subMenu && (
                                                    <>
                                                        {subLink.subMenu.map((subItem) => (
                                                            <Link
                                                                to={subItem.href}
                                                                key={subItem.label}
                                                                className="p-2 hover:bg-primary-90/80 hover:text-white duration-300 block text-sm transition pl-4"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
}
