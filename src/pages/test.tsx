import { FC, useState } from "react";
import Radio, { RadioGroup } from "../components/Radio"
import { BadgePercent, Crown, Gem, Sparkle } from "lucide-react"


const Test = () => {
    const [plan, setPlan] = useState<string | null>(null);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPlan(prevValue => (prevValue === value ? null : value));
    };
    return (
        <div className="my-10">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold tracking-tight">Choose Your Plan</h2>
                <hr className="my-3 w-1/3" />
                <RadioGroup value={plan} onChange={handleRadioChange}>
                    <div className="flex gap-4 justify-center flex-col">
                        <Radio value={"free"} name="free">
                            <Plan
                                icon={<BadgePercent />}
                                title="Free"
                                price={0}
                                features={["SD (480p)", "Mobile", "Ads"]}
                            />
                        </Radio>
                        <Radio value={"basic"} name="basic">
                            <Plan
                                icon={<Sparkle />}
                                title="Basic"
                                price={4.99}
                                features={["HD (720P)", "1 Device"]}
                            />
                        </Radio>
                        <Radio value={"standard"} name="standard">
                            <Plan
                                icon={<Gem />}
                                title="Standard"
                                price={0}
                                features={["SD (1080p)", "2 Devices"]}
                            />
                        </Radio>
                        <Radio value={"premium"} name="premium">
                            <Plan
                                icon={<Crown />}
                                title="Premium"
                                price={14.99}
                                features={["Ultra HD (4K) + HDR", "4 Devices"]}
                            />
                        </Radio>
                    </div>
                </RadioGroup>
            </div>
            <div className="w-1/3 mx-auto flex  my-5 items-center justify-center flex-col gap-3">
                <button className={`
                flex gap-3 items-center px-6 py-3 rounded-lg bg-violet-800 hover:bg-violet-700 font-semibold text-lg
                text-white
                `}>
                    Proceed with {plan} plan
                </button>

                <button
                    onClick={() => setPlan(null)}
                    className={`
                flex gap-3 items-center px-6 py-3 my-5 rounded-lg bg-violet-800 hover:bg-violet-700 font-semibold text-lg
                text-white
                `}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Test

export const Plan: FC<{ icon: any, title: string, features: string[], price: number; currency?: string; }> = ({ icon, title, features, price, currency = "$" }) => {
    return (
        <div className="flex gap-4 items-center">
            {icon}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{features.join(" . ")}</p>
            </div>
            <span className="ml-auto font-medium">{currency}{price}</span>
        </div>
    )
}