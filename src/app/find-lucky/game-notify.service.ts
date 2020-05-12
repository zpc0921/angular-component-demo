import {EventEmitter} from '@angular/core';

export class GameNotifyService {
  public $notifyRestart: EventEmitter<void> = new EventEmitter();
}
