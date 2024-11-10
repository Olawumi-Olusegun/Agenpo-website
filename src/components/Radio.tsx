import { ChangeEventHandler, createContext, InputHTMLAttributes, ReactNode, useContext } from "react"

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> { }
interface RadioContextProps {
    value: string | null;
    onChange: ChangeEventHandler<HTMLInputElement>
    children?: ReactNode;
}

// Hook to use the context
export const useRadioContext = () => {
    const context = useContext(RadioContext);
    if (!context) {
        throw new Error("useRadioContext must be used within a RadioGroup");
    }
    return context;
};


const RadioContext = createContext<RadioContextProps | undefined>(undefined);

const Radio = ({ children, name, ...props }: RadioProps) => {
    const { value, onChange } = useRadioContext();
    const isChecked = value === props.value;
    return (
        <label htmlFor={name} className={`
        px-6 py-4 shadow rounded-lg cursor-pointer transition-all
        ${isChecked
                ? "bg-gradient-to-t from-violet-200 to-violet-100 scale-105 transition-all duration-300 text-violet-800 shadow-violet-500"
                : "bg-white hover:shadow-md shadow-gray-300"}
        `}>
            <input
                type="radio"
                name={name}
                id={name}
                className="hidden"
                checked={isChecked}
                onChange={onChange}
                {...props}
            />
            {children}
        </label>
    )
}


export const RadioGroup = ({ value, onChange, children }: RadioContextProps) => {

    return (
        <RadioContext.Provider value={{ value, onChange }}>
            {children}
        </RadioContext.Provider>
    );
};

export default Radio