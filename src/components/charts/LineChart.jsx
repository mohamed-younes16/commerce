
import { ChartComponent, SeriesCollectionDirective, 
SeriesDirective, Inject,
Legend, Category, Tooltip, DataLabel, StackingLineSeries } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries , LinePrimaryYAxis,LinePrimaryXAxis } from '../../data/dummy';
import { allstates } from '../../states/store';

const LineChart = () => {
    const theme = allstates(s=>s.theme)
return (
    <div className='max-sm:w-80 md:min-w-[500px]  mt-8'>
        <ChartComponent 
        
    id="line-chart"
    height="400px"
    
    primaryXAxis={ 
        
    {...LinePrimaryXAxis,labelStyle: {color:  theme === 'dark' ? 'white' : 'black'}}
      }
      primaryYAxis={{...LinePrimaryYAxis,labelStyle: {color:  theme === 'dark' ? 'white' : 'black'}}}
    
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true ,fill:"#7352ff",opacity:1,textStyle:{size:"20px"}}}
    legendSettings={{ background: 'white' }}
    background={theme == "light" ? "white" :"#33373E"}
    
    
    >

<Inject  services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]}/>
    <SeriesCollectionDirective>

    {lineCustomSeries.map((e,i)=>(
<SeriesDirective   key={i} {...e} >
    
</SeriesDirective>
        
    ))}







    </SeriesCollectionDirective>
    
    
    </ChartComponent>
    </div>
    
  )
}

export default LineChart