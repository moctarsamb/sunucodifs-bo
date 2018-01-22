import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { MatGridListModule } from '@angular/material';

import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
//


import { AjoutBatComponent } from './ajoutBat.component';
import { routing } from './ajoutBat.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        routing
    ],
    exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule],
    declarations: [AjoutBatComponent],
    providers: [],
})
export class AjoutTransModule { }
