<template>
    <div>
      <div class="information">
        <div class="top clearfix">
          <img :src="currentTopic.head" alt="" class="hair">
          <div class="user">{{currentTopic.name}}</div>
          <div class="time">{{currentTopic.p_time}}</div>
        </div>
        <div class="mid">
          <img v-for="(v,index) in currentTopic.src" :key="index" :src="v" alt="">
        </div>
        <div class="bottom" v-html="currentTopic.p_content"></div>
        <div class="count">
          <strong class="fa fa-star-o u1" @click="collect" ref="collect"></strong>
          <span>{{currentTopic.p_collect}}</span>
          <b class="fa fa-thumbs-o-up" @click="zan" ref="zan"></b>
          <span>{{currentTopic.p_zan}}</span>
          <i class="fa fa-commenting-o"></i>
          <u>{{currentTopic.p_relay + currentTopic.p_discuss}}</u>
          <em class="fa fa-trash-o" v-show="currentTopic.u_id==userInfo.u_id" @click="deleteTopic"></em>
        </div>
        <div class="cont">
          <div v-for="(v,index) in discussList" :key="index">
              <div class="single-reply clearfix">
                <img class="ui-avatar" :src="v.u_img" alt="">
                <div class="comments-content">
                  <a href="">{{v.u_name}}</a>:
                  <em class="em1" v-html="v.d_content"></em>
                  <div class="ri">
                    <em class="em2" :title="v.d_time">{{v.d_time.substring(7,15)}}</em>
                    <i class="fa fa-commenting-o i1" @click="respondent(index)"></i>
                    <em class="fa fa-trash-o em3" @click="removeDiscuss(index)"></em>
                  </div>
                </div>
              </div>

            <div class="comments-list">
              <ul>
                <li v-for="(v1,i) in v.replyArr" :key="i">
                  <div class="single1-reply clearfix">
                    <img class="ui-avatar" :src="v1.r_meSrc" alt="">
                    <div class="comments-content">
                      <a class="a1" href="">{{v1.r_meName}}</a>
                      <i class="i4">回复</i>
                      <a class="a2" href="">{{v1.r_heName}}</a>
                      <em class="em7" v-html="v1.r_content"></em>
                      <div class="ri1">
                        <em class="em5" :title="v1.r_time">{{v1.r_time.substring(8,16)}}</em>
                        <i class="fa fa-commenting-o i2" @click="respondented(index,i)"></i>
                        <em class="fa fa-trash-o em4" @click="removeReply(index,i)"></em>
                      </div>
                    </div>
                  </div>

                  <div class="single1-reply clearfix" v-for="(v2,j) in v1.replyArrList" :key="j">
                    <img class="ui-avatar" :src="v2.r_meSrc" alt="">
                    <div class="comments-content">
                      <a class="a1" href="">{{v2.r_meName}}</a>
                      <i class="i4">回复</i>
                      <a class="a2" href="">{{v2.r_heName}}</a>
                      <em class="em7" v-html="v2.r_content"></em>
                      <div class="ri1">
                        <em class="em5" :title="v2.r_time">{{v2.r_time.substring(8,16)}}</em>
                        <i class="fa fa-commenting-o i2" @click="respondented(index,i)"></i>
                        <em class="fa fa-trash-o em4" @click="removeReplys(index,i,j)"></em>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>


          </div>

        </div>
        <div class="write">
          <div class="single" @click="changeShow" v-show="!isShow">
            <a>评论</a>
          </div>
          <div class="text" v-show="isShow">
            <textarea v-model="inputContent" :placeholder="prompt"></textarea>
            <div class="div1">
              <img src="../../static/image/qq/face.png" alt="" class="qq" @click="changeQQShow">
              <button class="btn2" @click="reply">{{btnName}}</button>
              <div class="icon" v-show="isQQShow">
                <div class="new"></div>
                <div class="icon1">
                  <div class="close" @click="closeQQ">X</div>
                  <ul class="clearfix qqul">
                    <li v-for="(v,i) in list" :key="i" :title="v.title" @click="checkList(i)"><img :src="v.src" alt=""></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom1">
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
        name: "Information",
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
            isShow:false,
            isQQShow:false,
            inputContent:'',
            userInfo:{},
            currentTopic:{},
            btnName:'评论',
            prompt:'评论',
            currentDId:{dId:null,name:undefined,r_heID:null,index:null,rr_id:null,i:null},
            discussList:[]
          }
        },
      methods:{
        init(){
          this.btnName='评论';
          this.inputContent='';
          this.isQQShow=false;
          this.isShow=false;
          this.prompt='评论'
        },
        //修改成功弹框
        set(msg){
          this.$message({
            message: msg,
            type: 'success'
          });
        },
        //错误弹框
        error(msg){
          this.$message.error(msg);
        },
          //显示输入框
        changeShow(){
          this.isShow=true;
        },
        //显示表情
        changeQQShow(){
          this.isQQShow=true;
        },
        //关闭表情
        closeQQ(){
          this.isQQShow=false;
        },
        //选择某个QQ表情
        checkList(index){
          this.inputContent = this.inputContent+'['+this.list[index].title+']';
        },
        //点击评论上的回复
        respondent(index){
          this.currentDId.dId=this.discussList[index].d_id;
          this.currentDId.name=this.discussList[index].u_name;
          this.currentDId.r_heID=this.discussList[index].u_id;
          this.currentDId.index=index;
          this.isShow=true;
          this.prompt='回复：'+this.discussList[index].u_name;
          this.btnName='回复';
        },
        //点击评论上的删除
        removeDiscuss(index){
          this.currentDId.dId=this.discussList[index].d_id;
          this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios({
              method:'post',
              url:'/api/removeDiscuss',
              data:{
                d_id:this.currentDId.dId,
                p_id:this.currentTopic.p_id
              }
            }).then(res=>{
              if(res.data.error){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.currentTopic.p_discuss=res.data.num;
                this.discussList.splice(index,1);
                console.log(res);
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
          console.log(this.currentDId.dId);
        },
        //点击回复上的回复
        respondented(index,i){
          this.currentDId.dId=this.discussList[index].d_id;
          this.currentDId.name=this.discussList[index].replyArr[i].r_meName;
          this.currentDId.r_heID=this.discussList[index].replyArr[i].r_meId;
          this.currentDId.rr_id=this.discussList[index].replyArr[i].r_id;
          this.currentDId.index=index;
          this.currentDId.i=i;
          this.isShow=true;
          this.prompt='回复：'+this.currentDId.name;
          this.btnName='回复';
          console.log(this.currentDId);
        },
        //点击回复上的删除
        removeReply(index,i){
          this.currentDId.dId=this.discussList[index].d_id;
          this.currentDId.rr_id=this.discussList[index].replyArr[i].r_id;
          this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios({
              method:'post',
              url:'/api/removeReply',
              data:{
                d_id:this.currentDId.dId,
                p_id:this.currentTopic.p_id,
                r_id:this.currentDId.rr_id
              }
            }).then(res=>{
              if(res.data.error){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.currentTopic.p_discuss=res.data.num;
                this.discussList[index].replyArr.splice(i,1);
                console.log(res);
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        //点击回复回复上的删除
        removeReplys(index,i,j){
          this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios({
              method:'post',
              url:'/api/removeReplyed',
              data:{
                p_id:this.discussList[index].p_id,
                rr_id:this.discussList[index].replyArr[i].replyArrList[j].rr_id,
                r_id:this.discussList[index].replyArr[i].replyArrList[j].r_id,
              }
            }).then(res=>{
              console.log(res);
              if(res.data.error){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.currentTopic.p_discuss=res.data.num;
                this.discussList[index].replyArr[i].replyArrList.splice(j,1);
                console.log(res);
              }
            });

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });


        },
        //评论  回复
        reply(){
          if(this.btnName=='评论'){
            const oDate1=new Date();
            const oDate=oDate1.getFullYear()+'-'+(oDate1.getMonth()+1)+'-'+oDate1.getDate()+' '+oDate1.getHours()+':'+oDate1.getMinutes()+':'+oDate1.getSeconds();
            console.log(this.currentTopic.p_id);
            this.$axios({
              method:'post',
              url:'/api/discuss',
              data:{
                p_id:this.currentTopic.p_id,
                u_id:this.userInfo.u_id,
                d_content:this.inputContent,
                d_time:oDate
              }
            }).then(res=>{
              console.log(res);
              if(res.data.error){
                const reg=/[[\u4e00-\u9fa5]+]/g;
                this.inputContent=this.inputContent.replace(reg,(word)=>{
                  const str=word.substring(1,word.length-1);
                  this.list.forEach(v=>{
                    if(v.title==str){
                      word=v.src
                    }
                  });
                  return '<img src="'+word+'">'
                });
                const data={
                  d_id:res.data.id,
                  p_id:this.currentTopic.p_id,
                  u_id:this.userInfo.u_id,
                  d_content:this.inputContent,
                  d_time:oDate,
                  u_name:this.userInfo.u_name,
                  u_img:this.userInfo.u_img,
                  replyArr:[]
                };
                this.discussList.push(data);

                this.currentTopic.p_discuss=res.data.num;
                console.log(this.currentTopic,res.data);
                this.set('评论成功!');
                this.init();
              }
            })
          }else if(this.btnName=='回复'&&this.currentDId.i==null){
            console.log(this.inputContent);
            const oDate1=new Date();
            const oDate=oDate1.getFullYear()+'-'+(oDate1.getMonth()+1)+'-'+oDate1.getDate()+' '+oDate1.getHours()+':'+oDate1.getMinutes()+':'+oDate1.getSeconds();
            let data1={
              p_id:this.currentTopic.p_id,
              r_meId:this.userInfo.u_id,
              r_heId:this.currentDId.r_heID,
              r_meName:this.userInfo.u_name,
              r_heName:this.currentDId.name,
              r_time:oDate,
              r_content:this.inputContent,
              r_meSrc:this.userInfo.u_img,
              d_id:this.currentDId.dId
            };
            this.$axios({
              method:'post',
              url:'/api/answer',
              data:data1
            }).then(res=>{
              if(res.data.error){
                const reg=/[[\u4e00-\u9fa5]+]/g;
                this.inputContent=this.inputContent.replace(reg,(word)=>{
                  const str=word.substring(1,word.length-1);
                  this.list.forEach(v=>{
                    if(v.title==str){
                      word=v.src
                    }
                  });
                  return '<img src="'+word+'">'
                });
                data1.r_id=res.data.data;
                data1.r_content=this.inputContent;
                data1.replyArrList=[];
                this.inputContent='';
                this.discussList[this.currentDId.index].replyArr.push(data1);
                this.currentTopic.p_discuss=res.data.num;
                this.set('回复成功！');
                this.init();
              }
            })
          }else{
            //回复回复的
            console.log(this.inputContent);
            const oDate1=new Date();
            const oDate=oDate1.getFullYear()+'-'+(oDate1.getMonth()+1)+'-'+oDate1.getDate()+' '+oDate1.getHours()+':'+oDate1.getMinutes()+':'+oDate1.getSeconds();
            let data1={
              p_id:this.currentTopic.p_id,
              r_meId:this.userInfo.u_id,
              r_heId:this.currentDId.r_heID,
              r_meName:this.userInfo.u_name,
              r_heName:this.currentDId.name,
              r_time:oDate,
              r_content:this.inputContent,
              r_meSrc:this.userInfo.u_img,
              d_id:this.currentDId.dId,
              rr_id:this.currentDId.rr_id
            };
            this.$axios({
              method:'post',
              url:'/api/answered',
              data:data1
            }).then(res=>{
              console.log(res,'回复回复的');
              if(res.data.error){
                const reg=/[[\u4e00-\u9fa5]+]/g;
                this.inputContent=this.inputContent.replace(reg,(word)=>{
                  const str=word.substring(1,word.length-1);
                  this.list.forEach(v=>{
                    if(v.title==str){
                      word=v.src
                    }
                  });
                  return '<img src="'+word+'">'
                });
                data1.r_id=res.data.data;
                data1.r_content=this.inputContent;
                this.inputContent='';
                this.discussList[this.currentDId.index].replyArr[this.currentDId.i].replyArrList.push(data1);
                this.currentTopic.p_discuss=res.data.num;
                this.set('回复成功！');
                this.init();
              }
            })
          }
        },
        //点赞
        zan(){
          this.$axios({
            method:'post',
            url:'/api/like',
            data:{
              p_id:this.currentTopic.p_id,
              u_id:this.userInfo.u_id
            }
          }).then(res=>{
            if(res.data.error){
              this.currentTopic.p_zan=res.data.num;
              if(res.data.error==1){
                this.set('取消点赞成功！');
                this.$refs.zan.style.color='#b9b7be';
              }else{
                this.set('点赞成功！');
                this.$refs.zan.style.color='#1e97a2';
              }
            }
          })
        },
        //删除当前话题
        deleteTopic(){
          this.$confirm('此操作将永久删除该话题, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios({
              method:'post',
              url:'/api/deleteTopic',
              data:{
                u_id:this.userInfo.u_id,
                p_id:this.currentTopic.p_id
              }
            }).then(res=>{
              if(res.data.error){
                this.set('删除话题成功！');
                this.$router.push({name:'community'});
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        //收藏
        collect(){
          this.$axios({
            method:'post',
            url:'/api/collect',
            data:{
              p_id:this.currentTopic.p_id,
              u_id:this.userInfo.u_id
            }
          }).then(res=>{
            if(res.data.error){
              console.log(res);
              this.currentTopic.p_collect=res.data.num;
              if(res.data.error==1){
                this.set('取消收藏！');
                this.$refs.collect.style.color='#b9b7be';
              }else{
                this.set('收藏成功！');
                this.$refs.collect.style.color='#1e97a2';
              }
            }
          })
        }
      },
      mounted(){
          this.userInfo=this.$store.state.userInfo;
          const currentTopicID=JSON.parse(localStorage.getItem('currentTopic'))||this.$route.params.id;
          console.log(currentTopicID);
          if(currentTopicID){
            this.$axios({
              method:'post',
              url:'/api/getTheTopic',
              data:{
                id:currentTopicID
              }
            }).then(res=>{
              if(res.data.error){
                console.log(res.data.data);
                this.currentTopic=res.data.data;
                const reg=/[[\u4e00-\u9fa5]+]/g;
                this.currentTopic.p_content=this.currentTopic.p_content.replace(reg,(word)=>{
                  const str=word.substring(1,word.length-1);
                  this.list.forEach(v=>{
                    if(v.title==str){
                      word=v.src
                    }
                  });
                  return '<img src="'+word+'">'
                });
                this.currentTopic.src=this.currentTopic.src.split('|');
                console.log(this.currentTopic)
              }
            });
            //获取所有评论
            this.$axios({
              method:'post',
              url:'/api/getAllComments',
              data:{
                id:currentTopicID
              }
            }).then(res=>{

                if(res.data.error){
                  let data=res.data.data;
                  const reg=/[[\u4e00-\u9fa5]+]/g;
                  data.forEach(v1=>{
                    v1.replyArr=[];
                    v1.d_content=v1.d_content.replace(reg,(word)=>{
                      const str=word.substring(1,word.length-1);
                      this.list.forEach(v=>{
                        if(v.title==str){
                          word=v.src
                        }
                      });
                      return '<img src="'+word+'">'
                    });
                  });
                  this.discussList=data;
                  // console.log(this.discussList);
                }
            }).then(()=>{
              console.log(this.discussList);
              this.$axios({
                method:'post',
                url:'/api/getAllReplies',
                data:{
                  p_id:this.currentTopic.p_id
                }
              }).then(res=>{
                console.log(res.data.data);
                if(res.data.error){
                    let data1=res.data.data;
                    let data2=[];
                    let data=[];
                    data1.forEach(v=>{
                      if(v.rr_id!=null){
                        data2.push(v);
                      }else{
                        data.push(v);
                      }
                    });
                    const reg=/[[\u4e00-\u9fa5]+]/g;
                    data.forEach((v,i)=>{
                      v.replyArrList=[];
                      v.r_content=v.r_content.replace(reg,(word)=>{
                        const str=word.substring(1,word.length-1);
                        this.list.forEach(v=>{
                          if(v.title==str){
                            word=v.src
                          }
                        });
                        return '<img src="'+word+'">'
                      });
                      this.discussList.forEach(v1=>{
                        if(v.d_id==v1.d_id&&v1.rr_id==null){
                          v1.replyArr.push(v);
                        }
                      });
                    });
                  data2.forEach(v=>{
                    this.discussList.forEach(v1=>{
                      v1.replyArr.forEach(v2=>{
                        if(v2.r_id==v.rr_id){
                          v2.replyArrList.push(v);
                        }
                      })
                    })
                  });
                  this.currentTopic.p_discuss=res.data.num;
                  console.log(this.discussList);
                  console.log(data2);
                }
              })
            });
            this.$axios({
              method:'post',
              url:'/api/findLike',
              data:{
                p_id:currentTopicID,
                u_id:this.userInfo.u_id
              }
            }).then(res=>{
              if(res.data.error){
                if(res.data.zan){
                  this.$refs.zan.style.color='#1e97a2';
                }else{
                  this.$refs.zan.style.color='#b9b7be';
                }
              }
            });
            this.$axios({
              method:'post',
              url:'/api/findCollect',
              data:{
                p_id:currentTopicID,
                u_id:this.userInfo.u_id
              }
            }).then(res=>{
              if(res.data.error){
                if(res.data.collect){
                  this.$refs.collect.style.color='#1e97a2';
                }else{
                  this.$refs.collect.style.color='#b9b7be';
                }
              }
            })
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
  .information{
    width: 770px;
    min-height: 70vh;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    .top{
      width: 100%;
      height: 92px;
      overflow: hidden;
      background: white;
      .hair{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        float: left;
        margin-left: 20px;
        margin-top: 20px;
        box-shadow: 2px 2px 2px #999;
      }
      .user{
        width: 456px;
        height: 24px;
        float: left;
        color: @fontColor;
        font-weight: bold;
        margin-top: 26px;
        margin-left: 20px;
      }
      .time{
        width: 456px;
        height: 16px;
        font-size: 12px;
        color: #999;
        float: left;
        margin-left: 20px;
      }
    }
    .mid{
      img{
        width: 768px;
        height: 576px;
        margin-top: 10px;
      }
    }
    .bottom{
      width: 730px;
      font-size: 14px;
      line-height: 21px;
      margin-top: 10px;
      color: @fontColor;
      padding: 20px;
    }
    .count{
      width: 100%;
      border-bottom: 1px solid #999;
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
    }
    .cont{
      padding-left: 0;
      margin-top: 3px;
      cursor: pointer;
      .single-reply{
        margin-top: 15px;
        margin-bottom: 15px;
        .ui-avatar{
          width: 30px;
          height: 30px;
          float: left;
          border-radius: 100%;
          margin-top: 3px;
          margin-left: 5px;
        }
        .comments-content{
          word-wrap:break-word;
          float: left;
          margin-top: -3px;
          margin-left: 3px;
          position: relative;
          a{
            display: block;
            min-width: 100px;
            text-align: center;
            font-size: 14px;
            text-decoration: none;
            float: left;
            margin-left: 10px;
            margin-right: 10px;
          }
          .em1{
            float: right;
            width: 600px;
            font-style: normal;
            font-size: 14px;
            img{
              width: 16px;
              height: 16px;
            }
          }
          .ri{
            width: 106px;
            height: 20px;
            position: absolute;
            top:12px;
            left: 7px;
            .em2{
              font-size: 12px;
              padding: 10px 0;
              display: inline-block;
              color:#b9b7be;
              font-style: normal;
            }
            .i1{
              /*display: none;*/
              color:#b9b7be;
              margin-left: 0;
            }
            .em3{
              /*display: none;*/
              color:#b9b7be;
              margin-left: 0;
            }
          }
        }
      }
      .comments-list{
        ul{
          li{
            margin-left: 40px;
            margin-top: 10px;
            margin-bottom: 10px;
            .single1-reply{
              padding: 10px 0;
              .ui-avatar{
                width: 30px;
                height: 30px;
                float: left;
                border-radius: 100%;
                margin-top: 3px;
                margin-left: 5px;
              }
              .comments-content{
                word-wrap:break-word;
                float: left;
                margin-top: -3px;
                margin-left: 3px;
                position: relative;
                .a1{
                  font-size: 14px;
                  text-decoration: none;
                  float: left;
                  display: inline-block;
                  min-width: 40px;
                  text-align: center;
                  margin-left: 10px;
                  margin-right: 10px;
                }
                .i4{
                  float: left;
                  font-style: normal;
                  font-size: 14px;
                }
                .a2{
                  font-size: 14px;
                  text-decoration: none;
                  float: left;
                  min-width: 40px;
                  text-align: center;
                  margin-left: 10px;
                  margin-right: 10px;
                }
                .em7{
                  float: right;
                  width: 440px;
                  font-style: normal;
                  font-size: 14px;
                  img{
                    width: 16px;
                    height: 16px;
                  }
                }
                .ri1{
                  width: 100px;
                  height: 20px;
                  position: absolute;
                  top:22px;
                  left: 7px;
                  .em5{
                    font-size: 12px;
                    font-style: normal;
                    color:#b9b7be;
                  }
                  .i2{
                    /*display: none;*/
                    color:#b9b7be;
                    margin-left: 0;
                  }
                  .em4{
                    /*display: none;*/
                    color:#b9b7be;
                    margin-left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
    .write{
      .single{
        margin-top: 10px;
        width: 768px;
        height: 36px;
        border: 1px solid #999;
        a{
          color: #999;
          font-size: 14px;
          line-height: 36px;
          margin-left: 10px;
        }
      }
      .text{
        /*display: none;*/
        position: relative;
        textarea{
          width: 758px;
          height: 72px;
          border: 1px solid #999;
          resize: none;
          padding-left: 10px;
        }
        .div1{
          width: 769px;
          overflow: hidden;
          position: relative;
          img{
            float: left;
            margin-top: 4px;
          }
          .btn1{
            width: 74px;
            height: 27px;
            background: @btn_hoverColor;
            color: white;
            float: right;
            outline: none;
            border: none;
            margin-top: 2px;
          }
          .btn2{
            /*display: none;*/
            width: 74px;
            height: 27px;
            background: @btn_hoverColor;
            color: white;
            float: right;
            outline: none;
            border: none;
            margin-top: 2px;
          }
          .btn3{
            /*display: none;*/
            width: 74px;
            height: 27px;
            background: @btn_hoverColor;
            color: white;
            float: right;
            outline: none;
            border: none;
            margin-top: 2px;
          }
          .icon{
            margin-top: 30px;
            width: 430px;
            height: 258px;
            border: 1px solid #e8e8e8;
            box-shadow: 4px 5px 6px #999;
            background: #fff;
            border-radius: 3px;
            cursor: pointer;
            .new{
              border: 8px solid white;
              border-bottom-color: #cccccc;
              position: absolute;
              top: 23px;
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
        }
      }
    }
  }
.bottom1{
  width: 100%;
  height: 200px;
  background: #485b6a;
  font-size: 12px;
  margin-top: 40px;
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
    margin-top: 120px;
    font-size: 12px;
  }
}
</style>
