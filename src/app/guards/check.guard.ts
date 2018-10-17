import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestComponent } from '../test/test.component';

@Injectable()
export class CheckGuard implements CanDeactivate<TestComponent> {
  canDeactivate(
    test: TestComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (test.name != "") {
      return window.confirm("There are some unsaved data. Do you really want to navigate?");
    }
    return true;
  }
}
