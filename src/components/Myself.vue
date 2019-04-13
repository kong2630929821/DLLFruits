<template>
    <div class="myself">
      <div class="my-top">
        <div class="userHead">
          <img src="../../static/image/qq/2018new_quantou_thumb.png" alt="">
        </div>
        <div class="userName">
            <span>君莫笑</span>
            <div class="famle">
              <b class="fa fa-venus"></b>
            </div>
            <div class="fale">
              <b class="fa fa-mars"></b>
            </div>
        </div>
      </div>
      <div class="my-list">
        <ul>
          <li v-for="(v,index) in myList" :key="index" :class="{'active':i==index}" @click="checkType(index)">{{v}}</li>
        </ul>
      </div>
      <div class="my-content">
        <div class="content-top"></div>
        <div class="setPass">
          <div class="set-right">
            <div class="div1">
              <img :src="u_img" alt="" class="img1">
              <div class="box1"></div>
            </div>
            <canvas id="c1" width="150" height="150"></canvas>
            <input type="file" id="file1" accept="image/jpg,image/jpeg,image/png,image/gif">
            <el-row>
              <el-button type="primary" round>选择图片</el-button>
              <el-button type="primary" round id="btn2">确认上传</el-button>
            </el-row>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Myself",
        data(){
          return{
            myList:['个人资料','购物车','待付款','待收货','评价','退款/售后'],
            i:1
          }
        },
      methods:{
          //个人中心切换
          checkType(index){
            this.i = index;
          }
      }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .active{
    color: #ae9666;
    border-bottom: 2px solid #ae9666;
  }
  .my-top{
    width: 1349px;
    height: 250px;
    background: #c3d154;
    overflow: hidden;
    .userHead{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid white;
      cursor: pointer;
      margin: 40px auto;
      position: relative;
      img{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;
      }
    }
    .userName{
      text-align: center;
      margin: 0 auto;
      span{
        font-size: 18px;
        font-weight: bold;
      }
      .famle{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        background: #fe54a7;
        b{
          font-size: 20px;
          color: white;
          font-weight: bold;
          line-height: 25px;
        }
      }
      .fale{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        background: #0369ef;
        b{
          font-size: 20px;
          color: white;
          font-weight: bold;
          line-height: 25px;
        }
      }
    }
  }
  .my-list{
    width: 1349px;
    height: 40px;
    ul{
      display: flex;
      li{
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .my-content{
    width: 1349px;
    height: 600px;
    background: #eeeded;
    overflow: hidden;
    .content-top{
      width: 100%;
      height: 30px;
      background: #c3d154;
      margin: 10px auto 0;
    }
  }
</style>
