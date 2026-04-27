import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Goals } from './pages/goals/goals';
import { Plans } from './pages/plans/plans';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'plans',
    component: Plans
  },
  {
    path: 'goals',
    component: Goals
  }
];