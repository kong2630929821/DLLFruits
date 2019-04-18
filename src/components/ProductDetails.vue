<!-- ProductDetails -->
<template>
  <div class="detail">
    <div class="detailTop">
      <div class="detailTop-img">
        <div id="moveLeft" @mouseenter="enter" @mouseleave="leave" @mousemove="move">
          <img class="maxImg" :src="detailInfo.maxImg[i]" alt="">
          <span id="moveSpan" v-show="showMaxImg"></span>
        </div>
        <ul class="minList">
          <li v-for="(item,index) in detailInfo.minImg" :key="index" @click="changeCurrent(index)" :class="{'current':i==index}"><img :src="item" alt=""></li>
        </ul>
        <div class="detailTop-img-collect">
          <p class="love"><strong class="fa fa-star-o u1"></strong>&nbsp;&nbsp;收藏商品 （{{detailInfo.love}}人气）</p>
          <p class="sold"><strong class="fa fa-star-o u1"></strong>&nbsp;&nbsp;已卖商品 （{{detailInfo.sold}}人气）</p>
        </div>
      </div>
      <div class="detailTop-content">
        <div id="moveRight" class="maximg" v-show="showMaxImg">
          <img id="moveImg" src="../../static/image/detail/1.max.jpg" :style="{left:moveX+'px',top:moveY+'px'}" alt="">
        </div>
        <p class="content-title">{{detailInfo.name}}</p>
        <div class="content-info">
          <div class="content-info-top">此商品5月13开售，请提前加购</div>
          <ul>
            <li>价格：¥&nbsp;<span>{{detailInfo.price+21.5}}</span></li>
            <li>促销价：<b>¥</b><h2>{{detailInfo.price}}</h2><img src="../../static/image/detail/new.png" alt=""></li>
            <li>亲子价：<b>¥</b><strong>{{detailInfo.price}}</strong></li>
          </ul>
          <div class="content-info-center">运费<span>四川成都至 湖南-永州市 快递: 0.00</span></div>
          <div class="content-info-center-1">
              <div class="haveBorder">收藏量<span>{{detailInfo.love}}</span></div>
              <div class="haveBorder">销售量<span>{{detailInfo.sold}}</span></div>
              <div>累计评价<span>{{detailInfo.evaluate}}</span></div>
          </div>
          <div class="content-info-sum">
            <span>数量</span>
            <div class="controller">
              <el-input-number v-model="sum" :min="1" label="描述文字"></el-input-number>&nbsp;件
            </div>
            <span>库存{{detailInfo.stock}}件</span>
          </div>
          <div class="shopBtnBox">
            <div class="shopBoxBtn1">立即购买</div>
            <div class="shopBoxBtn2">加入购物车</div>
          </div>
          <div class="writeBox">服务承诺&nbsp;&nbsp;不支持七天无理由退换&nbsp;&nbsp;坏单包退&nbsp;&nbsp;极速退款</div>
        </div>
      </div>
    </div>
    <div class="infoBottom">
      <div class="info-left">
        <div class="info-left-top">
          果思旗舰店
          <p></p>
        </div>
        <div class="shop-cert">
          <span>3</span>
          <div class="text3">果思3年店</div>
        </div>
        <div class="main-info">品质放心 优惠廉价</div>
        <div class="btnArea">
          <div class="btnArea1">进店逛逛</div>
          <div class="btnArea2">收藏店铺</div>
        </div>
      </div>
      <div class="info-right">
        <div class="info-right-top">
          <ul>
            <li @click="commodityDetails(1)" :class="parameter?'isActive':''">商品详情</li>
            <li @click="commodityDetails(2)" :class="parameter?'':'isActive'">累计评价 <span>{{detailInfo.evaluate}}</span></li>
          </ul>
        </div>
        <div v-show="parameter" class="attributes-list">
          <div class="tm-clear">品牌名称：果思</div>
          <div class="attr-list-hd">产品参数：</div>
          <ul>
            <li>厂名：果思</li>
            <li>厂址：果思</li>
            <li>厂家联系方式：17774645192</li>
            <li>配料表：天然种植</li>
            <li>保质期：5天</li>
            <li>食品添加剂：无</li>
            <li>品牌：果思</li>
            <li>价格：{{detailInfo.price}}元</li>
            <li>产地：{{detailInfo.nationality}}</li>
            <li>省份：{{detailInfo.province}}</li>
            <li>城市：{{detailInfo.city}}</li>
            <li>是否为有机食品：否</li>
            <li>包装方式：散装</li>
            <li>售卖方式：单品</li>
            <li>套餐分量：3人份</li>
            <li>套餐周期：1周</li>
            <li>配送频次：1周2次</li>
            <li>水果种类：{{detailInfo.name}}</li>
          </ul>
        </div>
        <div v-show="parameter" class="infoImg-list">
          <img v-for="(v,index) in listImg" :key="index" :src="v" alt="">
        </div>
        <div v-show="!parameter" class="parameter" v-for="(v,index) in evaluateList" :key="index">
          <p class="parameter-title">{{v.u_name}}：</p>
          <p class="title-time">{{v.time}}</p>
          <div class="parameter-content">{{v.content}}</div>
          <div class="rate">
            <p>商品评分：<el-rate v-model="v.rate.shop"></el-rate></p>
            <p>服务评分：<el-rate v-model="v.rate.server"></el-rate></p>
            <p>物流评分：<el-rate v-model="v.rate.goods"></el-rate></p>
          </div>
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
name:'ProductDetails',
  data () {
    return {
        detailInfo:{
          id:1,
          name:'海南红心火龙果',
          price:123.00,
          sold:12,
          love:123,
          stock:1222,
          evaluate:1300,//评价
          province:'四川省',
          city:'成都市',
          nationality:'中国',
          maxImg:['../../static/image/detail/1.jpg','../../static/image/detail/2.jpg','../../static/image/detail/3.jpg','../../static/image/detail/4.jpg','../../static/image/detail/1.jpg'],
          minImg:['../../static/image/detail/1.min.jpg','../../static/image/detail/2.min.jpg','../../static/image/detail/3.min.jpg','../../static/image/detail/4.min.jpg','../../static/image/detail/1.min.jpg']
          },//商品详情页面
        i:0,//商品默认大图展示
        sum:1,//商品的数量
        listImg:['../../static/image/detail/list1.jpg','../../static/image/detail/list2.jpg','../../static/image/detail/list3.jpg','../../static/image/detail/list4.jpg','../../static/image/detail/list5.jpg'],//商品详情照片
        parameter:true,//默认显示产品参数
        evaluateList:[
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'},
          {id:1,u_id:1,u_name:'君莫笑',time:'2019-4-18', rate:{shop:5, server:5, goods:5},content:'东西到了，也很惊喜，包装足够了！里面的东西都没有瑕疵，开心！同事看我买了水果都过来看哈哈哈别的办公室的也过来看了，都说还不错，很值，比超市便宜多了，超市的大小不均匀，还会有黑心点子，还送货上门，完美！我拿出来2个用刀子切开大家尝了尝，我也自己吃了点，说实话，我一直喜欢吃苹果，超市也好，小摊也好买过不少，这个尝了尝确实不错！很正的甜甜的味道！同事尝了也说不错，对得起这个价格！'}
        ],//产品评价列表
        moveX:0,
        moveY:0,//图片放大移动的X，Y坐标
        showMaxImg:false,//是否展示大图
    };
  },
  methods:{
    //详情图片的切换
    changeCurrent(index){
      this.i=index;
    },
    //商品详情和评价的切换
    commodityDetails(index){
      if(index==1){
        this.parameter=true;
      }else{
        this.parameter=false;
      }
    },
    //鼠标移入图片显示大图
    enter(){
      this.showMaxImg=true;
    },
    //鼠标移出隐藏大图
    leave(){
      this.showMaxImg=false;
    },
    //鼠标移动时放大对应的位置
    move(e){
      let oDivL=document.querySelector('#moveLeft');
      let oDivR=document.querySelector('#moveRight');
      let oSpan=document.querySelector('#moveSpan');
      let oImg=document.querySelector('#moveImg');
      let l=e.clientX-oSpan.offsetWidth-oDivL.offsetLeft-88+document.documentElement.scrollLeft;
      let t=e.clientY-oSpan.offsetHeight-oDivL.offsetTop+10+document.documentElement.scrollTop;
      if(l<=0){
        l=0;
      }else if(l>=oDivL.offsetWidth-oSpan.offsetWidth){
        l=oDivL.offsetWidth-oSpan.offsetWidth;
      }
      if(t<=0){
        t=0;
      }else if(t>=oDivL.offsetHeight-oSpan.offsetHeight){
        t=oDivL.offsetHeight-oSpan.offsetHeight;
      }
      oSpan.style.left=l+'px';
      oSpan.style.top=t+'px';
      this.moveX=-oSpan.offsetLeft*(oImg.offsetWidth-oDivR.offsetWidth)/(oDivL.offsetWidth-oSpan.offsetWidth);
      this.moveY=-oSpan.offsetTop*(oImg.offsetHeight-oDivR.offsetHeight)/(oDivL.offsetHeight-oSpan.offsetHeight);
    }
  }
}

</script>
<style scoped lang='less'>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.isActive{
  background: #eee;
}
.moveLeft{
  width: 418px;
  height: 418px;
}
.maximg{
  width: 418px;
  height: 418px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  img{
    position: absolute;
    z-index: 3;
  }
}
.detail{
  width: 1349px;
  overflow: hidden;
}
.detailTop{
  width: 972px;
  height: 588px;
  margin: 42px auto 0;
  display: flex;
  .detailTop-img{
    width: 418px;
    height: 418px;
    position: relative;
    .maxImg{
      width: 100%;
      height: 100%;
    }
    span{
      width: 209px;
      height: 209px;
      background: green;
      opacity: 0.3;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      /*cursor:all-scroll;*/
      cursor:move;
    }
    .minList{
      width: 418px;
      height: 60px;
      padding: 22px 0;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      .current{
        border-color: black;
      }
      li{
        width: 60px;
        height: 60px;
        box-sizing: border-box;
        border: 2px solid white;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .detailTop-img-collect{
      width: 418px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      color: #999;
      display: flex;
      justify-content: space-around;
    }
  }
  .detailTop-content{
    width: 515px;
    height: 588px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .content-title{
      font-size: 16px;
      color: #000;
      font-weight: 700;
      text-indent: 1rem;
      margin-top: 10px
    }
    .content-info{
      width: 512px;
      height: 174px;
      margin: 20px auto 0;
      background: #eee;
      .content-info-top{
        width: 512px;
        height: 51px;
        background: url('../../static/image/detail/title.png')no-repeat;
        background-size: contain;
        text-align: center;
        line-height: 51px;
        color: white;
        font-weight: bold;
      }
      ul{
        width: 512px;
        li{
          height: 40px;
          line-height: 40px;
          display: flex;
          margin-left: 12px;
          color: #999;
          h2{
            color: #FF0036;
          }
          strong{
            color: #FF0036;
          }
          b{
             color: #FF0036;
             font-size: 14px;
          }
          span{
            color: #333;
            text-decoration: line-through;
          }
        }
      }
      .content-info-center{
        width: 512px;
        height: 46px;
        line-height: 46px;
        color: #999;
        font-size: 12px;
        text-indent: 2rem;
        span{
          color: #333;
          margin-left: 20px;
        }
      }
      .content-info-center-1{
        width: 512px;
        height: 38px;
        border-top: 1px dotted #c9c9c9;
        border-bottom: 1px dotted #c9c9c9;
        display: flex;
        justify-content: space-around;
        div{
          color: #999;
          line-height: 38px;
          flex: 1;
          text-align: center;
          span{
            color: #FF0036;
          }
        }
        .haveBorder{
          border-right: 1px dotted #999;
        }
      }
      .content-info-sum{
        margin-top: 20px;
        width: 512px;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        color: #999;
      }
      .shopBtnBox{
        width: 512px;
        height: 50px;
        margin: 30px auto 0;
        display: flex;
        justify-content: space-around;
        .shopBoxBtn1{
          width: 180px;
          height: 40px;
          background-color: #ffeded;
          border: 1px solid #FF0036;
          color: #FF0036;
          text-align: center;
          line-height: 40px;
        }
        .shopBoxBtn2{
          width: 180px;
          height: 40px;
          background-color: #ff0036;
          border: 1px solid #ff0036;
          color: #fff;
          text-align: center;
          line-height: 40px;
        }
      }
      .writeBox{
        width: 512px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #999;
        margin: 40px auto 0;
      }
    }
  }
}
.infoBottom{
    width: 990px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .info-left{
      width: 188px;
      height: 188px;
      margin-right: 15px;
      border: 1px solid #e5e5e5;
      .info-left-top{
        width: 188px;
        height: 49px;
        line-height: 49px;
        background-color: #fafafa;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        overflow: hidden;
       text-indent: 3rem;
        p{
          width: 20px;
          height: 20px;
          background: url("../../static/image/detail/60.gif")no-repeat -82px -1px;
          margin-top: 13px;
          margin-left: 10px;
        }
      }
      .shop-cert{
        width: 188px;
        height: 30px;
        display: flex;
        justify-content: center;
        margin: 10px auto 0;
        span{
          width: 18px;
          height: 18px;
          display: inline-block;
          background-color: #f04343;
          color: #ffd800;
          text-align: center;
          line-height: 18px;
          margin-right: 10px;
        }
        .text3{
            font-size: 12px;
            color: #999;
            display: inline-block;
        }
      }
      .main-info{
        height: 60px;
        font-size: 12px;
        text-align: center;
        line-height: 60px;
        color: #999;
      }
      .btnArea{
        width: 188px;
        height: 26px;
        display: flex;
        justify-content: space-around;
        .btnArea1{
          width: 72px;
          height: 24px;
          background-color: #333;
          color: #fff;
          border: 1px solid #333;
          line-height: 24px;
          text-align: center;
        }
        .btnArea2{
          width: 72px;
          height: 24px;
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          color: #333;
          line-height: 24px;
          text-align: center;
        }
      }
    }
    .info-right{
      width: 790px;
      .info-right-top{
        width: 788px;
        height: 48px;
        border: 1px solid #e5e5e5;
        ul{
          display: flex;
          li{
            width: 135px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            border-right: 1px solid #dfdfdf;
            cursor: pointer;
            color: #999;
            span{
              color: #f40;
            }
          }
        }
      }
      .attributes-list{
        width: 788px;
        height: 327px;
        border: 1px solid #e5e5e5;
        .tm-clear{
          width: 748px;
          padding: 8px 20px 10px;
          height: 40px;
          line-height: 40px;
          color: #999;
        }
        .attr-list-hd{
          padding: 5px 20px;
          line-height: 22px;
          color: #999;
        }
        ul{
          width: 788px;
          height: 215px;
          display: flex;
          flex-wrap: wrap;
          margin: 20px auto;
          li{
            width: 220px;
            height: 18px;
            vertical-align: top;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #666;
            overflow: hidden;
            margin-left: 20px;
            color: #999;
          }
        }
      }
      .infoImg-list{
        width: 788px;
        margin: 40px auto;
        img{
          width: 100%;
          height: auto;
        }
      }
      .parameter{
        width: 600px;
        min-height: 289px;
        margin: 20px auto 0;
        border-bottom: 1px solid rgb(227, 227, 227);
        .parameter-title{
          font-size: 16px;
          font-weight: bold;
          color: #999;
          height: 30px;
          line-height: 30px;
        }
        .title-time{
          font-size: 12px;
          color: #999;
        }
        .parameter-content{
          font-size: 14px;
          color: #999;
          margin-top: 10px;
          line-height: 24px;
        }
        .rate{
          width: 200px;
          margin-top:14px;
          float: right;
          margin-right: 30px;
          p{
            width: 200px;
            height: 30px;
            line-height: 20px;
            display: flex;
            color: #399;
            font-size: 14px;
          }
        }
      }
    }
  }
.bottom{
  width: 100%;
  height: 200px;
  background: #485b6a;
  font-size: 12px;
  overflow: hidden;
  margin-top: 20px;
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
    margin-top: 120px;
    font-size: 12px;
  }
}
</style>
