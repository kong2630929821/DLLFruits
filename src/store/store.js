import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    userInfo:JSON.parse(localStorage.getItem('userInfo'))||{},
    address:JSON.parse(localStorage.getItem('address'))||[]
  },
  mutations:{
    //修改个人信息
    changeInfo(state,msg){
      state.userInfo=msg;
      localStorage.setItem('userInfo',JSON.stringify(msg));
    },
    //修改地址
    changeAddress(state,msg){
      state.address.splice(msg.index,1,msg.content);
      localStorage.setItem('address',JSON.stringify(state.address));
    },
    //添加地址
    addAddress(state,msg){
      state.address.push(msg);
      localStorage.setItem('address',JSON.stringify(state.address));
    },
    //删除地址
    removeAddress(state,msg){
      state.address=msg;
      localStorage.setItem('address',JSON.stringify(state.address));
    }
  }
});
export default store
