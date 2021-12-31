import Vuex from 'vuex';
import user from './modules/user'; //引入模块js文件
export default new Vuex.Store({
  state: {},
  modules: {
    user, //注册模块
  },
});
