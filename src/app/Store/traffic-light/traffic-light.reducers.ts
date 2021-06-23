import { SignalConfigurationType } from "src/app/traffic-light/signal/signal.interface";
import {
  TrafficLightAction,
  TrafficLightActionUnion,
} from "./traffic-light.actions";

export const trafficLightInitialState: SignalConfigurationType = {
  trafficChangeTime: 5,
  activeSignal: "North",
  nextActiveSignal: "East",
  signalDirection: "clockWise",
  nextActiveSignalDuration: 3,
};

export function TrafficLightReducer(
  state: SignalConfigurationType = trafficLightInitialState,
  action: TrafficLightActionUnion
): SignalConfigurationType {
  switch (action.type) {
    case TrafficLightAction.UPDATE_CONFIGURATION:
      return action.payload;
    default:
      return trafficLightInitialState;
  }
}
