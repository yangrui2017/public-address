<template>
  <div class="box">
    <h2>由<span class="originator">{{originator}}</span>分享给您的优惠券</h2>
    <img :src="qrcodeurl" class="qrcode"/>
    <p>{{text}}</p>
    <div class="coupon">
      <div class="coupontext">
        <span class="integraltext">100</span>积分
      </div>
       <div  class="couponinp">
        点击领取
      </div>
    </div>
  </div>
</template>

<script>
import qrcodeurl from "../assets/erweima.jpg"
export default {
  data() {
    return {
     originator:"挑剔",
     qrcodeurl:"",
     text:"如未关注公众用户，请先关注公众号再领取"
    };
  },
  created() {
  },
  mounted() {
    var _that = this;
   var key= _that.getQueryString("key");
    _that.$http.post(_that.$api+"/wx/event/user_event/result/", {           
            "event_scene_str":key,
            "viewer_openid": localStorage.getItem("openid")
    })
    .then(function(response) {
     _that._data.originator=response.data.current_user.nickname;
     _that._data.qrcodeurl=response.data.event_qr.qr_url;
     
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
   getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
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
.qrcode{
  width: 50%;
  margin-top: 50px
}
.originator{
  color:red
}
.coupon{
  color: white;
  background: red;
  width: 80%;
  height: 100px;
  margin-left: 10%;
  border-radius: 5px
}
.coupontext{
  float: left;
  width: 70%;
  line-height: 100px;
  font-size: 15px;
}
.integraltext{
    font-weight: 600;
    font-size: 45px;
}
.couponinp{
  float: right;
  width: 30%;
  line-height:100px;
  color: black;
  background: #f2fd5b;
}
.integral{
    width: 51%;
    float: left;
}
</style>
