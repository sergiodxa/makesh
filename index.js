import program from 'commander';

import makeApp from './app';

program
  .version('1.0.0')
  .option('--path [path]', 'set path to create files');

program
  .command('app')
  .description('Initialize an application')
  .action(makeApp);

program.parse(process.argv);
