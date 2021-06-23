import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ConfigurationService } from "../configuration.service";
import {
  directionList,
  signalDirectionList,
  trafficConfigurationForm,
} from "./traffic-configuration.utils";

@Component({
  selector: "app-traffic-configuration-modal",
  templateUrl: "./traffic-configuration-modal.component.html",
  styleUrls: ["./traffic-configuration-modal.component.scss"],
})
export class TrafficConfigurationModalComponent implements OnInit, OnDestroy {
  trafficConfigurationForm: FormGroup = trafficConfigurationForm();
  subscription: Subscription = new Subscription();
  signalDirectionList = signalDirectionList;
  directionList = directionList;
  constructor(
    public dialogRef: MatDialogRef<TrafficConfigurationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.fetchTrafficConfigurationDetails();
  }

  fetchTrafficConfigurationDetails(): void {
    this.subscription.add(
      this.configurationService.signalConfigurationDetails.subscribe(
        (response) => {
          this.trafficConfigurationForm.patchValue({
            trafficChangeTime: response.trafficChangeTime,
            activeSignal: response.activeSignal,
            nextActiveSignal: response.nextActiveSignal,
            signalDirection: response.signalDirection,
          });
        }
      )
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
