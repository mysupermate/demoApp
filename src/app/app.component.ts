import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  part = 'latest';

  constructor(private router: Router){
    router.events
    .filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd)
    .subscribe((event) => {
      console.log(event);
      if(event instanceof NavigationStart){
        //some loader
      }

      if( event instanceof NavigationEnd){
        //hide loader
      }
    })
  }
}
