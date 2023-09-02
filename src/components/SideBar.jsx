import { links } from "../data/dummy"
import { Link } from "react-router-dom"
import { SiShopware } from 'react-icons/si';
import { allstates } from "../states/store";
import { MdOutlineCancel } from 'react-icons/md';
export default function Sidebar() {
    const setmenu =allstates(s=>s.setmenu)
   
    return (

    <div className={`px-6 overflow-auto sidebar h-screen `}>
        
            <Link to="/" className="mt-5 mb-11 flex gap-4 items-center leading-6  text-4xl">
            <SiShopware style={{color:allstates(s=>s.color)}} /> shoppy 
            <button className={`ml-2 rounded-full p-2 dark:hover:shadow-[red]  shadow-lg transition `}
            onClick={(e)=>{e.preventDefault();setmenu()}} >
                <MdOutlineCancel/></button>
            </Link>
                {links.map(e=>{
                return (<ul className=" text-lg max-lg:text-[1.2rem] mb-10" key={e.title}>
                    <h2 className="text-gray-500 ">{e.title} </h2>
                    {e.links.map(e=> <Link className="block my-2 transition hover:bg-slate-200 p-4 rounded-2xl" to={`/${e.name}`} key={e.name}>
                        <div className="flex  gap-4">{e.icon} <span>{e.name} </span>  </div> </Link> )}

                </ul>


                )
        })}
        
        
    </div>
  )
}
