
const DownloadManual = () => {
    return (
        <>
            <div className="col-span-4 flex flex-col gap-3">
                <div className="flex flex-col self-end gap-5 text-gray-700 rounded-md shadow-xl bg-white w-full lg:max-w-[283px] p-5">
                    <h2 className="font-bold font-Manrope text-gray-800 text-xl">Get the most out of Inspektr - Download the user manual.</h2>
                    <div className="flex items-center">
                        <button className="group self-start flex items-center justify-center gap-3 bg-primary hover:bg-opacity-90 duration-300 w-fit text-white border border-transparent px-6 py-3 rounded-md">
                            Download
                        </button>
                        <div className=" -mr-5 -mb-5">
                            <img src="./assets/images/paper.png" alt="paper-image" className="pointer-events-none w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadManual