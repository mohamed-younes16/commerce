import { ColumnDirective, ColumnsDirective, 
  Filter, GridComponent, 
  Group, Inject, Page, Sort,Resize,ContextMenu } from '@syncfusion/ej2-react-grids';
import { ordersData,ordersGrid,contextMenuItems } from '../data/dummy';
import Header from "../components/Header"







const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg  bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        style={{borderRadius: '10px',overflow: 'hidden',background:"red"}}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        pageSettings={{}}
        
        
      >
        <ColumnsDirective

         >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective  displayAsCheckBox key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter,Group, Page]} />
      </GridComponent>
    </div>
  );
};
export  default  Orders