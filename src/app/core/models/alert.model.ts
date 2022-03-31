export class Alert {
  constructor(public message: string, public type: AlertType | any) {}
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
