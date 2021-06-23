import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { TrafficLightReducer } from "./traffic-light/traffic-light.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
  TrafficLightConfiguration: TrafficLightReducer,
};
