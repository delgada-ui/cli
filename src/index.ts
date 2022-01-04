import { Command } from 'commander';
import { compile } from '@delgada/core';

const pkg = require('../package.json');

const cli = new Command();

cli.version(`@delgada/cli: ${pkg.version}`);

cli
  .command('build')
  .description('compile delgada source code')
  .option('-e, --entry <path>', 'set entrypoint directory', './src')
  .option('-b, --build <path>', 'set build directory', './build')
  .action((options) => {
    const entryDir: string = options.entry;
    const buildDir: string = options.build;
    compile(entryDir, buildDir);
  });

cli.parse(process.argv);

process.on('uncaughtException', function (err) {
  console.error(err);
  process.exit(1);
});
