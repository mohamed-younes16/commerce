/* eslint-disable react/prop-types */
import { SparklineComponent ,Inject,SparklineTooltip } from "@syncfusion/ej2-react-charts"


const Sparkline = ({data,height,width,type,id,col}) => {
 console.log(col)
  return (
    <SparklineComponent
    palette={["white"]}
    height={height}
    dataSource={data}
    width={width}
    fill={col}
    xName="x"
    yName="yval"
    type={type}
    valueType="Numeric"
    lineWidth={1}
    border={{color:"",width:0}}
    id={id}
    markerSettings={{ visible: ['All'], size: 5.5, fill: col }}
    tooltipSettings={{
      visible: true,
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}
    
    
    >

        <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default Sparkline