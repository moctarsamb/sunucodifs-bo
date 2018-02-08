import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Http } from "@angular/http";

@Injectable()
export class TrafficChartService {

 touslestransporteurs: Array<any>;
    nbtransport: number = 0;
    touslescontenaires: Array<any>;
    nbcontenaires: number = 0;
    nbcontenaireslivres: number = 0;
    touslesnavirs: Array<any>;
    loaddata(){

        this.http.get("https://tracking-cont-api.herokuapp.com/api/Transporteurs").map(
            res => res.json()
        ).subscribe(
            data => this.handleTransp(data),
            error => console.error(error)
            )

        this.http.get("https://tracking-cont-api.herokuapp.com/api/Navirs").map(
            res => res.json()
        ).subscribe(
            data => this.handleNavirs(data),
            error => console.error(error)
            )

        this.http.get("https://tracking-cont-api.herokuapp.com/api/Contenaires").map(
            res => res.json()
        ).subscribe(
            data => this.handleCont(data),
            error => console.error(error)
            )

    }
    constructor(
        private http: Http,
            private _baConfig:BaThemeConfigProvider
    ) {

    }
    handleTransp(data) {
        this.touslestransporteurs = data;
        this.nbtransport = this.touslestransporteurs.length;
    }
    handleCont(data) {
        this.touslescontenaires = data;
        console.log(data);
        this.nbcontenaires = this.touslescontenaires.length;
        this.nbcontenaireslivres = 0;
        data.forEach(cont => {
            if (cont.etat == "livré") {
                this.nbcontenaireslivres++;

            }
        });
    }
    handleNavirs(data) {
        this.touslesnavirs = data;
    }



  getData() {
    this.loaddata();
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 38601,
        color: dashboardColors.blue,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Nombre Contenaires',
        percentage: 87,
        order: 1,
      }, {
        value:100398 ,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Contenaires en Transit',
        percentage: 22,
        order: 4,
      },
    ];
  }
}
