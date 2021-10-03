
const frontend = require('./sidebar/sidebar-frontend');
const backend = require('./sidebar/sidebar-backend');
const mobileend = require('./sidebar/sidebar-mobileend');
const devtool = require('./sidebar/sidebar-devtool');
const server = require('./sidebar/sidebar-server');
const database = require('./sidebar/sidebar-database');
const common = require('./sidebar/sidebar-common');
const project = require('./sidebar/sidebar-project');

module.exports = {

  // 前端
  "/front-end/js/": frontend.javascript,
  "/front-end/ts/": frontend.typescript,
  "/front-end/vue/": frontend.vue,
  "/front-end/react/": frontend.react,
  "/front-end/html/": frontend.html,
  "/front-end/css/": frontend.css,
  "/front-end/micro-front-end/": frontend.microFrontend,
  "/front-end/webpack/": frontend.webpack,
  "/front-end/vite/": frontend.vite,
  "/front-end/browser/": frontend.browser,

  // 移动端
  "/mobile-end/miniprogram/": mobileend.miniprogram,
  "/mobile-end/android/": mobileend.android,
  "/mobile-end/react-native/": mobileend.reactNative,
  "/mobile-end/flutter/": mobileend.flutter,
  "/mobile-end/taro/": mobileend.taro,
  "/mobile-end/uni-app/": mobileend.uniApp,

  // 后端
  "/back-end/java/": backend.java,
  "/back-end/microservice/": backend.microservice,

  // 数据库
  "/database/mysql/": database.mysql,
  "/database/oracle/": database.oracle,
  "/database/redis/": database.redis,
  "/database/mongodb/": database.mongodb,
  "/database/memcached/": database.memcached,

  // 开发工具
  "/devtool/git/": devtool.git,
  "/devtool/docker/": devtool.docker,
  "/devtool/kubernetes/": devtool.kubernetes,
  "/devtool/elstaicsearch/": devtool.elstaicsearch,
  "/devtool/nginx/": devtool.nginx,
  "/devtool/jenkins/": devtool.jenkins,

  // 服务器
  "/server/linux/": server.linux,

  // 计算机通识
  "/common/network/": common.network,
  "/common/design-pattern/": common.designPattern,

  // 项目
  "/project/graduation-project/": project.graduationProject,
  "/project/panda-appointment/": project.pandaAppointment,
  "/project/homework-reminder/": project.homeworkReminder,

  "/": [
    "",
    "home",
    "layout",
  ],

}