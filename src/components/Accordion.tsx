import { Plus } from "lucide-react";
import { createContext, HTMLAttributes, useContext, useRef, useState } from "react";
import { cn } from "../utils/cn";

interface MyAccordion extends HTMLAttributes<HTMLUListElement> {
    title: string;
    subTitle: string;
}

interface AccordionContextProps {
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const Accordion = ({ children, onChange, title, subTitle, className, ...props }: MyAccordion) => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className={cn("w-full max-w-[1216px] mx-auto p-5 lg:px-0 my-5 bg-white rounded-md", className)}>

            <div className={`flex items-center flex-col ${title || subTitle ? " my-10" : ""} `}>
                <h1 className="text-green-700 pb-5">{title}</h1>
                <h2 className="font-Manrope font-bold text-3xl lg:text-[56px] ">{subTitle}</h2>
            </div>

            <ul {...props}>
                <AccordionContext.Provider value={{ selected, setSelected }}>
                    {children}
                </AccordionContext.Provider>
            </ul>
        </div>
    );
};

interface MyAccordionItemProps extends HTMLAttributes<HTMLLIElement> {
    value: string;
    trigger: any;
}

const useAccordion = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error("AccordionItem must be used within a MyAccordion component");
    }

    return context;
}

export const AccordionItem = ({ children, value, trigger, ...props }: MyAccordionItemProps) => {

    const { selected, setSelected } = useAccordion();

    const listItemRef = useRef<HTMLDivElement | null>(null);

    const open = selected === value;

    return (
        <li className="border-b first:border-t w-full max-w-[900px] mx-auto text-primary " {...props}>
            <header
                role="button"
                onClick={() => setSelected(open ? null : value)}
                className="flex justify-between items-center p-4 px-0 font-semibold lg:px-6"
            >
                <span className=" lg:text-xl">{trigger}</span>
                <Plus size={24} className={`transition-transform shrink-0 self-start ${open ? "rotate-45" : ""}`} />
            </header>
            <div
                className="overflow-y-hidden transition-all duration-300"
                style={{ height: open ? listItemRef.current?.offsetHeight || 0 : 0 }}
            >
                <div ref={listItemRef} className="px-0 p-6 lg:px-6 lg:text-lg font-Manrope">
                    {children}
                </div>
            </div>
        </li>
    );
};
