import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DateViewerComponent } from '../../date-viewer/date-viewer.component';
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit, AfterViewInit {
  /* @ViewChild('somecontent') somecontent: ElementRef; */
  /* @ViewChild(DateViewerComponent) dateViewerRef: DateViewerComponent; */
  @ViewChildren(DateViewerComponent) dateViewerRef: QueryList<DateViewerComponent>;
  constructor() { 
    //console.log(this.somecontent);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //console.log(this.somecontent.nativeElement);
    console.log(this.dateViewerRef.toArray());
    this.dateViewerRef.toArray().forEach(element => {
      setInterval(() => {
        element.today = new Date()
      }, 1000)
    });
    
  }

}
