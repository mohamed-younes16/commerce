import Header from "../components/Header"
import { ChartComponent, SeriesCollectionDirective, 
    SeriesDirective, Inject, SplineAreaSeries, Legend, 
    Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { areaPrimaryXAxis,areaPrimaryYAxis,areaCustomSeries } from "../data/dummy";
import { allstates } from "../states/store";
const Area = () => {
const col =  allstates(s=>s.theme) === 'dark' ? 'white' : 'black'
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg  bg-white rounded-3xl">
    <Header category="Charts" title="Area Chart" />
        <ChartComponent
        id="chart-area"
        width="100%"
        height="420px"
        primaryYAxis={{...areaPrimaryYAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
        primaryXAxis={{...areaPrimaryXAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
        tooltip={{enable:true}}
        legendSettings={{background:"white"}}
        
        
        

        >
            <SeriesCollectionDirective >
                {areaCustomSeries.map((e,i)=>(
                    <SeriesDirective key={i} {...e}  />
                ))}

            </SeriesCollectionDirective>
 <Inject services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]}/>

        </ChartComponent>

      </div>
  )
}

export default Area