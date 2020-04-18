/**
 * 根据数据表，将表的定义放到typings文件夹，方便管理与调用
 */
export interface UserItem {
  id: number;
  username: string;
  phone: string;
  status: number;
  create_time: string;
  update_time: string;
}
