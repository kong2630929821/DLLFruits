<template>
  <div>
    <div class="navbar clearfix">
      <img src="../assets/logo.png" alt="">
      <p>果思 <b>|</b> FRUIT DESSERT</p>
      <ul>
        <router-link to="/index/indexMain" tag="li">首页</router-link>
        <router-link to="/index/shoplist" tag="li">鲜果展示</router-link>
        <router-link to="/index/fruitsBox" tag="li">鲜果礼盒</router-link>
        <router-link to="/index/know" tag="li">鲜果知识</router-link>
        <router-link to="/index/community" tag="li">鲜果社区</router-link>
        <router-link to="/index/aboutMe" tag="li">关于我们</router-link>
      </ul>
      <ol>
        <li class="search">
          <el-input v-model="input" placeholder="" size="mini"></el-input>
          <span class="el-icon-search"></span>
        </li>
        <li @click="shopingCart">
          <span class="fa fa-shopping-cart"></span>
        </li>
        <li @click="myself">
          <span class="fa fa-list-ul"></span>
        </li>
        <li @click="isLogin" class="usersInfo">
          <span v-show="!successLogin" class="fa fa-user-o"></span>
          <div v-show="successLogin" class="userImg"  :style="{ 'background': 'url(' + user.u_img + ') no-repeat center center', 'background-size': '100% 100%'}"></div>
          <b>{{user.u_name?user.u_name:'我的账户'}}</b>
        </li>
        <li @click="singOut" v-show="successLogin">
          <span class="fa fa-sign-out"></span>
        </li>
      </ol>
    </div>
    <router-view @updataInfo="changeInfo"/>
    <div class="login" v-show="login">
        <div class="loginBox clearfix">
            <div class="modal-content" @click="closeLogin">×</div>
            <div class="loginLeft">
                <p class="p2">手机扫码</p>
                <div class="code">
                    <img src="../../static/image/me.png" alt="">
                </div>
                <p class="p1">打开微信扫一扫了解</p>
            </div>
            <div class="loginRight">
                <p class="p2">{{title}}</p>
                <div class="loginInput">
                    <div class="phone">
                      <el-input
                        :placeholder="placeholder"
                        v-model="inputPhone"
                        clearable>
                      </el-input>
                      <div class="isOk" v-show="checked" @click="verification">{{countdown}}</div>
                    </div>
                    <div class="phoneCode">
                      <el-input
                        :placeholder="placeholderCode"
                        v-model="inputCode"
                        :type="type"
                        clearable>
                      </el-input>
                    </div>
                  <div class="phoneCode" v-show="isReg">
                    <el-input
                      placeholder="账号"
                      v-model="inputAccount"
                      type="text"
                      clearable>
                    </el-input>
                  </div>
                  <div class="phoneCode" v-show="isReg">
                    <el-input
                      placeholder="密码"
                      v-model="inputPassword"
                      type="password"
                      clearable>
                    </el-input>
                  </div>
                  <div class="loginEnter" @click="loginPhone">{{btnNames}}</div>
                  <p class="regs">还没有果思账号<b @click="loginTitles">{{loginTitle}}</b></p>
                  <div class="loginEnters" @click="check">{{btnName}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
    export default {
        name: "Index",
        data(){
          return{
            input:'',
            inputPhone: '2630929821',
            inputCode:'123456',
            inputAccount:'',
            inputPassword:'',
            login:false,
            title:'手机快捷登录',
            placeholder:'手机号码',
            placeholderCode:'验证码',
            btnName:'账号登录',
            btnNames:'登录',
            type:'text',
            checked:true,
            isReg:false,
            loginTitle:'点击注册',
            countdown:'验证',
            successLogin:false,
            user:{}
          }
        },
      methods:{
        open3(msg) {
          this.$message({
            message: msg,
            type: 'warning'
          });
        },
        open2(msg) {
          this.$message({
            message: msg,
            type: 'success'
          });
        },
        //点击展开登入
        isLogin(){
          if(this.user.u_id){
            this.$router.push({name:'myself',params:{index:0}});
          }else{
            this.login=true;
          }
        },
        //关闭登入界面
        closeLogin(){
          this.login=false;
        },
        //切换登入模式
        check(){
          if(this.checked){
            this.title='账号登录';
            this.type='password';
            this.placeholder='账号/手机号码';
            this.placeholderCode='密码';
            this.btnName='手机快捷登录';
            this.checked = !this.checked;
          }else{
              this.title='手机快捷登录';
              this.type='text';
              this.placeholder='手机号码';
              this.placeholderCode='验证码';
              this.btnName='账号登录';
              this.checked = !this.checked;
          }
        },
        //切换注册
        loginTitles(){
         if(!this.isReg){
           this.title='注册';
           this.type='text';
           this.placeholder='手机号码';
           this.placeholderCode='验证码';
           this.loginTitle='点击登录';
           this.checked =true;
           this.btnNames='注册';
           this.isReg=true;
         }else{
           this.isReg=false;
           this.loginTitle='点击注册';
           this.checked=true;
           this.title='账号登录';
           this.btnNames = '登录';
         }
        },
        //获取验证码
        verification(){
          if((typeof this.countdown)=='string'){
            this.$axios({
              method:'post',
              url:'/api/getCode',
              data:{
                phone:this.inputPhone
              }
            });
            this.countdown = 60;
            clearInterval(timer);
            const timer=setInterval(()=>{
              this.countdown--;
              if(this.countdown<0){
                clearInterval(timer);
                this.countdown = '验证'
              }
            },1000);
          }
        },
        //登入
        loginPhone(){
          //注册
         if(this.isReg){
            this.$axios({
              method:'post',
              url:'/api/register',
              data:{
                phone:this.inputPhone,
                code:this.inputCode,
                account:this.inputAccount,
                pass:this.inputPassword
              }
            }).then((res)=>{
              if(res.data.error){
                this.open2('恭喜您注册果思账号成功，请登入！');
                this.isReg=false;
                this.loginTitle='点击注册';
                this.checked=false;
                this.title='账号登录';
                this.btnNames = '登录';
                this.btnName = '手机快捷登录'
              }
            });
         }else if(this.checked){
           //手机验证码登入
           this.$axios({
             method: 'post',
             url:'/api/loginPhone',
             data:{
               phone:this.inputPhone,
               code:this.inputCode
             }
           }).then((res)=>{
             if(res.data.error){
               this.$axios({
                 method:'post',
                 url:'/api/phoneLogin',
                 data:{
                   phone:this.inputPhone
                 }
               }).then(res=>{
                 if(res.data.error){
                   this.open2('登入成功，欢迎进入果思！');
                   this.successLogin=true;
                   this.user=res.data.data[0];
                   localStorage.setItem('userInfo',JSON.stringify(this.user));
                   this.$store.commit('changeInfo',this.user);
                   this.login = false;
                   this.$axios({
                     method:'post',
                     url:'/api/getAllAddress',
                     data:{
                       u_id:this.user.u_id
                     }
                   }).then(res=>{
                     if(res.data.error){
                       let addressList=res.data.data;
                       let dataList=[];
                       addressList.forEach(v=>{
                         let address={
                           id:v.a_id,
                           u_id:v.u_id,
                           name:v.a_name,
                           mail:v.a_mail,
                           phone:v.a_phone,
                           province:v.a_province,
                           city:v.a_city,
                           area:v.a_area,
                           detailed:v.a_detailed
                         };
                         dataList.push(address);
                       });
                       console.log(dataList);
                       // this.$store.commit('addAddress',dataList);
                       localStorage.setItem('address',JSON.stringify(dataList));
                     }else{

                     }
                   });
                 }
               });
             }else{
               this.open3('手机号或验证码错误！');
             }
           });
         }else{
           //账号登入
            if(this.inputPhone!==''&&this.inputCode!==''){
                this.$axios({
                  method:'post',
                  url:'/api/accountLogin',
                  data:{
                    account:this.inputPhone,
                    pass:this.inputCode
                  }
                }).then((res)=>{
                  console.log('登录成功！！！！！！！！！',res);
                  if(res.data.error){
                    this.open2('登入成功，欢迎进入果思！');
                    this.successLogin=true;
                    this.user=res.data.data[0];
                    localStorage.setItem('userInfo',JSON.stringify(this.user));
                    this.$store.commit('changeInfo',this.user);
                    this.login = false;
                    console.log('用户',this.user);
                    this.$axios({
                      method:'post',
                      url:'/api/getAllAddress',
                      data:{
                        u_id:this.user.u_id
                      }
                    }).then(res=>{
                      if(res.data.error){
                        let addressList=res.data.data;
                        let dataList=[];
                        addressList.forEach(v=>{
                          let address={
                            id:v.a_id,
                            u_id:v.u_id,
                            name:v.a_name,
                            mail:v.a_mail,
                            phone:v.a_phone,
                            province:v.a_province,
                            city:v.a_city,
                            area:v.a_area,
                            detailed:v.a_detailed
                          };
                          dataList.push(address);
                        });
                        console.log(dataList);
                        // this.$store.commit('addAddress',dataList);
                        this.$store.commit('addAddress',dataList);
                        console.log(this.$store);
                        localStorage.setItem('address',JSON.stringify(dataList));
                      }else{

                      }
                    });
                  }else{
                    this.open3('账号或密码错误，请重新登入！');
                    this.inputCode='';
                  }
                })
            }else{
              this.open3('账号或密码为空！');
            }
         }
        },
       //个人中心
        myself(){
          if(this.user.u_id){
            this.$router.push({name:'myself',params:{index:0}});
          }else{
            this.open3('请登录再试');
          }

        },
        //购物车
        shopingCart(){
          if(this.user.u_id){
            this.$router.push({name:'myself',params:{index:1}});
          }else{
            this.open3('请登录再试');
          }
        },
        //退出登录
        singOut(){
          this.$store.commit('changeInfo',{});
          this.user={};
          this.open2('成功退出果思系统！');
          this.$router.push({name:'indexMain'});
          this.successLogin=false;
        },
        changeInfo(val){
          this.user=val;
        }
      },
      mounted(){
          this.user=this.userInfo=this.$store.state.userInfo;
          if(this.user.u_id){
            this.successLogin=true;
          }else{
            this.successLogin=false;
          }

      }
    }
</script>

<style scoped lang="less">
  *{
      margin: 0;
      padding: 0;
      font-size: 14px;
  }
  .usersInfo{
    display: flex;
    b{
      margin-left: 10px;
    }
    span{
      margin-top: 16px;
    }
  }
  .userImg{
    width: 35px;
    height: 35px;
    margin-top: 6px;
    border-radius: 50%;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  .login{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0,0.6);
    .loginBox{
      width: 800px;
      height: 456px;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-400px,-228px);
      overflow: hidden;
      .modal-content{
        width: 40px;
        height: 40px;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
      }
      .loginLeft{
        width: 340px;
        height: 294px;
        margin-top:80px;
        overflow: hidden;
        float: left;
        border-right: 1px solid;
        .code{
          width: 150px;
          height: 150px;
          margin: 50px auto;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .p1{
          font-size: 14px;
          color: #979797;
          text-align: center;
        }
        .p2{
          font-size: 14px;
          text-align: center;
          font-weight: bold;
        }
      }
      .loginRight{
        width: 459px;
        height: 294px;
        margin-top: 80px;
        float: left;
        .p2{
          font-size: 14px;
          text-align: center;
          font-weight: bold;
        }
        .loginInput{
          width: 275px;
          margin: 0 auto;
          overflow: hidden;
          .phone{
            margin-top: 20px;
            position: relative;
            .isOk{
              width: 74px;
              height: 40px;
              text-align: center;
              line-height: 40px;
              background: black;
              color: white;
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            }
          }
          .phoneCode{
            margin-top: 20px;
          }
          .loginEnter{
            width: 275px;
            height: 40px;
            background: black;
            color: white;
            cursor: pointer;
            text-align: center;
            line-height: 40px;
            margin-top: 20px;
          }
          .loginEnters{
            width: 275px;
            height: 40px;
            background: #979797;
            color: white;
            cursor: pointer;
            text-align: center;
            line-height: 40px;
            margin-top: 20px;
          }
          .regs{
            color: #979797;
            text-align: center;
            font-size: 12px;
            margin-top: 16px;
            b{
              text-decoration: underline;
              color: #d0aa8c;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .router-link-active{
    color: #ae9666;
    border-bottom: 2px solid #ae9666;
  }
  .navbar{
    width: 100%;
    height: 48px;
    color: #3c586d;
    cursor: pointer;
    background: #f2f2f2;
    display: flex;
    justify-content: space-around;
    img{
      width: 78px;
      height: 50px;
      margin-left: 37px;
      float: left;
    }
    p{
      line-height: 48px;
      float: left;
      b{
        color: black;
      }
    }
    ul{
      float: left;
      margin-left: 60px;
      overflow: hidden;
      li{
        float: left;
        line-height: 28px;
        margin-top: 10px;
        margin-left: 32px;
      }
    }
    ol{
      float: left;
      margin-left: 60px;
      li{
        float: left;
        margin-left: 20px;
        line-height: 48px;
        .el-input{
          width: 87px;
        }
        span{
          display: inline-block;
        }
        b{
          font-weight: normal;
        }
      }
    }
  }
</style>
