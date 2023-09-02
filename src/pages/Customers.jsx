import { ColumnDirective, ColumnsDirective, 
  GridComponent, Inject, Page,Toolbar,Edit,Sort,Filter} from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../data/dummy';
import Header from "../components/Header"






const Customers = () => {
  const toolbarOptions = ['Delete'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar,Page,Sort,Filter]} />

      </GridComponent>
    </div>
  );
};
export  default  Customers