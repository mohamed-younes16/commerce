import Header from "../components/Header"
import { ChartComponent, SeriesCollectionDirective, 
  SeriesDirective, Inject, HiloSeries, Tooltip,
  DateTime, Zoom, Logarithmic, Crosshair , Legend } from '@syncfusion/ej2-react-charts'

  import { financialChartData, FinancialPrimaryXAxis,
   FinancialPrimaryYAxis } from '../data/dummy';
import { allstates } from "../states/store";

const Financial = () => {
  const col =  allstates(s=>s.theme) === 'dark' ? 'white' : 'black'
  return (
    <div className="m-2 md:m-10 mt-24 p-2  dark:bg-secondary-dark-bg  md:p-10 bg-white rounded-3xl">
    <Header category="Charts" title="Hillo Chart" />
    <ChartComponent
    id="hillo"
    legendSettings={{background:"white"}}
    primaryXAxis={{...FinancialPrimaryXAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
    primaryYAxis={{...FinancialPrimaryYAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
    tooltip={{enabled: true}}
    crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
    
    
    >

<SeriesCollectionDirective>
  <SeriesDirective
    dataSource={financialChartData}
   type="Hilo"
   xName="x"
   yName="low"
   name="Apple Inc"
   low="low"
   high="high"
   
  />
</SeriesCollectionDirective>



    <Inject services={[HiloSeries, Tooltip, DateTime,
      Logarithmic, Crosshair, Zoom,Legend]} />
    </ChartComponent>


      </div>
  )
}

export default Financial