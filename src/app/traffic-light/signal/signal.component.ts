import { Component, Input, OnInit } from "@angular/core";
import { SignalStatusEnum } from "./signal.enum";

@Component({
  selector: "app-signal",
  templateUrl: "./signal.component.html",
  styleUrls: ["./signal.component.scss"],
})
export class SignalComponent implements OnInit {
  @Input() signalStatus: any;
  signalStatusEnum = SignalStatusEnum;
  constructor() {}

  ngOnInit(): void {}
}
