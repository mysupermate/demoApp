import { Component } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [NgbTooltipConfig],
})

export class TestComponent {
  name: String;
  constructor(config: NgbTooltipConfig) {
    config.placement = "right";
    this.name = "Saikat";
  }

}
