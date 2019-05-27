import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListContainer } from './containers/customer-list/customer-list.container';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListContainer
  },
  {
    path: '',
    redirectTo: 'customers', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'customers', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

