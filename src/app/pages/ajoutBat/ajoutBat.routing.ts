import { Routes, RouterModule }  from '@angular/router';

import { AjoutBatComponent } from './ajoutBat.component';
import { ModuleWithProviders } from '@angular/core';
import {OptionComponent} from './option.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AjoutBatComponent
  },
  {
    path: 'options',
    component: OptionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
