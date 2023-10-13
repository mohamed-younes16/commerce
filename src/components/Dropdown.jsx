import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { allstates } from '../states/store';

const Dropdown = ({data ,id}) => {
    const theme = allstates(s=>s.theme)
  return (
    <div className="w-fit border rounded-2xl p-2 ">
       <DropDownListComponent
   id={id}
   dataSource={data}
   fields={{text:"Time",value:"Id"}}
   style={{color:theme== "light"? "black" : "white"}}
   index={0}
   popupWidth="100px"
   width={"100px"}
   /> 
    </div>
   

   
  )
}

export default Dropdown