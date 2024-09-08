import Dec from "./NormalDeduct"

export default function(){

    return(
        <>
            <div className="h-grow ">
                <div className="mt-8 text-center text-3xl  tracking tracking-wider mb-4">
                    <div className="mb-8"> Lectures Left</div>
                    <div className="flex justify-around mb-8 border-b-2 pb-4">
                    <div>
                        <div className="text-xs text-center">Database Management System</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> DBMS</div>
                        <div className="text-center text-base flex justify-between">Query Language: <Dec initialValue={9}/></div>
                        <div className="text-center text-base flex justify-between">File Org. & Indexing: <Dec initialValue={6}/></div>     
                    </div>
                    <div>
                        <div className="text-xs text-center">Discrete mathematics</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> DM</div>
                        <div className="text-center text-base flex justify-between">Graph Theory: 30 hours <Dec initialValue={16}/></div>
                        <div className="text-center text-base flex justify-between">Set Theory: 20 hours <Dec initialValue={14}/></div>     
                        <div className="text-center text-base flex justify-between">Combinatorics: 15 hours <Dec initialValue={10}/></div>     

                    </div>
                    {/* <div>
                        <div className="text-xs text-center">Aptitude</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> Apti</div>
                        <div className="text-center text-base flex justify-between">Quantitative Aptitude: <Dec initialValue={13}/></div>
                        <div className="text-center text-base flex justify-between">Analytic & spatial Aptitude: <Dec initialValue={8}/></div>     

                    </div> */}
                    </div>

                    <div className="flex justify-around mb-8 border-b-2 pb-4">
                    <div>
                        <div className="text-xs text-center">Computer Organization and Architecture</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> COA</div>
                        <div className="text-center text-base flex justify-between">Intro: 8 hours <Dec initialValue={5}/></div>
                        <div className="text-center text-base flex justify-between">machine Instruction and Addressing : 18 hours <Dec initialValue={12}/></div>     
                        <div className="text-center text-base flex justify-between">Floating Point representation: 10 hours <Dec initialValue={4}/></div>
                        <div className="text-center text-base flex justify-between">ALU and control unit : 11 hours <Dec initialValue={6}/></div> 
                        <div className="text-center text-base flex justify-between">Pipelining: 22 hours <Dec initialValue={8}/></div>
                        <div className="text-center text-base flex justify-between">Cache Memory : 18 hours <Dec initialValue={7}/></div>     
                        <div className="text-center text-base flex justify-between">Secondary Memory & IO interface: 15 hours <Dec initialValue={1}/></div>


                    </div>
                    <div>
                        <div className="text-xs text-center">Computer networking</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> CN</div>
                        <div className="text-center text-base flex justify-between">TCP & UDP : 25hours <Dec initialValue={18}/></div>     
                        <div className="text-center text-base flex justify-between">MAC: 12 hours <Dec initialValue={24}/></div>
                        <div className="text-center text-base flex justify-between">Routing protocol : 7 hours </div> 
                        <div className="text-center text-base flex justify-between">Switching: 5 hours</div>
                        <div className="text-center text-base flex justify-between">Application layer protocol: 4 hours </div>
                        <div className="text-center text-base flex justify-between">IP support : 4 hours </div>     
                        <div className="text-center text-base flex justify-between">OSI: 1 hours </div>
                        <div className="text-center text-base flex justify-between">Error control : 1 hours </div> 

    
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}