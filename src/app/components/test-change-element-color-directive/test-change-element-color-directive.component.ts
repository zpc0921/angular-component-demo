import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-change-element-color-directive',
  templateUrl: './test-change-element-color-directive.component.html',
  styleUrls: ['./test-change-element-color-directive.component.scss']
})
export class TestChangeElementColorDirectiveComponent implements OnInit {
  color;

  constructor() {
  }

  ngOnInit() {
  }

  changeFontColor(color) {
    this.color = color;
  }
}
