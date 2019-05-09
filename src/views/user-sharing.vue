<template>
  <div class="box">
    <h2>{{operable.text}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operable: {},
      share:{
        links:"http://dev.upctech.com.cn/mp/index2.html",
        title:"123",
        desc:"关注我们",
        imgUrl:"http://www.upctech.com.cn/static/picture/logo.png"
      }
    };
  },
  created() {},
  mounted() {
    var _that = this;
    _that._data.operable = JSON.parse(sessionStorage.getItem("operable"))[sessionStorage.getItem("operation")];
    var wxsdk= JSON.parse(localStorage.getItem("wxsdk"));
      _that.wxInit(wxsdk);
  },
  methods: {
    //微信分享
    wxInit(res) {
      let url = location.href.split("#")[0]; //获取锚点之前的链接
      /*this.$http.get("http://dev.upctech.com.cn/wx/js_token?code=")
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });*/
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
      });
       console.log(this._data.share.desc)
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: this._data.share.title, // 分享标题
          desc: this._data.share.desc, // 分享描述
          link: this._data.share.links, // 分享链接
          imgUrl: this._data.share.imgUrl, // 分享图标
          success: function() {
                          alert("分享到朋友圈成功")
          },
          cancel: function() {
                          alert("分享失败,您取消了分享!")
          }
        });
        //微信分享菜单测试
        wx.onMenuShareAppMessage({
           title: this._data.share.title, // 分享标题
          desc: this._data.share.desc, // 分享描述
          link: this._data.share.links, // 分享链接
          imgUrl: this._data.share.imgUrl, // 分享图标
          success: function() {
            alert("成功分享给朋友")
          },
          cancel: function() {
            alert("分享失败,您取消了分享!")
          }
        });
      });
      // 微信分享失败
      wx.error(function(err) {
        alert(JSON.stringify(err));
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: url(../assets/fuwu.png);
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}

h2 {
  text-align: center;
}

p {
  width: 90%;
  margin-left: 5%;
  margin-bottom: 10px;
}
</style>
