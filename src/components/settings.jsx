import { themeColors } from "../data/dummy"
import { allstates } from "../states/store"


const Settings = () => {
    const setColor = allstates(s=>s.setColor)
    const themesetter = allstates(s=> s.setTheme)
    
return (
    <div className={`fixed transition overflow-hidden  top-0 z-50 right-0
    bg-gray-500 bg-opacity-40  p-5 w-[30dvw] 
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
        <div className="flex items-center gap-5"> Dark : 
        <span onClick={()=>themesetter("dark")} className=" cursor-pointer border-transparent border-2 transition
        hover:border-white
        hover:outline-black outline bg-black w-8 h-8 rounded-full "></span> </div>  
        <div className="flex items-center gap-5"> Light : 
        <span onClick={()=>themesetter("light")} className=" cursor-pointer border-transparent border-2 transition
        hover:border-white
        hover:outline-white outline bg-white w-8 h-8 rounded-full "></span> </div>  
        
</div>
   
        
    </div>
  )
}

export default Settings