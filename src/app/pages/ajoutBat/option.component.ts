import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import {Niveau} from '../models/niveau';
import {Departement} from '../models/departement';
const headers: HttpHeaders = new HttpHeaders({
  'accept': 'application/json',
  'content-type': 'application/json'
});
const Options =  new HttpResponse({ headers: headers });
@Component({
  templateUrl: 'options.html',
  styleUrls: ['option.scss'],
  providers: [HttpClient]
})

export class OptionComponent implements OnInit {
  private api =  'http://localhost:3000/api/' ;
  public dtTrigger: Subject<any> = new Subject();
  public dtTrigger2: Subject<any> = new Subject();
  public departements: Array<any> = [];
  public niveau: Array<any> = [];
  public dtOptions: DataTables.Settings = {};
  public departementForm = new FormGroup({
    'nom' : new FormControl('', [
      Validators.required
    ]),
  });
  public niveauForm = new FormGroup({
    'intitule' : new FormControl('', [
      Validators.required
    ]),
    'departementId': new FormControl('', [
      Validators.required
    ] )
  });
  public deptoadd = '';
  constructor(
    private router: Router,
    private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.api + 'departements')
      .subscribe(departements => {
        const x: any = departements;
        this.departements = x;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
    this.http.get(this.api + 'niveaus')
      .subscribe(niveau => {
        const x: any = niveau;
        this.niveau = x;
        // Calling the DT trigger to manually render the table
        this.dtTrigger2.next();
      });  }
  createDep(){
    if(this.departementForm.valid){
      this.http.post(this.api + 'departements', this.departementForm.value).subscribe(
        data => this.dataGet(),
        error2 => console.log(error2)
      );
    }
  }
  createNiv(){
    if(this.niveauForm.valid){
      const obj = this.niveauForm.value;
      this.http.post(this.api + 'niveaus', obj).subscribe(
        data => this.nivGet(),
        error2 => console.log(error2)
      );
    }
  }
  dataGet(){
    this.http.get(this.api + 'departements')
      .subscribe(departements => {
        const x: any = departements;
        this.departements = x;
      });
  }
  nivGet(){
    this.http.get(this.api + 'niveaus')
      .subscribe(niveau => {
        const x: any = niveau;
        this.niveau = x;
      });
  }
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering

}
