import { Routes, RouterModule }  from '@angular/router';

import { AjoutBatComponent } from './ajoutBat.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AjoutBatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
