import { Link } from "react-router-dom"
import { Accordion, AccordionItem } from "../components/Accordion"
import Hero from "../components/ui/Hero"
import SolutionsSection from "../components/ui/SolutionsSection"


const Certoma = () => {
    return (
        <>
            <Hero>
                <Hero.Title>Certoma</Hero.Title>
                <Hero.Description>
                    Certoma caters to the indispensable agribusiness stakeholder group of certification companies. This web-based platform enables certification businesses manage their certification officers in the field who are also known as Quality Inspectors and will use the Inspektr mobile app.
                </Hero.Description>

                <Hero.ButtonGroup>
                    <Hero.Button className="">
                        Get Started
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25 12H20.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 5.25L20.75 12L14 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Hero.Button>

                    <Hero.Button className="bg-transparent outline outline-1 px-8 outline-primary text-primary">
                        Log In
                    </Hero.Button>
                </Hero.ButtonGroup>
                <Hero.Image src="./assets/images/dashboard-ui-16.png" alt="dashboard-ui-16-image" />
            </Hero>

            <SolutionsSection>
                <SolutionsSection.Header title="FEATURES">
                    <SolutionsSection.Title>
                        Onboard and manage your team of Produce quality inspectors.
                    </SolutionsSection.Title>
                    <SolutionsSection.Description>
                        Using Certoma, the businesses can onboard, offboard and even allocate certification/inspection jobs to their field officers. Income made from certifying produce is also managed on the web platform!.
                    </SolutionsSection.Description>
                </SolutionsSection.Header>
                <SolutionsSection.Body>
                    <SolutionsSection.Image src="./assets/images/dashboard-ui-17.png" alt="dashboard-ui-17-image" />
                </SolutionsSection.Body>
            </SolutionsSection>

            <Accordion title="FAQ" subTitle="Questions?" className="max-w-4xl mx-auto">
                <AccordionItem value="1" trigger=" What is the Certoma web-app for? ">
                    The Certoma Web-app is designed to streamline the certification and inspection process for agribusinesses. It provides a platform for submitting applications, tracking certification progress, and accessing past inspection records.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I begin using Certoma?">
                    To get started, simply click on "Sign up” and create an account by providing the required information and following the prompts within the web-app.
                </AccordionItem>
                <AccordionItem value="3" trigger="How secure is my personal information stored within the app? ">
                    Certoma takes user privacy and data security seriously. The Web-app employs industry-standard encryption and security measures to safeguard your personal information and certification records.
                </AccordionItem>
                <AccordionItem value="4" trigger="How do I provide feedback or suggestions for improving the app?">
                    We welcome feedback from users to enhance the Web-app's functionality and user experience. You can submit feedback or suggestions through the Web-app's feedback feature or contact customer support directly.
                </AccordionItem>
                <AccordionItem value="5" trigger="Who can benefit from using Certoma?">
                    Certoma is strictly for certification and inspection companies in the agricultural niche
                </AccordionItem>
            </Accordion >

            <section className="relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10 ">
                <div className="flex">
                    <div className="flex flex-col justify-center gap-4 w-full max-w-[576px] p-6 ">
                        <h2 className="font-Manrope text-3xl lg:text-5xl text-title font-bold ">Ready to get started?</h2>
                        <p className=" text-gray-600 ">Manage a team of Produce quality inspectors from anywhere with ease.</p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link to={"#"} className="group flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white border border-transparent">
                                Get Started
                                <svg className="group-hover:translate-x-1 duration-300" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12H20.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 5.25L20.75 12L14 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to={"#"} className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-white text-primary border border-primary">
                                Log In
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block pt-6">
                        <img src="./assets/images/dashboard-ui-18.png" alt="dashboard-ui-18" className="pointer-events-none " />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certoma