import { Application } from 'egg';

const v1 = route => `/api/1${route.replace(/^\/*/, '/')}`;
export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get(v1('/user/get'), controller.user.getUser);
};
