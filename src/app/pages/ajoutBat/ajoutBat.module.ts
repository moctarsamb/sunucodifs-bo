import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import { AjoutBatComponent } from './ajoutBat.component';
import { OptionComponent } from './option.component';
import { routing } from './ajoutBat.routing';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatSelectModule,
        MatDividerModule,
        MatStepperModule,
        DataTablesModule,
        routing
    ],
    exports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatGridListModule,
      MatSelectModule,
      MatDividerModule,
      MatStepperModule],
    declarations: [AjoutBatComponent,
    OptionComponent],
    providers: [],
})
export class AjoutTransModule { }
