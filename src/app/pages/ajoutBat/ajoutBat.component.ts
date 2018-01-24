import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { Router } from '@angular/router';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Batiment} from '../models/batiment';
@Component({
    templateUrl: 'ajoutBat.html',
    styleUrls: ['ajoutBat.scss'],
    providers: [HttpClient]
})

export class AjoutBatComponent implements OnInit {
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit() {

    }
    private batDone = false;
    private batID = '';
    private etaId: Array<any> = [];
    private couId: Array<any> = [];
    public allEtages: Array<any> = [];
    public allCouloirs: Array<any> = [];
    public batiment: Batiment = {
      id : '' ,
      nom: '',
      nbEtages : '',
    };
    public batimentForm = new FormGroup({
        'nomBatiment' : new FormControl(this.batiment.nom, [
          Validators.required
        ]),
      'nbEtages' : new FormControl(this.batiment.nbEtages, [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(10)
      ])
    });
    // Methodes
      public ajoutBat() {
      if (this.batimentForm.valid) {
        console.log(this.batimentForm.value);
        for (let i = 0; i < this.batimentForm.value.nbEtages; i++) {
          const obj = {
            'numEtage': i,
            'nbCouloirs': 0,
            'batimentId': this.batID,
            'done': false,
          };
          const nobj2: Array<any> = [];
          this.allEtages.push(obj);
          this.allCouloirs.push(nobj2);
        }
        this.batDone = true;
      }
    }
    public ajoutEtage(index, etage) {
        console.log(etage);
        const temp: Array<any> = [];
        for (let i = 0; i < etage.nbCouloirs; i++) {
          const obj = {
            'designation': '',
            'sexe': '',
            'etageId': this.allEtages[index].id,
            'batimentId': this.batID,
            'debut': index > 0 ? parseInt(this.allCouloirs[index - 1][this.allEtages[index - 1].nbCouloirs - 1].fin, 10) + 1 : 0,
            'fin': 0,
            'done': false,
          };
          obj.fin = obj.debut + 1 ;
          temp.push(obj);
        }
        this.allCouloirs[index] = temp;
    }
    public parse(val) {
      return parseInt(val, 10);
    }
    public ajoutCouloir(index) {
      console.log(this.allCouloirs[index]);
    }
}
