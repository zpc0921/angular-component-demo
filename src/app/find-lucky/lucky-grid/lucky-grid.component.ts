import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {LuckyCol} from '../lucky-col.model';
import {filter} from 'rxjs/operators';
import {GameNotifyService} from '../game-notify.service';

@Component({
  selector: 'app-lucky-grid',
  templateUrl: './lucky-grid.component.html',
  styleUrls: ['./lucky-grid.component.scss']
})
export class LuckyGridComponent implements OnInit {
  @Input()
  luckyCol: LuckyCol;

  constructor() {
  }

  ngOnInit() {

  }


}

