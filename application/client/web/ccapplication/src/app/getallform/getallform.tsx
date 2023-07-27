import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getallform.scss";
import  {service}   from './getallform.service';

class Getallform extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'email', field: 'email' },{ headerName: 'DOB', field: 'dob' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    forms : {
    name: '',
    email: '',
    dob: '',
    },
    
    rowData :[]
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ forms: { ...this.state.forms, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.forms.created_by = sessionStorage.getItem('email')||'{}';
    this.GpGetAllValues();
    }
    GpGetAllValues  () {
    this.test.GpGetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">getallform</h2>
        <div id="template-iuq9" onClick={()=>this.GpGetAllValues()}className="ag-theme-material" style={{height: '500px',
    width: '100%'}} >
    <AgGridReact columnDefs={this.columnDefs} pagination={true}
    onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
    "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
    rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
</div>
    </>
    );
    };
    };

    export default Getallform;