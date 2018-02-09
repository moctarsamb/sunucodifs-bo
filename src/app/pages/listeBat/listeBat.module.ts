import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
<<<<<<< HEAD
import {MatGridListModule,MatTableModule, MatPaginatorModule, MatToolbarModule, MatProgressSpinnerModule} from '@angular/material';
=======
import {MatGridListModule,MatTableModule} from '@angular/material';
>>>>>>> 544b074fd0f29c8c9196656021bad6be85301320
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import { ListeBatComponent } from './listeBat.component';
import { routing } from './listeBat.routing';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { BatimentService } from './batiment.service';
=======
>>>>>>> 544b074fd0f29c8c9196656021bad6be85301320

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
<<<<<<< HEAD
        MatPaginatorModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
=======
>>>>>>> 544b074fd0f29c8c9196656021bad6be85301320
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        routing
        ],
    exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatTableModule],
<<<<<<< HEAD
    providers: [BatimentService],
=======
    providers: [],
>>>>>>> 544b074fd0f29c8c9196656021bad6be85301320
    declarations: [ListeBatComponent]
})
export class ListeTransModule { }
