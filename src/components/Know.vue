<!-- Know -->
<template>
  <div>
    <div class="search">
        <div class="search-1">
            <el-autocomplete
            v-model="state4"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="searchs" @click="srearch">搜索</div>
    </div>
    <div class="know-box">
        <div class="know-box-left">
          <img :src="current.img" alt="">
        </div>
        <div class="know-box-right">
            <p class="right-title">{{current.name}}</p>
            <p class="right-content">{{current.introduction}}</p>
        </div>
    </div>
      <div class="content-box">
        <div class="hostory">功效作用</div>
        <p class="p1">{{current.efficacy.top1}}</p>
        <p class="p1">{{current.efficacy.top2}}</p>
        <div class="hostory">形态特征</div>
        <p class="p1">{{current.feature}}</p>
        <div class="hostory">分布</div>
        <p class="p1">{{current.distributed}}</p>
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
name:'Know',
  data () {
    return {
        restaurants:[
          { "value":"墨西哥进口牛油果","address":"0","name": "墨西哥进口牛油果", "introduction": "牛油果（学名：Butyrospermum parkii Kotschy），落叶乔木，高10-15米，胸径达1-1.5米；树冠开展，分枝多而密，茎枝粗壮，多节瘤，常有弯曲现象；树皮厚，不规则开裂，具乳汁。叶长圆形，先端圆或钝，基部圆或钝，幼时上面被锈色柔毛，后两面均无毛，中脉在上面呈凹槽，下面浑圆且十分凸起，侧脉30对以上，相互平行，两面稍凸起，网脉细；叶柄圆形。花梗被锈色柔毛；花萼裂片披针形，外面被毛；花有香甜味，花冠裂片卵形，全缘。","efficacy":"1.抗氧抗衰老：牛油果含有丰富的甘油酸、蛋白质及维他命，润而不腻，是天然的抗氧衰老剂，不但能软化和滋润皮肤，还能收细毛孔，皮肤表面可以形成乳状隔离层，能够有效抵御阳光照射，防止晒黑晒伤。果仁里提取的牛油果油营养丰富，含丰富的维生素E、镁、亚油酸和必需脂肪酸，有助于强韧细胞膜，延缓表皮细胞衰老的速度。2.丰胸：牛油果中含量丰富的不饱和脂肪酸能增加胸部组织弹性，含有的维生素A能促进女性荷尔蒙分泌，维生素C能防止胸部变形，维生素E则有助胸部发育。3.保护肝脏：经研究发现，牛油果中含有可能可以保护肝脏的有效化学成分，这一发现将有助于人们发明新的药物，用于治疗肝脏疾病。","feature":"叶长圆形，长15-30厘米，宽6-9厘米，先端圆或钝，基部圆或钝，幼时上面被锈色柔毛，后两面均无毛，中脉在上面呈凹槽，下面浑圆且十分凸起，侧脉30对以上，相互平行，两面稍凸起，网脉细；叶柄圆形，长约10厘米。","distributed":"牛油果原产于墨西哥和中美洲，后在加利福尼亚州被普遍种植，因此加利福尼亚州成为世界上最大的牛油果生产地，在全世界热带和亚热带地区均有种植，但以美国南部、危地马拉、墨西哥及古巴栽培最多，并形成了墨西哥系、危地马拉系、西印度系三大种群，中国的广东、海南、福建、广西、台湾、云南及四川等地都有少量栽培。" },
          {
            "value":"莽吉柿","address":"1",
            "name": "莽吉柿",
            "introduction": "莽吉柿（学名：Garcinia mangostana L.），俗称山竹，或山竺、山竹子、倒捻子。小乔木，高12-20米，分枝多而密集，交互对生，小枝具明显的纵稜条。叶片厚革质，具光泽，椭圆形或椭圆状矩圆形，顶端短渐尖，基部宽楔形或近圆形。雄花2-9簇生枝条顶端，花梗短；雌花单生或成对，着生于枝条顶端，比雄花稍大；子房5-8室，几无花柱，柱头5-6深裂。果成熟时紫红色，间有黄褐色斑块，光滑，有种子4-5，假种皮瓢状多汁，白色。花期9-10月，果期11-12月。",
            "efficacy":{"top1":"1.莽吉柿果肉含丰富的膳食纤维、糖类、维生素及镁、钙、磷、钾等矿物元素。对机体有很好的补养作用，对体弱、病后、营养不良都有很好的调养作用。每百克可食部分含蛋白质0.66克、脂肪0.2克、糖类17克，产热67千卡。维生素含量全面，除了B族维生素外，尚含维生素A、维生素E和维生素c。无机盐方面钾的含量最高，超过100毫克。","top2":"2.莽吉柿含有一种特殊物质，具有降燥、清凉解热的作用，这使山竹能克榴莲之燥热。山竹含有丰富的蛋白质和脂类，对机体有很好的补养作用，对体弱、营养不良、病后都有很好的调养作用。"},
            "feature":"叶片厚革质，具光泽，椭圆形或椭圆状矩圆形，长14-2 5厘米，宽5-10厘米，顶端短渐尖，基部宽楔形或近圆形，中脉两面隆起，侧脉密集，多达40 50对，在边缘内联结；叶柄粗壮，长约2厘米，干时具密的横皱纹。",
            "distributed":"原产马鲁古，亚洲和非洲热带地区广泛栽培；中国台湾、福建、广东和云南也有引种或试种。",
            "img":"../../static/image/detail/foreign/1.max.jpg"
          },
          {
            "value":"猕猴桃","address":"2",
            "name": "猕猴桃",
            "introduction": "猕猴桃（学名：Actinidia chinensis Planch），也称奇异果（奇异果是猕猴桃的一个人工选育品种，因使用广泛而成为了猕猴桃的代称）。中国是猕猴桃的原产地，20世纪早期被引入新西兰。2008年11月6日，在新西兰举行的国际猕猴桃大会上，世界19个国家200多位专家一致认定：中国是猕猴桃的原产地，世界猕猴桃原产地在湖北宜昌市夷陵区雾渡河镇 。",
            "efficacy":{"top1":"1.由于其含有丰富的营养物质，因此可以提高总蛋白质水平。在餐后喝一杯猕猴桃粉制成的饮料，可以解决胃虚弱问题。猕猴桃可以有效治疗呼吸问题，还可以改善您的视力。它与蜂蜜结合使用可以有效提高视力。此外，它还是一种强大的抗氧化剂，可以消除皱纹和细纹。但如果皮肤有损伤或过敏，在使用猕猴桃前应该首先咨询医生。","top2":"2.猕猴桃的功效还包括提升免疫功能，治疗肝脏疾病，消化不良，贫血，泌尿系统问题，呼吸系统疾病，脑疾病等。它还增加红血球生产，加强牙齿和指甲。应该记住的是，健康均衡的饮食，每日摄入大量的水，在加上使用猕猴桃可以治愈很多健康问题。"},
            "feature":"花为聚伞花序1-3花，花序柄长7-15毫米，花柄长9-15毫米；苞片小，卵形或钻形，长约1毫米，均被灰白色丝状绒毛或黄褐色茸毛；花开时乳白色，后变淡黄色，有香气，直径1.8-3.5厘米，单生或数朵生于叶腋。",
            "distributed":"中国是猕猴桃的原生中心，世界猕猴桃原产地在湖北宜昌市夷陵区雾渡河镇。猕猴桃生于山坡林缘或灌丛中，有些园圃栽培。猕猴桃属共有66个种，其中62个种自然分布在中国，世界上生产栽培的主要是美味猕猴桃和中华猕猴桃两个种。美味猕猴桃枝干和果实外表皮覆有绒毛（如：秦美、徐香、海沃德等），中华猕猴桃枝干和果实外表皮比较光滑（如：红阳、黄金果等）。这两个种主要分布在华中地区的长江流域和秦岭及其以南、横断山脉以东的地区。",
            "img":"../../static/image/detail/foreign/13.max.jpg"
          },
          {
            "value":"菠萝蜜","address":"3",
            "name": "菠萝蜜",
            "introduction": "波罗蜜（学名：Artocarpus heterophyllus Lam.）是桑科波罗蜜属植物，常绿乔木，高10-20米，胸径达30-50厘米；托叶抱茎环状，遗痕明显。叶革质，螺旋状排列，椭圆形或倒卵形，长7-15厘米或更长，宽3-7厘米，先端钝或渐尖，基部楔形，成熟之叶全缘。花雌雄同株，花序生老茎或短枝上，雄花序有时着生于枝端叶腋或短枝叶腋。聚花果椭圆形至球形，或不规则形状，幼时浅黄色，成熟时黄褐色，表面有坚硬六角形瘤状凸体和粗毛；核果长椭圆形。花期2-3月。",
            "efficacy":{"top1":"1.波罗蜜是水果，木本粮食和珍贵用材兼备的热带树种，速生、美观、产果量高。果实特大，大的15-20千克，一般重7.5-10千克，素有果中王之称。成熟果实的包肉富含糖类和维生素C等，为上等水果，味甜蜜浓香，也可调制饮料，或者制成果下、罐头和酿酒筹。种仁占全果重15-30%，淀粉含量高，炒食或煮食，味如板栗。","top2":"2.木材黄色，纹理精美，干燥后少开裂，不变形，加工容易，可作上等家具、室内建筑、旋制品和乐器等用材。心材的锯屑可提取黄色染料，用以染衣物。此外，木菠萝树冠优美，适于作行道树和庭园绿化树种。"},
            "feature":"常绿乔木，高10-20米，胸径达30-50厘米；老树常有板状根；树皮厚，黑褐色；小枝粗2-6毫米，具纵绉纹至平滑，无毛；托叶抱茎环状，遗痕明显。叶革质，螺旋状排列，椭圆形或倒卵形，长7-15厘米或更长，宽3-7厘米，先端钝或渐尖，基部楔形，成熟之叶全缘，或在幼树和萌发枝上的叶常分裂，表面墨绿色，干后浅绿或淡褐色，无毛，有光泽，背面浅绿色，略粗糙，叶肉细胞具长臂，组织中有球形或椭圆形树脂细胞，侧脉羽状，每边6-8条，中脉在背面显著凸起；叶柄长1-3厘米；托叶抱茎，卵形，长1.5-8厘米，外面被贴伏柔毛或无毛，脱落。",
            "distributed":"可能原产于印度西高止山；尼泊尔、印度（锡金）、不丹和马来西亚有引种栽培；中国广东、海南、广西（博白、陆川、龙州、宁明、隆安、靖西、百色、那坡和田东等县）和云南（南部）等地均有引种栽培。",
            "img":"../../static/image/detail/foreign/16.max.jpg"
          },
        ],
    current:{ "name": "墨西哥进口牛油果",
              "introduction": "牛油果（学名：Butyrospermum parkii Kotschy），落叶乔木，高10-15米，胸径达1-1.5米；树冠开展，分枝多而密，茎枝粗壮，多节瘤，常有弯曲现象；树皮厚，不规则开裂，具乳汁。叶长圆形，先端圆或钝，基部圆或钝，幼时上面被锈色柔毛，后两面均无毛，中脉在上面呈凹槽，下面浑圆且十分凸起，侧脉30对以上，相互平行，两面稍凸起，网脉细；叶柄圆形。花梗被锈色柔毛；花萼裂片披针形，外面被毛；花有香甜味，花冠裂片卵形，全缘。",
              "efficacy":{"top1":"1.抗氧抗衰老：牛油果含有丰富的甘油酸、蛋白质及维他命，润而不腻，是天然的抗氧衰老剂，不但能软化和滋润皮肤，还能收细毛孔，皮肤表面可以形成乳状隔离层，能够有效抵御阳光照射，防止晒黑晒伤。果仁里提取的牛油果油营养丰富，含丰富的维生素E、镁、亚油酸和必需脂肪酸，有助于强韧细胞膜，延缓表皮细胞衰老的速度。","top2":"2.丰胸：牛油果中含量丰富的不饱和脂肪酸能增加胸部组织弹性，含有的维生素A能促进女性荷尔蒙分泌，维生素C能防止胸部变形，维生素E则有助胸部发育。"},
              "feature":"叶长圆形，长15-30厘米，宽6-9厘米，先端圆或钝，基部圆或钝，幼时上面被锈色柔毛，后两面均无毛，中脉在上面呈凹槽，下面浑圆且十分凸起，侧脉30对以上，相互平行，两面稍凸起，网脉细；叶柄圆形，长约10厘米。",
              "distributed":"牛油果原产于墨西哥和中美洲，后在加利福尼亚州被普遍种植，因此加利福尼亚州成为世界上最大的牛油果生产地，在全世界热带和亚热带地区均有种植，但以美国南部、危地马拉、墨西哥及古巴栽培最多，并形成了墨西哥系、危地马拉系、西印度系三大种群，中国的广东、海南、福建、广西、台湾、云南及四川等地都有少量栽培。",
              "img":"../../static/image/detail/foreign/1.max.jpg"
    },
        state4: '',
        timeout:  null
    };
  },
  methods: {
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        this.current=this.restaurants[item.address];
      },
    srearch(){
        console.log(this.state4);
        this.restaurants.forEach(v=>{
          if(v.name==this.state4){
            this.current=v;
          }
        })
    }
  }
}

</script>
<style lang='less' scoped>
*{
    margin: 0;
    padding: 0;
}
.search{
    width: 278px;
    height: 40px;
    margin: 40px auto;
    display: flex;
  .searchs{
    width: 78px;
    height: 40px;
    background: #485b6a;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    margin-left: -2px;
  }
}
  .know-box{
    width: 769px;
    height: 340px;
    margin: 0 auto;
    display: flex;
    .know-box-left{
      width: 439px;
      height: 340px;
      background: url("../../static/image/know.png")no-repeat;
      img{
        width: 426px;
        height: 324px;
        cursor: pointer;
      }
    }
    .know-box-right{
      width: 334px;
      .right-title{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin: 40px auto 20px;
      }
      .right-content{
        font-size: 14px;
        text-indent: 2rem;
        padding: 0 30px;
      }
    }
  }
  .content-box{
    width: 769px;
    margin: 20px auto 40px ;
    overflow: hidden;
    .hostory{
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
    }
    .p1{
      font-size: 14px;
      text-indent: 2rem;
      margin-top: 10px;
      line-height: 21px;
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
</style>
