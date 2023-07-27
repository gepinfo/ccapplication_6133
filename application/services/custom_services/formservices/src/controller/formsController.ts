import { Request, Response } from 'express';
import { formsService } from '../service/formsService';
import { CustomLogger } from '../config/Logger'
let forms = new formsService();

export class formsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    forms.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpGetNounCreatedBy');
    })}


}