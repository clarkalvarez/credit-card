import { Component,OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'
import * as appActions from "../state/app.action"
import * as fromApps from "../state/app.reducer"
import {App} from "../credit-card.model"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-show-credit-card',
  templateUrl: './show-credit-card.component.html',
  styleUrls: ['./show-credit-card.component.scss']
})
export class ShowCreditCardComponent implements OnInit {
  cards$: Observable<App[]>;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new appActions.LoadApps);
    this.cards$ = this.store.pipe(select(fromApps.getApps))
  }

}
