import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createform.scss";
import  {service}   from './createform.service';

class Createform extends React.Component<any, any> {
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
    }
    GpCreate  () {
    this.test.GpCreate(this.state.forms).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createform</h2>
        <div id="template-i1kc" className="gjs-row">
    <div id="template-ilmo" className="gjs-cell">
        <label id="template-idik" className="label ">Name</label>
        <input id="template-ixy3x" onChange={this.handlechange} name="name"
        value={this.state.forms.name}className="input form-control " />
    </div>
    <div id="template-i62o" className="gjs-cell">
        <label id="template-im5d" className="label ">email</label>
        <input id="template-i8dzj" onChange={this.handlechange} name="email"
        value={this.state.forms.email}className="input form-control " />
    </div>
    <div id="template-iqhf" className="gjs-cell">
        <label id="template-ie6qg" className="label ">DOB</label>
        <input id="template-iy7ir" onChange={this.handlechange} name="dob"
        value={this.state.forms.dob}className="input form-control " />
    </div>
</div>
<div id="template-iqfv" className="gjs-row">
    <div id="template-iq7p" className="gjs-cell">
        <button id="template-ib60r" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Create</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Createform;