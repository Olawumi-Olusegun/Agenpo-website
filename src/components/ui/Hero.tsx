import React, { HtmlHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

export const Hero = ({ children, className }: SectionProps) => (
    <section className="w-full lg:max-w-[1280px] mx-auto py-5 px-5 lg:px-0">
        <div className={cn("flex flex-col items-center gap-5 w-full lg:lg:max-w-[977px] mx-auto text-center", className)}>
            {children}
        </div>
    </section>
);

type TitleProps = {
    children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => (
    <h1 className="text-3xl lg:text-5xl lg:text-[82px] font-bold font-Manrope text-center text-title">
        {children}
    </h1>
);

type DescriptionProps = {
    children: React.ReactNode;
    className?: string;
};

const Description = ({ children, className }: DescriptionProps) => (
    <p className={cn("text-gray-700 font-Manrope lg:text-xl w-full lg:max-w-[1019px] mx-auto", className)}>
        {children}
    </p>
);

interface ButtonGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => (
    <div className={cn("mb-6 lg:mb-0 flex flex-wrap w-full sm:flex-row items-center justify-center gap-3", className)} {...props}>
        {children}
    </div>
);

interface BodyProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};
const Body = ({ children, className, ...props }: BodyProps) => (
    <div className={cn("flex flex-col lg:flex-row items-center justify-center gap-5", className)} {...props}>
        {children}
    </div>
);

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
    href?: string;
};

const Button = ({ children, variant = 'primary', onClick, className, href = "#" }: ButtonProps) => {
    const buttonStyles =
        variant === 'primary'
            ? 'bg-primary hover:bg-opacity-90 text-white border border-transparent'
            : 'bg-white text-primary border border-primary';

    return (
        <Link
            to={href}
            onClick={onClick}
            className={cn(`flex items-center justify-center gap-3 ${buttonStyles} w-full sm:w-fit px-6 py-3 rounded-2xl`, className)}
        >
            {children}
        </Link>
    );
};

type ImageProps = {
    src: string;
    alt: string;
};

const Image = ({ src, alt }: ImageProps) => (
    <div>
        <img src={src} alt={alt} className="pointer-events-none" />
    </div>
);

// Attach subcomponents to Hero
Hero.Title = Title;
Hero.Description = Description;
Hero.ButtonGroup = ButtonGroup;
Hero.Button = Button;
Hero.Body = Body;
Hero.Image = Image;

export default Hero;
