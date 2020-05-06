<template>
  <div class="box">
    <h3>汽车美容保养常识</h3>
    <p></p>
    <div class="content123">
      <h5>一、不能用洗衣粉、洗洁精洗车</h5>

      　　因其含碱性成份，长期使用可使车漆失去光泽、哑色、干裂、生锈。应使用专用的水晶洁亮液或洗车液。
      <h5>二、汽车沾上污垢后要及时处理</h5>

      　　车子使用过程中受阳光辐射、酸雨侵蚀、时间一长易结合上各种腐蚀性污垢，如水泥、油脂、粘液、沥青、树液、昆虫等形成顽固污渍，继而易使漆面暗淡无光、漆质氧化，缩短汽车车漆寿命。
      <h5>三、汽车内部要清洁保养</h5>

      　　车厢部分平时受外界油尘、泥沙、吸烟、乘客汗渍及空调循环等不良因素的影响，致使车厢内空气受染，进而细菌滋生，甚至产生难闻杂味，使丝绒发霉、真皮老化。既影响车主身心健康又不利于驾驶心境。因此，每三个月应做一次全套室内专业护理，洗车时应常吸尘。
      <h5>　四、名车、新车应慎重选用车蜡</h5>

      　　普通的油性、固体车蜡因没有附着力、易沾污（雨后留水印等）及擦伤车漆、光亮不持久等缺点已被逐渐淘汰。而名贵轿车选蜡时更应慎重，新的车蜡都是水性粉质，擦后光亮爽洁、不易粘尘、耐久性长。（如美国超级彩色水晶蜡膜、美国MOC香油蜡、英国多宝幻彩颜色修补蜡）
      <h5>　五、名车精打抛光水晶蜡步骤</h5>

      　　首先要去除污渍，这很重要，否则打好的蜡也没光泽；其次精打水晶蜡；再次机器抛光：使车蜡均匀消除阴阳色，使车蜡与漆面产生电键化合作用，结合成坚固不可渗透的更滑、更强、更持久的超强保护层；最后抹车麂皮特殊处理：不留擦痕、光亮爽洁。每月应定期精打抛光上蜡一至二次，最好少用或不用油性固体蜡，不用毛巾擦蜡，不在阳光下或车体高温时打蜡。
      洗车就像人洗脸，谁还能不会?不过简单的洗车还是有一门“细致的学问”，洗得好天天开新车，洗得不好车漆可能三五年就发暗、发糙最后龟裂，可见洗车技巧十分重要。<br>

    </div>
  </div>
</template>
<script>
export default {
  name: 'index',

  data () {
    return {
      content: {}
    }
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    }
  },
  computed: {

  },
  mounted () {
    // var _that = this
    // var news_id = _that.getQueryString('news_id')

    // _that.$http.get(_that.$api + '/wx/event/choose_template/get_content?news_id=' + news_id)
    //   .then(function (response) {
    //     console.log(response)
    //     _that._data.content = response.data
    //   })
    //   .catch(function (error) {
    //   })
  },
  watch: {}
}
</script>
<style>
.box {
  width: 100%;
}
h3 {
  font-size: 25px;
}
.content123 h4,
.content123 h5 {
  text-align: left;
  font-size: 22px;
}
.content123 h5 {
  font-size: 20px;
  margin: 20px 0;
}
.content123 div {
  font-size: 15px;
}
.content123 {
  width: 96%;
  margin-left: 2%;
  font-size: 16px;
  text-align: left;
  line-height: 30px;
  color: black;
}
.content123 img {
  width: 100%;
}
</style>
