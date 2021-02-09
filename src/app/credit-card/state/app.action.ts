import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { App } from "../credit-card.model";

export enum AppActionTypes {
  LOAD_APPS = "[App] Load Apps",
  LOAD_APP_SUCCESS = "[App] Load Apps Success",
  LOAD_APP_FAIL = "[App Load Apps Fail",
  CREATE_APP = "[App] Create App",
  CREATE_APP_SUCCESS = "[App] Create Apps Success",
  CREATE_APP_FAIL = "[App Create Apps Fail",
}

export class LoadApps implements Action {
  readonly type = AppActionTypes.LOAD_APPS;
}

export class LoadAppsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_APP_SUCCESS;

  constructor(public payload: App[]) {}
}

export class LoadAppsFail implements Action {
  readonly type = AppActionTypes.LOAD_APP_FAIL;

  constructor(public payload: string) {}
}



export class CreateApp implements Action {
  readonly type = AppActionTypes.CREATE_APP;
  constructor(public payload: App) {}

}

export class CreateAppSuccess implements Action {
  readonly type = AppActionTypes.CREATE_APP_SUCCESS;

  constructor(public payload: App) {}
}

export class CreateAppFail implements Action {
  readonly type = AppActionTypes.CREATE_APP_FAIL;

  constructor(public payload: string) {}
}


export type ActionType =
  | LoadApps
  | LoadAppsSuccess
  | LoadAppsFail
  | CreateApp
  | CreateAppSuccess
  | CreateAppFail


