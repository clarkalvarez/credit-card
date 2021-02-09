import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';
import { ShowCreditCardComponent } from './show-credit-card/show-credit-card.component';
import {StoreModule} from '@ngrx/store'
import {EffectsModule,Actions} from '@ngrx/effects'
import {appReducer}  from './state/app.reducer'
import {AppEffect}  from './state/app.effects'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'

@NgModule({
  declarations: [AddCreditCardComponent, ShowCreditCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CreditCardRoutingModule,
    StoreModule.forFeature("apps",appReducer),
    EffectsModule.forFeature([AppEffect]),
  ]
})
export class CreditCardModule { }
