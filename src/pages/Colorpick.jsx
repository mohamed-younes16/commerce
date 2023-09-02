import { useState } from "react"
import Header from "../components/Header"

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs"

 const Colorpick = () => {
  const [col,setcol] = useState()
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Apps" title="Color Picker" />


      <div id="preview" style={{backgroundColor:col}}/>

      <div className="flex mt-12 gap-32 flex-wrap justify-center items-center">
        <div className=" ">
         <p className="text-2xl font-semibold mb-9">Inline Pallete</p> 
         <ColorPickerComponent
         inline
         showButtons={false}
         modeSwitcher={false}
         change={e=> setcol(e.currentValue.hex)}
         mode="Palette"/>
          </div>
          
          <div>
         <p className="text-2xl  font-semibold  mb-9">Inline Picker</p> 
         <ColorPickerComponent  inline
         showButtons={false}
         modeSwitcher={false} mode="Picker"  change={e=> setcol(e.currentValue.hex)}/>
          </div>

      </div>
    
    
  </div>
  )
}

export default Colorpick