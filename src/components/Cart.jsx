import { cartData } from "../data/dummy";
import { MdOutlineCancel } from 'react-icons/md';
import { allstates } from "../states/store";
import Button from "./button"
const Cart = () => {
    const setcart = allstates(s=>s.setCart)
    const cart = allstates(s=>s.cart)
  return (
    <div className={`fixed transition overflow-hidden  top-0 z-40 right-0
    bg-gray-200   p-5 w-[350px]
    h-[100dvh]  dark:bg-secondary-dark-bg  border-l-2  shadow-inner
    ${cart ?"" :"translate-x-full"}`}  >

        <div className="flex justify-between items-center">
            Shpping Cart


            <button className={`ml-2 rounded-full p-2 hover:shadow-[red]  shadow-lg transition `}
            onClick={()=>setcart()} >
                <MdOutlineCancel/></button>
            </div>

            <div className="px-2 pb-6 border-b  border-gray-500">
              {cartData.map(e=>(
                <div  key={e.name} className="flex my-6 gap-8">
                 <img src= {e.image} alt="" className="h-80 w-24 rounded-xl" />
                 <div>
                  <p className=" text-xl">{e.name}</p>
                  <p className="text-gray-500 text-lg">
                    {e.category}
                  </p>
                  <div className="flex gap-4 mt-3  w-[170px] justify-between ">
                    <p className=" font-semibold text-lg text-md">{e.price} </p>
                    <div className=" flex cursor-pointer  w-22    px-2 rounded-2xl border-gray-400 border ">
                        <div className="text-red-600 w-4 j text-2xl">-</div>
                       <div className="text-green-700  w-9 p   border-x border-inherit px-2 text-2xl">0</div>
                        <div className="text-green-700 pl-1  w-5  text-2xl">+</div>
                    </div>
                  </div>
                 </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between"></div>
            <div className="flex justify-between"></div>
            <div className="text-lg mx-auto w-fit"><Button cont={'Continue To Pay '}/></div>
        
    </div>
  )
}

export default Cart