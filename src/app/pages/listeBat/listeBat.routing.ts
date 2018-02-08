import { Routes, RouterModule }  from '@angular/router';

import { ListeBatComponent } from './listeBat.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ListeBatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
