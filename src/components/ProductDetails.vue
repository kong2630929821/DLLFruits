<!-- ProductDetails -->
<template>
  <div class="detail">
    <div class="detailTop">
      <div class="detailTop-img">
        <img class="maxImg" :src="detailInfo.maxImg[i]" alt="">
        <ul class="minList">
          <li v-for="(item,index) in detailInfo.minImg" :key="index" @click="changeCurrent(index)" :class="{'current':i==index}"><img :src="item" alt=""></li>
        </ul>
        <div class="detailTop-img-collect">
          <p class="love"><strong class="fa fa-star-o u1"></strong>&nbsp;&nbsp;收藏商品 （{{detailInfo.love}}人气）</p>
          <p class="sold"><strong class="fa fa-star-o u1"></strong>&nbsp;&nbsp;已卖商品 （{{detailInfo.sold}}人气）</p>
        </div>
      </div>
      <div class="detailTop-content">
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
              <div>累计评价<span>{{detailInfo.sold}}</span></div>
          </div>
          <div class="content-info-sum">
            <span>数量</span>
            <div class="controller">
              <el-input-number v-model="sum" :min="1" label="描述文字"></el-input-number>&nbsp;件
            </div>
            <span>库存{{detailInfo.stock}}件</span>
          </div>
        </div>
      </div>
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
          maxImg:['../../static/image/detail/1.jpg','../../static/image/detail/2.jpg','../../static/image/detail/3.jpg','../../static/image/detail/4.jpg','../../static/image/detail/1.jpg'],
          minImg:['../../static/image/detail/1.min.jpg','../../static/image/detail/2.min.jpg','../../static/image/detail/3.min.jpg','../../static/image/detail/4.min.jpg','../../static/image/detail/1.min.jpg']
          },//商品详情页面
        i:0,//商品默认大图展示
        sum:1,//商品的数量
    };
  },
  methods:{
    //详情图片的切换
    changeCurrent(index){
      this.i=index;
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
.detail{
  width: 1349px;
  overflow: hidden;
}
.detailTop{
  width: 972px;
  height: 588px;
  border: 1px solid;
  margin: 42px auto 0;
  display: flex;
  .detailTop-img{
    width: 418px;
    height: 418px;
    .maxImg{
      width: 100%;
      height: 100%;
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
    border: 1px solid;
    margin: 0 auto;
    overflow: hidden;
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
      border: 1px solid;
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
        border: 1px dotted #c9c9c9;
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
        margin-top: 10px;
        width: 512px;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        color: #999;
      }
    }
  }
}
</style>