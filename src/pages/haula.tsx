import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../components/Accordion";
import Hero from "../components/ui/Hero";
import SolutionsSection from "../components/ui/SolutionsSection";

const Haula = () => {
  return (
    <>
      <Hero>
        <Hero.Title>Haula</Hero.Title>
        <Hero.Description>
          Haula is fundamentally uber for logistics. Agribusiness logistics
          precisely. Incorporated transport logistics companies get a web-based
          platform to onboard and manage their drivers while their drivers use
          the Haula mobile app.
        </Hero.Description>

        <Hero.ButtonGroup>
          <Hero.Button
            className=""
            onClick={() => window.open("https://haula.agenpo.com", "_blank")}
          >
            Get Started
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12H20.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5.25L20.75 12L14 18.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Hero.Button>

          <Hero.Button
            className="bg-transparent outline outline-1 px-8 outline-primary text-primary"
            onClick={() => window.open("https://haula.agenpo.com", "_blank")}
          >
            Log In
          </Hero.Button>
        </Hero.ButtonGroup>
        <Hero.Image
          src="./assets/images/dashboard-ui-10.png"
          alt="dashboard-ui-10-image"
        />
      </Hero>

      <SolutionsSection>
        <SolutionsSection.Header title="FEATURES">
          <SolutionsSection.Title>Where Are You Going?</SolutionsSection.Title>
          <SolutionsSection.Description>
            This product is fully integrated with Werhously and AceTraedr. Haula
            is essentially the technology gateway for entrepreneurs looking to
            get into agribusiness from the very critical transport logistics
            side . Receive coordinates from warehouses and off-takers for
            certified agricultural produce collection and delivery respectively.
          </SolutionsSection.Description>
        </SolutionsSection.Header>
        <SolutionsSection.Body>
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center bg-white rounded-full w-full md:w-fit">
              <Link
                to={"#"}
                className="group flex items-center justify-center text-nowrap gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white border border-transparent"
              >
                Logistic Company
              </Link>
              <Link
                to={"#"}
                className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-r-2xl bg-white text-primary border border-transparent"
              >
                Truck
              </Link>
            </div>
          </div>

          <SolutionsSection.Image
            src="./assets/images/dashboard-ui-11.png"
            alt="dashboard-ui-11-image"
          />
        </SolutionsSection.Body>
      </SolutionsSection>

      <Accordion
        title="FAQ"
        subTitle="Questions?"
        className="max-w-4xl mx-auto"
      >
        <AccordionItem value="1" trigger="How do I register on Haula?">
          Simply click on the “Sign up” button and follow the prompts to create
          your account.
        </AccordionItem>
        <AccordionItem value="2" trigger=" How does Haula work?">
          Trucking companies can simply sign up on the web-App while drivers
          have to download the app to receive orders from the companies on Haula
        </AccordionItem>
        <AccordionItem
          value="3"
          trigger=" Do I have to pay to sign up on Haula?"
        >
          No, you do not pay to sign up, it's free.
        </AccordionItem>
        <AccordionItem
          value="4"
          trigger="Are the trucking companies/ Drivers on Haula vetted?"
        >
          Yes, Haula ensures that all trucking companies/drivers on the platform
          undergo a thorough vetting process which includes background checks
          and verification of licenses and insurance.
        </AccordionItem>
        <AccordionItem
          value="5"
          trigger="What types of services does Haula offer?"
        >
          Haula offers logistics services in agribusiness
        </AccordionItem>
      </Accordion>

      <section className="relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10 ">
        <div className="flex">
          <div className="flex flex-col justify-center gap-4 w-full max-w-[576px] p-6 ">
            <h2 className="font-Manrope text-3xl lg:text-5xl text-title font-bold ">
              Ready to get started?
            </h2>
            <p className=" text-gray-600 ">
              Pickup and Deliver certified agro-produce to processors easily
              with the coordinates provided for you.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="https://haula.agenpo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white border border-transparent"
              >
                Get Started
                <svg
                  className="group-hover:translate-x-0.5 duration-300"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 12H20.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 5.25L20.75 12L14 18.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                to="https://haula.agenpo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-white text-primary border border-primary"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="hidden md:block pt-6">
            <img
              src="./assets/images/dashboard-ui-09.png"
              alt="dashboard-ui-09"
              className="pointer-events-none "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Haula;
