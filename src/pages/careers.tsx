import { Link } from "react-router-dom"

const Careers = () => {
    return (
        <>
            <section className="w-full lg:max-w-[997px] mx-auto py-5 px-5 lg:px-0">
                <div className="flex flex-col items-center gap-5 w-full lg:lg:max-w-[977px] mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-[82px] font-bold font-Manrope text-center text-title">
                        Careers
                    </h1>
                    <p className="w-full mx-auto font-Manrope lg:text-xl text-primary-acccent lg:pb-16">
                        At Agenpo, we are more than just a company; we are a community bound together by shared values, a common purpose, and a commitment to fostering a workplace culture that fuels our collective success. Our culture is the heartbeat of our organization, guiding us on the path to innovation, collaboration, and unwavering integrity.
                    </p>
                </div>
            </section>
            <div className="w-full p-5 lg:px-0 lg:max-w-[1244px] mx-auto">
                <img src="./assets/images/career-bg-image.png" alt="career-bg-image" className="pointer-events-none" />
            </div>
            <section className="w-full px-5 lg:px-0 lg:max-w-[1216px] mx-auto py-10 lg:py-[92px]">
                <div className="flex flex-col items-center gap-5 w-full mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl w-full lg:text-[82px] font-bold font-Manrope text-center text-title">
                        Life at Agenpo
                    </h1>
                    <p className="w-full mx-auto font-Manrope lg:text-xl text-gray-600 lg:pb-16">
                        At Agenpo, our culture is not a set of rules but a living, breathing entity that shapes our daily experiences and defines our collective identity. Together, we create an environment where every individual can thrive, ideas can flourish, and exceptional results become the norm. As a member of the Agenpo family, you contribute to the vibrancy of our culture, making it a beacon for excellence in the dynamic world we navigate together.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
                    <div className="flex flex-col gap-2 bg-white rounded-md py-8 px-4 hover:translate-y-2 duration-300">
                        <h2 className="text-xl font-bold text-title">Innovation</h2>
                        <p className="text-gray-600 font-Manrope ">We combine speed, convenience, and automation to create seamless and easy-to-use products and services</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-white rounded-md py-8 px-4 hover:translate-y-2 duration-300">
                        <h2 className="text-xl font-bold text-title">Integrity</h2>
                        <p className="text-gray-600 font-Manrope ">With the welfare of every employee in mind, we mold AGENPO into a home that is safe, dependent and reliable.</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-white rounded-md py-8 px-4 hover:translate-y-2 duration-300">
                        <h2 className="text-xl font-bold text-title">Customer First</h2>
                        <p className="text-gray-600 font-Manrope ">All we do, we do for our customers.
                            Providing them quick services, a listening ear and respect.</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-white rounded-md py-8 px-4 hover:translate-y-2 duration-300">
                        <h2 className="text-xl font-bold text-title">Family</h2>
                        <p className="text-gray-600 font-Manrope ">AGENPO is a home away from home. From our hilarious moments to our positive energies to having each other's back.</p>
                    </div>
                </div>
            </section>

            {/* <section className="w-full px-5 lg:px-0 lg:max-w-[1216px] mx-auto lg:py-[92px]">
                <div className="flex flex-col items-center gap-3 lg:gap-8 w-full mx-auto text-center">
                    <h2 className="text-primary-acccent text-sm">OPEN ROLES</h2>
                    <h1 className="text-3xl lg:text-[82px] font-bold font-Manrope text-center text-title">
                        Join Our Team
                    </h1>
                    <p className="w-full mx-auto font-Manrope lg:text-xl text-gray-600 pt-6 lg:pb-16">
                        As a member of the Agenpo family, you contribute to the vibrancy of our culture, making it a beacon for excellence in the dynamic world we navigate together. Welcome to a workplace where culture isn't just a buzzword; it's the soul of our success.
                    </p>
                </div>

                <div className="flex flex-col gap-4 my-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Engineering</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Software Engineer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Frontend Developer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Backend Developer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Full-Stack Developer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">DevOps Engineer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Quality Assurance Engineer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Design</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Graphic Designer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">UI/UX Designer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Illustrator</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Product Designer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Motion Graphics Designer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Brand Designer</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Corporate</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Legal Assistant</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Operations Manager</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Finance Analyst</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Data Science & Analytics </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Data Scientist</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Data Analyst</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Marketing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Marketing Manager</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Digital Marketing Specialist</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Brand Manager</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Public Relations Specialist</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Content Marketing Manager</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-bold font-Manrope text-gray-800 text-2xl">Product</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4 bg-white rounded-md p-4 hover:scale-95 duration-300">
                            <h2 className="text-xl font-bold text-title">Marketing Manager</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Remote</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Fulltime</span>
                                <span className="bg-green-50 rounded-full p-1.5 px-2 text-xs font-Manrope text-primary-acccent">Lagos state,Nigeria</span>
                            </div>
                            <p className="text-primary-acccent font-Manrope ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="w-fit group flex items-center gap-1 text-primary font-Manrope font-semibold ">
                                Apply
                                <svg className="group-hover:translate-x-1 transition duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="relative py-6 lg:py-0 bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-5">
                    <h2 className="w-full px-6 font-Manrope text-3xl lg:text-5xl text-[#212121] text-center font-bold ">Couldn't find a suitable cape for you?</h2>
                    <p className="px-6 text-center text-primary-acccent font-Manrope ">Think you can bring magic to the team that is AGENPO  and can't find a suitable role for you, kindly fill the form below</p>
                    <div className="flex items-center gap-4">
                        <Link to="/contact-us" className="group flex items-center justify-center gap-1.5 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white outline outline-1 outline-primary focus:outline-2 duration-200 border border-transparent">
                            Contact Us
                            <svg className="group-hover:translate-x-1 transition duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12H20.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careers