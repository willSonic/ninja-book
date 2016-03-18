Import modules using type script


example moment

command line
 $  npm install --global typings
 $  npm install moment
 $  typings install moment-node --ambient --save
 $  typings install moment --ambient --save
 $  npm install --global typings

 add moment
  in index.html System.config
     ...
          map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs',
            'moment': 'node_modules/moment/moment'
          }


 and in file used this cutompipes/fromnow_pipe.ts

    import * as moment_ from 'moment';

    const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;