export default function(){
    return(
        <>
        <div className="flex justify-center mb-8">
            <div className="  pr-12 w-2/3  relative overflow-x-auto rounded-sm ">
                <table className="  w-full text-sm text-center font-bold rtl:text-right text-gray-500 ">
                    <thead className="text-base text-white uppercase bg-[#1e280c]">
                        <tr>
                            <th scope="col" className="px-6 py-3">Subject</th>
                            <th scope="col" className="px-6 py-3">Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4  text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Math & Aptitude</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 30 </td>
                        </tr>
                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> C , DS &  Algorithm</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 18 - 20</td>
                        </tr>
                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out">COA & DBMS</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 15 - 20</td>
                        </tr>
                        <tr className="bg-white border-b transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4  text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> TOC</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 8 - 10 </td>
                        </tr>
                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Compiler Design</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 4 - 5</td>
                        </tr>
                        <tr className="bg-white border-b transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4  text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Operating System</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 8 - 10 </td>
                        </tr>
                       
                        <tr className="bg-white border-b transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4  text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Digital Logic</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 8 - 10 </td>
                        </tr>
                        <tr className="bg-white border-b  transform transition hover:scale-102 duration-300 ease-in-out text-center">
                            <th className="px-6 py-4 text-base text-gray-600 transform transition-all hover:scale-112 duration-300 ease-in-out"> Computer Network</th>
                            <td className="px-6 py-4 transform transition-all hover:scale-112 duration-300 ease-in-out"> 8 - 9</td>
                        </tr>


                    </tbody>
                </table>

            </div>
            </div>
        </>
    )
}