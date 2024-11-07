import { HtmlHTMLAttributes } from "react"
import { cn } from "../../utils/cn"

interface AuthLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> { }

const AuthLayout = ({ children, className, ...props }: AuthLayoutProps) => {
    return (
        <div className={cn("h-full", className)} {...props}>
            {children}
        </div>
    )
}

export default AuthLayout