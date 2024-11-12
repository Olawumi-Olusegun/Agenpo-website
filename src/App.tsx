import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages"
import RootLayout from "./pages/layouts/RootLayout"
import Resources from "./pages/resources"
import Solutions from "./pages/solutions"
import AboutUs from "./pages/about-us"
import ContactUs from "./pages/contact-us"
import AuthLayout from "./pages/layouts/AuthLayout"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"

import { Helmet, HelmetProvider } from 'react-helmet-async';
import FarmSider from "./pages/farm-sider"
import Coproma from "./pages/coproma"
import AceTraedr from "./pages/ace-traedr"
import Werhously from "./pages/werhously"
import Haula from "./pages/haula"
import Korprativ from "./pages/korprativ"
import AgriGeitor from "./pages/agri-geitor"
import Certoma from "./pages/certoma"
import Inspektr from "./pages/inspektr"
import Blog from "./pages/blog"
import Careers from "./pages/careers"
import FAQs from "./pages/faqs"
import Produce from "./pages/produce"

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Agenpo: Get Into Agribusiness</title>
            <meta name="description" content="Explore more ways to get into agribusiness beyond farming. Now you can get in as a transporter, aggregator, food processor, warehouse owner or trader, in just minutes." />
            {/* <meta property="og:image" content={`${window.location.origin}/assets/images/Maiaddy-logo.png`} /> */}
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="28.27" />
            <meta property="og:image:height" content="35.76" />
          </Helmet>
          <Routes>


            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/produce" element={<Produce />} />
              <Route path="/faqs" element={<FAQs />} />

              {/* solutions */}
              <Route path="/FarmSider" element={<FarmSider />} />
              <Route path="/Coproma" element={<Coproma />} />
              <Route path="/AceTraedr" element={<AceTraedr />} />
              <Route path="/Werhously" element={<Werhously />} />
              <Route path="/Haula" element={<Haula />} />
              <Route path="/Korprativ" element={<Korprativ />} />
              <Route path="/AgriGeitor" element={<AgriGeitor />} />
              <Route path="/Certoma" element={<Certoma />} />
              <Route path="/Inspektr" element={<Inspektr />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>

            <Route path="*" element={<Navigate to={"/"} />} />

          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
