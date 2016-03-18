import {PipeTransform, Pipe} from 'angular2/core';
import * as moment_ from 'moment';

const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;

@Pipe({name: 'fromNow'})

export class FromNowPipe implements PipeTransform {
    transform(value, args) {
     return moment_(value).fromNow();
  }
}