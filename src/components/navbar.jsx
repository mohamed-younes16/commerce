/* eslint-disable react/prop-types */
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart} from "react-icons/fi"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { allstates } from "../states/store"
import { BsChatLeft } from "react-icons/bs"

import Cart from './Cart';
import Chat from './chat';


export default function Navbar() {
    const carttogle = allstates(s=>s.setCart)
    const menuttogle = allstates(s=>s.setmenu)
    const chattoggle = allstates(s=>s.setchat)
    
    

  const NavButton = ({title,dot,icon,func})=>{
const c = allstates(s=>s.cart)
       return   <TooltipComponent  className=' text-2xl transition ' style={{ color:allstates(s=>s.color)}} content={title}  position="BottomCenter">
                      <button onClick={()=>{func();console.log(c)}} className=' dark:hover:bg-gray-500 p-3 rounded-full relative' >
                          {icon}
                          <span style={{backgroundColor:dot}} className="absolute w-2  rounded-full top-1 left-1  h-2" ></span>
                          </button>  

                      </TooltipComponent>

      }
  

  return (
      

    <div>
        <div className="flex z-10 px-14 dark:bg-main-dark-bg  transition shadow-inner shadow-gray-500  justify-between py-4 text-3xl">
          <button onClick= {menuttogle} style={ {color:allstates(s=>s.color)}}> <AiOutlineMenu/></button>
        
        <div className="flex flex-1 justify-end gap-10">
        <NavButton func={carttogle} icon={<FiShoppingCart/>} dot={"gray"} title={"cart"} /> 
        <NavButton   func={chattoggle} icon={<BsChatLeft/>}  dot={"red"} title={"chat"} /> 
        

        </div>

        <Cart/>
        <Chat/>
        </div>
    </div>
  )
}
