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
                        <div className="text-center text-base flex justify-between">Graph Theory: <Dec initialValue={16}/></div>
                        <div className="text-center text-base flex justify-between">Set Theory: <Dec initialValue={14}/></div>     
                        <div className="text-center text-base flex justify-between">Combinatorics: <Dec initialValue={10}/></div>     

                    </div>
                    <div>
                        <div className="text-xs text-center">Aptitude</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> Apti</div>
                        <div className="text-center text-base flex justify-between">Quantitative Aptitude: <Dec initialValue={13}/></div>
                        <div className="text-center text-base flex justify-between">Analytic & spatial Aptitude: <Dec initialValue={8}/></div>     

                    </div>
                    </div>

                    <div className="flex justify-around mb-8 border-b-2 pb-4">
                    <div>
                        <div className="text-xs text-center">Computer Organization and Architecture</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> COA</div>
                        <div className="text-center text-base flex justify-between">Intro: <Dec initialValue={5}/></div>
                        <div className="text-center text-base flex justify-between">machine Instruction and Addressing : <Dec initialValue={12}/></div>     
                        <div className="text-center text-base flex justify-between">Floating Point representation: <Dec initialValue={4}/></div>
                        <div className="text-center text-base flex justify-between">ALU and control unit : <Dec initialValue={6}/></div> 
                        <div className="text-center text-base flex justify-between">Pipelining: <Dec initialValue={8}/></div>
                        <div className="text-center text-base flex justify-between">Cache Memory : <Dec initialValue={7}/></div>     
                        <div className="text-center text-base flex justify-between">Intro: <Dec initialValue={5}/></div>
                        <div className="text-center text-base flex justify-between">machine Instruction and Addressing : <Dec initialValue={12}/></div>     
                        <div className="text-center text-base flex justify-between">Secondary Memory & IO interface: <Dec initialValue={1}/></div>


                    </div>
                    <div>
                        <div className="text-xs text-center">Digital Logic</div>
                        <div className="text-3xl font-bold text-center mb-3 mt-1"> DL</div>
                        <div className="text-center text-base flex justify-between">Logic gate: <Dec initialValue={16}/></div>
                        <div className="text-center text-base flex justify-between">Minimization : <Dec initialValue={7}/></div>     
                        <div className="text-center text-base flex justify-between">Combinational circuit: <Dec initialValue={10}/></div>
                        <div className="text-center text-base flex justify-between">Secuential circuit : <Dec initialValue={12}/></div> 
                        <div className="text-center text-base flex justify-between">number System: <Dec initialValue={2}/></div>
    
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}