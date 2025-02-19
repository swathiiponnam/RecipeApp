import React,{useState} from 'react';
import {AgGridColumn,AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Table(){
    const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    const updateData = (data) => {
      setRowData(data);
    };
  }
  const GenderComponent=(props)=>{
      const {value}=props;
      const icon=value=='Male' ? <BiMaleSign/>:<BiFemaleSign/>;
      return(
          <div>{icon}{value}
          </div>
      )
  }
    

   
   const rowSelectionType='multiple';
  
  
  return(
      <div>
      <div style={{padding:"10px"}}>
      <button onClick={()=>gridApi.applyTransaction({add:[{}]})}>Add Row</button>
      <button onClick={()=>{ const selectedRows=gridApi.getSelectedRows()
      gridApi.applyTransaction({remove: selectedRows})}}>Delete Selected Row</button>
      
      {/* <button onClick={()=>gridApi.applyTransaction({add:[{}]})}>Submit</button> */}

      </div>


   
           <div className="ag-theme-alpine" style={{height: 300, width:"100%"}}>
           <AgGridReact
               frameworkComponents={GenderComponent} rowData={rowData}   onGridReady={onGridReady} rowSelection={rowSelectionType}  sideBar={true}>
               <AgGridColumn field="id" sortable={ true } editable={true} filter={ true }   enableValue={true}
            enableRowGroup={true}   checkboxSelection={ true }  ></AgGridColumn>
               <AgGridColumn field="Name" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="Email" sortable={ true } editable={true}  filter={ true } required ></AgGridColumn>
               <AgGridColumn field="Gender" cellRenderer='GenderComponent' sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="DOB" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="Country" sortable={ true } filter={ true } editable={true} ></AgGridColumn>
               <AgGridColumn field="City" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
           </AgGridReact>
           <div className="ag-theme-alpine" style={{height: 200, width:"100%"}}> 
           <h2>Submitted Data</h2>
           <AgGridReact>
            <AgGridColumn field="id" sortable={ true } editable={true} filter={ true }   enableValue={true}
            enableRowGroup={true}   checkboxSelection={ true }  ></AgGridColumn>
               <AgGridColumn field="Name" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="Email" sortable={ true } editable={true}  filter={ true } required ></AgGridColumn>
               <AgGridColumn field="Gender" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="DOB" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
               <AgGridColumn field="Country" sortable={ true } filter={ true } editable={true} ></AgGridColumn>
               <AgGridColumn field="City" sortable={ true } editable={true}  filter={ true } ></AgGridColumn>
           </AgGridReact>
           </div>
       </div>
       </div>


  )
}