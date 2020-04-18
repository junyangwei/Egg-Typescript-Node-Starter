import { Controller } from 'egg';

/**
 * 用户 Controller层
 */
export default class UserController extends Controller {
  /**
   * 获取用户信息
   */
  async getUser() {
    const { ctx, service } = this;
    const { userId } = ctx.query;

    // 调用Service层函数前，需要根据所需的数据类型进行转换
    const result = await service.user.getUser(
      Number(userId) || 0,
    );

    // TODO: 优化返回体
    ctx.body = result;
  }
}
