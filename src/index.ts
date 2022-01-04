import { Command } from 'commander';
import { compile } from '@delgada/core';
import { copyDir } from './utils/copyDir';

const pkg = require('../package.json');

const cli = new Command();

cli.version(`@delgada/cli: ${pkg.version}`);

cli
  .command('build')
  .description('compile delgada source code')
  .option('-e, --entry <path>', 'set entrypoint directory', './src')
  .option('-b, --build <path>', 'set build directory', './build')
  .option('-a, --assets <path>', 'set assets directory', './src/assets')
  .action((options) => {
    const entryDir: string = options.entry;
    const buildDir: string = options.build;
    const assetsDir: string = options.assets;

    // Compile and build source code
    compile(entryDir, buildDir);

    // If an asset directory path was given, copy
    // its contents into the build directory
    if (assetsDir) {
      copyDir(assetsDir, buildDir);
    }
  });

cli.parse(process.argv);

process.on('uncaughtException', function (err) {
  console.error(err);
  process.exit(1);
});
