import { Command } from 'commander';
const pkg = require('../package.json');

const cli = new Command();

cli
  .version(`@delgada/cli: ${pkg.version}`)
  .option('-c, --config <path>', 'set config path', './delgada.config.js');

cli
  .command('build')
  .description('compile delgada source code')
  .option('-e, --entry <path>', 'set entrypoint path', './src/index.html')
  .option('-b, --build <path>', 'set build path', './build')
  .action((options) => {
    console.log('Compiling source code...');
  });

cli.parse(process.argv);

process.on('uncaughtException', function (err) {
  console.error(err);
  process.exit(1);
});
