import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {DataAccess} from './data-access';




@Injectable()
export class BatimentService {
    da: DataAccess;

    constructor(protected http: Http) {
       this.da = new DataAccess(this.http);
    }
  
    getAllBatiments()
    {
        return this.da.get(['batiments']);
    }
}
