import { Link } from "react-router-dom"
import Hero from "../components/ui/Hero"

const Produce = () => {
    return (
        <>
            <Hero>
                <Hero.Title>Produce</Hero.Title>
                <Hero.Description className="text-primary-acccent w-full lg:max-w-[760px]">
                    Explore our selection of crops and learn about the options that are available based on quality, price and availability.
                </Hero.Description>
            </Hero>
            <div className="w-full max-w-[1210px] mx-auto my-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="flex items-center gap-2">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Maize - MA</h2>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-primary">MAH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-red-500">MAJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-primary">MAK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Maize (Zea mays) is the third most important cereal grain in the world, after wheat and rice, providing nutrients for humans and animals and serving as a basic raw material for production of starch, oil, protein, alcoholic beverages, food sweeteners, and fuel.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Sesame Seeds - SE</h2>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-primary">SEH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-red-500">SEJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <span className="text-xs text-primary">SEK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Sesame seeds are an excellent source of manganese and calcium, both of which help your bones grow healthy and strong. Calcium also plays a role in nerve signal transmission, muscle movement, blood vessel function, and hormone release. Other vitamins and minerals found in sesame seeds include: Phosphorous.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Produce