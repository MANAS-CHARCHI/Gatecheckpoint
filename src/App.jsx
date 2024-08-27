import React from "react";
import logo from "./assets/logo.png"
import DateSection from './DateSection'
import Syllabus from "./Syllabus";
import MarkContain from "./MarkContain";
import Lecturesleft from "./Lecturesleft";

export default function Result(){
    return(
        <>
            <div className="bg-slate-50 md:h-full md:w-screen">
                {/* Start of top section */}
                <div className=" bg-[#F3FBEB] items-center pt-3 mb-2 pb-3 flex md:justify-between justify-start ">
                    <img className=" flex-row h-24 w-24" src={logo}/> 
                    <div className=" text-3xl tracking tracking-wider items-center md:flex md:flex-col ">
                        <div className="md:block hidden ">GRADUATE APTITUDE TEST IN ENGINEERING 2025</div>
                        <div className="md:text-4xl text-2xl font-bold md:pl-0 pl-12">GATE 2025</div>
                    </div>
                    <div className="md:block">
                        {/* Blank space to manage the flex */}
                    </div>
                </div>
                {/* end of top section */}

                

                {/* Date Section */}
                <DateSection/> 

                {/* lectures left */}
                <Lecturesleft/>

                {/* Syllabus Complete section */}
                <Syllabus/>

                {/* mark Distribution */}
                <MarkContain/>

              
            </div>
        </>
    )
} 