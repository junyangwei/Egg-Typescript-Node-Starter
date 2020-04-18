import { Service, Context } from 'egg';
import UserDao from '../dao/user';
import { UserItem } from '../typings/user';

/**
 * 用户 Service层
 */
export default class UserService extends Service {
  // 定义调用的Dao层文件时，添加类型如UserDao，便可以直接查看其调用方法
  private userDao: UserDao;

  constructor(ctx: Context) {
    super(ctx);
    this.userDao = this.ctx.app.dao.user;
  }

  /**
   * 获取单个用户信息
   * @param userId 用户ID
   */
  async getUser(userId: number) {
    const user: UserItem = await this.userDao.getUser(userId);
    return user;
  }
}
