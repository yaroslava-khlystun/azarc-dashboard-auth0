import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert/alert.service';
import { Alert, AlertType } from '../../models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {

  alerts: Alert[] = [];
  private alertSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert()
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert?.message) {
          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert
          setTimeout(() => this.removeAlert(alert), 3000);
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear();
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) {
      return;
    }

      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning'
    }

    // @ts-ignore
    classes.push(alertTypeClass[alert.type]);

    return classes.join(' ');
  }
}
