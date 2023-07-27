import * as mongoose from 'mongoose';
import { formsSchema } from './models/daomodels/forms';

const formsModel = mongoose.model('forms', formsSchema);

export class Seed {

    constructor() {

    }

    

}
