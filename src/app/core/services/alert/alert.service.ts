import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Alert, AlertType } from '../../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public subject = new Subject<any>();

  constructor() {}

  onAlert(): Observable<Alert> {
    return this.subject
      .asObservable();
  }

  success(message: string) {
    this.alert(new Alert(message, AlertType.Success));
  }

  error(message: string) {
    this.alert(new Alert(message, AlertType.Error));
  }

  info(message: string) {
    this.alert(new Alert(message, AlertType.Info));
  }

  warn(message: string) {
    this.alert(new Alert(message, AlertType.Warning));
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }

  // clear alerts
  clear() {
    this.subject.next(null);
  }
}
