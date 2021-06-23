import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ConfigurationService } from "./configuration.service";
import { SignalType } from "./signal/signal.interface";
import { TrafficConfigurationModalComponent } from "./traffic-configuration-modal/traffic-configuration-modal.component";

@Component({
  selector: "app-traffic-light",
  templateUrl: "./traffic-light.component.html",
  styleUrls: ["./traffic-light.component.scss"],
})
export class TrafficLightComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  signals: SignalType[] = [];

  constructor(
    private configurationService: ConfigurationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getInitialSignalStatus();
  }

  getInitialSignalStatus(): void {
    this.subscription.add(
      this.configurationService.signals.subscribe((response) => {
        this.signals = response;
      })
    );
  }

  configureTrafficDetailsPopupOpen(): void {
    const dialogRef = this.dialog.open(TrafficConfigurationModalComponent, {
      width: "400px",
    });

    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.updateTrafficConfiguration(result.value);
        }
      })
    );
  }

  updateTrafficConfiguration(configurationData: any): void {
    this.configurationService.updateConfiguration(configurationData);
    setTimeout(() => {
      this.getInitialSignalStatus();
    });
  }

  restart(): void {
    this.updateTrafficConfiguration({
      trafficChangeTime: 5,
      activeSignal: "North",
      nextActiveSignal: "East",
      signalDirection: "clockWise",
      nextActiveSignalDuration: 3,
    });
  }

  stopSignal(): void {
    this.configurationService.stopSignal();
  }

  ngOnDestroy(): void {
    this.stopSignal();
    this.subscription.unsubscribe();
  }
}
