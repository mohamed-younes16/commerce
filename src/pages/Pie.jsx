import Header from "../components/Header"
import Piechart from "../components/charts/Pie"
import { pieChartData } from "../data/dummy"

const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2  dark:bg-secondary-dark-bg  md:p-10 bg-white rounded-3xl">
    <Header category="Charts" title="Pie Chart" />
    <Piechart data={pieChartData}  height="450px" id="pi-4"/>

      </div>
  )
}

export default Pie