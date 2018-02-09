
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Batiment } from '../models/batiment';
import { ListeBatimentsDataSource } from './liste-batiments-data-source';
import { BatimentService } from './batiment.service';


@Component({
  selector: 'app-listeBat',
  templateUrl: './listeBat.html',
  styleUrls: ['./listeBat.scss']
})
export class ListeBatComponent implements OnInit {

  id: string;
  Batiments: Batiment[] = [];
  
  // MdPaginator Inputs
  length = 0;
  pageSize = 0;
  index: number;
  pageSizeOptions: number[] = [];
  ready: boolean = false;
  dataSource: ListeBatimentsDataSource = null;
  displayedColumns = ["nomBatiment","nbEtages"];
  behaviorSubject: BehaviorSubject<Batiment[]> = null;
  constructor(private batimentService:BatimentService) { }

  ngOnInit() {
    
    this.loadAllBatiments();
  }

  setMdTable(){
    this.length = this.Batiments.length;
    this.pageSize = 5;
    this.index = this.index || 0;
    this.pageSizeOptions = [];
    for (let i = 5; i < this.length; i = i + 1) {
        this.pageSizeOptions.push(i);
    }
  }

    loadAllBatiments():void{
      this.batimentService.getAllBatiments().subscribe(batiments => {
          this.Batiments = batiments;
          this.setMdTable();
          this.behaviorSubject = new BehaviorSubject<Batiment[]>(
              this.getPageListeBats()
          );
          this.dataSource = new ListeBatimentsDataSource(this.behaviorSubject);
          this.ready = true;
      });
    }
    getPageListeBats(): Batiment[] {
      return this.Batiments.slice(
        this.index * this.pageSize,
        (this.index + 1) * this.pageSize
      );
    }


  


}

