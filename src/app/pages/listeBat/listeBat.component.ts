import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import {DataSource} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'ListeTrans',
    templateUrl: 'listeBat.html'
})

export class ListeBatComponent implements OnInit {
    AllTrans = new AllTransData(this.http);
    constructor(
        private http: Http
    ) { }
    @ViewChild('filter') filter: ElementRef;

    ngOnInit() {
        this.dataSource = new TranspDataSource(this.AllTrans);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
    dataSource: TranspDataSource | null;
    displayedColumns = ["userId", "nom", "orga", "mail"];
}
export class AllTransData {
    dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    get data(): any[] { return this.dataChange.value; }
    constructor(
        private http: Http
    ) {
        this.http.get("https://tracking-cont-api.herokuapp.com/api/Transporteurs").map(
            res => res.json()
        ).subscribe(
            data => this.handle(data),
            error => console.error(error)
            )
    }
    handle(data) {
        data.forEach(transporteur => {
            let obj: Transporteur = {
                id: transporteur.id,
                prenom: transporteur.prenom,
                nom: transporteur.nom,
                orga: transporteur.realm,
                mail: transporteur.email
            }
            const copiedData = this.data.slice();
            copiedData.push(obj);
            this.dataChange.next(copiedData);
        });
    }
}
export class TranspDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }
    constructor(
        private AllTrans: AllTransData
    ) {
        super();
    }
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this.AllTrans.dataChange,
            this._filterChange,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this.AllTrans.data.slice().filter((item: Transporteur) => {
                let searchStr = item.orga.toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) != -1;
            });
        });
    }

    disconnect() { }
}

export interface Transporteur {
    id: string,
    prenom: string,
    nom: string,
    orga: string,
    mail: string

}
