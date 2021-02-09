import * as appActions from "./app.action";
import { App } from "../credit-card.model";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface CardState  extends EntityState<App> {
 
  selectedAppId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
    cards: CardState;
}

export const appAdapter: EntityAdapter<App> = createEntityAdapter<
  App
>();

export const defaultApp: CardState = {
    ids: [],
    entities: {},
    selectedAppId: null,
    loading: false,
    loaded: false,
    error: ""
  };

export const initialState = appAdapter.getInitialState(defaultApp);


export function appReducer(
    state=initialState,
    action: appActions.ActionType
  ): CardState {
    switch (action.type) {
      case appActions.AppActionTypes.LOAD_APP_SUCCESS: {
        return appAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true
        });
      }
      case appActions.AppActionTypes.LOAD_APP_FAIL: {
        return {
          ...state,
          entities: {},
          loading: false,
          loaded: false,
          error: action.payload
        };
      }

  
      case appActions.AppActionTypes.CREATE_APP_SUCCESS: {
        return appAdapter.addOne(action.payload, state);
      }
      case appActions.AppActionTypes.CREATE_APP_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      default: {
        return state;
      }
    }
  }




const getAppsFeatureState = createFeatureSelector<CardState>(
    "apps"
  );

 
  
  export const getApps = createSelector(
    getAppsFeatureState,
    appAdapter.getSelectors().selectAll
 );
 

 export const getAppsLoading = createSelector(
    getAppsFeatureState,
    (state: CardState) => state.loading
 );

 export const getAppsLoaded = createSelector(
    getAppsFeatureState,
    (state: CardState) => state.loaded
 );

 export const getError = createSelector(
    getAppsFeatureState,
    (state: CardState) => state.error
 );