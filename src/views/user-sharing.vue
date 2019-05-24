<template>
  <div class="box">
    <h2>{{operable.name}}</h2>
    <p>{{operable.description}}</p>
    <img :src="qr_url" class="imgurl"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event_scene_str:"",
      qr_url: "",
      operable: {},
      share:{
        links:"http://dev.upctech.com.cn/mp/index2.html?key=",
        title:"123",
        desc:"关注我们",
        imgUrl:"http://www.upctech.com.cn/static/picture/logo.png"
      }
    };
  },
  created() {
  },
  mounted() {
    var _that = this;
    _that._data.operable = JSON.parse(sessionStorage.getItem("operable"));//获取菜单并显示
    console.log(_that._data.operable );
    var wxsdk= JSON.parse(localStorage.getItem("wxsdk"));
    
    _that.wxInit(wxsdk);
    _that.$http.post(_that.$api+"/wx/event/user_event/create/", {           
            "event_id":_that._data.operable.id,
            "openid": localStorage.getItem("openid")
    })
    .then(function(response) {
      _that._data.event_scene_str=response.data.event_scene_str;
       _that._data.qr_url=response.data.event_qr.qr_url;
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
    //微信分享
    wxInit(res) {
      let url = location.href.split("#")[0]; //获取锚点之前的链接
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
          link: this._data.share.links+ this._dataevent_scene_str, // 分享链接
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
          link: this._data.share.links+ this._dataevent_scene_str, // 分享链接
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
.imgurl{
  width:50%;
}
</style>
