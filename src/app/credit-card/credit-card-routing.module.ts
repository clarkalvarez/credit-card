import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';
import { ShowCreditCardComponent } from './show-credit-card/show-credit-card.component';

const routes: Routes = [
  {path: '' , redirectTo: 'show', pathMatch: 'full'},

  { path: "show", component: ShowCreditCardComponent },
  { path: "add", component: AddCreditCardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
