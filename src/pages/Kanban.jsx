
import { KanbanComponent , ColumnsDirective,ColumnDirective } from "@syncfusion/ej2-react-kanban"
import { kanbanData,kanbanGrid } from "../data/dummy"
import Header from "../components/Header"


const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Apps" title="Kanban" />
    <KanbanComponent
    id="kanabna"
    dataSource={kanbanData}
    cardSettings={{contentField:"Summary",headerField:"Id",}}
    keyField="Status"
    >
      <ColumnsDirective>
      {kanbanGrid.map((e,i)=>(<ColumnDirective key={i} {...e} />))}
      </ColumnsDirective>
      
    </KanbanComponent>
  </div>
  )
}
export  default  Kanban