import { FormControl, FormGroup } from "@angular/forms";

export function trafficConfigurationForm(): FormGroup {
  return new FormGroup({
    trafficChangeTime: new FormControl(""),
    activeSignal: new FormControl(""),
    nextActiveSignal: new FormControl(""),
    signalDirection: new FormControl(""),
  });
}

export const signalDirectionList = [
  { label: "Clock Wise", direction: "clockWise" },
  { label: "Anti Clock Wise", direction: "anitClockWise" },
  { label: "North and South", direction: "northAndSouth" },
  { label: "East and West", direction: "eastAndWest" },
];

export const directionList = [
  { label: "East", direction: "East" },
  { label: "West", direction: "West" },
  { label: "North", direction: "North" },
  { label: "South", direction: "South" },
];
