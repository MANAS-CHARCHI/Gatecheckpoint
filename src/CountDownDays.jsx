import React, { useCallback, useEffect, useRef, useState } from "react";

export default function CountDown({targetDate}){

        const calculateRemainingDays=(target)=>{
            const today=new Date();
            const difference=target-today;
            const days=Math.ceil(difference/(1000*60*60*24));
            return days>0 ? days : 0;
        }
        const [remainingDays, setRemainingDays] = useState(calculateRemainingDays(new Date(targetDate)));

        useEffect(()=>{
            const intervalId=setInterval(()=>{
                setRemainingDays(calculateRemainingDays(new Date(targetDate)));
            }, 1000*60*60*24);

            return ()=>clearInterval(intervalId);
        }, [targetDate]);



    return(
        <>
            <div>
                <div className="flex flex-row font-bold">{remainingDays} {remainingDays <= 5 ? <div className="text-red-500 pl-1 font-bold"> day</div> : 'days'}</div>
            </div>
        </>
    )
}