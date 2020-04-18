import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// 添加返回的config定义
export interface BizConfig {
  knex: {
    client: {
      debug: boolean;
      connection: {
        host: string;
        port: string;
        user: string;
        password: string;
        database: string;
      };
      pool: {
        max: number;
        min: number;
        idleTimeoutMillis: number;
      };
    };
  };
}

const config = {} as PowerPartial<EggAppConfig> & BizConfig;

export default (appInfo: EggAppInfo) => {
  // 将Keys改为你私有的Key
  config.keys = appInfo.name + 'your_secret_key';

  // 开发数据库
  config.knex = {
    client: {
      debug: false,
      connection: {
        host: 'your_mysql_host',
        port: 'your_mysql_port',
        user: 'your_mysql_user',
        password: 'your_mysql_password',
        database: 'your_mysql_database',
      },
      pool: {
        max: 40,
        min: 5,
        idleTimeoutMillis: 120000,
      },
    },
  };

  // ... （添加你需要的config配置）

  return config;
};

export {
  config,
};
