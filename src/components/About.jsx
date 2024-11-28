const About = () => {
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className="font-['Neue_Montreal'] font-semibold text-[5vw] leading-[3.5vw] ">
                Ochi is a strategic partner for fast growing tech companies that need to raise funds, sell products, explain complex ideas, and hire great people
            </h1>
            <div className="w-full border-t-[1px] mt-20 border-[#a1b562] pt-10 flex gap-5">
                <div className="w-1/2">
                    <h1 className="text-7xl">Our approach: </h1>
                    <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase">
                        Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>

            </div>
        </div>
    )
}
export default About