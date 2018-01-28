import { Routes, RouterModule }  from '@angular/router';

import { StatistiquesComponent } from './statistiques.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: StatistiquesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
