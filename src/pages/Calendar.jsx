import Header from "../components/Header"
import { ScheduleComponent,
Day, Week, WorkWeek, Month, 
Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


import { scheduleData } from "../data/dummy";






const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Apps" title="Calendar" />
    <ScheduleComponent
    height="650px"
    eventSettings={{dataSource:scheduleData, }}
    selectedDate={new Date(2021, 0, 10)}
    >
      <Inject  services={[ Day, Resize, DragAndDrop , Week, WorkWeek, Month,  Agenda,]} />
    </ScheduleComponent>
  </div>
  )
}


export  default  Calendar