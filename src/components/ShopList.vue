<template>
    <div id="shoplist">
      <div class="bg">
        <img src="../../static/image/banner/banner4.jpg" alt="">
        <div class="banner">
          <el-carousel :interval="5000" type="card" height="200px">
            <el-carousel-item v-for="(v,i) in arr" :key="i">
              <img :src="v" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in items" :key="index" :class="{'active':i==index}" @click="checkType(index)">{{item}}</li>
        </ul>
        <div class="shop-list">
          <ol>
            <li v-for="(v,i) in shopList" :key="i" :shop="v.s_id" @click="productDetails(i)">
              <img :src="v.s_img" alt="">
              <p class="title">{{v.s_name}}</p>
              <p class="pice">￥{{v.s_price}}</p>
              <div class="inf">
                <div class="left">已售{{v.s_sold}}</div>
                <div class="cen">|</div>
                <div class="right">喜欢{{v.s_love}}</div>
              </div>
            </li>
          </ol>
        </div>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="checkPage"
            :total="page">
          </el-pagination>
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
        name: "ShopList",
        data(){
          return{
            i:0,
            items:['进口水果','国内水果','乳品糕点','方便速食','坚果专区','干货珍菌'],
            arr:['../../static/image/banner/banner1.jpg','../../static/image/banner/banner2.jpg','../../static/image/banner/banner3.jpg','../../static/image/banner/banner12.jpg','../../static/image/banner/banner5.jpg','../../static/image/banner/banner6.jpg'],
            shopList:[],//水果列表当前
            shopLists:[],//水果列表全部
            page:10
          }
        },
        methods:{
          //切换水果类型
          checkType(index){
            this.$axios({
              method:'post',
              url:'/api/shopList',
              data:{
                type:index+1
              }
            }).then(res=>{
              if(res.data.error){
                let shopListData=res.data.data;
                if(shopListData.length){
                  //获取所有分页
                  this.page=Math.ceil(shopListData.length/8)*10;
                  shopListData.forEach(v=>{
                    v.s_infoImg=v.s_infoImg.split('|');
                    v.s_minImg=v.s_minImg.split('|');
                    v.s_maxImg=v.s_maxImg.split('|');
                    v.s_showMax=v.s_showMax.split('|');
                  });
                  console.log(shopListData);
                  this.shopLists=shopListData;
                  this.shopList=shopListData.slice(0,8);
                  this.i = index;
                }
              }
            });

          },
          //进入水果详情购买页面
          productDetails(index){
            localStorage.setItem('currentShop',JSON.stringify(this.shopList[index]));
            this.$router.push({name:'productDetails',params:{data:this.shopList[index]}});
          },
          //点击分页
          checkPage(val){
            this.shopList=this.shopLists.slice((val-1)*8,8*val);
            console.log(this.shopList);
          }
        },
      mounted(){
          //获取默认种类的数据
          this.$axios({
            method:'post',
            url:'/api/shopList',
            data:{
              type:1
            }
          }).then(res=>{
            if(res.data.error){
              let shopListData=res.data.data;
              if(shopListData.length){
                //获取所有分页
                this.page=Math.ceil(shopListData.length/8)*10;
                shopListData.forEach(v=>{
                  v.s_infoImg=v.s_infoImg.split('|');
                  v.s_minImg=v.s_minImg.split('|');
                  v.s_maxImg=v.s_maxImg.split('|');
                  v.s_showMax=v.s_showMax.split('|');
                });
                console.log(shopListData);
                this.shopLists=shopListData;
                this.shopList=shopListData.slice(0,8);
              }
            }
          })
      }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
  }
  .active{
    color: #ae9666;
    border-bottom: 2px solid #ae9666;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  #shoplist{
    .bg{
      width: 100%;
      height: 284px;
      position: relative;
      img{
        width: 100%;
        height: 284px;
      }
      .banner{
        width: 800px;
        height: 200px;
        position: absolute;
        top: 127px;
        left: 50%;
        margin-left: -400px;
        img{
          width: 402px;
          height: 200px;
        }
      }
    }
    .list{
      width: 100vw;
      overflow: hidden;
      ul{
        margin: 80px auto 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
        li{
          float: left;
          margin-left: 40px;
          line-height: 28px;
          margin-top: 10px;
          color: #3c586d;
          cursor: pointer;
        }
      }
      .shop-list{
        width: 760px;
        height: 520px;
        margin: 20px auto 0;
        ol{
          overflow: hidden;
          li{
            width: 180px;
            height: 248px;
            float: left;
            margin-left: 8px;
            margin-top: 8px;
            background: #f2f2f2;
            overflow: hidden;
            img{
              width: 100%;
              height: 160px;
            }
            .title{
              margin-top: 7px;
              font-size: 14px;
              text-align: center;
              color: #414141;
            }
            .pice{
              font-size: 16px;
              text-align: center;
              color: #3c586d;
              font-weight: bold;
              margin: 4px 0;
            }
            .inf{
              .left{
                width: 86px;
                float: left;
                text-align: center;
                font-size: 12px;
                color: #838383;
              }
              .cen{
                float: left;
              }
              .right{
                width: 86px;
                float: right;
                text-align: center;
                font-size: 12px;
                color: #838383;
              }
            }
          }
        }
      }
      .page{
        width: 437px;
        margin: 24px auto 32px;
      }
    }
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
  }
</style>
