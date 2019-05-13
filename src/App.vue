<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  mounted() {
    var openid = localStorage.getItem("openid");
    if (openid == "undefind" || openid == null) {
      var _that = this;
      var urls = window.location.href.split("?").toString();
      var code = _that.getQueryString("code");
      if (code !== "" && code !== null && code !== undefined) {
        _that.$http
          .get("http:/dev.upctech.com.cn/wx/js_token?code=" + code)
          .then(function(response) {
            localStorage.setItem("openid", response);
            console.log(response 
            )
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        //					获取code
        _that.$http.post("http://dev.upctech.com.cn/wx/wx_js_sign", {
            r_url: urls
          })
          .then(function(response) {
            urls=encodeURIComponent(urls);
            localStorage.setItem("wxsdk", JSON.stringify(response.data));
            let link ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
              response.data.appId +
              "&redirect_uri=" +
              urls +
              "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            window.location.replace(link);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
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

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
