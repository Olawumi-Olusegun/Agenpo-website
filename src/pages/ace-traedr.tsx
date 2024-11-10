import { Link } from "react-router-dom"
import { Accordion, AccordionItem } from "../components/Accordion"
import Hero from "../components/ui/Hero"
import SolutionsSection from "../components/ui/SolutionsSection"


const AceTraedr = () => {
    return (
        <>
            <Hero>
                <Hero.Title>AceTraedr</Hero.Title>
                <Hero.Description>
                    AceTraedr is a web-based platform that provides  traders with unrivaled access to African produce. On this platform, trading firms can buy, sell, deliver and receive payments from the comfort of their various locations.
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
                <Hero.Image src="./assets/images/dashboard-ui-04.png" alt="dashboard-ui-04-image" />
            </Hero>

            <SolutionsSection>
                <SolutionsSection.Header title="FEATURES">
                    <SolutionsSection.Title>
                        The best solution to trade farm Produce efficiently.
                    </SolutionsSection.Title>
                    <SolutionsSection.Description>
                        On this platform, trading firms can buy, sell, deliver and receive payments from the comfort of their various locations. Produce tradable can range from maize, soya beans and sorghum, to paddy rice, and seasame seed. In what can be described as 2-factor authentication, only certified and warehoused produce become available for trades. AceTraedr is the most relevant gateway to trade physical produce in Africa from anywhere. ..
                    </SolutionsSection.Description>
                </SolutionsSection.Header>
                <SolutionsSection.Body>
                    <SolutionsSection.Image src="./assets/images/dashboard-ui-05.png" alt="dashboard-ui-05-image" />
                </SolutionsSection.Body>
            </SolutionsSection>

            <Accordion title="FAQ" subTitle="Questions?" className="max-w-4xl mx-auto">
                <AccordionItem value="1" trigger="How can I register on the platform?">
                    Simply click on the “Sign up” button and follow the prompts to create your account.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I fund my wallet for trading?">
                    You can fund your wallet by depositing funds through various payment methods available on the platform.
                </AccordionItem>
                <AccordionItem value="3" trigger="Is my personal information secure on this platform?">
                    Yes, we prioritize the security and confidentiality of your personal information using advanced encryption technology.
                </AccordionItem>
                <AccordionItem value="4" trigger="Are there any fees associated with using the platform?">
                    Yes, there are nominal fees associated with certain transactions on the platform. Details can be found when making an offer.
                </AccordionItem>
                <AccordionItem value="5" trigger="How can I contact support if I encounter any issues?">
                    You can reach out to our support team through the contact form on the website or via email at contact@agenpo.com for assistance.
                </AccordionItem>
            </Accordion>

            <section className="relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10 ">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center gap-4 w-full max-w-[576px] p-6 ">
                        <h2 className="font-Manrope text-3xl lg:text-5xl text-title font-bold ">Ready to get started?</h2>
                        <p className=" text-gray-600 ">Buy, sell & deliver quality-assured produce from the comfort of any location.</p>

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
                        <img src="./assets/images/dashboard-ui-06.png" alt="dashboard-ui-06" className="pointer-events-none " />
                    </div>
                </div>

            </section>
        </>
    )
}

export default AceTraedr