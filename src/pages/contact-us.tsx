import Hero from "../components/ui/Hero"

const ContactUs = () => {
    return (
        <>
            <Hero>
                <Hero.Title>Contact Us</Hero.Title>
                <Hero.Description>
                    Explore our frequently asked questions and get answers to all questions regarding  AGENPO TECHNOLOGIES LTD
                </Hero.Description>
            </Hero>
            <section className="flex flex-col lg:flex-row gap-10 gap-x-[108px] w-full px-5 lg:px-0 lg:max-w-[1216px] mx-auto my-10 lg:my-[88px] ">
                <div className="flex flex-col gap-4 w-full lg:max-w-[598px]">
                    <h2 className="w-full text-3xl lg:text-[56px] leading-none font-bold text-gray-900 lg:max-w-[296px]">Reach Out to Us</h2>
                    <p className="lg:text-xl text-primary-acccent">Keep the conversation going! Connect with us to share your throughts ideas, or concerns</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto ">
                        <div className="rounded-lg p-6">
                            <div className="mb-4 bg-green-500/20 rounded-full p-2 w-fit">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                            <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
                            <a href="mailto:contact@agenpo.com" className="text-primary font-semibold">contact@agenpo.com</a>
                        </div>
                        <div className="rounded-lg p-6">
                            <div className="mb-4 bg-green-500/20 rounded-full p-2 w-fit">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns=" http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01.502-.79l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                            <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+447551164250" className="text-primary font-semibold">+447551164250</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-md p-6 mb-5 ">
                    <form className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-1">
                                <label className="text-primary-acccent" htmlFor="firstName">First Name</label>
                                <input type="text" required id="firstName" className="p-2 bg-[#FAFAFC] placeholder:text-gray-400 border border-gray-300 rounded-md outline-1 outline-gray-500 focus-visible:outline focus-visible:border-transparent duration-300" placeholder="Enter first name" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-primary-acccent" htmlFor="lastName">Last Name</label>
                                <input type="text" required id="lastName" className="p-2 bg-[#FAFAFC] placeholder:text-gray-400 border border-gray-300 rounded-md outline-1 outline-gray-500 focus-visible:outline focus-visible:border-transparent duration-300" placeholder="Enter last name" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-primary-acccent" htmlFor="emailAddress">Email Address</label>
                                <input type="text" required id="emailAddress" className="p-2 bg-[#FAFAFC] placeholder:text-gray-400 border border-gray-300 rounded-md outline-1 outline-gray-500 focus-visible:outline focus-visible:border-transparent duration-300" placeholder="Enter email address" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-primary-acccent" htmlFor="phoneNumber">Phone Number</label>
                                <div className="flex px-2 items-center bg-[#FAFAFC] border border-gray-300 rounded-md outline-1 outline-gray-500 focus-within:outline focus-within:border-transparent">
                                    <div className="flex items-center ">
                                        <span>+234</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_16869_1411)">
                                                <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="#3D523D" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_16869_1411">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <input type="text" required id="phoneNumber" className="flex-1 py-2 bg-transparent placeholder:text-gray-400 border-none outline-none" placeholder="Enter phone number" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-primary-acccent" htmlFor="message">Enter Message</label>
                                <textarea rows={5} required name="message" id="message" placeholder="Enter Message" className="p-2 bg-[#FAFAFC] placeholder:text-gray-400 border border-gray-300 rounded-md outline-1 outline-gray-500 focus-visible:outline focus-visible:border-transparent duration-300 resize-y"></textarea>
                            </div>
                        </div>
                        <button className="w-full p-2 rounded-md bg-primary hover:bg-primary/80 duration-300 text-white ">Submit</button>
                    </form>
                </div>
            </section>

            <section className="pb-6 relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-5">
                    <h2 className="px-6 font-Manrope text-3xl lg:text-5xl text-title text-center font-bold ">Stay Informed</h2>
                    <p className="px-6 text-center text-gray-700 ">Be the first to get access to Top stories and information about agriculture  news from Agenpo</p>
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4  px-5">
                        <input type="text" placeholder="Enter email address" className="w-full lg:max-w-[384px] p-3 outline outline-1 outline-primary rounded-md focus:outline-2" />
                        <button className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-md bg-primary hover:bg-opacity-90 text-white outline outline-1 outline-primary focus:outline-2 duration-200 border border-transparent">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs