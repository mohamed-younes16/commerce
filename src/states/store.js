/* eslint-disable no-unused-vars */
import { create , } from "zustand";
import {persist} from "zustand/middleware"

const thestore= (set)=>({
color:"#03c9d7",
setColor:(val)=>set(()=>({ color:val})) ,
cart:false,
setCart:()=>set((s)=>({cart:!s.cart})) ,
menu:true,
setmenu:()=>set((s)=>({menu:!s.menu})) ,
chat:false,
setchat:()=>set((s)=>({chat:!s.chat})) ,
settings:false,
setsetting:()=>set((s)=>({settings:!s.settings})) ,
theme:"light",
setTheme:(v)=>set((s)=>({theme:v}))

})




export const allstates  = create(persist(thestore,{name: 'settings',}));