import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <>
            <section className="w-full lg:max-w-[997px] mx-auto py-5 px-5 lg:px-0">
                <div className="flex flex-col items-center gap-5 w-full lg:lg:max-w-[977px] mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-[82px] font-bold font-Manrope text-center text-title">
                        About Agenpo
                    </h1>
                    <p className="w-full mx-auto font-Manrope lg:text-xl text-primary-acccent lg:pb-16">
                        Agenpo Technologies Ltd is the culmination of a drive that essentially began with an idea in 2016. An idea to simply make it easy and straightforward for just about anyone to get into agribusiness in Nigeria. Since then, there's been a lot of learning, unlearning, relearning, twists, turns and iterations.
                    </p>
                </div>
            </section>
            <div className="w-full p-5 lg:px-0 lg:max-w-[1244px] mx-auto">
                <img src="./assets/images/career-bg-image.png" alt="career-bg-image" className="pointer-events-none" />
            </div>

            <section className="w-full my-10 lg:my-16 ">
                <div className="w-full px-5 lg:px-0 lg:max-w-[1216px] mx-auto lg:text-lg">
                    <div className="flex flex-col gap-4 my-10">
                        <h2 className="text-3xl text-black lg:text-5xl font-bold">Our Vision</h2>
                        <p className="self-end text-gray-700 w-full lg:max-w-[1000px] ">To create a world of abundant economic opportunities in agribusiness for everyone.
                            In our visionary pursuit, we aspire to cultivate a world where agribusiness becomes the fertile ground for boundless economic opportunities, nurturing prosperity for all. Through the innovative spirit of Agenpo, we endeavor to sow the seeds of empowerment, transforming challenges into flourishing fields of abundance. Together, we cultivate a future where every individual, regardless of background, reaps the bountiful harvest of economic success in the ever-growing landscape of agribusiness.</p>
                    </div>
                    <div className="flex flex-col gap-4 my-10">
                        <h2 className="text-3xl text-black lg:text-5xl font-bold">Our Mission </h2>
                        <p className="self-end text-gray-700 w-full lg:max-w-[1000px] ">To unlock latent opportunities in the agriculture and agribusiness value chain.
                            At Agenpo, our mission is to embark on a visionary quest, tirelessly working to unlock the latent opportunities intricately woven within the expansive tapestry of the agriculture and agribusiness value chain. We are committed to being the catalysts of change, pioneers of innovation, and architects of growth. With a resolute spirit, we strive to unravel the untapped potential at every link, transforming challenges into gateways of prosperity. Through technological ingenuity and a steadfast dedication to our mission, we aim to empower individuals, businesses, and communities to thrive in the radiant possibilities awaiting within the vast landscape of agribusiness. Join us on this transformative journey as we unlock, empower, and cultivate a future where the latent becomes the luminous heartbeat of agricultural excellence</p>
                    </div>
                    <div className="flex flex-col gap-4 my-10">
                        <h2 className="text-3xl text-black lg:text-5xl font-bold">Our Strategy </h2>
                        <div className="self-end text-gray-700 w-full lg:max-w-[1000px]">
                            <ol className="list-decimal pl-5 lg:pl-0 ">
                                <li>Lead in Customer Experience</li>
                                <li>Lead in Innovation</li>
                                <li>Lead in Design</li>
                            </ol>
                            <p>To execute our Mission to unlock latent opportunities in the agriculture and agribusiness value chain, we strive to attain leadership in customer experience, innovation, and design.</p>
                        </div>

                        <div className="self-end text-gray-700 w-full lg:max-w-[1000px]">
                            <h4 className="text-gray-700 text-lg font-medium lg:-ml-4">Lead in Customer Experience</h4>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Customer-Centric Approach:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Implement a customer-centric philosophy across all touchpoints.</li>
                                    <li>Regularly gather and analyze customer feedback for continuous improvement.</li>
                                    <li>Develop personalized solutions that cater to the specific needs and challenges of our customers.</li>
                                </ul>
                            </div>

                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Seamless Communication:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Establish clear and transparent communication channels with customers.</li>
                                    <li>Provide responsive and proactive support through various communication channels.</li>
                                    <li>Leverage technology to streamline communication processes and enhance user experience.</li>
                                </ul>
                            </div>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Training and Empowerment:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Invest in training programs for employees to ensure a deep understanding of customer needs.</li>
                                    <li>Empower customer-facing teams with the knowledge and tools to provide efficient solutions.</li>
                                    <li>Develop educational resources for customers to maximize the value they derive from our products and services.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="self-end text-gray-700 w-full lg:max-w-[1000px]">
                            <h4 className="text-gray-700 text-lg font-medium lg:-ml-4">Lead in Innovation</h4>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Research and Development:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Allocate resources for continuous research and development efforts.</li>
                                    <li>Foster a culture of curiosity and creativity within the organization.</li>
                                    <li>Stay ahead of industry trends and emerging technologies to drive innovation.</li>
                                </ul>
                            </div>

                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Collaborative Partnerships:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Establish strategic partnerships with research institutions, agricultural experts, and technology pioneers.</li>
                                    <li>Collaborate with industry leaders to share insights and co-create innovative solutions.</li>
                                    <li>Explore joint ventures and collaborations to leverage complementary strengths.</li>
                                </ul>
                            </div>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Agile Development:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Adopt agile methodologies to enhance the speed and efficiency of product development.</li>
                                    <li>Encourage cross-functional collaboration to facilitate a holistic approach to innovation.</li>
                                    <li>Implement rapid prototyping and testing to quickly validate and iterate on new ideas.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="self-end text-gray-700 w-full lg:max-w-[1000px]">
                            <h4 className="text-gray-700 text-lg font-medium lg:-ml-4">Lead in Design</h4>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">User-Centered Design:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Prioritize user experience in the design and development process.</li>
                                    <li>Conduct user research to understand user needs, preferences, and pain points.</li>
                                    <li>Continuously iterate on designs based on user feedback and evolving requirements.</li>
                                </ul>
                            </div>

                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Aesthetic Excellence:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Enlist the expertise of skilled designers to create visually appealing and intuitive interfaces.</li>
                                    <li>Ensure consistency in design elements across all products and platforms.</li>
                                    <li>Regularly update designs to align with evolving industry standards and aesthetics.</li>
                                </ul>
                            </div>
                            <div className="py-1">
                                <h5 className="text-gray-700 lg:text-lg lg:-ml-4">Sustainability and Scalability:</h5>
                                <ul className="list-disc pl-5 lg:pl-0 ">
                                    <li>Integrate sustainable design practices to minimize environmental impact.</li>
                                    <li>Design products and solutions with scalability in mind to accommodate future growth.</li>
                                    <li>Strive for a balance between aesthetic appeal and functional efficiency in all design endeavors.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="self-end text-gray-700 w-full lg:max-w-[1000px]">
                            <h4 className="text-gray-700 lg:text-lg font-medium">Conclusion:</h4>
                            <p className="lg:text-lg">This strategy document outlines our comprehensive approach to achieving our mission. By leading in customer experience, innovation, and design, we aim to create a lasting impact on the agriculture and agribusiness landscape, unlocking unprecedented opportunities for growth and prosperity.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pb-6 relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="p-5 lg:p-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-5">
                    <h2 className="px-6 font-Manrope text-3xl lg:text-5xl text-title text-center font-bold ">Still have questions?</h2>
                    <p className="px-6 text-center text-gray-600 ">Can't find the answer you're looking for? Please chat to our friendly team.</p>

                    <Link to="/contact-us" className="group flex items-center justify-center gap-3 bg-primary hover:bg-opacity-90 duration-300 w-full lg:w-fit text-white border border-transparent px-6 py-3 rounded-2xl">
                        <span>Contact Us</span>
                        <svg className="flex-shrink-0 group-hover:translate-x-1 transition duration-300" width="10" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.25L8.25 8L1.5 14.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default AboutUs