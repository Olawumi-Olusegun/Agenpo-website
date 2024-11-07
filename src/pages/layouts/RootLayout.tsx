import { HtmlHTMLAttributes } from "react"
import { cn } from "../../utils/cn"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from "react-router-dom"

interface RootLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> { }

const RootLayout = ({ children, className, ...props }: RootLayoutProps) => {
    return (
        <>
            <Header />
            <div className={cn("h-screen grid grid-rows-[1fr_auto] ", className)} {...props}>
                <main className="h-[calc(100%-80px+20px)] mt-[100px] ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default RootLayout