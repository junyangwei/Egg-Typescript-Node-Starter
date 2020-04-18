// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/dao/user';

declare module 'egg' {
  interface IDao {
    user: ReturnType<typeof ExportUser>;
  }
}
