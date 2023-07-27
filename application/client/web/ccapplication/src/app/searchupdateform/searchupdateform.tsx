import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./searchupdateform.scss";
import  {service}   from './searchupdateform.service';

class Searchupdateform extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'email', field: 'email' },{ headerName: 'dob', field: 'dob' },];
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
    }
    GpSearch  () {
    this.test.GpSearch(this.state.forms).then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
    this.props.history.push({pathname:"/updateform",state:{id : event.data}})
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
        <h2 className="screen-align">searchupdateform</h2>
        <div id="template-ionv" className="gjs-row">
    <div id="template-i5ku" className="gjs-cell">
        <label id="template-il6l" className="label ">Name</label>
        <input id="template-iujha" onChange={this.handlechange} name="name"
        value={this.state.forms.name}className="input form-control " />
    </div>
    <div id="template-iakf" className="gjs-cell">
        <label id="template-ivk6" className="label ">Email</label>
        <input id="template-iq691" onChange={this.handlechange} name="email"
        value={this.state.forms.email}className="input form-control " />
    </div>
    <div id="template-i1tx" className="gjs-cell">
        <label id="template-ivugp" className="label ">DOB</label>
        <input id="template-i2nsj" onChange={this.handlechange} name="dob"
        value={this.state.forms.dob}className="input form-control " />
    </div>
</div>
<div id="template-i1v2" className="gjs-row">
    <div id="template-il37" className="gjs-cell">
        <button id="template-iye74" onClick={()=>this.GpSearch()} className="button btn btn-primary "> Search</button>
    </div>
</div>
<div id="template-iwpbk" className="ag-theme-material" style={{height:
'500px', width: '100%'}}>
    <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
    paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
    true, filter: true }} rowData={this.state.rowData} rowSelection={
    "single"} onRowSelected={this.onRowSelected }></AgGridReact>
</div>
    </>
    );
    };
    };

    export default Searchupdateform;