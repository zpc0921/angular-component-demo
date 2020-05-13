import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {
  count = 2;
  display = true;
  obj = {count: 2};

  constructor() { }

  ngOnInit() {
  }

  add() {
    // this.obj.count = this.obj.count + 1; // 改变对象内的值，不会产生变化检测
    this.obj = {
      count: this.obj.count + 1
    }; // 改变对象内的值，会产生变化检测
  }

  minus() {
    this.obj.count = this.obj.count - 1;
  }
}
