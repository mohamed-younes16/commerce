import { chatData } from "../data/dummy";
import { MdOutlineCancel } from 'react-icons/md';
import { allstates } from "../states/store";
import Button from "./button"
const Chat = () => {
    const setchat = allstates(s=>s.setchat)
    const chat = allstates(s=>s.chat)
    
  return (
    <div className={`fixed transition overflow-hidden  top-0 z-40 right-0
    bg-gray-200   p-5 w-[350px]
    h-[100dvh]  dark:bg-secondary-dark-bg  border-l-2  shadow-inner
    ${chat ?"" :"translate-x-full"}`}  >
<div className="flex justify-between items-center">
                Messages


            <button className={`ml-2 rounded-full p-2 hover:shadow-[red]  shadow-lg transition `}
            onClick={()=>setchat()} >
                <MdOutlineCancel/></button>
            </div>
                <div className="mt-16">
                    {chatData.map(e=>(<>
                    <div className="border-b flex gap-4 border-gray-500 py-4 my2">
                        <img src={e.image} className=" rounded-full h-10" alt="" />
                        <div className="text-lg">
                            <p className=" font-bold"> {e.message} </p>
                            <p className="font-thin text-[16px]">{e.desc} </p>
                        </div>
                    
                    
                    </div>
                    </>))}
                </div>


            <div className="text-lg mx-auto w-fit">
                <Button cont={'Check Messages '}/></div>
        
    </div>
  )
}

export default Chat