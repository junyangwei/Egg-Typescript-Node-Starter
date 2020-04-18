import 'egg';
import Knex = require('knex');

declare module 'egg' {
  interface Application {
    knex: Knex;
    knexBaby: any;
    dao: IDao;
    graphQuery: any;
    oss: any;
    passport: any;
    redis: any;
  }

  interface IDao extends PlainObject {}
}