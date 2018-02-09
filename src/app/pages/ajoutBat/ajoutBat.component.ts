import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { Router } from '@angular/router';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Batiment} from '../models/batiment';
import {api} from '../api';
const headers: HttpHeaders = new HttpHeaders({
  'accept': 'application/json',
  'content-type': 'application/json'
});
const Options =  new HttpResponse({ headers: headers });
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
    private api =  'http://localhost:3000/api/' ;
    public showCou = false ;
    private batDone = false;
    public notlinear = true ;
    private batID = '';
    private etaId: Array<any> = [];
    private couId: Array<any> = [];
    public allEtages: Array<any> = [];
    public allCouloirs: Array<any> = [];
    public allChambres: Array<any> = [];
    public batiment: Batiment = {
      id : '' ,
      nomBatiment: '',
      code: '',
      nbEtages : '',
    };
    public batimentForm = new FormGroup({
        'nomBatiment' : new FormControl(this.batiment.nomBatiment, [
          Validators.required
        ]),
      'code': new FormControl(this.batiment.code, [
        Validators.required
      ] ),
      'nbEtages' : new FormControl(this.batiment.nbEtages, [
        Validators.required,
        Validators.maxLength(1),
        Validators.max(10)
      ])
    });
    public etageControl = new FormControl('', [
      Validators.required
    ]);

    public numCouEtaControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.max(10)
    ]);
    // Methodes
      public ajoutBat() {
      if (this.batimentForm.valid) {
        this.http.post(this.api + 'batiments', this.batimentForm.value).subscribe(
          data => {
            const x: any = data;
            this.batID = x.id;
            for (let i = 0; i < this.batimentForm.value.nbEtages; i++) {
              const obj = {
                'numEtage': i,
                'nbCouloirs': 0,
                'code': '',
                'batimentId': this.batID,
                'done': false,
              };
              const nobj2: Array<any> = [];
              this.allEtages.push(obj);
              this.allCouloirs.push(nobj2);
            }
            this.batDone = true;
          },
          error => console.error(error)
        );
      }
    }
    public ajoutEtage(index, etage) {
        console.log(etage);
        this.http.post(this.api + 'etages', etage).subscribe(
          data => {
            this.allEtages[index] = data;
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
            this.showCou = true;
            const nobj2: Array<any> = [];
            this.allChambres.push(nobj2);
          },
          error => console.error(error)
        );

    }
    public parse(val) {
      return parseInt(val, 10);
    }
    public ajoutCouloir(index) {
      const couloirs = this.allCouloirs[index];
      const ex = index !== 0 ? this.parse(this.allCouloirs[index - 1][this.allCouloirs[index - 1].length - 1].fin) : 0 ;
      let all =  index === 0 ? 0 : ex + 1;
      for (let i = 0; i < couloirs.length ; i++ ) {
        this.http.post(this.api + 'couloirs', couloirs[i]).subscribe(
          data => {
            const x: any = data ;
            let cid = '';
            cid = x.id ;
            const temp = [];
            let deb ;
            if (index === 0 && i === 0) deb = 0 ;
            else if ( i === 0 && index !== 0) deb = ex + 1 ;
            else deb = this.parse(couloirs[i - 1].fin) + 1 ;
            const nbCham = this.parse(couloirs[i].fin) - this.parse(deb) + 1 ;
            for (let j = 0; j < nbCham; j++ ) {
              const obj = {
                'code': all + '' + couloirs[i].sexe + '' + index + '' + this.batimentForm.value.code ,
                'numero': all,
                'nbpositions': 4,
                'reserve': false,
                'batimentId': this.batID,
                'etageId': couloirs[i].etageId,
                'couloirId': cid,
                'nbposres': 0
              };
              ++all;
              temp.push(obj);
            }
            this.allChambres[index][i] = temp ;
          },
          error2 => console.error(error2)
        ) ;
      }
    }
    public ajoutChambre(){
        const etlen = this.allEtages.length - 1
        const cllen = this.allCouloirs.length - 1
        // const etlen = 0
      // const total = this.parse(this.allChambres[etlen][cllen][this.allChambres[etlen][cllen].length - 1].numero);
      console.log(this.allEtages);
      console.log(this.allCouloirs);
      let nb = 0;
      console.log(this.allChambres[0][0][0]);
      for (let i = 0; i < this.allEtages.length ; ++i) {
          for (let j = 0; j < this.allChambres[i].length; ++j) {
          for (let k = 0; k < this.allChambres[i][j].length; ++k) {
            this.http.post(this.api + 'chambres', this.allChambres[i][j][k]).subscribe(
              data => {
                ++nb;
                // if(nb === total) console.log('ss');
              },
              error2 => console.error(error2)
            ) ;
          }}
        }

    }
}
