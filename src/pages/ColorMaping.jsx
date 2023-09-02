import Header from "../components/Header"
import { ChartComponent, SeriesCollectionDirective, 
  SeriesDirective, Inject, ColumnSeries, Category, 
  Tooltip, Legend, RangeColorSettingsDirective,
   RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis,
   ColorMappingPrimaryYAxis, rangeColorMapping } from '../data/dummy';
import { allstates } from "../states/store";


const ColorMaping = () => {
 
  const col =  allstates(s=>s.theme) === 'dark' ? 'white' : 'black'
  
  return (
    <div className="m-2 md:m-10 mt-24  dark:bg-secondary-dark-bg  p-2 md:p-10 bg-white rounded-3xl">
    
      <Header category="Charts" title="Color Mapping chart" />
      

      <ChartComponent
      id="chart-color-mapping"
      primaryXAxis={{...ColorMappingPrimaryXAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
      primaryYAxis={{...ColorMappingPrimaryYAxis,labelStyle:{color:col},majorGridLines:{color:col}}}
      tooltip={{enabled: true}}
      legendSettings={{mode:"Range"}}
      
      >

        <SeriesCollectionDirective>
        <SeriesDirective
        dataSource={colorMappingData[0]}
        xName="x"
        yName="y"
        type="Column"
        cornerRadius={{
          topLeft: 10,
          topRight: 10,
        }}
        />



        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        </SeriesCollectionDirective>

        <RangeColorSettingsDirective>

  {rangeColorMapping.map((e,i)=>(
    <RangeColorSettingDirective key={i}  {...e} />
  ))}
</RangeColorSettingsDirective>
      </ChartComponent>

      </div>
  )
}

export default ColorMaping