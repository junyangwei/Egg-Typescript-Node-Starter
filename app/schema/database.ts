import knexLib = require('knex');
import eggConfig = require('../../config/config.default')

const dbConfig = { client: 'mysql', ...eggConfig.config.knex.client };
const knex: knexLib = knexLib(dbConfig);

export = {
  knex,
};
