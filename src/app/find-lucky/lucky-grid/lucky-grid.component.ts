import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {LuckyCol} from '../lucky-col.model';
import {filter} from 'rxjs/operators';
import {GameNotifyService} from '../game-notify.service';

@Component({
  selector: 'app-lucky-grid',
  templateUrl: './lucky-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./lucky-grid.component.scss']
})
export class LuckyGridComponent implements OnInit {
  @Input()
  luckyCol: LuckyCol;

  constructor(private cd: ChangeDetectorRef,
              private gameNotifyService: GameNotifyService) {
  }

  ngOnInit() {
    this.gameNotifyService.$notifyRestart.pipe(
      filter(() => this.luckyCol.opened)
    ).subscribe(() => {
      this.luckyCol.lucky = false;
      this.luckyCol.opened = false;
      this.luckyCol.luckyNumber = 0;
      this.cd.markForCheck();
      console.log(`${this.luckyCol.index}col mark for check`);
    });
  }

  @HostListener('click')
  public onClick() {
    if (this.luckyCol.opened) {
      return;
    }
    this.open(this.luckyCol);
  }

  open(col: LuckyCol) {
    col.opened = true;
    col.luckyNumber = Math.round(Math.random() * 10);
  }

  generateWord(col: LuckyCol) {
    console.log('view checked & changed');
    if (!col.opened) {
      return;
    }
    if (col.lucky) {
      return col.luckyNumber;
    } else {
      return '囧';
    }
  }

}

