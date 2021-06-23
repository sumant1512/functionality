import { SignalConfigurationType } from "../traffic-light/signal/signal.interface";

export type AppState = Partial<{
  TrafficLightConfiguration: SignalConfigurationType;
}>;
