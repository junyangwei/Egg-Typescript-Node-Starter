// 添加app/dao的配置，确保typings中dao能够自动配置
module.exports = {
  watchDirs: {
    dao: {
      path: 'app/dao',
      generator: 'class',
      framework: 'egg',
      interface: 'IDao',
      caseStyle: 'camel',
      interfaceHandle: val => `ReturnType<typeof ${val}>`,
      trigger: [ 'add', 'unlink', 'change' ],
    },
  },
};
