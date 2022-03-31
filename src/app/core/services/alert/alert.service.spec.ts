import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { Subject } from 'rxjs';
import {Alert, AlertType} from "../../models/alert.model";

export class FakeSubject {
  next(value: any) {}
  asObservable() {}
}

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Subject, useClass: FakeSubject }],
    });
    service = TestBed.inject(AlertService);
  });

  it('success alert ', () => {
    const spy = spyOn(service, 'alert');
    const message = 'success msg';
    service.success(message);
    expect(spy).toHaveBeenCalledWith(new Alert(message, AlertType.Success));
  });

  it('alert ', () => {
    const subject = service.subject;
    const spy = spyOn(subject, 'next');
    const alert = new Alert('alert msg', AlertType.Success);
    service.alert(alert);
    expect(spy).toHaveBeenCalledWith(alert);
  });

  it('clear ', () => {
    const subject = service.subject;
    const spy = spyOn(subject, 'next');

    service.clear();
    expect(spy).toHaveBeenCalledWith(null);
  });
});
