import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

/**
 * 用户 Controller层单元测试
 */
describe('test/app/controller/user.test.ts', () => {
  it('should GET /api/1/user/get', async () => {
    const url = '/api/1/user/get?userId=1';
    const result = await app.httpRequest().get(url).expect(200);
    assert(result.body.id > 0);
  });
});
