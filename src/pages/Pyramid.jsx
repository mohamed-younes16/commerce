import Header from "../components/Header"
import { AccumulationChartComponent, 
  AccumulationSeriesCollectionDirective,
   AccumulationSeriesDirective, Inject, 
   AccumulationSelection,
   AccumulationLegend, PyramidSeries, AccumulationTooltip,
    AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

    import { PyramidData  } from "../data/dummy";


const Pyramid = () => {
  return (
    <div className="m-2 md:m-10 mt-24  dark:bg-secondary-dark-bg  p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Apps" title="Color Picker" />
  <div className="w-fit mx-auto">
    
     <AccumulationChartComponent
    width="350px"
    id="pyramid"
tooltip={{enable: true}}
legendSettings={{ background: 'white' }}
    >
<AccumulationSeriesCollectionDirective>
<AccumulationSeriesDirective
dataSource={PyramidData}
xName="x"
yName="y"
type="Pyramid"
dataLabel={{
  visible: true,
  position: 'Inside',
  name: 'text',
}}
emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
explode
explodeIndex={3}


/>

</AccumulationSeriesCollectionDirective>

<Inject services={[AccumulationDataLabel, AccumulationTooltip, 
  PyramidSeries, AccumulationLegend, AccumulationSelection]} />

    </AccumulationChartComponent>

    
    </div> 
      </div>
  )
}

export default Pyramid