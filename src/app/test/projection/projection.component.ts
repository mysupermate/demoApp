import { Component, OnInit, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { DateViewerComponent } from '../../date-viewer/date-viewer.component';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit, AfterContentInit {
  @ContentChildren(DateViewerComponent) dateViewerComponent: QueryList<DateViewerComponent>;
  @Input('header') header: String;
  today = new Date().toDateString();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.dateViewerComponent.toArray());
    this.dateViewerComponent.toArray().forEach((elem) => {

    })
  }

}
