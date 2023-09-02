/* eslint-disable react/prop-types */
import { ChartComponent, SeriesCollectionDirective, 
    SeriesDirective, Inject, Legend, Category, Tooltip,} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries ,stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../data/dummy';
import { StackingColumnSeries } from '@syncfusion/ej2/charts';
import { allstates } from '../../states/store';

  
const Stacked = ({width,height}) => {
  const col =  allstates(s=>s.theme) === 'dark' ? 'white' : 'black'

  return (
    <ChartComponent 
    height={height} 
    width={width}  
    primaryXAxis={{...stackedPrimaryXAxis,labelStyle:{color:col},majorGridLines:{color:col}}} 
    primaryYAxis={{...stackedPrimaryYAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{visible:true,background:"white"}}
    
    
    >
        <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
    <SeriesCollectionDirective>
        {stackedCustomSeries.map((s,i)=><SeriesDirective key={i} {...s}/>)}
    </SeriesCollectionDirective>
    </ChartComponent>
    
  )
}

export default Stacked