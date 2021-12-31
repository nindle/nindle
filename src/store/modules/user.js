import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  namespaced: true, //开启命名空间
  state: {
    userId: '', //定义数据
    usertoken: '', //定义数据
  },
  mutations: {
    setValue(state, data) {
      state.userId = data; //赋值方法
    },
  },
};
export default store;
