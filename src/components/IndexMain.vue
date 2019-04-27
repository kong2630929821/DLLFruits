<template>
    <div id="index-box">
        <div class="top">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="(v,i) in arr" :key="i">
                <img :src="v" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="empty"></div>
        <div class="bgimg">
          <img src="../../static/image/bg/timg.png" alt="">
          <div class="bg-title">
              <p>鲜果展示</p>
              <span>努力的你，值得每周一果，奖励自己</span>
          </div>
          <div class="show">
              <div class="list-type-1">
                <img src="../../static/image/shop/1.jpg" alt="">
              </div>
              <div class="list-type-2">
                <img src="../../static/image/shop/2.jpg" alt="">
              </div>
              <div class="list-type-3">
                <img src="../../static/image/showList/timg3.jpg" alt="">
              </div>
              <div class="list-type-4">
                <img src="../../static/image/showList/timg4.jpg" alt="">
              </div>
          </div>
        </div>
        <div class="empty2">
            <div class="bg-title">
              <p>鲜果知识</p>
              <span>爱学习的你，值得了解每一果</span>
            </div>
            <div class="mation">
              <div class="mation-left">
                <img src="../../static/image/zhishi/banana.jpg" alt="">
              </div>
              <div class="mation-right">
                  <p class="title">鲜果知识</p>
                  <p class="inf">
                    <b>功能：</b>性寒，富含糖分，可转变成热量，补充体力；丰富的维生素A，可强健肠胃黏膜，所含膳食纤维可刺激肠道
                    蠕动，改善便秘；富含钾，可防止抑郁，调节心情；具有清热利尿、通便润肠、解毒降压和安胎功效
                  </p>
                  <p class="inf"><b>挑选存储：</b>挑选果皮呈金黄、果实饱满，果皮略带少许黑斑为宜。常温下2-4天</p>
                  <el-row>
                    <el-button type="info">了解更多</el-button>
                  </el-row>
              </div>
            </div>
        </div>
        <div class="fruitBox">
          <div class="bg-title">
            <p>鲜果盒子</p>
            <span>爱美的你，我们都为之打扮</span>
          </div>
          <img class="Box-img" src="../../static/image/timg.png" alt="">
          <div class="f-box clearfix">
            <div class="f-left">
              <img src="../../static/image/box/1.png" alt="">
              <img src="../../static/image/box/2.png" alt="">
            </div>
            <div class="f-cen">
                <ul class="clearfix">
                    <li>
                        <p class="title">满天星礼盒</p>
                        <p class="title1">寓意平平安安，是经常当作随手礼物的</p>
                        <el-row>
                          <el-button type="info">了解更多</el-button>
                        </el-row>
                    </li>
                    <li>
                        <p class="title">合家欢礼盒</p>
                        <p class="title1">寓意团圆，送给家人、亲戚的很好的水果。</p>
                        <el-row>
                          <el-button type="info">了解更多</el-button>
                        </el-row>
                    </li>
                    <li>
                        <p class="title">快乐时光礼盒</p>
                        <p class="title1">寓意招财进宝；大吉大利，新年很好的礼物。</p>
                        <el-row>
                          <el-button type="info">了解更多</el-button>
                        </el-row>
                    </li>
                    <li>
                        <p class="title">祝福生日礼盒</p>
                        <p class="title1">寓意长生不老，老人办生日宴的时候很好。</p>
                        <el-row>
                          <el-button type="info">了解更多</el-button>
                        </el-row>
                    </li>
                </ul>
            </div>
            <div class="f-right">
              <img src="../../static/image/box/3.png" alt="">
              <img src="../../static/image/box/4.png" alt="">
            </div>
          </div>
        </div>
        <div class="aboutMe">
          <div class="bg-title">
            <p>关于我们</p>
            <span>爱就是最美的故事</span>
          </div>
          <div class="about-bottom">
              <div class="about-left">
                <img src="../../static/image/timg1.png" alt="">
              </div>
              <div class="about-cen">
                <img src="../../static/image/about.png" alt="">
              </div>
              <div class="about-right">
                <p class="title">我们的团队</p>
                <p class="details">
                  果思是中国发展最快的水果电商平台。公司产品覆盖全品类水果，已在全国主要水果产区建立了产地直采体系。并提供仓储、物流、加工等配套服务。公司运营全面基于移动互联网、贯通全产业流程，建立了快速高效的水果供应链体系，基本实现零库存运行。公司已完成千万级美元B轮融资。
                  目前业务已覆盖北京，天津，上海，杭州，广州的8000多家商户，水果日交易量200-300吨，交易额100-150万元，并且在北京，上海率先实现规模化盈利。
                </p>
                <el-row>
                  <el-button type="info">了解更多</el-button>
                </el-row>
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
        <div class="Fruit-notes">
            <div class="notes-top clearfix">
                <div class="notes-top-left">
                    <p class="title">果思，果友乐！</p>
                    <div class="poetry">
                        <p>长安回望绣成堆</p>
                        <p>山顶千门次第开</p>
                        <p>一骑红尘妃子笑</p>
                        <p>无人知是荔枝来</p>
                    </div>
                </div>
                <div class="notes-top-right">
                  <img src="../../static/image/banner/banner4.jpg" alt="">
                </div>
            </div>
            <div class="notes-mid"></div>
            <div class="notes-bottom">
                <ul>
                    <li>
                        <div style="background: url(../../static/image/gif/1.gif)"></div>
                        <p class="p1">品质保证</p>
                        <span></span>
                        <p class="p2">精选当季时令水果16道工序11次质检</p>
                        <b>
                           <p></p>
                        </b>
                    </li>
                    <li>
                      <div style="background: url(../../static/image/gif/2.gif)"></div>
                      <p class="p1">绿色产品</p>
                      <span></span>
                      <p class="p2">遵循可持续发展原则 经专门机构认证</p>
                      <b>
                        <p></p>
                      </b>
                    </li>
                    <li>
                        <div style="background: url(../../static/image/gif/3.gif)"></div>
                        <p class="p1">成熟程度</p>
                        <span></span>
                        <p class="p2">采用“柔软”的手臂机器人进行采摘</p>
                        <b>
                          <p></p>
                        </b>
                    </li>
                    <li>
                        <div style="background: url(../../static/image/gif/5.gif)"></div>
                        <p class="p1">快递包邮</p>
                        <span></span>
                        <p class="p2">200 多个城市包邮 全程恒温运输</p>
                        <b>
                          <p></p>
                        </b>
                    </li>
                    <li>
                        <div style="background: url(../../static/image/gif/6.gif)"></div>
                        <p class="p1">用户支持</p>
                        <span></span>
                        <p class="p2">已有550000 享受了每周一果的小幸福</p>
                        <b>
                          <p></p>
                        </b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
          return{
            input:'',
            arr:['../../static/image/banner/banner9.jpg','../../static/image/banner/banner8.jpg','../../static/image/banner/banner7.jpg','../../static/image/banner/banner6.jpg']
          }
        },
        methods:{
          aboutMe(){
            this.$router.replace('/aboutMe');
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
  #index-box{
    position: relative;
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
    .top{
      width: 100%;
      height: 400px;
      .el-carousel{
        width: 100%;
        height: 100%;
      }
        img{
          width: 100vw;
          height: 400px;
        }
    }
    .empty{
      width: 100%;
      height: 200px;
      background: white;
    }
    .bgimg{
      width: 100%;
      height: 354px;
      background: #f2f2f2;
      position: relative;
      img{
        width: 100%;
        height: 354px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .bg-title{
        position: absolute;
        top: 120px;
        left: 50%;
        text-align: center;
        margin-left: -123px;
        p{
          font-size: 16px;
          font-weight: bold;
        }
        span{
          display: block;
          font-size: 14px;
          color: #3c586d;
          margin-top: 10px;
        }
      }
      .show{
        width: 706px;
        height: 284px;
        position: absolute;
        top: 212px;
        left: 50%;
        margin-left: -353px;
        div{
          width: 185px;
          height: 273px;
          box-shadow: 4px 0 85px 6px rgba(0,0,0,0.4);
          position: absolute;
          img{
            width: 185px;
            height: 273px;
          }
        }
        .list-type-2{
          top: 10px;
          left: 168px;
          z-index: 2;
          box-shadow: 4px 0 85px 6px rgba(0,0,0,0.4);
        }
        .list-type-3{
          top: 0;
          left: 342px;
        }
        .list-type-4{
          top: 10px;
          left: 517px;
          z-index: 2;
          box-shadow: 4px 0 85px 6px rgba(0,0,0,0.4);
        }
      }
    }
    .empty2{
      width: 100%;
      background: white;
      overflow: hidden;
      .bg-title{
        margin: 200px auto 0;
        text-align: center;
        p{
          font-size: 16px;
          font-weight: bold;
        }
        span{
          display: block;
          font-size: 14px;
          color: #3c586d;
          margin-top: 10px;
        }
      }
      .mation{
        width: 593px;
        height: 355px;
        margin: 60px auto;
        position: relative;
        background: rgba(255,255,255,0);
        .mation-left{
          width: 355px;
          height: 355px;
          box-shadow: 4px 0 34px 6px rgba(0,0,0,0.4);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .mation-right{
          width: 268px;
          height: 268px;
          background: #f2f2f2;
          box-shadow: 4px 0 105px -6px rgba(0,0,0,0.4);
          position: absolute;
          top: 41px;
          right: 0;
          overflow: hidden;
          .title{
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
          }
          .inf{
            font-size: 12px;
            width: 200px;
            color: #3c586d;
            margin: 14px auto 0;
          }
          .el-button{
            font-size: 12px;
            padding: 6px 12px;
            display: block;
            margin: 10px auto 0;
          }
        }
      }
    }
    .fruitBox{
      width: 100%;
      height: 524px;
      background: #dedfe3;
      overflow: hidden;
      position: relative;
      .bg-title{
        margin: 20px auto 0;
        text-align: center;
        p{
          font-size: 16px;
          font-weight: bold;
        }
        span{
          display: block;
          font-size: 14px;
          color: #3c586d;
          margin-top: 10px;
        }
      }
      .Box-img{
        width: 600px;
        height: 444px;
        position: absolute;
        top: 40px;
        right: 0;
      }
      .f-box{
        width: 708px;
        height: 412px;
        margin: 20px auto 0;
        .f-left{
          width: 178px;
          height: 412px;
          background: #485b6a;
          float: left;
          img{
            width: 180px;
            height: 180px;
            margin: 20px auto;
            display: block;
          }
        }
        .f-cen{
          width: 352px;
          height: 412px;
          background: white;
          float: left;
          ul{
            li{
              width: 176px;
              height: 205px;
              float: left;
              overflow: hidden;
              .title{
                text-align: center;
                margin-top: 30px;
              }
              .title1{
                width: 140px;
                margin: 20px auto;
                font-size: 12px;
                color: #3c586d;
                text-align: center;
              }
              .el-button{
                font-size: 12px;
                padding: 6px 12px;
                display: block;
                margin: 20px auto 0;
              }
            }
          }
        }
        .f-right{
          width: 178px;
          height: 412px;
          background: #485b6a;
          float: right;
          img{
            width: 180px;
            height: 180px;
            margin: 20px auto;
            display: block;
          }
        }
      }
    }
    .aboutMe{
      width: 100%;
      height: 500px;
      background: #f2f2f2;
      overflow: hidden;
      .bg-title{
        margin: 62px auto 0;
        text-align: center;
        p{
          font-size: 16px;
          font-weight: bold;
        }
        span{
          display: block;
          font-size: 14px;
          color: #3c586d;
          margin-top: 10px;
        }
      }
      .about-bottom{
        width: 708px;
        height: 292px;
        margin: 40px auto 0;
        background: #d1d2d7;
        .about-left{
          width: 280px;
          height: 294px;
          float: left;
          img{
            width: 70%;
            height: 100%;
            display: block;
            margin-left: 30px;
          }
        }
        .about-cen{
          width: 146px;
          height: 295px;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .about-right{
          width: 282px;
          height: 100%;
          float: right;
          overflow: hidden;
          .title{
            text-align: center;
            margin-top: 30px;
          }
          .details{
            width: 240px;
            margin-top: 15px;
            font-size: 12px;
            color: #3c586d;
            text-align: center;
          }
          .el-button{
            font-size: 12px;
            padding: 6px 12px;
            display: block;
            margin: 20px 0 0 64px
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
    .Fruit-notes{
      width: 710px;
      height: 300px;
      position: absolute;
      top: 353px;
      left: 50%;
      background: white;
      box-shadow: 1px 2px 10px 0 #ccc;
      margin-left: -355px;
      z-index: 2;
      .notes-top{
        width: 100%;
        height: 156px;
        .notes-top-left{
          width: 210px;
          height: 100%;
          float: left;
          overflow: hidden;
          .title{
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #3c586d;
          }
          .poetry{
            margin-top: 10px;
            p{
              font-size: 12px;
              color: #797979;
              text-align: center;
              line-height: 20px;
            }
          }

        }
        .notes-top-right{
          width: 500px;
          height: 100%;
          float: right;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .notes-mid{
        width: 100%;
        height: 15px;
        background: #3c586d;
      }
      .notes-bottom{
        ul{
          display: flex;
          li{
            flex: 1;
            height: 128px;
            overflow: hidden;
            position: relative;
            b{
              width: 60px;
              height: 60px;
              display: block;
              position: absolute;
              top: 0;
              left: 50%;
              z-index: 3;
              margin-left: -30px;
              transition: all .8s linear;
              &:hover{
                transform: rotate(360deg);
              }
              p{
                width: 16px;
                height: 16px;
                background: url("../../static/image/gif/T1tm9.XdRnXXaHNz_X-16-16.gif");
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 2;
              }
            }
            div{
              width: 60px;
              height: 60px;
              margin: 0 auto;
            }
            .p1{
              text-align: center;
              margin-top: 4px;
              font-size: 13px;
              color: #3c586d;
            }
            span{
              display: block;
              margin: 1px auto;
              width: 30px;
              height: 3px;
              background: #ae9668;
            }
            .p2{
              width: 110px;
              margin: 4px auto 0;
              font-size: 12px;
              text-align: center;
              color: #797979;
            }
          }
        }
      }
    }
  }
</style>
