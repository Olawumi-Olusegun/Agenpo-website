import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../components/Accordion";
import Hero from "../components/ui/Hero";
import SolutionsSection from "../components/ui/SolutionsSection";

const Werhously = () => {
  return (
    <>
      <Hero>
        <Hero.Title>Werhously</Hero.Title>
        <Hero.Description>
          Werhously is a web-based platform for inbound and outbound warehouse
          operations. On this platform, warehouse owners and managers can
          onboard their warehouses for exclusive use within Agenpo's
          agribusiness ecosystem.
        </Hero.Description>

        <Hero.ButtonGroup>
          <Hero.Button
            className="w-full md:w-fit"
            onClick={() =>
              window.open("https://werhously.agenpo.com", "_blank")
            }
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
            className="w-full md:w-fit bg-transparent outline outline-1 px-8 outline-primary text-primary"
            onClick={() =>
              window.open("https://werhously.agenpo.com", "_blank")
            }
          >
            Log In
          </Hero.Button>
        </Hero.ButtonGroup>
        <Hero.Image
          src="./assets/images/dashboard-ui-07.png"
          alt="dashboard-ui-07-image"
        />
      </Hero>

      <SolutionsSection>
        <SolutionsSection.Header title="FEATURES">
          <SolutionsSection.Title>
            The best solution For Produce Warehouse Logistics.
          </SolutionsSection.Title>
          <SolutionsSection.Description>
            The warehouses are available to users of FarmSider, Korprativ and
            AgriGeitor when looking for their nearest available warehouse for
            the certification and sale of their produce. Being involved in the
            agribusiness ecosystem ensures a continuous flow of income to the
            warehouse. Approved warehouses will have met criteria such as the
            availability of security, insurance and internet connectivity.
          </SolutionsSection.Description>
        </SolutionsSection.Header>
        <SolutionsSection.Body>
          <SolutionsSection.Image
            src="./assets/images/dashboard-ui-08.png"
            alt="dashboard-ui-05-image"
          />
        </SolutionsSection.Body>
      </SolutionsSection>

      <Accordion
        title="FAQ"
        subTitle="Questions?"
        className="max-w-4xl mx-auto"
      >
        <AccordionItem
          value="1"
          trigger="How do I register my warehouse to make it visible to various producers?"
        >
          Sign up on Werhously by providing all the required information during
          the registration process. After successfully creating your account,
          navigate to the geolocation section in settings within the web app.
          Upon successful geolocation, your warehouse becomes available for use.
        </AccordionItem>
        <AccordionItem
          value="2"
          trigger="How can I effectively monitor my warehouse operations?"
        >
          Werhously offers a user-friendly dashboard, providing a comprehensive
          overview of your warehouse and also enables you to seamlessly monitor
          both inbound and outbound operations for enhanced control and
          productivity.
        </AccordionItem>
        <AccordionItem value="3" trigger="How can i contact customer support?">
          To share your feedback or report issues, navigate to the "Contact Us"
          section. Fill in the required information, along with details about
          your concerns or complaints, and we will respond to you as soon as
          possible.
        </AccordionItem>
        <AccordionItem value="4" trigger="Does werhously have a mobile app?">
          No, Werhously is a web app designed to be accessed through a web
          browser.
        </AccordionItem>
        <AccordionItem
          value="5"
          trigger="How do I receive payments on Werhously?"
        >
          Werhously simplifies the payment process through its wallet feature by
          allowing you to seamlessly receive payments directly within the web
          app. You also have the flexibility to withdraw the funds available in
          your wallet to your bank account at any time, providing you with
          convenient control over your financial transactions.
        </AccordionItem>
      </Accordion>

      <section className="relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10 ">
        <div className="flex">
          <div className="flex flex-col justify-center gap-4 w-full max-w-[576px] p-6">
            <h2 className="font-Manrope text-3xl lg:text-5xl text-title font-bold ">
              Ready to get started?
            </h2>
            <p className=" text-gray-600 ">
              Manage warehouse logistics of produce end-to-end.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="https://werhously.agenpo.com"
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
                to="https://werhously.agenpo.com"
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

export default Werhously;
