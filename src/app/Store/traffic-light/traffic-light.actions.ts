import { Action } from "@ngrx/store";
import { SignalConfigurationType } from "src/app/traffic-light/signal/signal.interface";

export enum TrafficLightAction {
  UPDATE_CONFIGURATION = "[Traffic] Add Configuration",
}

export class UpdateConfiguration implements Action {
  readonly type = TrafficLightAction.UPDATE_CONFIGURATION;
  constructor(public payload: SignalConfigurationType) {}
}

export type TrafficLightActionUnion = UpdateConfiguration;
