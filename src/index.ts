import yargs from 'yargs';
import { fetchPokemons } from './commands/queries';
import * as figlet from 'figlet';
console.time('exceTimer');
console.log(figlet.textSync('pokemon-analyzer', { horizontalLayout: 'full' }));

const argv: any = yargs(process.argv.slice(2)).options({
  l: {
    alias: 'limit',
    demandOption: true,
    default: 10,
    describe: 'limit the pokemon list',
    type: 'number'
  },
  o: {
    alias: 'offset',
    demandOption: true,
    default: 0,
    describe: 'offset the pokemon list',
    type: 'number'
  }
}).argv;

if (isNaN(argv.offset) || isNaN(argv.limit)) {
  throw new Error('limit and offset must be number');
}
const query = fetchPokemons({
  offset: argv.offset,
  limit: argv.limit
}).then((res) => {
  console.log(res);
  console.timeEnd('exceTimer');
});
