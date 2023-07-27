
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const formsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String },
   dob: { type: String }
})

const formsModel = mongoose.model('forms', formsSchema, 'forms');
export default formsModel;
