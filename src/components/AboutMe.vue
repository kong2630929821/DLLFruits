<template>
    <div id="about-me">
      <div class="bg">
        <img src="../../static/image/aboutMe/3.jpg" alt="">
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
          </div>
        </div>
      </div>
      <div class="express">
        <div class="bg-title">
          <p>快递服务</p>
          <span>我们做事，你们放心</span>
        </div>
        <div class="inf clearfix">
          <div class="inf-left">
            <img src="../../static/image/aboutMe/express.png" alt="">
          </div>
          <div class="inf-right">
            <p class="title">快递介绍</p>
            <p class="list-1">
              速运公司成立于1980年4月，是中国最早成立的全国性专业运输公司之一。经过多年的诚信经营，公司已与全世界142个国家，地区建立了广泛的业务合作关系，为中国
              的改革开放个中国电子工业的发展做出了重要贡献。公司具有国际贸易、国际工程承包、招标代理、展览广告等多种业务的甲级经营资质。截至2009年底，公司总资产达142.4亿元人民币，实现销售收入42.4亿元人民币，业务范园步及国际贸易，海外工程.防务电子，船舶业务，招标业务，展览广告及现代物流等多个领域
            </p>
            <!--<p class="list-2">-->
              <!--速运行业结内是国民经济结构的重要组成部分。运输是发展国民经济的基础，在社会扩大生产过程中处于纽带地位，因此，在建设上要超前，在运输能力上要保有后备，以便发挥运输业的先行作用。建立合理的运输业结构，是以指高经济效益和满足社会需要为目标，既要充分发挥各种运输方式的技术经济优势，又要保-->
              <!--持各种运输方式的平衡衔接和按比例协调发展……-->
            <!--</p>-->
            <p class="list-3">做人、做事、做生意；微利经营，以质、量取胜质量，诚信，人品共赢，为顾客提供优质、便捷、安全、高效的物流服务，想顾客所想，急顾客所急，帮顾客所需，让顾客满意</p>
          </div>
        </div>
      </div>
      <div class="server">
        <img src="../../static/image/aboutMe/peopleServer.png" alt="">
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
        name: "AboutMe"
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
  #about-me{
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
            line-height: 20px;
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
    .express{
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
      .inf{
        width: 763px;
        height: 296px;
        margin: 40px auto 0;
        .inf-left{
          width: 354px;
          height: 296px;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .inf-right{
          width: 408px;
          height: 296px;
          float: left;
          overflow: hidden;
          .title{
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
          }
          .list-1{
            font-size: 12px;
            width: 356px;
            margin: 10px auto 0;
            text-indent: 1rem;
            color: #3c586d;
            line-height: 20px;
            text-align: center;
          }
          .list-3{
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            width: 356px;
            margin: 10px auto 0;
            color: #3c586d;
          }
        }
      }
    }
    .server{
      width: 100%;
      height: 430px;
      margin: 50px auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
