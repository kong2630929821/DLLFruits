<template>
    <div class="myself">
      <div class="pay" v-show="pay">
          <div class="pay-top">
           <div class="closePay">
             <div class="modal-content" @click="closePay">×</div>
           </div>
            <div class="pay-top-1">
              <el-steps :active="active" finish-status="success">
                <el-step title="收货地址"></el-step>
                <el-step title="生成订单"></el-step>
                <el-step title="正在付款"></el-step>
              </el-steps>
            </div>
            <div v-show="active==1">
              <div class="pay-top-2">填写收货地址</div>
              <div class="address">
                <ul>
                  <li v-for="(v,index) in address" :key="index">
                    <el-radio v-model="radio" :label="index">{{v.province}}&nbsp;{{v.city}}&nbsp;{{v.name}}&nbsp;{{v.phone}}&nbsp;</el-radio>
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
                  <div class="detailed">
                    <el-input
                      placeholder="详细地址"
                      v-model="aAddress.detailed"
                      clearable>
                    </el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="type2" v-show="active==2">
              <div class="pay-top-2">请核对信息</div>
              <div class="orderInfo">
                <el-table
                  :data="payList"
                  style="width: 100%"
                  max-height="390"
                  >
                  <el-table-column
                    fixed
                    prop="time"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="商品名称"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="sum"
                    label="数量"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="金额">
                    <template slot-scope="props">
                      <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="收货人"
                    prop="receiptName"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="手机号码"
                    prop="receiptPhone"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="地址"
                    width="360">
                    <template slot-scope="props">
                      <span>{{props.row.receiptProvince}}&nbsp;{{props.row.receiptCity}}&nbsp;{{props.row.receiptArea}}&nbsp;{{props.row.receiptDetailed}}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="isOkOrder">
                <p class="sum">共选择 <b>{{shoppingList.length}}</b> 件商品</p>
                <p class="sumMoney">共计：<b>{{total}}</b> 元</p>
              </div>
            </div>
            <div v-show="active==3">
              <div class="pay-top-2">付款</div>
              <div class="payCode">
                  <div class="showCode">
                    <p class="p1" v-show="userInfo.money<total">余额不足，请充值！</p>
                    <img v-show="userInfo.money<total" src="../../static/image/me.png" alt="">
                    <p class="p2" v-show="userInfo.money>total">请输入登入密码</p>
                    <div v-show="userInfo.money>total">
                      <el-input
                        placeholder="密码"
                        type="password"
                        v-model="inputPayPass"
                        clearable>
                      </el-input>
                    </div>
                  </div>
              </div>
            </div>
            <div class="bottomBox">
              <div class="bottomBtn">
                <div class="prep">
                  <el-button type="success" @click="prep">上一步</el-button>
                </div>
                <div v-show="isAddress&&active==1" class="pushAddr" @click="pushAddAddress"><el-button type="primary">提交地址</el-button></div>
                <div class="next">
                  <el-button type="success" @click="next">下一步</el-button>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="discuss" v-show="discussShow">
        <div class="discussBox">
          <div class="orderTime">
            <p>下单时间：<span>{{discuss.time}}</span></p>
            <p>卖家：<span>果思自营</span></p>
            <b @click="closeDiscuss">×</b>
          </div>
          <div class="orderContent">
            <div class="infoImg">
              <img :src="discuss.img" alt="">
              <p>{{discuss.name}}</p>
              <p class="orderPay">￥{{discuss.sum*discuss.price}}</p>
            </div>
            <div class="rate">
              <p>商品评分：<el-rate v-model="rate.shop"></el-rate></p>
              <p>服务评分：<el-rate v-model="rate.server"></el-rate></p>
              <p>物流评分：<el-rate v-model="rate.goods"></el-rate></p>
              <div class="orderText">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 6, maxRows: 6}"
                  placeholder="请输入内容"
                  v-model="textarea3">
                </el-input>
              </div>
              <div class="pushDis" @click="release">发表评价</div>
            </div>


          </div>
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
          <!--设置头像-->
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
          <!--设置资料-->
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
          <!--购物车-->
          <div class="shoppingCart" v-show="1==i">
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
                    <el-form-item label="日期：">
                      <span>{{ props.row.time }}</span>
                    </el-form-item>
                    <el-form-item label="商品图片：">
                      <img style="width: 150px;height: 150px" :src="props.row.img" alt="">
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="日期"
                prop="time">
              </el-table-column>
              <el-table-column
                label="商品信息">
                <template slot-scope="props">
                  <img style="width: 40px;height: 40px" :src="props.row.img" alt="">
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
                  <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
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
          <!-- 代付款 -->
          <div class="pendingPayment" v-show="2==i">
              <el-table
                  :data="pendingPayment"
                  style="width: 100%"
                  max-height="390"
                  @selection-change="handleSelectionChangeP"
                  >
                  <el-table-column
                  type="selection"
                   width="55">
                 </el-table-column>
                  <el-table-column
                    fixed
                    prop="time"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="商品名称"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="sum"
                    label="数量"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="金额">
                    <template slot-scope="props">
                      <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="收货人"
                    prop="receiptName"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="手机号码"
                    prop="receiptPhone"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="地址"
                    width="360">
                    <template slot-scope="props">
                      <span>{{props.row.receiptProvince}}&nbsp;{{props.row.receiptCity}}&nbsp;{{props.row.receiptArea}}&nbsp;{{props.row.receiptDetailed}}</span>
                    </template>
                  </el-table-column>
                   <el-table-column
                    label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button
                        size="medium"
                        type="danger"
                        @click="deletePeding(scope.$index,scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
               <div class="settlement">
                <p class="sum">共选择 <b>{{shoppingListPeding.length}}</b> 件商品</p>
                <p class="sumMoney">共计：<b>{{totalPeding}}</b> 元</p>
                <div class="btn" @click="pedingPay"><el-button type="primary">结算</el-button></div>
              </div>
          </div>
          <!-- 待收货 -->
          <div class="receipt" v-show="3==i">
              <el-table
                  :data="receiptList"
                  style="width: 100%"
                  max-height="390"
                  >
                  <el-table-column
                    fixed
                    prop="time"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="商品名称"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="sum"
                    label="数量"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="金额">
                    <template slot-scope="props">
                      <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="收货人"
                    prop="receiptName"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="手机号码"
                    prop="receiptPhone"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="地址"
                    width="360">
                    <template slot-scope="props">
                      <span>{{props.row.receiptProvince}}&nbsp;{{props.row.receiptCity}}&nbsp;{{props.row.receiptArea}}&nbsp;{{props.row.receiptDetailed}}</span>
                    </template>
                  </el-table-column>
                   <el-table-column
                    label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button
                        size="medium"
                        type="warning"
                        @click="refund(scope.$index,scope.row)">退款</el-button>
                      <el-button
                        size="medium"
                        type="success"
                        @click="signing(scope.$index,scope.row)">签收</el-button>
                    </template>
                  </el-table-column>
                </el-table>
          </div>
          <!-- 评价 -->
          <div class="assess" v-show="4==i">
              <el-table
                  :data="assessList"
                  style="width: 100%"
                  max-height="390"
                  >
                  <el-table-column
                    fixed
                    prop="time"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="商品名称"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="sum"
                    label="数量"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="金额">
                    <template slot-scope="props">
                      <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="收货人"
                    prop="receiptName"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="手机号码"
                    prop="receiptPhone"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="地址"
                    width="360">
                    <template slot-scope="props">
                      <span>{{props.row.receiptProvince}}&nbsp;{{props.row.receiptCity}}&nbsp;{{props.row.receiptArea}}&nbsp;{{props.row.receiptDetailed}}</span>
                    </template>
                  </el-table-column>
                   <el-table-column
                    label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button
                        size="medium"
                        type="success"
                        @click="assess(scope.$index,scope.row)">评价</el-button>
                    </template>
                  </el-table-column>
                </el-table>
          </div>
          <!-- 退款 -->
          <div class="refund" v-show="5==i">
              <el-table
                  :data="refundList"
                  style="width: 100%"
                  max-height="390"
                  >
                  <el-table-column
                    fixed
                    prop="time"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="商品名称"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="sum"
                    label="数量"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="金额">
                    <template slot-scope="props">
                      <span style="color: #f40;font-weight:bold;">￥{{ props.row.price*props.row.sum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="收货人"
                    prop="receiptName"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="手机号码"
                    prop="receiptPhone"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    label="地址"
                    width="360">
                    <template slot-scope="props">
                      <span>{{props.row.receiptProvince}}&nbsp;{{props.row.receiptCity}}&nbsp;{{props.row.receiptArea}}&nbsp;{{props.row.receiptDetailed}}</span>
                    </template>
                  </el-table-column>
                   <el-table-column
                    label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button
                        size="medium"
                        type="warning"
                      >正在申请</el-button>
                    </template>
                  </el-table-column>
                </el-table>
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
            radio:0,//选择的收货地址
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
              time:'2019-4-17',
              img:'../../static/image/shop/2.jpg',
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
              time:'2019-4-15',
              img:'../../static/image/shop/2.jpg',
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
              time:'2019-4-15',
              img:'../../static/image/shop/2.jpg',
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
              time:'2019-4-16',
              img:'../../static/image/shop/2.jpg',
              price:10,
              sum:2
            }],//购物车列表
            total:0,//合计
            totalPeding:0,//待支付合计
            active: 1,//步骤条
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
              area:'',
              detailed:''
            },//编辑的收获地址
            pay:false,//添加收货地址展开
            isChangeAdd:-1,//是否修改地址
            inputPayPass:'',//支付密码
            shoppingList:[],//选中的商品列表
            shoppingListPeding:[],//选中的待支付列表
            payList:[],
            pendingPayment:[],//待支付
            receiptList:[],//收货列表
            indexList:[],//选取购物车的下标
            assessList:[],//评价列表
            textarea3: '',//评论
            rate:{
              shop:5,
              server:5,
              goods:5
            },//评论的等级
            discussShow:false,//评论展示
            discuss:{},//评论的商品信息
            discussIndex:-1,//评论的下标
            refundList:[],//待退款的商品
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
        //错误弹框
        error(msg){
          this.$message.error(msg);
        },
        //未选择图片时弹框
        open6() {
          this.$message.error('您还没有选择图片，怎么会酱紫！');
        },
        //显示修改头像
        headShow(){
            this.changeHead=true;
            this.i=0;
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
        //选中的购物车商品列表
        handleSelectionChange(val){
          this.total = 0;
          this.shoppingList = val;
          this.shoppingList.forEach((v)=>{
            this.total+=v.sum*v.price;
          });
        },
        // 选中的待支付商品列表
        handleSelectionChangeP(val){
           this.totalPeding = 0;
            this.shoppingListPeding = val;
            this.shoppingListPeding.forEach((v)=>{
              this.totalPeding+=v.sum*v.price;
            });
            console.log(this.shoppingListPeding);
        },
        //删除购物车商品
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
        //删除待支付商品
        deletePeding(index,row){
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
            this.pendingPayment.splice(index,1);
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        //签收已付款的商品
        signing(index,row){
          this.$confirm('签收此商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '签收成功，感谢支持!'
          });
          this.receiptList.splice(index,1);
          this.assessList.push(row);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消签收！'
          });          
        });
        },
        // 退款已付款的商品
        refund(index,row){
          this.$confirm('你确定申请退款?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已成功申请，感谢支持!'
          });
          this.receiptList.splice(index,1);
          this.refundList.push(row);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消申请！'
          });          
        });
        },
        //点击评论
        assess(index,row){
            this.discussShow=true;
            this.discussIndex=index;
            this.discuss=row;
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
          if(this.address.length>=3){
            this.error('收货地址最多是3个，请重新输入！');
          }else{
            this.aAddress={};
            this.isAddress=true;
          }
        },
        //三级联动获取详细地址值
        onSelected(data) {
          this.aAddress.province = data.province.value;
          this.aAddress.city = data.city.value;
          this.aAddress.area = data.area.value;
        },
        //提交添加地址
        pushAddAddress(){
          if(this.isChangeAdd!=-1){
            this.aAddress.id=this.address[this.isChangeAdd].id;
            this.aAddress.u_id=this.address[this.isChangeAdd].u_id;
            const data={
              index:this.isChangeAdd,
              content:this.aAddress
            };
            this.$store.commit('changeAddress',data);
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
          this.address.splice(index,1);
          this.$store.commit('removeAddress',this.address);
          console.log(this.$store.state.address);
        },
        //下一步
        next(){
          switch (this.active) {
            case 1:
              if(!this.address[this.radio]){
                this.error('您还未选择收货地址！');
                return;
              }
              this.payList = this.shoppingList;
               this.payList.forEach((v)=>{
                v.receiptName=this.address[this.radio].name;
                v.receiptPhone=this.address[this.radio].phone;
                v.receiptProvince=this.address[this.radio].province;
                v.receiptCity=this.address[this.radio].city;
                v.receiptArea=this.address[this.radio].area;
                v.receiptDetailed=this.address[this.radio].detailed;
              });
              console.log(this.payList);
              break;
            case 2:
              break;
            case 3:
              const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
              setTimeout(() => {
                loading.close();
                this.set('支付成功，请注意查收！');
              }, 2000);
              //清空购物车
              for(let j=0;j<this.shoppingList.length;j++){
                for(let k=0;k<this.shoppingCart.length;k++){
                  if(this.shoppingList[j].id==this.shoppingCart[k].id){
                    this.shoppingCart.splice(k,1);
                  }
                }
              }
              this.receiptList.push(...this.shoppingList);//待收货
              this.pay=false;
              this.active=1;
              return;
              break;
          }
          this.active++;
           console.log(this.radio);
        },
        //上一步
        prep(){
          if(this.active!=1){
            this.active--;
          }
        },
        //关闭付款
        closePay(){
          if(this.active==3){
                //清空购物车
              for(let j=0;j<this.shoppingList.length;j++){
                for(let k=0;k<this.shoppingCart.length;k++){
                  if(this.shoppingList[j].id==this.shoppingCart[k].id){
                    this.shoppingCart.splice(k,1);
                  }
                }
              }
              //添加到待付款
              this.pendingPayment.push(...this.shoppingList);
          }
          this.pay=false;
          this.active=1;
        },
        //待支付处付款
        pedingPay(){
            this.$prompt('请输入登入密码', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputType:'password'
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '支付成功！ '
            });
                //删除待付款
              for(let j=0;j<this.shoppingListPeding.length;j++){
                for(let k=0;k<this.pendingPayment.length;k++){
                  if(this.shoppingListPeding[j].id==this.pendingPayment[k].id){
                    this.pendingPayment.splice(k,1);
                  }
                }
              }
              //添加到待收货
              this.receiptList.push(...this.shoppingListPeding);
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消支付'
            });       
          });
        },
        //关闭评论
        closeDiscuss(){
            this.discussShow=false;
        },
        //提交评论
        release(){
          console.log(this.rate);
          this.set('评价成功！');
          this.discussShow=false;
          this.assessList.splice(this.discussIndex,1);
          this.discussIndex=-1;
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
  .bottomBox{
    width: 100%;
    position: absolute;
    bottom: 14px;
    left: 0;
  }
  .payCode{
    width: 350px;
    height: 350px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .showCode{
      width: 200px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
      }
      .p1{
        color: red;
        font-weight: bold;
        text-align: center;
        padding: 0 0 10px 0;
      }
      .p2{
        font-weight: bold;
        text-align: center;
        padding: 0 0 80px 0;
      }
    }
  }
  .closePay{
    height: 20px;
    position: relative;
  }
  .modal-content{
    width: 40px;
    height: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .isOkOrder{
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
  }
  .detailed{
    width: 336px;
    margin: 20px auto 0;
  }
  .discuss{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0,0.6);
    .discussBox{
      width: 546px;
      height: 360px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: white;
      margin-left:  -273px;
      margin-top: -180px;
      overflow: hidden;
      .orderTime{
        display: flex;
        background: #f8f8f9;
        height: 36px;
        line-height: 36px;
        margin-top: 10px;
        p{
          color:#9a9a9a;
          margin-left: 10px;
          span{
              color: #323232;
          }
        }
        b{
          display: inline-block;
          width: 60px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
          margin-left: 220px;
        }
      }
      .orderContent{
        height: 346px;
        display: flex;
        .infoImg{
          width: 231px;
          height: 289px;
          margin-top: 10px;
          margin-left: 10px;
          img{
            width: 100%;
            height: 231px;
          }
          p{
            text-align: center;
            color: #666668;
            height: 20px;
            line-height: 20px;
            margin-top: 6px;
          }
          .orderPay{
            font-weight: bold;
            color: #f40;
          }

        }
        .rate{
          width: 302px;
          p{
            display: flex;
            color: #9a9a9a;
            padding: 10px 0 0 0;
            justify-content: center;
          }
          .orderText{
            width: 80%;
            margin: 10px auto;
          }
          .pushDis{
            width: 118px;
            height: 40px;
            background: #f40;
            color: white;
            font-weight: bold;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            border-radius: 5px;
            margin: 20px auto;
          }
        }
      }
    }
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
              padding: 10px 0 10px 0;
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
        }
      }
      .bottomBtn{
        display: flex;
        justify-content: space-around;
        .pushAddr{
          width: 100px;
          height: 40px;
          .el-button--primary{
            width: 100%;
            height: 100%;
          }
        }
        .next{
          width: 100px;
          height: 40px;
          .el-button--success{
            width: 100%;
            height: 100%;
          }
        }
        .prep{
          width: 100px;
          height: 40px;
          .el-button--success{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .shoppingCart{
    overflow: auto;
  }
  .settlement{
    margin: 20px auto;
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
    padding: 0 8px;
    height: 24px;
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
    padding: 20px 0 20px 0;
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
      margin-top: 120px;
      font-size: 12px;
    }
  }
</style>
