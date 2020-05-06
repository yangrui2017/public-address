<template>

  <div class="box">
    <header>
      <img :src="headerimg"
           class="headerimg" />
      <div class="header">好友分享积分多多哦！</div>
    </header>
    <div class="container">
      <div class="headerh3">
        <div class="text">长按海报保存图片，然后转发到朋友圈或微信群中：</div>
      </div>

      <van-swipe :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="(items,index) in imgurl"
                        :key="index"><img :src="items"
               class="imgurl" /></van-swipe-item>
      </van-swipe>
      <div class="person">每位好友扫码关注E帮洗车公众号，您将获得{{operable.points}}积分奖励，每位好友首次下单，您将获得500积分奖励</div>
      <div class="person">积分可在E帮洗车助手小程序中兑换洗车券!</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      operable: '',
      nickname: '',
      headerimg: '',
      act0iveNames: [],
      list: [],
      imgurl: [],
      effectivedate: ''

    }
  },
  mounted () {
    var _that = this
    setTimeout(function () {
      _that._data.headerimg = JSON.parse(localStorage.getItem('userinfo')).headimgurl
      _that._data.nickname = JSON.parse(localStorage.getItem('userinfo')).nickname
      var unionid = JSON.parse(localStorage.getItem('userinfo')).unionid
      alert(unionid)
      _that.$http.post(_that.$api + '/wx/event/user_event/by_usertype/', {
        'unionid': unionid,
        'user_type': 'member'
      }, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(function (response) {
          console.log(response)
          var data = response.data.qr_url
          data = _that.trim(data)
          _that._data.imgurl = data.split(',')
          _that._data.effectivedate = response.data.expire_date
        })
        .catch(function (error) {
          console.log(error)
        })
    }, 800)
  },
  methods: {
    trim (url) {
      url = url.replace(/\]/g, '')
      url = url.replace(/\[/g, '')
      url = url.replace(/\'/g, '')
      return url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #ffd800;
  overflow: scroll;
}

header {
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.header {
  float: left;
  color: #5b4827;
  font-size: 19px;
  line-height: 200px;
  text-indent: 2em;
}

.headerimg {
  margin-left: 20px;
  width: 20%;
  float: left;
  margin-top: 40px;
  border-radius: 50%;
}

.container {
  text-align: left;
  width: 90%;
  background: white;
  margin-left: 5%;
  border-radius: 20px;
  margin-bottom: 20px;
}
.headerh3 {
  background: #fe3a3b;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
h3,
.text {
  text-align: center;
  font-size: 28px;
  line-height: 60px;
  margin: 0;
  color: white;
}
.text {
  line-height: 40px;
  font-size: 18px;
}
.van-cell-group__title {
  margin-top: 2vh;
  /* padding: 5px 5px 5px; */
  font-weight: bold;
  color: darkblue;
  text-align: left;
  background-color: whitesmoke;
  /* box-shadow: 5px 6px 8px 0px rgba(56, 56, 56, 0.21); */
}
.imgurl {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.person {
  line-height: 35px;
  text-align: center;
  width: 90%;
  margin-left: 5%;
  border-top: 1px dashed #fed800;
}
</style>
