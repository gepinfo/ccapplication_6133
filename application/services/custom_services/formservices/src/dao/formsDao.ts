import * as mongoose from 'mongoose';
import formsModel from '../models/daomodels/forms';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class formsDao {
    private forms = formsModel;
    constructor() { }
    
    public async GpDelete(formsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpDelete');

    

    
    
    
    this.forms.findByIdAndRemove(formsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(formsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(formsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.forms.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(formsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.forms.findOneAndUpdate({ _id: formsData._id }, formsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(formsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpUpdate');

    

    
    
    
    this.forms.findOneAndUpdate({ _id: formsData._id }, formsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(formsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpGetEntityById');

    

    
    
    
    this.forms.findById(formsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpGetAllValues');

    

    
    
    
    this.forms.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(formsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpCreate');

    let temp = new formsModel(formsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(formsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.forms.aggregate(([
                        { $match: { $and: [{ created_by: formsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from formsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}