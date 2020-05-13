import { Pipe, PipeTransform } from '@angular/core';
import {TaskStatusOptionn} from './task.model';

@Pipe({
  name: 'optionsPipe'
})
export class OptionsPipePipe implements PipeTransform {

  transform(value: any, key: 'color' | 'label' = 'label'): any {
    const option = TaskStatusOptionn.find(it => it.value === value)
    if (option) {
      return option[key];
    }
    return null;
  }

}
