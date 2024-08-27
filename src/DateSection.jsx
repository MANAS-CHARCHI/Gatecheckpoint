import CountDown from "./CountDownDays"


export default function DateSection(){
    return(
        <>
            <div className=" pl-12 pr-12 w-full  relative overflow-x-auto rounded-sm ">
                <table className="  w-full text-sm text-center font-bold rtl:text-right text-gray-500 ">
                    <thead className="text-base text-white uppercase bg-[#1e280c]">
                        <tr>
                            <th scope="col" className="px-6 py-3">Activity</th>
                            <th scope="col" className="px-6 py-3">Day</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Remaining Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4  text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Registration Start</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> Wednesday</td>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 28th August 2024</td>
                            <td className="px-6 py-4 text-base  transform transition-all hover:scale-112 duration-300 ease-in-out"><CountDown targetDate="2024-08-28"/></td>
                        </tr>
                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Registration End</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> Thursday</td>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 26th September 2024</td>
                            <td className="px-6 py-4 text-base transform transition-all hover:scale-112 duration-300 ease-in-out"><CountDown targetDate="2024-09-26"/></td>
                        </tr>

                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> GATE 2025 Examination Date </th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> <div className="mb-1">Saturday</div><div className="mb-1">Sunday</div><div className="mb-1">Saturday</div><div>Sunday</div></td>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> <div className="mb-1">1st February 2025</div><div className="mb-1">2nd February 2025</div><div className="mb-1">15th February 2025</div><div>16th February 2025</div></td>
                            <td className="px-6 py-4 text-base transform transition-all hover:scale-112 duration-300 ease-in-out ">
                                        <div className="mb-1"><CountDown targetDate="2025-02-01"/></div>
                                        <div className="mb-1"><CountDown targetDate="2025-02-02"/></div>
                                        <div className="mb-1"><CountDown targetDate="2025-02-15"/></div>
                                        <div className="mb-1"><CountDown targetDate="2025-02-16"/></div>
                                    </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}