import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  data: Observable<any>;
  ngOnInit() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        //observer.error(new Error("Subscription expired or some error!"));
      }, 3000);

      setTimeout(() => {
        observer.next(2);
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 6000);
    });
    
    let subscriber1 = this.data.subscribe(value => {
      console.log("Sub 1", value);
      subscriber1.unsubscribe();
    }, error => {
      console.log(error);
    });

    let subscriber2 = this.data.subscribe(value => {
      console.log("Sub 2", value)
    }, error => {
      console.log(error)
    })
  }

}
