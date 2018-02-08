import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Batiment } from "../models/batiment";



export class ListeBatimentsDataSource extends DataSource<Batiment>{

    constructor(private behaviorSubject: BehaviorSubject<Batiment[]>){
        super();
    }

    connect(): Observable<Batiment[]> {
        return this.behaviorSubject;
    }

    disconnect() {}
}