import { Request, Response, NextFunction } from "express";
import { formsController } from '../controller/formsController';


export class Routes {
    private forms: formsController = new formsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/forms/:id').delete(this.forms.GpDelete);
app.route('/forms/get/search').get(this.forms.GpSearch);
app.route('/forms/get/update').put(this.forms.GpSearchForUpdate);
app.route('/forms').put(this.forms.GpUpdate);
app.route('/forms/:id').get(this.forms.GpGetEntityById);
app.route('/forms').get(this.forms.GpGetAllValues);
app.route('/forms').post(this.forms.GpCreate);
app.route('/forms/userid/created_by').get(this.forms.GpGetNounCreatedBy);
     }

}