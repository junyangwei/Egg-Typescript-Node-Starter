import db = require('../schema/database');
import { DaoReturnDataType } from '../typings/common';

// 需要调用数据库表名应该在这里定义好，写SQL时直接调用，便于维护
const TABLE_USERS = 'users';

/**
 * 用户 Dao层
 */
export default class UserDao {

  /**
   * 获取用户基础信息
   * @param userId 用户ID
   */
  async getUser(userId: number) {
    if (!userId) return null;

    const sql = `
      SELECT id, username, phone, status, create_time, update_time
      FROM ${TABLE_USERS}
      WHERE id = :userId
      AND status = 1;
    `;

    // 调用sql前，需根据字段的数据类型，进行类型转化，不应信赖传入的数据，确保命中索引
    const res = await db.knex.raw(sql, {
      userId: Number(userId) || 0,
    });

    return this._returnData(res, DaoReturnDataType.OBJECT);
  }

  // 定义返回数据格式(仅限sql获取，GraphQL不适用)
  _returnData(res: any, type: number) {
    if (type === DaoReturnDataType.OBJECT) {
      if (res && res[0] && Array.isArray(res[0]) && res[0][0]) {
        return res[0][0];
      }
      return null;
    }
    if (type === DaoReturnDataType.ARRAY) {
      if (res && res[0] && Array.isArray(res[0])) {
        return res[0];
      }
      return [];
    }
  }
}
