<template>
    <div>
      <section>
        <div class="release clearfix">
          <div class="releaseTop">
            <textarea></textarea>
            <div class="ok clearfix">
              <div class="div1"></div>
              <p>发布成功</p>
            </div>
          </div>
          <div class="releaseBottom">
            <div class="iface" @click="openQQ">
              <img src="../../static/image/qq/face.png" alt="">
              <p>表情</p>
            </div>
            <div class="iimg">
              <img src="../../static/image/qq/img.png" alt="">
              <p>图片</p>
            </div>
            <input @change="fileChange" class="f1" name="files" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple>
            <button>发布</button>
          </div>
          <!--表情-->
          <div class="icon" v-show="isShow">
            <div class="new"></div>
            <div class="icon1">
              <div class="close" @click="closeQQ">×</div>
              <ul class="clearfix qqul">
                <li title="中国赞"><img src="../../static/image/qq/2018new_zhongguozan_org.png" alt=""></li>
                <li title="广告"><img src="../../static/image/qq/2018new_guanggao_thumb.png" alt=""></li>
                <li title="二哈"><img src="../../static/image/qq/2018new_erha_org.png" alt=""></li>
                <li title="喵喵"><img src="../../static/image/qq/2018new_miaomiao_org.png" alt=""></li>
                <li title="单身汪"><img src="../../static/image/qq/2018new_doge02_org.png" alt=""></li>
                <li title="爱你"><img src="../../static/image/qq/mickey_aini_thumb.png" alt=""></li>
                <li title="比心"><img src="../../static/image/qq/mickey_bixin_org.png" alt=""></li>
                <li title="猪头"><img src="../../static/image/qq/2018new_zhutou_thumb.png" alt=""></li>
                <li title="我爱你"><img src="../../static/image/qq/2018new_aini_org.png" alt=""></li>
                <li title="拜拜"><img src="../../static/image/qq/2018new_baibai_thumb.png" alt=""></li>
                <li title="抱抱"><img src="../../static/image/qq/2018new_baobao_thumb.png" alt=""></li>
                <li title="悲伤"><img src="../../static/image/qq/2018new_beishang_org.png" alt=""></li>
                <li title="并不简单"><img src="../../static/image/qq/2018new_bingbujiandan_thumb.png" alt=""></li>
                <li title="鄙视"><img src="../../static/image/qq/2018new_bishi_org.png" alt=""></li>
                <li title="闭嘴"><img src="../../static/image/qq/2018new_bizui_org.png" alt=""></li>
                <li title="馋嘴"><img src="../../static/image/qq/2018new_chanzui_org.png" alt=""></li>
                <li title="吃瓜"><img src="../../static/image/qq/2018new_chigua_thumb.png" alt=""></li>
                <li title="吃惊"><img src="../../static/image/qq/2018new_chijing_org.png" alt=""></li>
                <li title="憧憬"><img src="../../static/image/qq/2018new_chongjing_org.png" alt=""></li>
                <li title="打哈欠"><img src="../../static/image/qq/2018new_dahaqian_org.png" alt=""></li>
                <li title="打脸"><img src="../../static/image/qq/2018new_dalian_org.png" alt=""></li>
                <li title="咚"><img src="../../static/image/qq/2018new_ding_org.png" alt=""></li>
                <li title="跪"><img src="../../static/image/qq/2018new_gui_org.png" alt=""></li>
                <li title="鼓掌"><img src="../../static/image/qq/2018new_guzhang_thumb.png" alt=""></li>
                <li title="哈哈"><img src="../../static/image/qq/2018new_haha_thumb.png" alt=""></li>
                <li title="害羞"><img src="../../static/image/qq/2018new_haixiu_org.png" alt=""></li>
                <li title="汗"><img src="../../static/image/qq/2018new_han_org.png" alt=""></li>
                <li title="黑线"><img src="../../static/image/qq/2018new_heixian_org.png" alt=""></li>
                <li title="哼"><img src="../../static/image/qq/2018new_heng_thumb.png" alt=""></li>
                <li title="坏笑"><img src="../../static/image/qq/2018new_huaixiao_org.png" alt=""></li>
                <li title="花心"><img src="../../static/image/qq/2018new_huaxin_org.png" alt=""></li>
                <li title="互粉"><img src="../../static/image/qq/2018new_hufen02_org.png" alt=""></li>
                <li title="挤眼"><img src="../../static/image/qq/2018new_jiyan_org.png" alt=""></li>
                <li title="可爱"><img src="../../static/image/qq/2018new_keai_org.png" alt=""></li>
                <li title="可怜"><img src="../../static/image/qq/2018new_kelian_org.png" alt=""></li>
                <li title="口罩"><img src="../../static/image/qq/2018new_kouzhao_thumb.png" alt=""></li>
                <li title="酷"><img src="../../static/image/qq/2018new_ku_org.png" alt=""></li>
                <li title="困"><img src="../../static/image/qq/2018new_kun_thumb.png" alt=""></li>
                <li title="苦笑"><img src="../../static/image/qq/2018new_kuxiao_org.png" alt=""></li>
                <li title="懒得理你"><img src="../../static/image/qq/2018new_landelini_org.png" alt=""></li>
                <li title="泪"><img src="../../static/image/qq/2018new_leimu_org.png" alt=""></li>
                <li title="疑问"><img src="../../static/image/qq/2018new_ningwen_org.png" alt=""></li>
                <li title="怒"><img src="../../static/image/qq/2018new_nu_thumb.png" alt=""></li>
                <li title="钱"><img src="../../static/image/qq/2018new_qian_thumb.png" alt=""></li>
                <li title="亲亲"><img src="../../static/image/qq/2018new_qinqin_thumb.png" alt=""></li>
                <li title="傻眼"><img src="../../static/image/qq/2018new_shayan_org.png" alt=""></li>
                <li title="生病"><img src="../../static/image/qq/2018new_shengbing_thumb.png" alt=""></li>
                <li title="失望"><img src="../../static/image/qq/2018new_shiwang_thumb.png" alt=""></li>
                <li title="衰"><img src="../../static/image/qq/2018new_shuai_thumb.png" alt=""></li>
                <li title="睡觉"><img src="../../static/image/qq/2018new_shuijiao_thumb.png" alt=""></li>
                <li title="思考"><img src="../../static/image/qq/2018new_sikao_org.png" alt=""></li>
                <li title="太开心"><img src="../../static/image/qq/2018new_taikaixin_org.png" alt=""></li>
                <li title="摊手"><img src="../../static/image/qq/2018new_tanshou_org.png" alt=""></li>
                <li title="舔屏"><img src="../../static/image/qq/2018new_tianping_thumb.png" alt=""></li>
                <li title="偷笑"><img src="../../static/image/qq/2018new_touxiao_org.png" alt=""></li>
                <li title="吐"><img src="../../static/image/qq/2018new_tu_org.png" alt=""></li>
                <li title="挖鼻"><img src="../../static/image/qq/2018new_wabi_thumb.png" alt=""></li>
                <li title="委屈"><img src="../../static/image/qq/2018new_weiqu_thumb.png" alt=""></li>
                <li title="威武"><img src="../../static/image/qq/2018new_weiwu_org.png" alt=""></li>
                <li title="微笑"><img src="../../static/image/qq/2018new_weixioa02_org.png" alt=""></li>
                <li title="问号"><img src="../../static/image/qq/2018new_wenhao_thumb.png" alt=""></li>
                <li title="捂眼"><img src="../../static/image/qq/2018new_wu_thumb.png" alt=""></li>
                <li title="笑而不语"><img src="../../static/image/qq/2018new_xiaoerbuyu_org.png" alt=""></li>
                <li title="笑哭"><img src="../../static/image/qq/2018new_xiaoku_thumb.png" alt=""></li>
                <li title="嘻嘻"><img src="../../static/image/qq/2018new_xixi_thumb.png" alt=""></li>
                <li title="嘘"><img src="../../static/image/qq/2018new_xu_org.png" alt=""></li>
                <li title="阴险"><img src="../../static/image/qq/2018new_yinxian_org.png" alt=""></li>
                <li title="左哼哼"><img src="../../static/image/qq/2018new_zuohengheng_thumb.png" alt=""></li>
                <li title="右哼哼"><img src="../../static/image/qq/2018new_youhengheng_thumb.png" alt=""></li>
                <li title="晕"><img src="../../static/image/qq/2018new_yun_thumb.png" alt=""></li>
                <li title="咒骂"><img src="../../static/image/qq/2018new_zhouma_thumb.png" alt=""></li>
                <li title="抓狂"><img src="../../static/image/qq/2018new_zhuakuang_org.png" alt=""></li>
                <li title="赞"><img src="../../static/image/qq/2018new_zan_org.png" alt=""></li>
                <li title="很棒"><img src="../../static/image/qq/2018new_good_org.png" alt=""></li>
                <li title="过来"><img src="../../static/image/qq/2018new_guolai_thumb.png" alt=""></li>
                <li title="哈哈手势"><img src="../../static/image/qq/2018new_hahashoushi_org.png" alt=""></li>
                <li title="加油"><img src="../../static/image/qq/2018new_jiayou_org.png" alt=""></li>
                <li title="不"><img src="../../static/image/qq/2018new_no_org.png" alt=""></li>
                <li title="好的"><img src="../../static/image/qq/2018new_ok_org.png" alt=""></li>
                <li title="拳头"><img src="../../static/image/qq/2018new_quantou_thumb.png" alt=""></li>
                <li title="弱"><img src="../../static/image/qq/2018new_ruo_org.png" alt=""></li>
                <li title="握手"><img src="../../static/image/qq/2018new_woshou_thumb.png" alt=""></li>
                <li title="耶"><img src="../../static/image/qq/2018new_ye_thumb.png" alt=""></li>
                <li title="作揖"><img src="../../static/image/qq/2018new_zuoyi_org.png" alt=""></li>
              </ul>
            </div>
          </div>
          <!--图片-->
          <div class="icon2">
            <div class="new"></div>
            <p>本地上传</p>
            <div class="close1" @click="closeImg">×</div>
            <em>最多选择9张图片上传</em>
            <ul class="icon3 clearfix">
              <li v-for="(v,i) in src" :key="i">
                <img :src="v" alt="">
                <div>
                  <p @click="currentImg(i)">×</p>
                </div>
              </li>
              <div @change="f2Change" class="push" v-show="addImg"><p>+</p><input type="file" class="f2" name="files" accept="image/jpg,image/jpeg,image/png,image/gif" multiple></div>
            </ul>
          </div>
        </div>
        <div class="list clearfix">
          <ul class="list1"></ul>
          <ul class="list2"></ul>
          <ul class="list3"></ul>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "Community",
        data(){
          return{
            isShow:false,
            imgShow:false,
            input:[],
            src:[],
            addImg:true
          }
        },
      methods:{
        openQQ(){
          this.isShow=!this.isShow;
        },
        closeQQ(){
          this.isShow = false;
        },
        openImg(){
          this.imgShow = true;
        },
        closeImg(){
          this.imgShow = false;
        },
        //添加图片
        fileChange(){
          const f1 = document.querySelector('.f1').files;
          this.src = [];
          const that = this;
          this.input.push(...f1);
          this.input.forEach((v,i)=>{
            if(i<9){
              const oFReader = new FileReader(); /*创建一个文件阅读器*/
              const file = v;
              oFReader.readAsDataURL(file);
              oFReader.onloadend = function(ev){
                  /*或者目标文件的解析结果*/
                  const src1 = ev.target.result;
                  that.src.push(src1);
                  if(that.src.length>=9){
                    that.addImg = false;
                  }
            }
            }
          });
          console.log(this.src);
        },
        //第二次添加图片
        f2Change(){
          const f1 = document.querySelector('.f2').files;
          this.src = [];
          const that = this;
          this.input.push(...f1);
          this.input.forEach((v,i)=>{
            if(i<9){
              const oFReader = new FileReader(); /*创建一个文件阅读器*/
              const file = v;
              oFReader.readAsDataURL(file);
              oFReader.onloadend = function(ev){
                  /*或者目标文件的解析结果*/
                  const src1 = ev.target.result;
                  that.src.push(src1);
                  if(that.src.length>=9){
                    that.addImg = false;
                  }
            }
            }
          });
          console.log(this.src);
        },
        currentImg(index){
          console.log(index);
        }
      },
      computed:{
        
      }
    }
</script>

<style scoped lang="less">
  @fontSize:15px;//默认字体
  @fontTitle:12px;
  @fontColor:#333;//默认字体颜色：
  @btn_color:#1e97a2;//按钮颜色：
  @btn_hoverColor:#1e97a2;//按钮移入颜色：
  @btn_hoverFontColor:#fff;//按钮移入字体颜色：
  @btn_border:1px solid #1e97a2;//按钮边框：
  @btn_radius:5px;//按钮的幅度：
  @navHoverColor:#1e97a2;//导航栏移入颜色：
  @bgColor:#FAFAFA;//背景颜色：
  @liWidth:356px;
  @liHeight:348px;
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .clearfix:after{
    content: "";
    display: block;
    clear: both;
  }
  body{
    background: @bgColor;
  }
  section{
    //overflow: hidden;
    .release{
      width: 724px;
      height: 104px;
      margin: 15px auto;
      background: white;
      box-shadow: 2px 2px 6px #999;
      position: relative;
      .releaseTop{
        width: 100%;
        height: 74px;
        position: relative;
        textarea{
          width: 708px;
          height: 56px;
          padding: 8px;
          resize: none;
          line-height: 18px;
          font-size: 12px;
          color: @fontColor;
          overflow: hidden;
          word-wrap:break-word;
        }
        .ok{
          display: none;
          width: 116px;
          height: 50px;
          position: absolute;
          top: 11px;
          left: 306px;
          div{
            float: left;
            width: 50px;
            height: 50px;
            background: url("../../static/image/qq/icon.png")no-repeat -367px 5px;
          }
          p{
            height: 50px;
            line-height: 50px;
            color: @fontColor;
            float: left;
          }
        }
      }
      .releaseBottom{
        width: 726px;
        height: 30px;
        position: relative;
        .iface{
          width: 80px;
          height: 30px;
          float: left;
          overflow: hidden;
          cursor: pointer;
          img{
            float: left;
            margin-top: 4px;
          }
          p{
            height: 100%;
            font-size: @fontSize;
            color: @fontColor;
            float: left;
            line-height: 30px;
            margin-left: 8px;
          }
          &:hover p{
            color: @btn_hoverColor;
          }
        }
        .iimg{
          width: 80px;
          height: 30px;
          float: left;
          overflow: hidden;
          cursor: pointer;
          img{
            float: left;
            margin-top: 4px;
          }
          p{
            height: 100%;
            font-size: @fontSize;
            color: @fontColor;
            float: left;
            line-height: 30px;
            margin-left: 8px;
          }
          &:hover p{
            color: @btn_hoverColor;
          }
        }
        input{
          width:80px;
          height: 100%;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 80px;
        }
        button{
          width: 86px;
          height: 100%;
          float: right;
          font-size: @fontSize;
          background: @btn_color;
          border: none;
          outline: none;
          color: white;
        }
      }
      .icon{
        width: 430px;
        height: 258px;
        border: 1px solid #e8e8e8;
        box-shadow: 4px 5px 6px #999;
        position: absolute;
        top: 104px;
        left: 0;
        z-index: 10;
        background: #fff;
        border-radius: 3px;
        cursor: pointer;
        .new{
          border: 8px solid white;
          border-bottom-color: #cccccc;
          position: absolute;
          top: -8px;
          left: 19px;
          z-index: 4;
        }
        .icon1{
          width: 373px;
          height: 218px;
          margin: 20px auto;
          position: relative;
          .close{
            color: @fontColor;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            position: absolute;
            top: -17px;
            right: -24px;
            cursor: pointer;
            &:hover{
              color: @btn_color;
            }
          }
          ul{
            li{
              width: 26px;
              height: 22px;
              border: 1px solid #e8e8e8;
              overflow: hidden;
              margin: -1px 0 0 -1px;
              padding: 4px 2px;
              text-align: center;
              float: left;
              img{
                width: 22px;
                height: 22px;
              }
              &:hover{
                border: @btn_border;
                background: #fff9ec;
                position: relative;
                z-index: 2;
              }
            }
          }
        }
      }
      .icon2{
        width: 252px;
        border: 1px solid #e8e8e8;
        box-shadow: 4px 5px 6px #999;
        overflow: hidden;
        padding: 16px 16px 10px 16px;
        background: white;
        position: absolute;
        top: 104px;
        left: 0;
        z-index: 1;
        cursor: pointer;
        .new{
          border: 8px solid white;
          border-bottom-color: #cccccc;
          position: absolute;
          top: -9px;
          left: 98px;
          z-index: 4;
        }
        p{
          margin: -11px 0 10px;
          font-size: @fontSize;
          font-weight: bold;
        }
        .close1{
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          position: absolute;
          top: 4px;
          right: 5px;
          &:hover{
            color: @btn_color;
          }
        }
        em{
          font-style: normal;
          font-size: @fontSize;
          color: @fontColor;
        }
        .icon3{
          margin: 10px auto;
          li{
            width: 80px;
            height: 80px;
            margin: 2px;
            float: left;
            position: relative;
            img{
              width: 80px;
              height: 80px;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 12;
            }
            div{
              width: 100%;
              height: 100%;
              display: none;
              overflow: hidden;
              background: rgba(0,0,0,0.4);
              position: relative;
              top: 0;
              left: 0;
              z-index: 14;
              p{
                width: 20px;
                height: 20px;
                color: white;
                position: absolute;
                top: 13px;
                right: -1px;
              }
            }
            &:hover div{
              display: block;
            }
          }
          .push{
            float: left;
            border: 1px dashed @fontColor;
            margin: 2px;
            position: relative;
            &:hover{
              border: 1px dashed @btn_color;
            }
            &:hover p{
              color: @btn_color;
            }
            p{
              position: absolute;
              top: 28px;
              left: 29px;
              font-size: 30px;
              color: #999;
            }
            input{
              width: 78px;
              height: 80px;
              opacity: 0;
            }
          }
        }
      }
    }
    .list{
      margin: 0 auto;
      width: 744px;
      background: #FFFFFF;
      ul{
        float: left;
      }
      li{
        width: 234px;
        font-size: @fontTitle;
        cursor: pointer;
        margin-left: 10px;
        margin-bottom: 15px;
        border:1px solid white;
        box-shadow: 2px 2px 6px #999;
        .upimg{
          width: 100%;
          height: 244px;
        }
        p{
          width: 100%;
          height: 46px;
          color: @fontColor;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          line-height: 22px;
          overflow: hidden;
          img{
            width: 21px;
            height: 21px;
            margin-left: 3px;
          }
        }
        span{
          list-style: none;
          color:#b9b7be;
          margin-left: 3px;
        }
        u{
          text-decoration: none;
          color:#b9b7be;
          margin-left: 3px;
        }
        strong{
          margin-right: 20px;
        }
        &:hover{
          border: @btn_border;
          box-shadow: 4px 4px 6px #999;
        }
      }
    }
  }
</style>
