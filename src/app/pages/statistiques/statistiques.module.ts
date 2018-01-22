import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import {MatGridListModule, MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { StatistiquesComponent } from './Statistiques.component';
import { routing } from './Statistiques.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ChartsModule,
        MatTableModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        routing
        ],
    exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatTableModule, ChartsModule],
    declarations: [StatistiquesComponent]
})
export class StatistiquesModule { }
