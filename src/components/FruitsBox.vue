<template>
    <div id="fruitsBox">
      <div class="bg">
        <img src="../../static/image/aboutMe/1.jpg" alt="">
      </div>
      <div class="box clearfix">
        <div class="top">
          <div class="img-list">
            <img src="../../static/image/box/1.png" alt="">
          </div>
          <div class="content">
            <p class="title">满天星礼盒</p>
            <p class="inf">寓意平平安安，是经常当作随手礼物的。礼篮组成：海南木瓜-1个；越南火龙果-2个；台湾杨桃-1个；泰国蜜柚-1个；佳沛新西兰绿奇异果-2个；美国有籽红提-1斤；智利姬娜苹果-2个；西班牙寇拉斯.泰普妮诺干红葡萄酒-1瓶；进口金奇异果-2个；进口鲜橙-5个；进口芒果-1个；进口葡萄柚-1个。</p>
          </div>
        </div>
        <div class="mid">
          <div class="img-list">
            <img src="../../static/image/box/2.png" alt="">
          </div>
          <div class="content">
            <p class="title">快乐时光礼盒</p>
            <p class="inf">寓意招财进宝；大吉大利，新年很好的礼物。礼篮组成：香蕉-10个；泰国蜜柚-1个；佳沛新西兰绿奇异果-2个；美国有籽红提-1斤；西班牙寇拉斯.泰普妮诺干红葡萄酒-1瓶；进口金奇异果-2个；进口芒果-1个；进口葡萄柚-1个。</p>
          </div>
        </div>
        <div class="bot">
          <div class="img-list">
            <img src="../../static/image/box/3.png" alt="">
          </div>
          <div class="content">
            <p class="title">合家欢礼盒</p>
            <p class="inf">寓意团圆，送给家人、亲戚的很好的水果。礼篮组成：新疆香梨-10个，智利青苹果-2个；越南火龙果-1个；佳沛新西兰绿奇异果-2个；智利姬娜苹果-2个；进口鲜橙-6个；进口金奇异果-2个；蓝莓-1盒；进口葡萄柚-2个</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="title">ConstNewObject：欢迎您来到果思旗舰店</p>
        <ul class="clearfix">
          <li><span class="el-icon-location"></span> 四川省成都市</li>
          <li><span class="fa fa-phone"></span> 17774645192</li>
          <li>
            <img src="../../static/image/me.png" alt="">
          </li>
          <li><span class="fa fa-wechat"></span> 2630929821</li>
          <li class="last"><span class="fa fa-envelope-o"></span> 2630929821@qq.com</li>
        </ul>
        <p class="b-foot">Copyright &copy; 2019 沪ICP备12042163号</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FruitsBox"
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  #fruitsBox{
    overflow: hidden;
    background: #f2f2f2;
    .bottom{
      width: 100%;
      height: 200px;
      background: #485b6a;
      font-size: 12px;
      overflow: hidden;
      .title{
        color: white;
        text-align: center;
        margin-top: 20px;
      }
      ul{
        width: 662px;
        margin: 20px auto 0;
        .last{
          width: 150px;
        }
        li{
          float: left;
          width: 100px;
          height: 70px;
          margin-left: 20px;
          color: white;
          line-height: 70px;
          font-size: 12px;
          img{
            width: 99%;
            height: 99%;
          }
        }
      }
      .b-foot{
        text-align: center;
        color: white;
        margin-top: 20px;
        font-size: 12px;
      }
    }
    .bg{
      width: 100%;
      height: 366px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .box{
      overflow: hidden;
      .content{
        width: 295px;
        height: 188px;
        margin-top: 60px;
        margin-left: 469px;
        overflow: hidden;
        .title{
          text-align: center;
        }
        .inf{
          margin-top: 10px;
          line-height: 20px;
          font-size: 12px;
          color: #485b6a;
          text-align: center;
        }
      }
      .top{
        width: 964px;
        height: 279px;
        background: #dedfe3;
        float: right;
        margin-top: 160px;
        position: relative;
        .img-list{
          width: 372px;
          height: 372px;
          background: #485b6a;
          position: absolute;
          top: -47px;
          left: 40px;
          box-shadow: 1px 2px 10px 0 #ccc;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .mid{
        width: 964px;
        height: 279px;
        background: #dedfe3;
        float: left;
        margin-top: 160px;
        position: relative;
        .content{
          width: 295px;
          height: 188px;
          margin-top: 60px;
          margin-left: 201px;
        }
        .img-list{
          width: 372px;
          height: 372px;
          background: #485b6a;
          position: absolute;
          top: -47px;
          right: 40px;
          box-shadow: 1px 2px 10px 0 #ccc;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .bot{
        width: 964px;
        height: 279px;
        background: #dedfe3;
        float: right;
        margin-top: 160px;
        margin-bottom: 108px;
        position: relative;
        .content{
          width: 295px;
          height: 188px;
          margin-top: 60px;
          margin-left: 469px;
        }
        .img-list{
          width: 372px;
          height: 372px;
          background: #485b6a;
          position: absolute;
          top: -47px;
          left: 40px;
          box-shadow: 1px 2px 10px 0 #ccc;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
