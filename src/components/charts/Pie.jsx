/* eslint-disable react/prop-types */

import { AccumulationChartComponent, 
    AccumulationSeriesCollectionDirective, 
    AccumulationSeriesDirective, AccumulationLegend,
    PieSeries, AccumulationDataLabel, 
    Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts'
import { allstates } from '../../states/store'


const Pie = ({id,data,height}) => {
    return (<AccumulationChartComponent 
    legendSettings={{visible: true,textStyle:{size:"20px",color:allstates(s=>s.theme) === 'dark' ? 'white' : 'black'}
    ,shapeHeight:20,shapeWidth:20,width:"120",height:"150"}}
    height={height}
    width='100%'
    tooltip={{enable:true}}
    id={id}>



    <Inject services={[AccumulationLegend, 
            PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
<AccumulationSeriesCollectionDirective>
    <AccumulationSeriesDirective
    dataSource={data}
    animation={{enable:true,duration:1000}}
    xName='x'
    yName='y'
    radius='100%'
    type='Pie'
    explode
    innerRadius='40%'
    
    explodeIndex={2}
    explodeOffset='10%'
    dataLabel={{
        visible: true,
        name: 'text',
        position: 'Inside',
        font: {
        fontWeight: '600',
        color: '#fff',
        },
    }}

    
    />
</AccumulationSeriesCollectionDirective>


</AccumulationChartComponent>

)
}

export default Pie