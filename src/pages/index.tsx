import Hero from "../components/ui/Hero"
import SolutionsSection from "../components/ui/SolutionsSection"


const Home = () => {

    return (
        <>
            <Hero>
                <Hero.Title>Get Into Agribusiness</Hero.Title>
                <Hero.Description>
                    Explore more ways to get into agribusiness beyond farming. Now you can get in as a transporter, aggregator, food processor, warehouse owner or trader, in just minutes.
                </Hero.Description>

                <Hero.ButtonGroup>
                    <a href={"https://t.me/+4kXbKlOQe0JiY2Vk"} target="_blank" className="flex items-center justify-center gap-3 w-full lg:w-fit px-6 py-3 rounded-2xl bg-primary hover:bg-opacity-90 text-white border border-transparent transition-all duration-300">
                        <span>Join Our Telegram Community</span>
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_16683_1627)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_16683_1627">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </Hero.ButtonGroup>
            </Hero>

            <img src={"./assets/images/hero-bg.png"} alt={""} className={"pointer-events-none w-full object-cover object-center"} />

            <SolutionsSection>
                <SolutionsSection.Header>
                    <SolutionsSection.Title>Agribusiness Simplified with Agenpo</SolutionsSection.Title>
                    <SolutionsSection.Description>
                        Our suite of technologies is designed to facilitate entry into Agribusiness in Africa for a diverse range of stakeholders and enhance their overall experience within the industry.
                    </SolutionsSection.Description>
                </SolutionsSection.Header>
                <SolutionsSection.Grid>
                    <SolutionsSection.GridItem
                        image="./assets/images/Coproma.png"
                        href="/Coproma"
                        title="Coproma"
                        className="lg:pr-14 "
                        imageStyle="lg:absolute bottom-0 right-0  w-40 -mr-3"
                        description="Food processors and manufacturers can access, order, receive, and pay for certified produce raw materials, while being able to lock-in prices for future delivery."
                    />
                    <SolutionsSection.GridItem
                        image="./assets/images/FarmSider.png"
                        href="/FarmSider"
                        imageStyle="mx-auto"
                        title="FarmSider" description="Farmers can now access a larger pool of buyers year-round for their produce with FarmSider, in addition to the all-important input financing." />
                    <SolutionsSection.GridItem
                        image="./assets/images/AceTraedr.png"
                        href="/AceTraedr"
                        imageStyle="mx-auto -mb-4"
                        title="AceTraedr" description="Agro trading firms can buy, sell, and deliver quality-assured produce, making and receiving payments from any location." />
                    <SolutionsSection.GridItem
                        image="./assets/images/Korprativ.png"
                        href="/Korprativ"
                        imageStyle="-mr-4 -mb-4"
                        title="Korprativ" description="Farming cooperatives can seamlessly collaborate and access financing and broader markets for their produce." />
                    <SolutionsSection.GridItem
                        image="./assets/images/Haula.png"
                        href="Haula"
                        imageStyle="-mx-4 -mb-4"
                        title="Haula" description="Haula web app is the Uber for agro trucking companies, while Haula mobile app enables drivers to pick up and deliver certified produce using provided coordinates." />
                    <SolutionsSection.LogoLink />
                    <SolutionsSection.GridItem
                        image="./assets/images/Certoma.png"
                        href="/Certoma"
                        imageStyle="-mr-4 -mb-4"
                        title="Certoma" description="Certification companies can manage a team of produce quality inspectors in any location effortlessly." />

                    <SolutionsSection.GridItem
                        image="./assets/images/Werhously.png"
                        href="/Werhously"
                        imageStyle="mx-auto"
                        title="Werhously" description="Agro warehouse managers can earn and manage their warehouse operations end-to-end." />
                    <SolutionsSection.GridItem
                        image="./assets/images/AgriGeitor.png"
                        href="/AgriGeitor"
                        imageStyle="mx-auto -mb-4"
                        title="AgriGeitor" description="Individual produce aggregators can access a broad range of buyers for their aggregated produce and also get financing." />

                    <SolutionsSection.GridItem
                        image="./assets/images/Inspecktr.png"
                        href="/Inspecktr"
                        imageStyle="mx-auto -mb-4"
                        title="Inspecktr" description="Quality inspectors working with certification companies can record produce inspections and certifications electronically without paperwork." />
                </SolutionsSection.Grid>
            </SolutionsSection>

            <section className="relative bg-white rounded-md w-full lg:max-w-[1216px] mx-auto lg:px-0 overflow-hidden my-10">
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block left-0 top-0 pointer-events-none" />
                <img src="./assets/images/leaf-left.png" alt="" className="hidden lg:block absolute right-0 bottom-0 rotate-180 pointer-events-none" />
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-3 w-full p-5 lg:p-0 lg:max-w-[690px] mx-auto">
                    <h2 className="font-Manrope text-3xl lg:text-5xl text-title text-center font-bold ">Don't have a registered agribusiness?</h2>
                    <p className="text-center text-gray-600 lg:text-lg font-Manrope ">Registering your business is the first crucial step towards unlocking a world of growth opportunities. Start your journey to success and register your business today.</p>
                    <button className="group flex items-center justify-center gap-3 bg-primary hover:bg-opacity-90 duration-300 w-fit text-white border border-transparent px-6 py-3 rounded-2xl">
                        <span>Register your Agribusiness</span>
                        <svg className="flex-shrink-0 group-hover:translate-x-1 transition duration-300" width="10" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.25L8.25 8L1.5 14.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}



export default Home

