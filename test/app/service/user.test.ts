import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

/**
 * 用户 Service层单元测试
 */
describe('test/app/service/user.test.ts', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('getUser', async () => {
    const result = await ctx.service.user.getUser(1);
    assert(result.id > 0);
  });
});
