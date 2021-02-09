import {Injectable} from '@angular/core'
import {Actions,Effect,ofType} from "@ngrx/effects"
import {Action} from "@ngrx/store"
import {Observable, of} from "rxjs"
import {map, mergeMap, catchError} from "rxjs/operators"
import {AppService} from "../app.service"
import * as appActions from "../state/app.action"
import {App} from "../app.model"

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

}
