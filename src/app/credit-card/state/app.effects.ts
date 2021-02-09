import {Injectable} from '@angular/core'
import {Actions,Effect,ofType} from "@ngrx/effects"
import {Action} from "@ngrx/store"
import {Observable, of} from "rxjs"
import {map, mergeMap, catchError} from "rxjs/operators"
import {AppService} from "../credit-card.service"
import * as appActions from "../state/app.action"
import {App} from "../credit-card.model"

@Injectable()
export class AppEffect{
    constructor(
        private actions$: Actions,
        private appService: AppService
    ){}

    @Effect()
    loadApp$: Observable<Action> = this.actions$.pipe(
        ofType<appActions.LoadApps>(
            appActions.AppActionTypes.LOAD_APPS
        ),
        mergeMap((actions: appActions.LoadApps) =>
            this.appService.getCards().pipe(
                map(
                    (cards: App[])=>
                    new appActions.LoadAppsSuccess(cards)
                ),
                catchError(err=> of(new appActions.LoadAppsFail(err)))
            )
        )

    );

    @Effect()
    createApp$: Observable<Action> = this.actions$.pipe(
      ofType<appActions.CreateApp>(
        appActions.AppActionTypes.CREATE_APP
      ),
      map((action: appActions.CreateApp) => action.payload),
      mergeMap((app: App) =>
        this.appService.createCard(app).pipe(
          map(
            (newApp: App) =>
              new appActions.CreateAppSuccess(newApp)
          ),
          catchError(err => of(new appActions.CreateAppFail(err)))
        )
      )
    );

}
