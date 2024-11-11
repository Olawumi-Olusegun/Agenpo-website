import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <>
            <section className="w-full lg:max-w-[760px] mx-auto py-5 px-5 lg:px-0">
                <div className="flex flex-col items-center gap-5 w-full lg:lg:max-w-[977px] mx-auto text-center">
                    <h1 className="text-5xl lg:text-[82px] font-bold text-center text-title">
                        Blog
                    </h1>
                    <p className="text-gray-700 w-full lg:max-w-[1019px] mx-auto text-lg ">
                        Be the first to get access to Top stories and information about agriculture  news from Agenpo
                    </p>
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
                        <input type="text" placeholder="Enter email address" className="w-full lg:w-fit p-3 outline outline-1 outline-primary rounded-md focus:outline-2" />
                        <button className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-md bg-primary hover:bg-opacity-90 text-white outline outline-1 outline-primary focus:outline-2 duration-200 border border-transparent">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full lg:max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-01.png" alt="blog-image-01" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">Organic Farming: Cultivating a Sustainable Future</h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Exploring the principles and practices of organic farming, from soil health to crop rotation, and its impact on environmental sustainability.
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-02.png" alt="blog-image-02" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Harnessing Technology for Growth
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Dive into the world of precision agriculture and discover how advanced technologies like GPS, drones, and sensors are revolutionizing farming.
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-03.png" alt="blog-image-03" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Farm-to-Table Movement: Bridging the Gap
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Delving into the farm-to-table movement, its origins, and how it's reshaping the food industry by promoting local, sustainable agriculture
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-04.png" alt="blog-image-04" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        The Future of Vertical Farming: Growing Upward
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Exploring the potential of vertical farming to address food security challenges, conserve resources, and transform urban agriculture
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-05.png" alt="blog-image-05" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Crop Rotation: Balancing Soil Health and Yield
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Understanding the importance of crop rotation in maintaining soil fertility, reducing pests and diseases, and optimizing crop yields
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-06.png" alt="blog-image-06" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Agricultural Innovation: Navigating the Digital Frontier
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Discover how digital technologies like IoT, AI, and blockchain are revolutionizing the agricultural landscape, from field to market
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-07.png" alt="blog-image-07" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Sustainable Water Management in Agriculture
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Examining the importance of sustainable water management practices in agriculture to ensure long-term productivity and environmental stewardship
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-08.png" alt="blog-image-08" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Climate-Smart Agriculture: Adapting to Change
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Exploring climate-smart agriculture practices designed to mitigate climate change impacts while enhancing resilience and productivity
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-md p-4">
                    <div className="w-full h-full max-h-[330px] pointer-events-none overflow-hidden">
                        <img src="./assets/images/blog/blog-image-09.png" alt="blog-image-09" className="w-full h-full rounded-md object-cover object-center" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs ">
                        <span>News</span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9E9E9E" strokeMiterlimit="10" />
                                <path d="M8 4.5V8H11.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            32 mins read
                        </span>
                        <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 1.5V3.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 5.5H13.5" stroke="#9E9E9E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Feb 15 , 2024
                        </span>
                    </div>
                    <h2 className="font-bold text-xl text-black/80 line-clamp-2 ">
                        Agri-Tourism: Cultivating Connections with Consumers
                    </h2>

                    <p className="text-gray-500 font-Manrope line-clamp-3 ">
                        Uncover the potential of agri-tourism in forging connections between consumers and farmers, promoting local agriculture, and boosting rural economies
                    </p>

                    <Link to={"#"} className="self-start group mt-auto flex items-center py-2 gap-2 rounded-md text-primary">
                        Read More
                        <svg className="group-hover:translate-x-0.5 duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11467 4.83507L4.53867 1.25907L5.48133 0.316406L10.6667 5.50174L5.48133 10.6871L4.53867 9.74441L8.11467 6.16841H0V4.83507H8.11467Z" fill="#218838" />
                        </svg>
                    </Link>
                </div>
            </section>

            <section className="py-6 relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-5">
                    <h2 className="px-6 font-Manrope text-3xl lg:text-5xl text-[#212121] text-center font-bold ">Stay Informed</h2>
                    <p className="px-6 text-center text-[#757575] ">Be the first to get access to Top stories and information about agriculture  news from Agenpo</p>
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4  px-5">
                        <input type="text" placeholder="Enter email address" className="w-full lg:w-fit p-3 outline outline-1 outline-primary rounded-md focus:outline-2" />
                        <button className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-md bg-primary hover:bg-opacity-90 text-white outline outline-1 outline-primary focus:outline-2 duration-200 border border-transparent">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog