import DesktopNav from "./navbar/DesktopNav"
import MobileNav from "./navbar/MobileNav"

const Header = () => {
    return (
        <header>
            <DesktopNav />
            <MobileNav />
        </header>
    )
}

export default Header