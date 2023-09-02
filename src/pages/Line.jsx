import Header from "../components/Header"
import LineChart from "../components/charts/LineChart"


const Line = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg  bg-white rounded-3xl">
    <Header category="Charts" title="Line" />

                <LineChart/>

      </div>
    
    
  
  )
}

export default Line