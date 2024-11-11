import { Link } from "react-router-dom"
import { Accordion, AccordionItem } from "../components/Accordion"
import Hero from "../components/ui/Hero"

const FAQs = () => {
    return (
        <>
            <Hero>
                <Hero.Title>FAQs</Hero.Title>
                <Hero.Description className="w-full px-5 lg:px-0 lg:max-w-[849px] text-primary-acccent ">
                    Explore our frequently asked questions and get answers to all questions regarding  AGENPO TECHNOLOGIES LTD
                </Hero.Description>
            </Hero>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> General </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0">
                <AccordionItem value="1" trigger="What is Agenpo Technologies, and what services does it offer?">
                    Agenpo Technologies is a revolutionary platform dedicated to transforming the agricultural landscape. It connects all players in the agricultural value chain, including farmers, aggregators, processors, traders, and more. Through its technology-driven platform, users can discover real-time Produce prices and engage with trustlessly.
                </AccordionItem>
                <AccordionItem value="2" trigger="When was Agenpo Technologies founded?">
                    Agenpo Technologies Ltd was founded in 2022 and has since evolved into a dynamic platform that simplifies entry into agribusiness in Nigeria.
                </AccordionItem>
                <AccordionItem value="3" trigger="What problem does Agenpo Technologies aim to solve?">
                    Agenpo addresses the significant financing gap in Nigeria's agriculture and agribusiness sector. By providing innovative solutions, it empowers stakeholders to participate seamlessly in agribusiness activities.
                </AccordionItem>
                <AccordionItem value="4" trigger="Who can benefit from Agenpo's suite of technologies?">
                    <div className="flex flex-col">
                        <h2 className="font-semibold">Agenpo's suite caters to a wide range of stakeholders</h2>
                        <ul className="space-y-1">
                            <li>-Warehouse Managers: Earn by storing agro-produce for traders, from farmers, cooperatives and aggregators</li>
                            <li>-Produce Traders: Purchase certified produce from farmers, aggregators and cooperatives, and link up with food processors worldwide.</li>
                            <li>-Logistics Partners: Facilitate the smooth flow of agro-produce across the supply chain.</li>
                            <li>-Cooperatives: Streamline processes and enhance profitability for cooperative members</li>
                            <li>-Farmers: List produce, take payments and access resources for efficient selling.</li>
                            <li>-Manufacturers: Simplify raw material acquisition for food processing.</li>
                            <li>-Aggregators: Build a strong supply chain by connecting with trusted farmers.</li>
                            <li>-Inspectors: Inspect/certify produce and facilities.</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem value="5" trigger="What are the key features of Agenpo's platform?">
                    Agenpo offers features such as real-time Produce prices, secure trading, and seamless connectivity across the agricultural ecosystem.
                </AccordionItem>
                <AccordionItem value="6" trigger="How can I get started with Agenpo?">
                    To begin your agribusiness journey, create an account on Agenpo's platform. Choose from one or more products in our suite and explore the possibilities.
                </AccordionItem>
                <AccordionItem value="7" trigger="How does Agenpo benefit food processors?">
                    Food processors can acquire certified Produce raw materials seamlessly, precisely where and when needed.
                </AccordionItem>
                <AccordionItem value="8" trigger="What role does Agenpo play in connecting farmers and traders?">
                    Agenpo facilitates direct connections between farmers, traders, and processors, ensuring efficient Produce flow.
                </AccordionItem>
                <AccordionItem value="9" trigger="How can inspectors contribute to Agenpo's ecosystem?">
                    Inspectors play a crucial role by assessing produce and facilities, earning income based on their completed jobs.
                </AccordionItem>
                <AccordionItem value="10" trigger="Is Agenpo limited to Nigeria, or does it operate in other regions?">
                    While Agenpo's roots are in Nigeria, its vision extends beyond borders. The platform aims to transform agribusiness across Africa and beyond.
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> FarmSider </h1>
            </div>


            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0">
                <AccordionItem value="1" trigger="What is this mobile app for?">
                    This mobile app is designed for farmers to provide them with access to a pool of traders for their produce. With the app, they see offers made for their produce and receive payments for them.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I begin to use Farmsider?">
                    To use Farmsider, first you download the app from the app store or playstore and go ahead to sign up on the app by following the prompts.
                </AccordionItem>
                <AccordionItem value="3" trigger="Can I move money from my wallet to my bank account?">
                    Yes, you can, but you need to add your bank details and request a withdrawal of the money.
                </AccordionItem>
                <AccordionItem value="4" trigger="How can I find warehouses close to my farm?">
                    With the Geolocate feature, the app saves your farm's location and uses it to present available warehouses close to it. Available warehouses are visible under the warehouse feature.
                </AccordionItem>
                <AccordionItem value="5" trigger="How do I know when an offer has been made to me?">
                    You receive notifications about offers made and can view them under the live offers section of the app
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Coproma </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="What is this mobile app for?" className="bg-white text-primary rounded-md mb-4">
                    This mobile app is designed for farmers to provide them with access to a pool of traders for their produce. With the app, they see offers made for their produce and receive payments for them.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I begin to use Farmsider?" className="bg-white text-primary rounded-md mb-4">
                    To use Farmsider, first you download the app from the app store or playstore and go ahead to sign up on the app by following the prompts.
                </AccordionItem>
                <AccordionItem value="3" trigger="Can I move money from my wallet to my bank account?" className="bg-white text-primary rounded-md mb-4">
                    Yes, you can, but you need to add your bank details and request a withdrawal of the money.
                </AccordionItem>
                <AccordionItem value="4" trigger="How can I find warehouses close to my farm?" className="bg-white text-primary rounded-md mb-4">
                    With the Geolocate feature, the app saves your farm's location and uses it to present available warehouses close to it. Available warehouses are visible under the warehouse feature.
                </AccordionItem>
                <AccordionItem value="5" trigger="How do I know when an offer has been made to me?" className="bg-white text-primary rounded-md mb-4">
                    You receive notifications about offers made and can view them under the live offers section of the app
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Acetraedr </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="How can I register on the platform?" className="bg-white text-primary rounded-md mb-4">
                    Simply click on the “Sign up” button and follow the prompts to create your account.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I fund my wallet for trading?" className="bg-white text-primary rounded-md mb-4">
                    You can fund your wallet by depositing funds through various payment methods available on the platform.
                </AccordionItem>
                <AccordionItem value="3" trigger="Is my personal information secure on this platform?" className="bg-white text-primary rounded-md mb-4">
                    Yes, we prioritize the security and confidentiality of your personal information using advanced encryption technology.
                </AccordionItem>
                <AccordionItem value="4" trigger="Are there any fees associated with using the platform?" className="bg-white text-primary rounded-md mb-4">
                    Yes, there are nominal fees associated with certain transactions on the platform. Details can be found when making an offer.
                </AccordionItem>
                <AccordionItem value="5" trigger=". How can I contact support if I encounter any issues?" className="bg-white text-primary rounded-md mb-4">
                    You can reach out to our support team through the contact form on the website or via email at contact@agenpo.com for assistance.
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Werhously </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="How do I register my warehouse to make it visible to various producers?" className="bg-white text-primary rounded-md mb-4">
                    Sign up on Werhously by providing all the required information during the registration process. After successfully creating your account, navigate to the geolocation section in settings within the web app. Upon successful geolocation, your warehouse becomes available for use.
                </AccordionItem>
                <AccordionItem value="2" trigger="How can I effectively monitor my warehouse operations?" className="bg-white text-primary rounded-md mb-4">
                    Werhously offers a user-friendly dashboard, providing a comprehensive overview of your warehouse and also enables you to seamlessly monitor both inbound and outbound operations for enhanced control and productivity.
                </AccordionItem>
                <AccordionItem value="3" trigger="How can i contact customer support?" className="bg-white text-primary rounded-md mb-4">
                    To share your feedback or report issues, navigate to the "Contact Us" section. Fill in the required information, along with details about your concerns or complaints, and we will respond to you as soon as possible.
                </AccordionItem>
                <AccordionItem value="4" trigger="Does werhously have a mobile app?" className="bg-white text-primary rounded-md mb-4">
                    No, Werhously is a web app designed to be accessed through a web browser.
                </AccordionItem>
                <AccordionItem value="5" trigger="How do I receive payments on Werhously?" className="bg-white text-primary rounded-md mb-4">
                    Werhously simplifies the payment process through its wallet feature by allowing you to seamlessly receive payments directly within the web app. You also have the flexibility to withdraw the funds available in your wallet to your bank account at any time, providing you with convenient control over your financial transactions.
                </AccordionItem>
            </Accordion>


            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Haula </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="How do I register on Haula?" className="bg-white text-primary rounded-md mb-4">
                    Simply click on the “Sign up” button and follow the prompts to create your account.
                </AccordionItem>
                <AccordionItem value="2" trigger=" How does Haula work?" className="bg-white text-primary rounded-md mb-4">
                    Trucking companies can simply sign up on the web-App while drivers have to download the app to receive orders from the companies on Haula
                </AccordionItem>
                <AccordionItem value="3" trigger=" Do I have to pay to sign up on Haula?" className="bg-white text-primary rounded-md mb-4">
                    Yes, Haula ensures that all trucking companies/drivers on the platform undergo a thorough vetting process which includes background checks and verification of licenses and insurance.
                </AccordionItem>
                <AccordionItem value="4" trigger=" Are the trucking companies/ Drivers on Haula vetted?" className="bg-white text-primary rounded-md mb-4">
                    No, Werhously is a web app designed to be accessed through a web browser.
                </AccordionItem>
                <AccordionItem value="5" trigger="What types of services does Haula offer?" className="bg-white text-primary rounded-md mb-4">
                    Haula offers logistics services in agribusiness
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Korprativ </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="What is the Korprativ app for? " className="bg-white text-primary rounded-md mb-4">
                    The Korprativ app is designed to facilitate trading for cooperatives, farmers associations,and individuals involved in cluster farming. It provides access to a pool of traders for agricultural produce, allowing users to view offers for their produce and receive payments through the app.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I use Korprativ? " className="bg-white text-primary rounded-md mb-4">
                    To start using Korprativ, simply download the app from the App Store or Google Play Store. Then, sign up by following the prompts within the app.
                </AccordionItem>
                <AccordionItem value="3" trigger="Can I move money from my wallet to my bank account? " className="bg-white text-primary rounded-md mb-4">
                    Yes, you can transfer funds from your Korprativ wallet to your bank account. To do so, you'll need to add your bank details within the app and then request a withdrawal of the funds.
                </AccordionItem>
                <AccordionItem value="4" trigger=" How can I find warehouses close to my farm? " className="bg-white text-primary rounded-md mb-4">
                    Korprativ utilises a Geolocate feature to save your farm's location. It then presents available warehouses close to your farm based on this information. You can view these warehouses under the "Warehouses" feature within the app
                </AccordionItem>
                <AccordionItem value="5" trigger="How do I know when an offer has been made to me?" className="bg-white text-primary rounded-md mb-4">
                    You'll receive notifications within the Korprativ app whenever an offer is made to you. Additionally, you can view all offers made to you under the "Live Offers" section of the app.
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> AgriGeitor </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="How do I find the nearest available warehouse for my produce?" className="bg-white text-primary rounded-md mb-4">
                    To locate  nearest available warehouse, begin by geolocating your position. Next, navigate to the 'Warehouses' section, where you'll find information and directions to nearby available warehouses.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I use the geolocation feature?" className="bg-white text-primary rounded-md mb-4">
                    To use the geolocation feature, navigate to it, click on the "Geolocate" button, and grant Agrigeitor access to your device's location when prompted.
                </AccordionItem>
                <AccordionItem value="3" trigger="Can I see offers for my produce on Agrigeitor?" className="bg-white text-primary rounded-md mb-4">
                    Yes, you can. Simply navigate to the 'Offers' section on the dashboard to access a list of offers for your produce. You can then accept the offer you deem best.
                </AccordionItem>
                <AccordionItem value="4" trigger="Can I receive payments for produce sold through Agrigeitor? " className="bg-white text-primary rounded-md mb-4">
                    Upon successfully selling your produce by accepting an offer, the app will initiate the payment process. Your mobile wallet will be credited instantly and you can link your bank account to your mobile wallet for immediate transfer of funds when choosing to withdraw an amount available in your wallet. Additionally, you can view the transaction history within the app for a detailed record of your activities.
                </AccordionItem>
                <AccordionItem value="5" trigger="How can i contact customer support?" className="bg-white text-primary rounded-md mb-4">
                    To share your feedback or report issues, navigate to the "Contact Us" section. Fill in the required information, along with details about your concerns or complaints, and we will respond to you as soon as possible.
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Certoma </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger=" What is the Certoma web-app for? " className="bg-white text-primary rounded-md mb-4">
                    The Certoma Web-app is designed to streamline the certification and inspection process for agribusinesses. It provides a platform for submitting applications, tracking certification progress, and accessing past inspection records.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do I begin using Certoma?" className="bg-white text-primary rounded-md mb-4">
                    To get started, simply click on "Sign up” and create an account by providing the required information and following the prompts within the web-app.
                </AccordionItem>
                <AccordionItem value="3" trigger="How secure is my personal information stored within the app? " className="bg-white text-primary rounded-md mb-4">
                    Certoma takes user privacy and data security seriously. The Web-app employs industry-standard encryption and security measures to safeguard your personal information and certification records.
                </AccordionItem>
                <AccordionItem value="4" trigger="How do I provide feedback or suggestions for improving the app?" className="bg-white text-primary rounded-md mb-4">
                    We welcome feedback from users to enhance the Web-app's functionality and user experience. You can submit feedback or suggestions through the Web-app's feedback feature or contact customer support directly.
                </AccordionItem>
                <AccordionItem value="5" trigger="Who can benefit from using Certoma?" className="bg-white text-primary rounded-md mb-4">
                    Certoma is strictly for certification and inspection companies in the agricultural niche
                </AccordionItem>
            </Accordion>

            <div className="w-full max-w-[900px] mx-auto p-5 lg:px-0 ">
                <h1 className="text-lg font-semibold text-title"> Inspecktr </h1>
            </div>

            <Accordion title="" subTitle="" className="max-w-4xl mx-auto bg-transparent my-0 ">
                <AccordionItem value="1" trigger="How do i sign up on Inspektr?" className="bg-white text-primary rounded-md mb-4">
                    Quality Inspectors are onboarded by their employers on Certoma web app, they receive log in credentials via email and with that they can access their inspektr accounts.
                </AccordionItem>
                <AccordionItem value="2" trigger="How do i document physical inspection findings using Inspektr?" className="bg-white text-primary rounded-md mb-4">
                    To document inspection findings, simply use the inspection field within the app. This feature allows you to fill in various parameters based on the physical inspection you are conducting.
                </AccordionItem>
                <AccordionItem value="3" trigger="Can I access previous inspection reports on Inspektr?" className="bg-white text-primary rounded-md mb-4">
                    Inspektr provides a user-friendly experience for easily accessing your past inspection reports. Navigate with ease to review and retrieve information from previous inspections within Inspektr.
                </AccordionItem>
                <AccordionItem value="4" trigger="How can i contact customer support?" className="bg-white text-primary rounded-md mb-4">
                    To share your feedback or report issues, navigate to the "Contact Us" section. Fill in the required information, along with details about your concerns or complaints, and we will respond to you as soon as possible.
                </AccordionItem>
                <AccordionItem value="5" trigger="Do previous inspection reports get deleted over time?" className="bg-white text-primary rounded-md mb-4">
                    No, previous inspection reports are not deleted over time; they are retained for easy reference for the inspector.
                </AccordionItem>
            </Accordion>

            <section className="p-6 relative bg-white rounded-md w-full max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-5">
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

export default FAQs