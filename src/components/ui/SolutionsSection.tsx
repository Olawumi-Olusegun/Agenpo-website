import { HtmlHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type SolutionCardProps = {
    title: string;
    description: string;
};

const SolutionCard = ({ title, description }: SolutionCardProps) => (
    <div className="col-span-3 bg-white rounded-md px-3 py-4">
        <h2 className="font-semibold py-2">{title}</h2>
        <p className="text-sm">{description}</p>
    </div>
);

interface GridProps extends HtmlHTMLAttributes<HTMLDivElement> { }
const Grid = ({ className, children, ...props }: GridProps) => (
    <div className={cn("grid grid-cols-12 gap-3 ", className)} {...props}>
        {children}
    </div>
);

interface BodyProps extends HtmlHTMLAttributes<HTMLDivElement> { }
const Body = ({ className, children, ...props }: BodyProps) => (
    <div className={cn("w-full py-7", className)} {...props}>
        {children}
    </div>
);

interface GridItemProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
    title: string;
    description: string;
    href?: string;
    image: string;
    imageStyle?: string;
}
const GridItem = ({ className, children, title, description, image, imageStyle, href = "#", ...props }: GridItemProps) => (
    <Link to={href} className={cn("relative col-span-3 bg-white max-h-[292px] rounded-md px-4 py-4 flex flex-col", className)} {...props}>
        <h2 className="font-semibold py-2 text-title">{title}</h2>
        <p className="text-gray-600 font-Manrope pb-1.5">{description}</p>
        <div className={cn("mt-auto self-end flex flex-col items-end overflow-hidden", imageStyle)}>
            <img src={image} alt="Coproma" className="mt-auto pointer-events-none w-auto h-full  object-center" />
        </div>
    </Link>
);

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> { title?: string; }
const Header = ({ className, children, title = "SOLUTIONS", ...props }: HeaderProps) => (
    <div className={cn("flex flex-col items-center justify-center gap-4 w-full lg:max-w-[1020px] mx-auto px-5 lg:px-0 pt-24 pb-10", className)} {...props}>
        <h1 className="text-primary">{title}</h1>
        {children}
    </div>
);

interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> { }
const Title = ({ className, children }: TitleProps) => (
    <h2 className={cn("font-Manrope text-center text-5xl font-extrabold capitalize", className)}>{children}</h2>
);

interface DescriptionProps extends HtmlHTMLAttributes<HTMLParagraphElement> { }
const Description = ({ className, children, ...props }: DescriptionProps) => (
    <p className={cn("text-center text-xl font-Manrope text-gray-600", className)} {...props}>{children}</p>
);


interface LogoLinkProps extends HtmlHTMLAttributes<HTMLDivElement> { href?: string; }
const LogoLink = ({ className, href = "/" }: LogoLinkProps) => (
    <div className={cn("col-span-6 bg-white rounde-md px-3 py-4", className)}>
        <Link to={href} className="flex items-center justify-center w-[458.84px] h-[130.57px] mx-auto lg:mb-14 mt-6 ">
            {/* SVG Logo */}
            <svg width="801" height="229" viewBox="0 0 801 229" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </div>
);



interface SolutionsSectionProps extends HtmlHTMLAttributes<HTMLDivElement> { }
const SolutionsSection = ({ children }: SolutionsSectionProps) => (
    <section className="relative overflow-hidden h w-full max-w-[1216px] mx-auto py-5 px-5 lg:px-0 ">
        {children}
    </section>
);

type ImageProps = {
    src: string;
    alt: string;
};

const Image = ({ src, alt }: ImageProps) => (
    <div>
        <img src={src} alt={alt} className="pointer-events-none" />
    </div>
);

SolutionsSection.Header = Header;
SolutionsSection.Title = Title;
SolutionsSection.Description = Description;
SolutionsSection.SolutionCard = SolutionCard;
SolutionsSection.Body = Body;
SolutionsSection.Grid = Grid;
SolutionsSection.GridItem = GridItem;
SolutionsSection.LogoLink = LogoLink;
SolutionsSection.Image = Image;

export default SolutionsSection;
