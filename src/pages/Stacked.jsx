import Header from "../components/Header"
import StackedChart from "../components/charts/Stacked"

const Stacked = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2  dark:bg-secondary-dark-bg  md:p-10 bg-white rounded-3xl">
    <Header category="Apps" title="Color Picker" />
    <div className="w-fit mx-auto">
      <StackedChart width="70%"/>
    </div>
    

      </div>
  )
}

export default Stacked