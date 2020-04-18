import { Application } from 'egg';
import * as path from 'path';

export default (app: Application) => {
  /**
   * app挂载dao
   * @description 挂载dao，目的是通过this.ctx.app.dao来直接访问dao层文件夹目录
   */
  app.loader.loadToApp(path.join(app.baseDir, 'app/dao'), 'dao', {
    initializer: (dao: any) => {
      if (typeof dao === 'function') {
        // 判断是否是class
        if (dao.toString().indexOf('class ') === 0) {
          return new dao(app);
        }
        return { ...dao(app), app };
      }
      return { ...dao, app };
    },
  });
};
