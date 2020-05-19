import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {LuckyCol} from '../find-lucky/lucky-col.model';

@Component({
  selector: 'app-find-lucky-practice',
  templateUrl: './find-lucky-practice.component.html',
  styleUrls: ['./find-lucky-practice.component.scss']
})
export class FindLuckyPracticeComponent implements OnInit, AfterViewChecked {
  cols: LuckyCol[] = [];
  config = {
    totalNumber: 10,
    totalCol: 3000
  };

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.config.totalCol; i++) {
      const col = {
        index: i,
        lucky: this.isLucky(),
        opened: false
      };
      this.cols.push(col);
    }
  }

  ngAfterViewChecked(): void {
    console.log('parent view checked');
  }

  isLucky() {
    return Math.random() > Math.random();
  }

  get score() {
    return this.cols.filter($col => $col.opened && $col.lucky)
      .map($col => $col.luckyNumber)
      .reduce((p, n) => p + n, 0);
  }


  restart() {

  }
}
