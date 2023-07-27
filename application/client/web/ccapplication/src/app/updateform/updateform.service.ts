import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpUpdate=(forms:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/forms' + `?jwt_token=${jwt_token}`, forms);
    }
   GpDelete=(formsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.delete(Web()+ '/forms/' + formsId + `?jwt_token=${jwt_token}`);
    }
   GpGetEntityById=(formsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/forms/' + formsId + `?jwt_token=${jwt_token}`);
    }
}