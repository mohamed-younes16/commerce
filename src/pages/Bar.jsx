import Header from "../components/Header"
import { ChartComponent, SeriesCollectionDirective,
   SeriesDirective, Inject, Legend, 
   Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../data/dummy';
import { allstates } from "../states/store";

const Bar = () => {
  const col = allstates(s=>s.theme) === 'dark' ? 'white' : 'black'
  return (
    <div className="m-2 md:m-10 mt-24  dark:bg-secondary-dark-bg  p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Charts" title="Bar chart" />
    <div className="w-full">

      <ChartComponent
      primaryYAxis={{...barPrimaryYAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
      primaryXAxis={barPrimaryXAxis}
      tooltip={{enable:true}}
      legendSettings={{visible:true,mode:"Gradient",background:"white"}}
      >
        <SeriesCollectionDirective>

          {barCustomSeries.map((e,i)=>(
            <SeriesDirective key={i} {...e} />
          ))}
        </SeriesCollectionDirective>
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
      </ChartComponent>
    </div>


      </div>
  )
}

export default Bar