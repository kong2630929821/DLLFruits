import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    userInfo:{
      id:1,
      name:'君莫笑',
      account:'2630929821',
      pass:'123456',
      phone:'17774645192',
      mail:'2630929821@qq.com',
      sex:'男',
      img:''
    },
    address:[
      {
        id:1,
        u_id:1,
        name:'君莫笑',
        mail:'2630929821@qq.com',
        phone:'17774645192',
        province:'四川省',
        city:'成都市',
        area:'双流区'
      }
    ]
  },
  mutations:{
    //修改个人信息
    changeInfo(state,msg){
      state.userInfo=msg;
    },
    //修改地址
    changeAddress(state,msg,index){
      debugger
      state.address.splice(index,1,msg);
    },
    //添加地址
    addAddress(state,msg){
      state.address.push(msg);
    }
  }
});
export default store
