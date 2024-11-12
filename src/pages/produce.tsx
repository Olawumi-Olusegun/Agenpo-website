import { Link } from "react-router-dom"
import Hero from "../components/ui/Hero"

const Produce = () => {
    return (
        <>
            <Hero>
                <Hero.Title>Produce</Hero.Title>
                <Hero.Description className="text-primary-acccent w-full lg:max-w-[760px]">
                    Explore our selection of crops and learn about the options that are available based on quality, price and availability.
                </Hero.Description>
            </Hero>
            <div className="w-full px-5 max-w-[1210px] mx-auto my-5 py-5 lg:my-16 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Maize - MA</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">MAH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">MAJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">MAK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Maize (Zea mays) is the third most important cereal grain in the world, after wheat and rice, providing nutrients for humans and animals and serving as a basic raw material for production of starch, oil, protein, alcoholic beverages, food sweeteners, and fuel.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Sesame Seeds - SE</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SEH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">SEJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SEK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Sesame seeds are an excellent source of manganese and calcium, both of which help your bones grow healthy and strong. Calcium also plays a role in nerve signal transmission, muscle movement, blood vessel function, and hormone release. Other vitamins and minerals found in sesame seeds include: Phosphorous.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Sorghum - SO</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SOH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">SOJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SOK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Sorghum is known to be rich in phenolic compounds, many of which act as antioxidants. It has also been shown to be good at reducing some forms of inflammation due to its antioxidant properties. Several of the phenolic compounds in sorghum have been linked to anti-cancer effects.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Paddy Rice</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GRH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">GRJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GRK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Paddy rice isn't just a staple food; it's a nutritional marvel. Rich in carbohydrates, vitamins, and minerals, paddy rice fuels your body with sustained energy. Moreover, it supports digestive health and is gluten-free, making it an ideal choice for many diets.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Soya Beans - SY</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SYH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">SYJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">SYK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Soya Beans are a nutritional powerhouse, packed with protein, fiber, vitamins, and minerals. Incorporating Soya Beans into your diet can promote heart health, support bone strength, and aid in weight management. From tofu to soy milk, the versatility of Soya Beans offers endless culinary possibilities for a healthier lifestyle.
                    </p>
                    <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Millet - MT</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">MTH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">MTJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">MTK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Millet is rich in dietary fiber, both soluble and insoluble. The insoluble fiber in millet is known as a “prebiotic,” which means it supports good bacteria in your digestive system. This type of fiber is also important for adding bulk to stools, which helps keep you regular and reduces your risk of colon cancer.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Ginger - GR</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GRH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">GRJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GRK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Ginger helps speed up the digestion process and empty your stomach more quickly, improves Immunity, alleviates PMS symptoms, relieves nausea and upset stomach, reduces pain, healthier skin, weight loss aid, curbs cancer growth, and lowers blood sugar.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Gum Arabic - GC</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GCH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">GCJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">GCK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Gum Arabic  is used by local communities to protect against hepatic, renal, and cardiac complications in diabetic and chronic renal failure patients.
                        It has been confirmed to have several therapeutic actions, such as being hypoglycemic, antidiabetic, antioxidant, immunomodulatory, and antiulcer.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Cashew Nuts - CW</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CWH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">CWJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CWK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein. They're also a good source of copper, magnesium, and manganese nutrients important for energy production, brain health, immunity, and bone health.
                        Cashew nut oil is rich in selenium, zinc, magnesium, iron and phosphorous.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Coffee - CE</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CEH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">CEJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CEK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Coffee contains antioxidants and other active substances that may reduce internal inflammation and protect against disease, healthy for your heart, may help curb certain cancers, may lessen your risk of developing type 2 diabetes, relieves mental and physical fatigue and to increase mental alertness.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>

                <div className="flex flex-col gap-4 gap-y-6 bg-white rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src="./assets/images/produce/maize.png" alt="maize-image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl text-gray-900 font-bold">Cocoa - CC</h2>
                            <div className="flex flex-row flex-wrap gap-3 gap-y-0.5">
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CCH  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-red-500">CCJ  70/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 12.5L12.194 10.9733L8.94065 7.72L6.27398 10.3867L1.33398 5.44L2.27398 4.5L6.27398 8.5L8.94065 5.83333L13.1407 10.0267L14.6673 8.5V12.5H10.6673Z" fill="#ED000C" />
                                    </svg>
                                </div>
                                <div className="flex flex-row gap-0.5">
                                    <span className="text-xs text-primary text-nowrap">CCK  76/KG</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6673 4.5L12.194 6.02667L8.94065 9.28L6.27398 6.61333L1.33398 11.56L2.27398 12.5L6.27398 8.5L8.94065 11.1667L13.1407 6.97333L14.6673 8.5V4.5H10.6673Z" fill="#3E933E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="text-gray-800">
                        Cocoa powder is rich in theobromine, which helps to reduce inflammation and can protect you from diseases such as heart disease, cancer, and diabetes. Since cocoa is rich in phytonutrients but low in fat and sugar, the calories you get from cocoa powder will be packed with healthy chemicals.
                    </p>
                    <span className="text-gray-700 mt-auto">Coming soon...</span>
                    {/* <Link to={"#"} className="flex items-center gap-1 group mt-auto text-primary">
                        <span>Trade</span>
                        <svg className="group-hover:translate-x-1 duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10H16.875" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#3E933E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link> */}
                </div>


            </div>
        </>
    )
}

export default Produce