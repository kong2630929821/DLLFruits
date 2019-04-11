<template>
  <div>
    <div class="navbar clearfix">
      <img src="../assets/logo.png" alt="">
      <p>果思 <b>|</b> FRUIT DESSERT</p>
      <ul>
        <router-link to="/index/indexMain" tag="li">首页</router-link>
        <router-link to="/index/shoplist" tag="li">鲜果展示</router-link>
        <router-link to="/index/fruitsBox" tag="li">鲜果礼盒</router-link>
        <router-link to="/aboutMe" tag="li">鲜果知识</router-link>
        <router-link to="/aboutMe" tag="li">鲜果社区</router-link>
        <router-link to="/index/aboutMe" tag="li">关于我们</router-link>
      </ul>
      <ol>
        <li class="search">
          <el-input v-model="input" placeholder="" size="mini"></el-input>
          <span class="el-icon-search"></span>
        </li>
        <li>
          <span class="fa fa-shopping-cart"></span>
        </li>
        <li>
          <span class="fa fa-list-ul"></span>
        </li>
        <li @click="isLogin">
          <span class="fa fa-user-o"></span>
          <b></b>
        </li>
      </ol>
    </div>
    <router-view/>
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
                        v-model="input10"
                        clearable>
                      </el-input>
                      <div class="isOk" v-show="checked">验证</div>
                    </div>
                    <div class="phoneCode">
                      <el-input
                        :placeholder="placeholderCode"
                        v-model="input11"
                        :type="type"
                        clearable>
                      </el-input>
                    </div>
                  <div class="phoneCode" v-show="isReg">
                    <el-input
                      placeholder="密码"
                      v-model="input12"
                      type="password"
                      clearable>
                    </el-input>
                  </div>
                  <div class="phoneCode" v-show="isReg">
                    <el-input
                      placeholder="确认密码"
                      v-model="input13"
                      type="password"
                      clearable>
                    </el-input>
                  </div>
                  <div class="loginEnter">{{btnNames}}</div>
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
            input10: '',
            input11:'',
            input12:'',
            input13:'',
            login:false,
            title:'手机快捷登录',
            placeholder:'手机号码',
            placeholderCode:'验证码',
            btnName:'账号登录',
            btnNames:'登录',
            type:'text',
            checked:true,
            isReg:false,
            loginTitle:'点击注册'
          }
        },
      methods:{
        isLogin(){
          this.login=true;
        },
        closeLogin(){
          this.login=false;
        },
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
        loginTitles(){
         if(!this.isReg){
           this.title='注册';
           this.type='text';
           this.placeholder='手机号码';
           this.placeholderCode='验证码';
           this.loginTitle='点击登录';
           this.btnNames='注册',
           this.isReg=true;
         }else{
           this.isReg=false;
           this.loginTitle='点击注册';
           this.checked=true;
           this.title='账号登录';
           this.btnNames = '登录';
         }
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
    img{
      width: 78px;
      height: 50px;
      margin-left: 152px;
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
