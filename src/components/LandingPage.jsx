import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-48 px-20">
                {["We Create", "Eye opening", "Presentations"].map((item, index) => {
                    return <div key={index} className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (<div className="mr-[1vw] rounded-md w-[8vw] h-[4vw] -top-[1.2vw] relative bg-red-50"> </div>)}
                            <h1 className="pt-[2vw]-mb-[1vw] uppercase text-[5.5vw] leading-[6.5vw] tracking-tight font-['Founders_Grotesk'] font-medium">
                                {item}
                            </h1>
                        </div>
                    </div>
                })}

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private use companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className="text-md font-light tracking-tight leading-none ">
                        {item}
                    </p>
                ))}
                <div className="start flex items-center gap-5 ">
                    <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full font-light text-md uppercase ">
                        Start the project
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                        <span className="rotate-[45deg">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage