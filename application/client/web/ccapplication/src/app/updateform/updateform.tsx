import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateform.scss";
import  {service}   from './updateform.service';

class Updateform extends React.Component<any, any> {
    queryId: any;
    test = new service ("");
    constructor(props:any){
    super(props);
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
    if(this.props.location.state){
 	 	this.queryId = this.props.location.state.id._id;
 	 	this.GpGetEntityById();
 	 	};
    }
    GpUpdate  () {
    this.test.GpUpdate(this.state.forms).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GpDelete  () {
    this.test.GpDelete(this.queryId).then((data:any) => {
    this.GpGetEntityById();
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GpGetEntityById  () {
    this.test.GpGetEntityById(this.queryId).then((data:any) => {
    this.setState({forms:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updateform</h2>
        <div id="template-isag" className="gjs-row">
    <div id="template-issy" className="gjs-cell">
        <label id="template-ic2g" className="label ">Name</label>
        <input id="template-iomhl" onChange={this.handlechange} name="name"
        value={this.state.forms.name}className="input form-control " />
    </div>
    <div id="template-ijeg" className="gjs-cell">
        <label id="template-inos" className="label ">Email</label>
        <input id="template-ifvnp" onChange={this.handlechange} name="email"
        value={this.state.forms.email}className="input form-control " />
    </div>
    <div id="template-i26c" className="gjs-cell">
        <label id="template-i6udf" className="label ">DOB</label>
        <input id="template-id51j" onChange={this.handlechange} name="dob"
        value={this.state.forms.dob}className="input form-control " />
    </div>
</div>
<div id="template-i5gh" className="gjs-row">
    <div id="template-i7li" className="gjs-cell">
        <button id="template-i3l9g" onClick={()=>this.GpUpdate()} className="button btn btn-primary "> Update</button>
        <button
        id="template-iuuol" onClick={()=>this.GpDelete()} className="button btn btn-danger "> Delete</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateform;