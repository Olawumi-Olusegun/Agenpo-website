import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-sm w-full">
            <div className="grid grid-cols-12 gap-y-10 w-full max-w-[1280px] mx-auto pt-24 px-5 lg:px-0 ">
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 text-lg lg:max-w-[295px]">
                    <p className="text-gray-700">Transforming the Agribusiness value chain in Africa.</p>
                    <div className="flex items-center flex-wrap gap-5 mt-4">
                        <a href={"https://www.facebook.com/Agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://x.com/agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3263 1.90234H21.6998L14.3297 10.3258L23 21.7883H16.2112L10.894 14.8364L4.80995 21.7883H1.43443L9.31743 12.7784L1 1.90234H7.96111L12.7674 8.25668L18.3263 1.90234ZM17.1423 19.7691H19.0116L6.94539 3.81548H4.93946L17.1423 19.7691Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://www.instagram.com/agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C15.2604 0 15.6672 0.0119999 16.9464 0.0719999C18.2244 0.132 19.0944 0.3324 19.86 0.63C20.652 0.9348 21.3192 1.3476 21.9864 2.0136C22.5966 2.61348 23.0687 3.33911 23.37 4.14C23.6664 4.9044 23.868 5.7756 23.928 7.0536C23.9844 8.3328 24 8.7396 24 12C24 15.2604 23.988 15.6672 23.928 16.9464C23.868 18.2244 23.6664 19.0944 23.37 19.86C23.0696 20.6613 22.5973 21.3871 21.9864 21.9864C21.3864 22.5964 20.6608 23.0685 19.86 23.37C19.0956 23.6664 18.2244 23.868 16.9464 23.928C15.6672 23.9844 15.2604 24 12 24C8.7396 24 8.3328 23.988 7.0536 23.928C5.7756 23.868 4.9056 23.6664 4.14 23.37C3.33879 23.0694 2.61303 22.5971 2.0136 21.9864C1.40329 21.3866 0.931118 20.661 0.63 19.86C0.3324 19.0956 0.132 18.2244 0.0719999 16.9464C0.0155999 15.6672 0 15.2604 0 12C0 8.7396 0.0119999 8.3328 0.0719999 7.0536C0.132 5.7744 0.3324 4.9056 0.63 4.14C0.930283 3.33862 1.40256 2.61279 2.0136 2.0136C2.61321 1.40308 3.33891 0.930875 4.14 0.63C4.9056 0.3324 5.7744 0.132 7.0536 0.0719999C8.3328 0.0155999 8.7396 0 12 0ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM19.8 5.7C19.8 5.30218 19.642 4.92064 19.3607 4.63934C19.0794 4.35804 18.6978 4.2 18.3 4.2C17.9022 4.2 17.5206 4.35804 17.2393 4.63934C16.958 4.92064 16.8 5.30218 16.8 5.7C16.8 6.09783 16.958 6.47936 17.2393 6.76066C17.5206 7.04197 17.9022 7.2 18.3 7.2C18.6978 7.2 19.0794 7.04197 19.3607 6.76066C19.642 6.47936 19.8 6.09783 19.8 5.7ZM12 8.4C12.9548 8.4 13.8705 8.77928 14.5456 9.45442C15.2207 10.1295 15.6 11.0452 15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8705 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.45442 14.5456C8.77928 13.8705 8.4 12.9548 8.4 12C8.4 11.0452 8.77928 10.1295 9.45442 9.45442C10.1295 8.77928 11.0452 8.4 12 8.4Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://www.linkedin.com/company/agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://tiktok.com/@agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://www.youtube.com/@agenpo"} target="_blank">
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7609 4.20078C23.7609 4.20078 23.5266 2.54609 22.8047 1.81953C21.8906 0.863281 20.8688 0.858594 20.4 0.802344C17.0438 0.558594 12.0047 0.558594 12.0047 0.558594H11.9953C11.9953 0.558594 6.95625 0.558594 3.6 0.802344C3.13125 0.858594 2.10938 0.863281 1.19531 1.81953C0.473438 2.54609 0.24375 4.20078 0.24375 4.20078C0.24375 4.20078 0 6.14609 0 8.08672V9.90547C0 11.8461 0.239062 13.7914 0.239062 13.7914C0.239062 13.7914 0.473437 15.4461 1.19062 16.1727C2.10469 17.1289 3.30469 17.0961 3.83906 17.1992C5.76094 17.382 12 17.4383 12 17.4383C12 17.4383 17.0438 17.4289 20.4 17.1898C20.8688 17.1336 21.8906 17.1289 22.8047 16.1727C23.5266 15.4461 23.7609 13.7914 23.7609 13.7914C23.7609 13.7914 24 11.8508 24 9.90547V8.08672C24 6.14609 23.7609 4.20078 23.7609 4.20078ZM9.52031 12.1133V5.36797L16.0031 8.75234L9.52031 12.1133Z" fill="#757575" />
                            </svg>
                        </a>
                        <a href={"https://medium.com/@agenpo"} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0015 11.8286C24.0015 15.0079 23.4686 17.5868 22.8112 17.5868C22.1537 17.5868 21.6211 15.0086 21.6211 11.8286C21.6211 8.64856 22.1539 6.07031 22.8112 6.07031C23.4684 6.07031 24.0015 8.64832 24.0015 11.8286Z" fill="#757575" />
                                <path d="M20.9642 11.8262C20.9642 15.3755 19.4489 18.2539 17.5797 18.2539C15.7106 18.2539 14.1953 15.3755 14.1953 11.8262C14.1953 8.27687 15.7103 5.39844 17.5795 5.39844C19.4487 5.39844 20.9639 8.27595 20.9639 11.8262" fill="#757575" />
                                <path d="M13.5374 11.8277C13.5374 15.5984 10.5069 18.6552 6.76884 18.6552C3.03073 18.6552 0 15.5977 0 11.8277C0 8.05767 3.0305 5 6.76884 5C10.5072 5 13.5374 8.05698 13.5374 11.8277Z" fill="#757575" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-4 lg:col-span-1 flex flex-col gap-3">
                    <h2 className="text-title text-sm uppercase">Products</h2>
                    <div className="flex flex-col gap-5 text-gray-700">
                        <Link to={"#"}>FarmSider</Link>
                        <Link to={"/AgriGeitor"}>AgriGeitor</Link>
                        <Link to={"/Korprativ"}>Korprativ</Link>
                        <Link to={"/AceTraedr"}>AceTraedr</Link>
                        <Link to={"/Werhously"}>Werhously</Link>
                        <Link to={"/Coproma"}>Coproma</Link>
                        <Link to={"/Certoma"}>Certoma</Link>
                        <Link to={"/Inspecktr"}>Inspecktr</Link>
                        <Link to={"/Haula"}>Haula</Link>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-4 lg:col-span-1 flex flex-col gap-3">
                    <h2 className="text-title text-sm uppercase">RESOURCES</h2>
                    <div className="flex flex-col gap-5 text-gray-700">
                        <Link to={"/about-us"}>About Us</Link>
                        <Link to={"/careers"}>Careers</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/faqs"}>FAQs</Link>
                        <Link to={"/produce"}>Produce</Link>
                        <Link to={"/contact-us"}>Contact Us</Link>
                        <Link to={"/community"}>Community</Link>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
                    <h2 className="text-title text-sm uppercase">LEGAL</h2>
                    <div className="flex flex-col gap-5 text-gray-700">
                        <Link to={"#"}>Privacy Policy</Link>
                        <Link to={"#"}>Terms & Conditions</Link>
                        <Link to={"#"}>Anti-money laundering</Link>
                    </div>
                </div>
                {/* Download Manual section */}
            </div>

            <Link to={"/"} className="flex items-center justify-center w-64 lg:w-[800.11px] h-[229px] mx-auto lg:mb-14 mt-6 ">
                <svg width="800.11" height="229" viewBox="0 0 801 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M311.087 192.124H347.519L307.136 93.4414H273.191L232.809 192.124H269.241L273.191 180.805H307.136L311.087 192.124ZM282.263 154.392L290.164 131.754L298.065 154.392H282.263Z" fill="#0D3616" />
                    <path d="M401.751 119.563V121.885C396.63 119.128 391.509 117.386 383.754 117.386C364.733 117.386 347.614 132.624 347.614 155.408C347.614 176.741 364.733 190.528 383.754 190.528C391.509 190.528 396.63 189.367 401.751 187.045V193.866C401.751 199.961 397.507 202.573 391.947 202.573C385.51 202.573 382.73 200.686 381.267 195.607H349.809C350.394 215.779 367.367 227.679 392.094 227.679C417.26 227.679 434.671 215.344 434.671 192.414V119.563H401.751ZM392.094 167.163C385.071 167.163 378.925 162.374 378.925 155.408C378.925 146.991 385.071 142.202 392.094 142.202C395.02 142.202 398.239 142.783 401.751 145.395V163.971C398.239 166.583 395.02 167.163 392.094 167.163Z" fill="#0D3616" />
                    <path d="M482.556 117.386C459.146 117.386 443.49 132.624 443.49 155.553C443.49 178.483 460.316 194.301 485.483 194.301C504.796 194.301 519.281 183.562 522.5 168.469H493.091C491.481 170.356 489.14 171.807 483.727 171.807C476.704 171.807 472.168 167.163 470.558 161.213H522.646C525.865 134.221 509.478 117.386 482.556 117.386ZM483.727 137.123C490.457 137.123 494.554 140.025 495.871 146.701H470.997C472.899 139.88 477.728 137.123 483.727 137.123Z" fill="#0D3616" />
                    <path d="M582.065 117.386C575.188 117.386 569.628 119.273 564.068 123.336V119.563H531.148V192.124H564.068V149.168C566.263 147.282 568.165 146.556 570.799 146.556C574.018 146.556 578.115 148.152 578.115 155.553V192.124H611.035V146.846C611.035 127.4 598.745 117.386 582.065 117.386Z" fill="#0D3616" />
                    <path d="M672.94 117.386C665.185 117.386 660.064 119.128 654.943 121.885V119.563H622.023V225.502H654.943V188.931C660.064 191.689 665.185 193.43 672.94 193.43C691.961 193.43 709.08 178.192 709.08 155.408C709.08 132.624 691.961 117.386 672.94 117.386ZM664.6 168.614C661.674 168.614 658.455 168.034 654.943 165.422V145.395C658.455 142.783 661.674 142.202 664.6 142.202C671.623 142.202 677.769 146.991 677.769 155.408C677.769 163.825 671.623 168.614 664.6 168.614Z" fill="#0D3616" />
                    <path d="M757.696 117.386C732.969 117.386 714.972 133.785 714.972 155.989C714.972 178.338 732.969 194.301 757.696 194.301C782.424 194.301 800.42 178.338 800.42 155.989C800.42 133.785 782.424 117.386 757.696 117.386ZM757.696 170.066C749.356 170.066 743.211 164.261 743.211 155.989C743.211 147.862 749.356 141.767 757.696 141.767C766.036 141.767 772.035 147.862 772.035 155.989C772.035 164.261 766.036 170.066 757.696 170.066Z" fill="#0D3616" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M97.1979 63.5888L107.779 96.9614C96.8487 100.506 87.9754 104.882 80.1498 109.782L97.1979 63.6034V63.5888ZM129.988 88.6766L97.185 0.0234375L28.2812 168.447C89.6828 120.226 150.748 94.2192 214.025 92.994C186.332 88.2536 157.875 84.5488 129.988 88.6912V88.6766Z" fill="#73B91C" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.308594 228.542C12.726 228.542 25.1563 228.542 37.5738 228.542C62.318 195.563 87.6702 163.314 121.999 142.164C132.968 170.957 143.924 199.749 154.892 228.542C165.24 228.542 175.601 228.542 185.949 228.542C172.833 193.565 159.73 158.588 146.614 123.611C168.034 109.083 191.343 102.578 214.884 97.0352C131.881 104.226 59.3948 144.95 0.321529 228.542H0.308594Z" fill="#042E17" />
                </svg>
            </Link>

            <div className="border-t" />
            <div className="py-8 max-w-[1280px] mx-auto px-5 lg:px-0">
                <p className="text-gray-600 text-center lg:text-left">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
