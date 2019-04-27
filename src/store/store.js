import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    userInfo:JSON.parse(localStorage.getItem('userInfo'))||{
      // id:1,
      // name:'君莫笑',
      // account:'2630929821',
      // pass:'123456',
      // phone:'17774645192',
      // mail:'2630929821@qq.com',
      // sex:'男',
      // img:'',
      // money:5000
    },
    address:JSON.parse(localStorage.getItem('address'))||[
      {
        id:1,
        u_id:1,
        name:'君莫笑',
        mail:'2630929821@qq.com',
        phone:'17774645192',
        province:'四川省',
        city:'成都市',
        area:'双流区',
        detailed:'长城馨苑'
      }
    ]
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
