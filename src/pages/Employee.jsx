import { ColumnDirective, ColumnsDirective, 
  GridComponent, Inject, Page,Toolbar,Search,} from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import Header from "../components/Header"






const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2  dark:bg-secondary-dark-bg  md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        style={{borderRadius: '10px',overflow: 'hidden'}}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Toolbar,Page]} />

      </GridComponent>
    </div>
  );
};
export  default  Employees