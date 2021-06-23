import { Injectable } from "@angular/core";
import { Observable, Subscription, BehaviorSubject } from "rxjs";
import { SignalStatusEnum } from "./signal/signal.enum";
import { SignalConfigurationType, SignalType } from "./signal/signal.interface";

@Injectable({
  providedIn: "root",
})
export class ConfigurationService {
  private subscription: Subscription = new Subscription();

  clockWiseDirection = ["North", "East", "South", "West"];
  signalChangeDuration: number = 0;
  signalChangeInterval: any;
  activeDirection: number = 0;

  signalConfigurationDetails = new BehaviorSubject<SignalConfigurationType>({
    trafficChangeTime: 5,
    activeSignal: "North",
    nextActiveSignal: "East",
    signalDirection: "clockWise",
    nextActiveSignalDuration: 3,
  });

  signals: Observable<SignalType[]> = new Observable((observer) => {
    const initiateSignalData = this.initiateSignal();
    observer.next(initiateSignalData);
    this.activeDirection = this.activeDirection + 1;
    this.signalChangeInterval = setInterval(() => {
      const iterateSignalData = this.iterateSignal();
      observer.next(iterateSignalData);
      this.activeDirection =
        this.activeDirection < 3 ? this.activeDirection + 1 : 0;
    }, this.signalChangeDuration * 1000);
  });

  constructor() {
    this.getSignalChangeDuration();
  }

  private initiateSignal(): SignalType[] {
    return [
      {
        text: "North",
        cols: 4,
        rows: 1,
        color: "lightblue",
        isConfigurationActive: true,
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[0]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "West",
        cols: 2,
        rows: 1,
        color: "lightpink",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[3]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "East",
        cols: 2,
        rows: 1,
        color: "#DDBDF1",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[1]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "South",
        cols: 4,
        rows: 1,
        color: "lightgreen",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[2]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
    ];
  }

  private iterateSignal(): SignalType[] {
    return [
      {
        text: "North",
        cols: 4,
        rows: 1,
        color: "lightblue",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[0]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "West",
        cols: 2,
        rows: 1,
        color: "lightpink",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[3]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "East",
        cols: 2,
        rows: 1,
        color: "#DDBDF1",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[1]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
      {
        text: "South",
        cols: 4,
        rows: 1,
        color: "lightgreen",
        signalStatus:
          this.clockWiseDirection[this.activeDirection] ===
          this.clockWiseDirection[2]
            ? SignalStatusEnum.Active
            : SignalStatusEnum.Closed,
      },
    ];
  }

  getSignalChangeDuration() {
    this.subscription.add(
      this.signalConfigurationDetails.subscribe((data) => {
        this.signalChangeDuration = data.trafficChangeTime;
      })
    );
  }

  updateConfiguration(configurationData: any): void {
    this.clearSignalChangeInterval();
    this.signalConfigurationDetails.next(configurationData);
    this.activeDirection = this.clockWiseDirection.indexOf(
      configurationData.activeSignal
    );
  }

  stopSignal(): void {
    this.clearSignalChangeInterval();
  }

  clearSignalChangeInterval(): void {
    clearInterval(this.signalChangeInterval);
  }
}
