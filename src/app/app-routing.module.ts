import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '' , redirectTo: 'credit-card', pathMatch: 'full'},
  { path : 'credit-card',  loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
