import { Component, Input, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() dates;
  constructor(private cd: ChangeDetectorRef) { 
    console.log('Child constructor');
    this.cd.detach();
  }

  ngOnInit() {
    console.log('Child ngOnInit');
  }

  ngOnChanges() {
    console.log('Child ngOnChanges');
    this.cd.reattach();
  }

  ngDoCheck() {
    console.log('Child ngDoCheck');
    //this.cd.markForCheck();
    //this.cd.detectChanges();
  }

  ngOnDestroy() {
    console.log('Child ngOnDestroy');
  }

  ngAfterContentInit(){
    console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('Child ngAfterViewChecked');
  }

}
