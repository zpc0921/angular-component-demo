import {Component, OnInit} from '@angular/core';
import {LuckyCol} from './lucky-col.model';
import {GameNotifyService} from './game-notify.service';

@Component({
  selector: 'app-find-lucky',
  templateUrl: './find-lucky.component.html',
  providers: [GameNotifyService],
  styleUrls: ['./find-lucky.component.scss']
})
export class FindLuckyComponent implements OnInit {
  cols: LuckyCol[] = [];
  config = {
    totalNumber: 10,
    totalCol: 3000
  };

  constructor(private gameNotifyService: GameNotifyService) {
    for (let i = 0; i < this.config.totalCol; i++) {
      const col = {
        index: i,
        lucky: this.isLucky(),
        opened: false
      };
      this.cols.push(col);
    }
  }

  ngOnInit() {
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
    this.gameNotifyService.$notifyRestart.emit();
  }
}
