import { themeColors } from "../data/dummy"
import { allstates } from "../states/store"


const Settings = () => {
    const setColor = allstates(s=>s.setColor)
    const themesetter = allstates(s=> s.setTheme)
    const currentTheme = allstates(s=>s.theme)
    
return (
    <div className={`fixed transition overflow-hidden  top-0 z-50 right-0
    bg-main-dark-bg  bg-opacity-70  p-5 w-[300px] 
    h-[100dvh] backdrop-blur-md border-l-2  shadow-inner
    ${allstates(s=>s.settings) ?"" :"translate-x-full"}`}  
    > 

    <div className="mx-auto text-xl  whitespace-nowrap max-md:whitespace-normal border-b-2 pb-7  border-black">Choose A theme Color:</div>
<div className="flex justify-center my-10 flex-wrap gap-4">
    {themeColors.map(e=>
    <div className=" cursor-pointer" 
    key={e.color} onClick={()=>setColor(e.color)} >
    <div style={{backgroundColor:e.color}} 
    className={` h-10 w-10 rounded-full`}></div> </div>)}
</div>
<div className="mx-auto text-xl  whitespace-nowrap 
max-md:whitespace-normal border-b-2 pb-7  border-black">Choose A theme:</div>
<div className="flex justify-center my-10 flex-wrap gap-4">

        <div className="flex items-center gap-5">

            <span  className={`flex rounded-lg border-[1px] border-transparent transition-all p-2 ${currentTheme == "dark" ? " border-white" : ""} `}> Dark : 
                        <span onClick={()=>themesetter("dark")} className={`cursor-pointer border-transparent border-2 transition
                        hover:border-white
                        hover:outline-black outline bg-black w-8 h-8 rounded-full  `}>
                        </span> 
            </span>
                
        </div>


        <div className="flex items-center gap-5">
        <span  className={`flex rounded-lg border-[1px] border-transparent transition-all p-2 ${currentTheme == "light" ? " border-white" : ""} `}>
            Light : 
        <span onClick={()=>themesetter("light")} className=" cursor-pointer border-transparent border-2 transition
        hover:border-white
        hover:outline-white outline bg-white w-8 h-8 rounded-full "></span> 

        </span>

        
        </div>  
        
</div>
   
        
    </div>
  )
}

export default Settings