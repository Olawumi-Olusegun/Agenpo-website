import { Link } from "react-router-dom"
import { Accordion, AccordionItem } from "../components/Accordion"
import Hero from "../components/ui/Hero"
import SolutionsSection from "../components/ui/SolutionsSection"

const Coproma = () => {
    return (
        <>
            <Hero>
                <Hero.Title>Coproma</Hero.Title>
                <Hero.Description>
                    Coproma is a  web-based platform built for food processors/manufacturers. It primarily exists to unburden food processors of their Produce raw material procurement pains so they can focus more on their core activity of processing.
                </Hero.Description>

                <Hero.ButtonGroup>
                    <Hero.Button className="group">
                        Get Started
                        <svg className="group-hover:translate-x-1 transition-all duration-300" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25 12H20.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 5.25L20.75 12L14 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Hero.Button>

                    <Hero.Button className="bg-transparent outline outline-1 px-8 outline-primary text-primary">
                        Log In
                    </Hero.Button>
                </Hero.ButtonGroup>
                <Hero.Image src="./assets/images/dashboard-ui-01.png" alt="dashboard-ui-01-image" />
            </Hero>

            <SolutionsSection>
                <SolutionsSection.Header title="FEATURES">
                    <SolutionsSection.Title>
                        The number one solution to order, access, pay and take delivery of quality-assured agro-Produce.
                    </SolutionsSection.Title>
                    <SolutionsSection.Description>
                        Coproma enables manufacturers and processors to place orders to users of AceTraedr (traders/suppliers) that include what to deliver, where to deliver, when to deliver and amount to deliver. While it serves existing food processors, it also eases planning for prospective food processors/manufacturers because they don’t have to factor in raw materials supply logistics. One of the beauties of Coproma is that only certified produce flows through it.
                    </SolutionsSection.Description>
                </SolutionsSection.Header>
                <SolutionsSection.Body>
                    <SolutionsSection.Image src="./assets/images/dashboard-ui-02.png" alt="dashboard-ui-02-image" />
                </SolutionsSection.Body>
            </SolutionsSection>

            <Accordion title="FAQ" subTitle="Questions?" className="max-w-4xl mx-auto">
                <AccordionItem value="1" trigger="How can I register on the platform?">
                    Simply click on the “Sign up” button and follow the prompts to create your account.
                </AccordionItem>
                <AccordionItem value="2" trigger="Do I have to pay to sign up on the platform?">
                    No, you do not pay to sign up, it's free.
                </AccordionItem>
                <AccordionItem value="3" trigger="What produce are available on Coproma?">
                    The following produce are available, maize, sorghum, paddy rice, seasame seed and soya beans.
                </AccordionItem>
                <AccordionItem value="4" trigger="How do I trust the quality of the produce listed on its platform?">
                    Coproma implements a stringent inspection process for all produce listed and maintains quality assurance standards. Producers are required to adhere to specified quality benchmarks, and users can review produce details before making a procurement decision.
                </AccordionItem>
                <AccordionItem value="5" trigger="Is there a mobile app available for this platform?">
                    No, our platform is accessible via web browser only.
                </AccordionItem>
            </Accordion>

            <section className="relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10 ">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center gap-4 w-full lg:max-w-[576px] p-6 ">
                        <h2 className="font-Manrope text-3xl lg:text-5xl text-title font-bold ">Ready to get started?</h2>
                        <p className=" text-gray-600 ">Order, access and take delivery of quality-assured Produce raw materials with ease.</p>
                        <div className="flex flex-wrap items-center gap-5">
                            <Link to={"#"} className="group flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white border border-transparent">
                                Get Started
                                <svg className="group-hover:translate-x-0.5 duration-300" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <img src="./assets/images/dashboard-ui-03.png" alt="dashbaord-ui-03" className="pointer-events-none" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Coproma