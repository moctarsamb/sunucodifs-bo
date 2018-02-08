import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import {MatGridListModule,MatTableModule, MatPaginatorModule, MatToolbarModule, MatProgressSpinnerModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import { ListeBatComponent } from './listeBat.component';
import { routing } from './listeBat.routing';
import { CommonModule } from '@angular/common';
import { BatimentService } from './batiment.service';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        routing
        ],
    exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatTableModule],
    providers: [BatimentService],
    declarations: [ListeBatComponent]
})
export class ListeTransModule { }
