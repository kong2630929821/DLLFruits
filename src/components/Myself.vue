<template>
    <div class="myself">
      <div class="pay" v-show="pay">
          <div class="pay-top">
            <div class="pay-top-1">
              <el-steps :active="active" finish-status="success">
                <el-step title="收货地址"></el-step>
                <el-step title="生成订单"></el-step>
                <el-step title="付款"></el-step>
              </el-steps>
            </div>
            <div class="pay-top-2">填写收货地址</div>
            <div class="address">
              <ul>
                <li v-for="(v,index) in address" :key="index">
                  <el-radio v-model="radio" :label="v.province+' '+v.city+' '+v.name+' '+v.phone"></el-radio>
                  <span @click="changeAdd(index)"> &nbsp;修改</span>
                  <span> | </span>
                  <span @click="removeAdd(index)"> 删除</span>
                </li>
                <div class="addAddress" @click="addAddress">
                  <p>+新填地址</p>
                </div>
              </ul>
            </div>
            <div class="add" v-show="isAddress">
              <ul>
                <li>
                  <el-input
                    placeholder="姓名"
                    v-model="aAddress.name"
                    clearable>
                  </el-input>
                </li>
                <li>
                  <el-input
                    placeholder="联系电话"
                    v-model="aAddress.phone"
                    clearable>
                  </el-input>
                </li>
                <li>
                  <el-input
                    placeholder="邮箱"
                    v-model="aAddress.mail"
                    clearable>
                  </el-input>
                </li>
              </ul>
              <div class="userInfoAdd">
                <v-distpicker :province="aAddress.province" :city="aAddress.city" :area="aAddress.area" style="display: flex;justify-content: center;" @selected="onSelected"></v-distpicker>
                <div class="pushAddr" @click="pushAddAddress"><el-button type="primary">提交地址</el-button></div>
              </div>
            </div>
            <div class="next"><el-button type="success" @click="next">下一步</el-button></div>
          </div>
      </div>
      <div class="my-top">
        <div class="userHead" @click="headShow">
          <img :src="userInfo.img" alt="">
        </div>
        <div class="userName">
            <span>{{userInfo.name?userInfo.name:'果思用户'+userInfo.id}}</span>
            <div class="famle" v-show="userInfo.sex=='女'">
              <b class="fa fa-venus"></b>
            </div>
            <div class="fale" v-show="userInfo=='男'">
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
          <div class="set-right" v-show="changeHead">
            <div class="div1">
              <img :src="userInfo.img" alt="" class="img1">
              <div class="box1"></div>
            </div>
            <canvas id="c1" width="150" height="150"></canvas>
            <el-row>
              <input type="file" id="file1" accept="image/jpg,image/jpeg,image/png,image/gif">
              <el-button type="primary" round>选择图片</el-button>
              <el-button type="primary" round id="btn2">确认上传</el-button>
            </el-row>
          </div>
          <div class="set-left" v-show="0==i&&!changeHead">
              <div class="input1">
                <p>昵称：</p>
                <el-input
                  placeholder="请输入昵称"
                  v-model="userInfo.name"
                  :disabled="edit"
                  clearable>
                </el-input>
              </div>
            <div class="input1">
              <p>账号：</p>
              <el-input
                placeholder="请输入账号"
                v-model="userInfo.account"
                :disabled="edit"
                clearable>
              </el-input>
            </div>
            <div class="input1">
              <p>密码：</p>
              <el-input
                placeholder="请输入密码"
                :disabled="edit"
                v-model="inputPass"
                clearable>
              </el-input>
            </div>
            <div class="input1">
              <p>确认密码：</p>
              <el-input
                placeholder="请再次输入密码"
                v-model="inputOkPass"
                :disabled="edit"
                clearable>
              </el-input>
            </div>
            <div class="input1">
              <p>手机号码：</p>
              <div class="code" @click="verification">{{countdown}}</div>
              <el-input
                placeholder="请输入手机号码"
                v-model="userInfo.phone"
                :disabled="edit"
                clearable>
              </el-input>
            </div>
            <div class="input1">
              <p>验证码：</p>
              <el-input
                placeholder="请输入验证码"
                v-model="inputCode"
                :disabled="edit"
                clearable>
              </el-input>
            </div>
            <div class="input1">
                <div class="checkSex">
                  <el-radio v-model="userInfo.sex" :disabled="edit" label="男">男</el-radio>
                  <el-radio v-model="userInfo.sex" :disabled="edit" label="女">女</el-radio>
                </div>
            </div>
            <div class="input1">
              <p>邮箱：</p>
              <el-input
                placeholder="请输入邮箱"
                v-model="userInfo.mail"
                :disabled="edit"
                clearable>
              </el-input>
            </div>
            <el-row>
              <el-button type="primary" round @click="openEdit">编辑资料</el-button>
              <el-button type="primary" round @click="revise">修改资料</el-button>
            </el-row>
          </div>
          <div class="shoppingCart">
            <el-table
              :data="shoppingCart"
              @selection-change="handleSelectionChange">
              style="width: 100%;">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称：">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺：">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID：">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID：">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类：">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址：">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述：">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                    <el-form-item label="商品单价：">
                      <span>{{ props.row.price }}元</span>
                    </el-form-item>
                    <el-form-item label="商品信息：">
                      <img style="width: 150px;height: 150px" src="../../static/image/shop/2.jpg" alt="">
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="商品 ID"
                prop="id">
              </el-table-column>
              <el-table-column
                label="商品信息">
                <template slot-scope="props">
                  <img style="width: 40px;height: 40px" src="../../static/image/shop/1.jpg" alt="">
                </template>
              </el-table-column>
              <el-table-column
                label="商品名称"
                prop="name">
              </el-table-column>
              <el-table-column
                label="单价">
                <template slot-scope="props">
                  ￥{{ props.row.price}}
                </template>
              </el-table-column>
              <el-table-column
                label="数量">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.sum" @change="handleChange(scope.$index, scope.row)" :min="1" label="描述文字"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column
                label="金额">
                <template slot-scope="props">
                  ￥{{ props.row.price*props.row.sum}}
                </template>
              </el-table-column>
              <el-table-column
                label="操作" width="180">
                <template slot-scope="scope">
                  <el-button
                    size="medium"
                    type="danger"
                    @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="settlement">
                <p class="sum">共选择 <b>{{shoppingList.length}}</b> 件商品</p>
                <p class="sumMoney">共计：<b>{{total}}</b> 元</p>
                <div class="btn" @click="totalMoney"><el-button type="primary">结算</el-button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
    export default {
        name: "Myself",
        components: { VDistpicker },
        data(){
          return{
            myList:['个人资料','购物车','待付款','待收货','评价','退款/售后'],
            userInfo:{},
            i:1,//控制对应的模块显示
            changeHead:false,//是否显示头像
            inputPass:'',//密码
            inputOkPass:'',//确认密码
            inputCode:'',//验证码
            countdown:'验证',
            radio: '',
            edit:true,//编辑资料
            inputNum:1,//商品数量
            shoppingCart: [{
              id: '12987122',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333',
              price:120,
              sum:1
            }, {
              id: '12987123',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333',
              price:120,
              sum:1
            }, {
              id: '12987125',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333',
              price:120,
              sum:2
            }, {
              id: '12987126',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333',
              price:10,
              sum:2
            }],
            shoppingList:[],//选中的商品列表
            total:0,//合计
            active: 0,
            isAddress:false,//添加的地址显示
            address:[],//我的收货地址
            aAddress:{
              id:'',
              u_id:'',
              name:'',
              mail:'',
              phone:'',
              province:'',
              city:'',
              area:''
            },//编辑的收获地址
            pay:false,//添加收货地址展开
            isChangeAdd:-1,//是否修改地址
          }
        },
      mounted(){
          //获取用户信息
        this.userInfo=this.$store.state.userInfo;
        //获取用户收货地址
        this.address=this.$store.state.address;
        let that=this;
        let oFile=document.querySelector('#file1');
        let oDiv=document.querySelector('.box1');
        var sec=document.querySelector('.div1');
        var oC=document.getElementById('c1');
        var gd=oC.getContext('2d');
        var oImg=document.querySelector('.img1');
        oFile.onchange=function () {
          document.querySelector('.box1').style.display='block';
          var oFReader = new FileReader();
          var file = oFile.files[0];
          oFReader.readAsDataURL(file);
          oFReader.onloadend = function(ev){
            /*或者目标文件的解析结果*/
            var src = ev.target.result;
            oImg.src=src;
          }
        };
        oDiv.onmousedown=function (e) {
          var x=e.offsetX;
          var y=e.offsetY;
          document.onmousemove=function (ev) {
            var l=ev.clientX-sec.offsetLeft-x;
            var t=ev.clientY-sec.offsetTop-y;
            var wc=sec.offsetWidth-oDiv.offsetWidth;
            var wy=sec.offsetHeight-oDiv.offsetHeight;
            if(l<0){
              l=0
            }else if(l>=wc){
              l=wc
            }
            if(t<0){
              t=0
            }else if(t>=wy){
              t=wy
            }
            oDiv.style.left=l+'px';
            oDiv.style.top=t+'px';
          };
          document.onmouseup=function () {
            document.onmousemove=null;
            document.onmouseup=null;
          };
          return false;
        };
        document.getElementById('btn2').onclick=function () {
          if(oFile.value){
            var hei=150/sec.offsetWidth*oImg.naturalWidth;
            var gao=150/sec.offsetHeight*oImg.naturalHeight;
            var l=parseInt(oDiv.style.left);
            var t=parseInt(oDiv.style.top);
            gd.clearRect(0,0,oC.width,oC.height);
            gd.drawImage(oImg,l/sec.offsetWidth*oImg.naturalWidth,t/sec.offsetHeight*oImg.naturalHeight,hei,gao,0,0,150,150);
            var formData=new FormData();
            formData.append('files',oC.toDataURL());
            formData.append('u_id',that.userInfo.id);
            that.$axios({
              method:'post',
              url:'/api/uploads',
              data:formData
            }).then((res)=>{
              if(res.data.error){
                document.querySelector('.box1').style.display='none';
                that.setImg();
                that.userInfo.img=oC.toDataURL();
                oFile.value = '';
              }
            })
          }else{
            that.open6();
          }
        };
      },
      methods:{
          //个人中心切换
          checkType(index){
            this.i = index;
            this.changeHead=false;
          },
        //修改头像成功
        setImg(){
          this.$message({
            message: '修改头像成功',
            type: 'success'
          });
        },
        //修改成功弹框
        set(msg){
          this.$message({
            message: msg,
            type: 'success'
          });
        },
        //未选择图片时弹框
        open6() {
          this.$message.error('您还没有选择图片，怎么会酱紫！');
        },
        //显示修改头像
        headShow(){
            this.changeHead=true;
        },
        //编辑资料
        openEdit(){
            this.edit=false;
        },
        //获取验证码
        verification(){
          if((typeof this.countdown)=='string'){
            this.$axios({
              method:'post',
              url:'/api/getCode',
              data:{
                phone:this.userInfo.phone
              }
            });
            this.countdown = 60;
            clearInterval(timer);
            const timer=setInterval(()=>{
              this.countdown--;
              if(this.countdown<0){
                clearInterval(timer);
                this.countdown = '验证'
              }
            },1000);
          }
        },
        //修改资料
        revise(){
            this.$axios({
              method: 'post',
              url:'/api/changeUserInfo',
              data:{
                phone:this.userInfo.phone,
                code:this.inputCode,
                userInfo:this.userInfo
              }
            }).then((res)=>{
              if(res.data.error){
                this.set('修改资料成功！');
                this.$store.commit('changeInfo',this.userInfo);
                this.edit = true;
              }
            });
        },
        //选中的商品列表
        handleSelectionChange(val){
          this.total = 0;
          this.shoppingList = val;
          this.shoppingList.forEach((v)=>{
            this.total+=v.sum*v.price;
          });
        },
        //删除商品
        handleDelete(index,row){
          console.log(index,row);
          this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.shoppingCart.splice(index,1);
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        //结算
        totalMoney(){
          this.pay=true;
        },
        //商品数量变化
        handleChange(index,row){
          this.shoppingList.forEach(v=>{
            if(v.id==row.id){
              v.sum=row.sum;
            }
          });
          this.total=0;
          this.shoppingList.forEach(v=>{
            this.total+=v.sum*v.price;
          });
        },
        //添加地址显示
        addAddress(){
          this.aAddress={};
          this.isAddress=true;
        },
        //三级联动获取详细地址值
        onSelected(data) {
          this.aAddress.province = data.province.value
          this.aAddress.city = data.city.value
          this.aAddress.area = data.area.value
        },
        //提交添加地址
        pushAddAddress(){
          if(this.isChangeAdd!=-1){
            this.aAddress.id=this.address[this.isChangeAdd].id;
            this.aAddress.u_id=this.address[this.isChangeAdd].u_id;
            this.$store.commit('changeAddress',this.aAddress,this.isChangeAdd);
            this.isAddress=false;
            console.log(this.$store.state.address);
          }else{
            this.aAddress.id=2;
            this.aAddress.u_id=2;
            this.$store.commit('addAddress',this.aAddress);
            this.isAddress=false;
            console.log(this.$store.state.address);
          } 
        },
        //修改地址
        changeAdd(index){
          this.isChangeAdd=index;
          const data=JSON.stringify(this.address[index]);
          this.aAddress = JSON.parse(data);
          this.isAddress=true;
        },
        //删除地址
        removeAdd(index){

        },
        //下一步
        next(){
           console.log(this.aAddress);
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
  .pay{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0,0.6);
    .pay-top{
      width: 50%;
      height: 100%;
      background: white;
      margin: 0 auto;
      overflow: auto;
      position: relative;
      .pay-top-1{
        width: 300px;
        margin: 10px auto;
        font-size: 18px;
      }
      .pay-top-2{
        text-align: center;
        font-weight: bold;
        margin-top: 40px;
      }
      .address{
        margin: 20px auto;;
         background: #f2f2f2;
         ul{
            li{
              padding: 10px 0;
              margin-left: 40px;
              span{
                color: #d2aaa6;
                cursor: pointer;
              }
            }
             .addAddress{
              padding: 0 0 10px 0;
              p{
                margin-left: 40px;
                color: #d2aaa6;
                cursor: pointer;
              }
              }
          }
      }
      .add{
        width: 500px;
        margin: 0 auto;
        ul{
          li{
            width: 336px;
            height: 40px;
            margin: 20px auto 0;
          }
        }
        .userInfoAdd{
          width: 100% ;
          text-align: center;
          margin: 20px auto;
          font-size: 16px;
          .pushAddr{
            width: 100px;
            height: 40px;
            margin: 40px auto;
            .el-button--primary{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .next{
        width: 100px;
        height: 40px;
        position: absolute;
        bottom: 20px;
        right: 40px;
        .el-button--success{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .shoppingCart{
    overflow: auto;
  }
  .settlement{
    margin-top: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    .sum{
      height: 40px;
      line-height: 40px;
      flex: 7;
      margin-left: 60px;
      font-weight: bold;
      b{
        color: #f40;
      }
    }
    .sumMoney{
      height: 40px;
      line-height: 40px;
      flex: 2;
      font-weight: bold;
      b{
        color: #f40;
      }
    }
    .btn{
      width: 60px;
      height: 40px;
      flex: 1;
      margin-right: 60px;
      .el-button--primary{
        width: 100%;
        height: 100%;
      }
    }
  }
  .demo-table-expand {
    font-size: 0;
  }
  .el-button--medium{
    display: inline-block;
    width: 60px;
    height: 40px;
  }
  .el-button--mini{
    display: inline-block;
    width: 30px;
    height: 40px;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .checkSex{
    width: 300px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .active{
    color: #ae9666;
    border-bottom: 2px solid #ae9666;
  }
  .set-left{
    width: 50%;
    height: 260px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: space-around;
    .input1{
      width: 300px;
      height: 40px;
      display: flex;
     margin: 0 auto;
      position: relative;
      .code{
        width: 80px;
        height: 40px;
        background: black;
        line-height: 40px;
        text-align: center;
        color: white;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
      }
      p{
        width: 92px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  #file1{
    width: 100px;
    height: 30px;
    position: absolute;
    top:105px;
    left: 20px;
    opacity: 0;
    cursor: pointer;
  }
  .box1{
    width: 150px;
    height: 150px;
    border: 1px solid red;
    background: #128dff;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;
    display: none;
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
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -45px;
        margin-left: -45px;
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
    .setPass{
      .set-right{
        width: 555px;
        height: 100%;
        overflow: hidden;
        margin: 14px auto;
        display: flex;
        p{
          text-align: center;
          color: #909090;
          margin-top: 20px;
        }
        canvas{
          margin: 0 auto;
          display: none;
        }
        .div1{
          width: 250px;
          height: 250px;
          position: relative;
          .img1{
            width: 100%;
            height: 100%;
          }
        }
        .el-row{
          position: relative;
        }
        .el-button{
          margin: 100px 20px ;
        }
      }
    }
  }
</style>
