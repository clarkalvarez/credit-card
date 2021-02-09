import * as appActions from "./app.action";
import { App } from "../app.model";
import * as fromRoot from "./app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";

export interface CardState  {
  cards: App[],
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
    cards: CardState;
}

export const initialState: CardState={
    cards: [],
    loading:false,
    loaded:false,
    error:""
}

export function appReducer(
    state=initialState,
    action: appActions.ActionType
): CardState{
    switch(action.type){
        case appActions.AppActionTypes.LOAD_APPS:{
            return {
                ...state,
                loading:true
            };
        }
        case appActions.AppActionTypes.LOAD_APP_SUCCESS:{
            return {
                ...state,
                loading:false,
                loaded:true,
                cards:action.payload
            };
        }
        case appActions.AppActionTypes.LOAD_APP_FAIL:{
            return {
                ...state,
                cards:[],
                loading:false,
                loaded:true,
                error:action.payload
            };
        }
        default:{
            return state
        }
    }
}



const getAppsFeatureState = createFeatureSelector<CardState>(
    "apps"
  );
  
  export const getApps = createSelector(
    getAppsFeatureState,
    (state: CardState) => state.cards
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