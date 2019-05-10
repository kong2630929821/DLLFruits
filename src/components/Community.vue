<template>
    <div>
      <section>
        <div class="release clearfix">
          <div class="releaseTop">
            <textarea v-model="inputContent"></textarea>
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
            <div class="iimg" @click="openImg">
              <img src="../../static/image/qq/img.png" alt="">
              <p>图片</p>
            </div>
            <input v-if="!src.length" @change="fileChange" class="f1" name="files" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple>
            <button @click="release">发布</button>
          </div>
          <!--表情-->
          <div class="icon" v-show="isShow">
            <div class="new"></div>
            <div class="icon1">
              <div class="close" @click="closeQQ">×</div>
              <ul class="clearfix qqul">
                  <li v-for="(v,i) in list" :key="i" :title="v.title"><img :src="v.src" alt="" @click="checkList(i)"></li>
              </ul>
            </div>
          </div>
          <!--图片-->
          <div class="icon2" v-show="imgShow">
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
          <ul class="list1">
            <li v-for="(v,index) in listOne" :key="index" @click="currentList(0,index)">
              <img class="upimg" :src="v.src.split('|')[0]" alt="">
              <p :title="v.p_content" v-html="v.p_content">
              </p>
              <strong class="fa fa-star-o u1"></strong>
              <span>{{v.p_collect}}</span>
              <b class="fa fa-thumbs-o-up"></b>
              <span>{{v.p_zan}}</span>
              <i class="fa fa-commenting-o"></i>
              <u>{{v.p_discuss + v.p_relay}}</u>
              <em class="fa fa-trash-o"></em>
            </li>
          </ul>
          <ul class="list2">
            <li v-for="(v,index) in listTwo" :key="index" @click="currentList(1,index)">
              <img class="upimg" :src="v.src.split('|')[0]" alt="">
              <p :title="v.p_content" v-html="v.p_content">
              </p>
              <strong class="fa fa-star-o u1"></strong>
              <span>{{v.p_collect}}</span>
              <b class="fa fa-thumbs-o-up"></b>
              <span>{{v.p_zan}}</span>
              <i class="fa fa-commenting-o"></i>
              <u>{{v.p_discuss + v.p_relay}}</u>
              <em class="fa fa-trash-o"></em>
            </li>
          </ul>
          <ul class="list3">
            <li v-for="(v,index) in listThree" :key="index" @click="currentList(2,index)">
              <img class="upimg" :src="v.src.split('|')[0]" alt="">
              <p :title="v.p_content" v-html="v.p_content">
              </p>
              <strong class="fa fa-star-o u1"></strong>
              <span>{{v.p_collect}}</span>
              <b class="fa fa-thumbs-o-up"></b>
              <span>{{v.p_zan}}</span>
              <i class="fa fa-commenting-o"></i>
              <u>{{v.p_discuss + v.p_relay}}</u>
              <em class="fa fa-trash-o"></em>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "Community",
        data(){
          return{
            list:[
              {title:'中国赞',src:'../../static/image/qq/2018new_zhongguozan_org.png'},
              {title:'广告',src:'../../static/image/qq/2018new_guanggao_thumb.png'},
              {title:'二哈',src:'../../static/image/qq/2018new_erha_org.png'},
              {title:'喵喵',src:'../../static/image/qq/2018new_miaomiao_org.png'},
              {title:'单身汪',src:'../../static/image/qq/2018new_doge02_org.png'},
              {title:'爱你',src:'../../static/image/qq/mickey_aini_thumb.png'},
              {title:'比心',src:'../../static/image/qq/mickey_bixin_org.png'},
              {title:'猪头',src:'../../static/image/qq/2018new_zhutou_thumb.png'},
              {title:'我爱你',src:'../../static/image/qq/2018new_aini_org.png'},
              {title:'拜拜',src:'../../static/image/qq/2018new_baibai_thumb.png'},
              {title:'抱抱',src:'../../static/image/qq/2018new_baobao_thumb.png'},
              {title:'悲伤',src:'../../static/image/qq/2018new_beishang_org.png'},
              {title:'并不简单',src:'../../static/image/qq/2018new_bingbujiandan_thumb.png'},
              {title:'鄙视',src:'../../static/image/qq/2018new_bishi_org.png'},
              {title:'闭嘴',src:'../../static/image/qq/2018new_bizui_org.png'},
              {title:'馋嘴',src:'../../static/image/qq/2018new_chanzui_org.png'},
              {title:'吃瓜',src:'../../static/image/qq/2018new_chigua_thumb.png'},
              {title:'吃惊',src:'../../static/image/qq/2018new_chijing_org.png'},
              {title:'憧憬',src:'../../static/image/qq/2018new_chongjing_org.png'},
              {title:'打哈欠',src:'../../static/image/qq/2018new_dahaqian_org.png'},
              {title:'打脸',src:'../../static/image/qq/2018new_dalian_org.png'},
              {title:'咚',src:'../../static/image/qq/2018new_ding_org.png'},
              {title:'跪',src:'../../static/image/qq/2018new_gui_org.png'},
              {title:'鼓掌',src:'../../static/image/qq/2018new_guzhang_thumb.png'},
              {title:'哈哈',src:'../../static/image/qq/2018new_haha_thumb.png'},
              {title:'害羞',src:'../../static/image/qq/2018new_haixiu_org.png'},
              {title:'汗',src:'../../static/image/qq/2018new_han_org.png'},
              {title:'黑线',src:'../../static/image/qq/2018new_heixian_org.png'},
              {title:'哼',src:'../../static/image/qq/2018new_heng_thumb.png'},
              {title:'坏笑',src:'../../static/image/qq/2018new_huaixiao_org.png'},
              {title:'花心',src:'../../static/image/qq/2018new_huaxin_org.png'},
              {title:'互粉',src:'../../static/image/qq/2018new_hufen02_org.png'},
              {title:'挤眼',src:'../../static/image/qq/2018new_jiyan_org.png'},
              {title:'可爱',src:'../../static/image/qq/2018new_keai_org.png'},
              {title:'可怜',src:'../../static/image/qq/2018new_kelian_org.png'},
              {title:'口罩',src:'../../static/image/qq/2018new_kouzhao_thumb.png'},
              {title:'酷',src:'../../static/image/qq/2018new_ku_org.png'},
              {title:'困',src:'../../static/image/qq/2018new_kun_thumb.png'},
              {title:'苦笑',src:'../../static/image/qq/2018new_kuxiao_org.png'},
              {title:'懒得理你',src:'../../static/image/qq/2018new_landelini_org.png'},
              {title:'泪',src:'../../static/image/qq/2018new_leimu_org.png'},
              {title:'疑问',src:'../../static/image/qq/2018new_ningwen_org.png'},
              {title:'怒',src:'../../static/image/qq/2018new_nu_thumb.png'},
              {title:'钱',src:'../../static/image/qq/2018new_qian_thumb.png'},
              {title:'亲亲',src:'../../static/image/qq/2018new_qinqin_thumb.png'},
              {title:'傻眼',src:'../../static/image/qq/2018new_shayan_org.png'},
              {title:'生病',src:'../../static/image/qq/2018new_shengbing_thumb.png'},
              {title:'失望',src:'../../static/image/qq/2018new_shiwang_thumb.png'},
              {title:'衰',src:'../../static/image/qq/2018new_shuai_thumb.png'},
              {title:'睡觉',src:'../../static/image/qq/2018new_shuijiao_thumb.png'},
              {title:'思考',src:'../../static/image/qq/2018new_sikao_org.png'},
              {title:'太开心',src:'../../static/image/qq/2018new_taikaixin_org.png'},
              {title:'摊手',src:'../../static/image/qq/2018new_tanshou_org.png'},
              {title:'舔屏',src:'../../static/image/qq/2018new_tianping_thumb.png'},
              {title:'偷笑',src:'../../static/image/qq/2018new_touxiao_org.png'},
              {title:'吐',src:'../../static/image/qq/2018new_tu_org.png'},
              {title:'挖鼻',src:'../../static/image/qq/2018new_wabi_thumb.png'},
              {title:'委屈',src:'../../static/image/qq/2018new_weiqu_thumb.png'},
              {title:'威武',src:'../../static/image/qq/2018new_weiwu_org.png'},
              {title:'微笑',src:'../../static/image/qq/2018new_weixioa02_org.png'},
              {title:'问号',src:'../../static/image/qq/2018new_wenhao_thumb.png'},
              {title:'捂眼',src:'../../static/image/qq/2018new_wu_thumb.png'},
              {title:'笑而不语',src:'../../static/image/qq/2018new_xiaoerbuyu_org.png'},
              {title:'笑哭',src:'../../static/image/qq/2018new_xiaoku_thumb.png'},
              {title:'嘻嘻',src:'../../static/image/qq/2018new_xixi_thumb.png'},
              {title:'嘘',src:'../../static/image/qq/2018new_xu_org.png'},
              {title:'阴险',src:'../../static/image/qq/2018new_yinxian_org.png'},
              {title:'左哼哼',src:'../../static/image/qq/2018new_zuohengheng_thumb.png'},
              {title:'右哼哼',src:'../../static/image/qq/2018new_youhengheng_thumb.png'},
              {title:'晕',src:'../../static/image/qq/2018new_yun_thumb.png'},
              {title:'咒骂',src:'../../static/image/qq/2018new_zhouma_thumb.png'},
              {title:'抓狂',src:'../../static/image/qq/2018new_zhuakuang_org.png'},
              {title:'赞',src:'../../static/image/qq/2018new_zan_org.png'},
              {title:'很棒',src:'../../static/image/qq/2018new_good_org.png'},
              {title:'过来',src:'../../static/image/qq/2018new_guolai_thumb.png'},
              {title:'哈哈手势',src:'../../static/image/qq/2018new_hahashoushi_org.png'},
              {title:'加油',src:'../../static/image/qq/2018new_jiayou_org.png'},
              {title:'不',src:'../../static/image/qq/2018new_no_org.png'},
              {title:'好的',src:'../../static/image/qq/2018new_ok_org.png'},
              {title:'拳头',src:'../../static/image/qq/2018new_quantou_thumb.png'},
              {title:'弱',src:'../../static/image/qq/2018new_ruo_org.png'},
              {title:'握手',src:'../../static/image/qq/2018new_woshou_thumb.png'},
              {title:'耶',src:'../../static/image/qq/2018new_ye_thumb.png'},
              {title:'作揖',src:'../../static/image/qq/2018new_zuoyi_org.png'}
            ],
            inputContent:'',
            isShow:false,
            imgShow:false,
            input:[],
            src:[],
            expression:'',
            addImg:true,
            userInfo:{},
            topicList:[],
            listOne:[],
            listTwo:[],
            listThree:[],
            str:''
          }
        },
      methods:{
        //修改成功弹框
        set(msg){
          this.$message({
            message: msg,
            type: 'success'
          });
        },
        //打开QQ表情
        openQQ(){
          this.isShow=!this.isShow;
        },
        //关闭QQ表情
        closeQQ(){
          this.isShow = false;
        },
        //打开图片展示
        openImg(){
          this.imgShow = true;
        },
        //关闭图片展示
        closeImg(){
          this.imgShow = false;
        },
        //添加图片
        fileChange(){
          this.imgShow = true;
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
          console.log(f1);
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
        //删除某个图片
        currentImg(index){
          this.src.splice(index,1);
          if(this.src.length<9){
            this.addImg = true;
          }
        },
        //选择某个QQ表情
        checkList(index){
          this.inputContent = this.inputContent+'['+this.list[index].title+']';
        },
        //发布
        release(){
          console.log(this.inputContent);
          const oDate1=new Date();
          const oDate=oDate1.getFullYear()+'-'+(oDate1.getMonth()+1)+'-'+oDate1.getDate()+' '+oDate1.getHours()+':'+oDate1.getMinutes()+':'+oDate1.getSeconds();
          console.log(oDate);
          const  name=[];
          var formData=new FormData();
          for(let i=0;i<this.input.length;i++){
            formData.append('files',this.input[i]);
            console.log(this.input[i].name);
            name.push(this.input[i].name);
          }
          this.$axios({
            method: 'post',
            url:'/api/release',
            data:{
              id:this.$store.state.userInfo.u_id,
              content:this.inputContent,
              date:oDate,
              src:name
            }
          }).then(res1=>{
            console.log(res1);
            const id=res1.data.id;
            if(res1.data.error){
              this.$axios({
                method:'post',
                url:'/api/upload',
                data:formData
              }).then(res2=>{
                if(!res2.data.error){
                  this.set('发布成功！');
                  this.imgShow = false;
                  let data={
                    p_id:id,
                    p_content:this.inputContent,
                    u_id:this.userInfo.u_id,
                    p_zan:0,
                    p_discuss:0,
                    p_collect:0,
                    p_relay:0,
                    p_time:oDate,
                    src:this.src[0]||""
                  };
                  const reg=/[[\u4e00-\u9fa5]+]/g;
                  data.p_content=data.p_content.replace(reg,(word)=>{
                    console.log(word);
                    const str=word.substring(1,word.length-1);
                    this.list.forEach(v=>{
                      if(v.title==str){
                        word=v.src
                      }
                    });
                    return '<img src="'+word+'">'
                  });
                  console.log(data);
                  console.log(this.listOne);
                  this.listOne.push(data);
                  this.inputContent='';
                  this.isShow=false;
                  this.imgShow=false;
                }
              })
            }
          })
        },
        //点击进入详情
        currentList(currentIndex,j){
          console.log(currentIndex,j);
          let id=null;
          if(currentIndex==0){
            id= this.listOne[j].p_id;
          }else if(currentIndex==1){
            id= this.listTwo[j].p_id;
          }else{
            id= this.listThree[j].p_id;
          }
          localStorage.setItem('currentTopic',JSON.stringify(id));
          this.$router.push({name:'information',params:{id}});
        }
      },
      mounted(){
        this.userInfo=this.$store.state.userInfo;
        this.$axios({
          method:'post',
          url:'/api/getAllTopics'
        }).then(res=>{
          if(res.data.data.length){
            this.topicList=res.data.data;
            const reg=/[[\u4e00-\u9fa5]+]/g;
            this.topicList.forEach(v=>{
              v.p_content=v.p_content.replace(reg,(word)=>{
                const str=word.substring(1,word.length-1);
                this.list.forEach(v=>{
                    if(v.title==str){
                      word=v.src
                    }
                });
                return '<img src="'+word+'">'
              });
            });
            console.log('这是全部话题',this.topicList);
            this.listOne.push(this.topicList[0]);
            this.topicList.unshift();
            this.topicList.forEach(v=>{
              function getrandom(n,m) {
                return Math.floor(Math.random()*(m-n)+n)
              }
              const i = getrandom(0,3);
              if(i==0){
                this.listOne.push(v);
              }else if(i==1){
                this.listTwo.push(v);
              }else{
                this.listThree.push(v);
              }
            })
          }
        })
      },
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
  .enter{
    color: rgb(30, 151, 162);
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
          line-height: 23px;
          overflow: hidden;
          padding: 0 4px;
          img{
            width: 21px;
            height: 21px;
            margin-left: 3px;
          }
        }
        span{
          list-style: none;
          color:#b9b7be;
        }
        b{
          margin: 10px 4px 10px 10px;
          color: #b9b7be;
        }
        em{
          margin: 10px 20px;
          color: #b9b7be;
        }
        u{
          text-decoration: none;
          color:#b9b7be;
        }
        i{
          margin: 10px 4px 10px 10px;
          color: #b9b7be;
        }
        strong{
          margin: 10px 10px;
          color: #b9b7be;
        }
        &:hover{
          border: @btn_border;
          box-shadow: 4px 4px 6px #999;
        }
      }
    }
  }
</style>
