import DecrementCounter from "./DecrementCounter"


export default function(){
    return(
        <>
            <div className="h-grow ">
                <div className="mt-8 text-center text-3xl  tracking tracking-wider mb-4">
                    <div> PYQ Questions Remain</div>
                </div>
                <div className="flex justify-around mb-8 border-b-2 pb-4">
                    <div>
                        <div className="text-xs text-center">Database Management System</div>
                        <div className="text-3xl font-bold text-center"> DBMS</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={214}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Operating System</div>
                        <div className="text-3xl font-bold text-center"> OS</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={258}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Computer Organization and Architecture</div>
                        <div className="text-3xl font-bold text-center"> COA</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={226}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">C Programming</div>
                        <div className="text-3xl font-bold text-center"> C</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={138}/></div>    
                    </div>
                </div>


                <div className="flex justify-around mb-8 border-b-2 pb-4">
                    
                    <div>
                        <div className="text-xs text-center">Data Structure</div>
                        <div className="text-3xl font-bold text-center"> DS</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={160}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Algorithm</div>
                        <div className="text-3xl font-bold text-center"> Algo</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={245}/></div>    
                    </div>
                </div>

                <div className="flex justify-around mb-8 border-b-2 pb-4">
                    <div>
                        <div className="text-xs text-center">Theory of computation</div>
                        <div className="text-3xl font-bold text-center"> TOC</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={234}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Compiler Design </div>
                        <div className="text-3xl font-bold text-center"> CD</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={123}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Computer network</div>
                        <div className="text-3xl font-bold text-center"> CN</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={209}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Digital Logic</div>
                        <div className="text-3xl font-bold text-center"> DL</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={210}/></div>    
                    </div>
                </div>

                <div className="flex justify-around mb-8">
                   
                    <div>
                        <div className="text-xs text-center">Descrete Mathmatice </div>
                        <div className="text-3xl font-bold text-center"> DM</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={445}/></div>    
                    </div>
                    <div>
                        <div className="text-xs text-center">Aptitude</div>
                        <div className="text-3xl font-bold text-center"> Apti</div>
                        <div className="text-center">No of Total Questions in PYQ: <DecrementCounter initialValue={230}/></div>    
                    </div>
                </div>


            </div>
        </>
    )
}