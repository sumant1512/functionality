import { SignalStatusEnum } from "./signal.enum";

export interface SignalType {
  color: string;
  cols: number;
  rows: number;
  text: string;
  isConfigurationActive?: boolean;
  signalStatus: SignalStatusEnum;
}

export interface SignalConfigurationType {
  trafficChangeTime: number;
  activeSignal: string;
  nextActiveSignal: string;
  signalDirection: string;
  nextActiveSignalDuration?: number;
}
