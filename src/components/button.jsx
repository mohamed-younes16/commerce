/* eslint-disable react/prop-types */
import { allstates } from "../states/store";


export default function Button({cont}) {
  return (
    <button style={{backgroundColor:allstates(s=>s.color)}}
    className="my-4 rounded-xl hover:text-white 
    transition hover:scale-105 hover:shadow-xl  w-fit p-4 ">{cont}</button>
  )
}
