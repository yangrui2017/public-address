<template>
  <div class="box">
    <header>
        <img :src="headerimg"   class="headerimg"/>
        <el-header  class="header">尊敬的{{nickname}}:您一共分享{{sharenumber}}次</el-header>
    </header>
    <div  class="list">
      <div class="listbox">
      <p>分享给***</p>
      <p>2019-08-19</p>
      </div>
     <div class="listbox fonts">获得20积分</div>
       <el-divider></el-divider>
    </div>
    <div class="footer">----------------显示所有记录----------------</div>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nickname:"",
      headerimg:"",
      sharenumber:"20"
      
    }
  },
   mounted() {
    var _that = this;

    _that._data.headerimg=JSON.parse(localStorage.getItem("userinfo")).headimgurl;
     _that._data.nickname=JSON.parse(localStorage.getItem("userinfo")).nickname;
    var unionid=JSON.parse(localStorage.getItem("userinfo")).unionid;

    _that.$http.post(_that.$api+"/wx/event/wx_share/log/", {      
            "unionid":unionid
    })
    .then(function(response) {
      _that._data.sharenumber=response.data.count
    })
    .catch(function(error) {
      console.log(error);
    });
  },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if( parseInt(row.id)%2 ==0 ){
          return 'warning-row';
        }else{
         return 'success-row';
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
    height: 100%;
}
header{
  width: 100%;
  background: #25034d;
}
.header{
  color: white;
  line-height: 40px
}
.headerimg{
  width: 25%;
  margin-top: 40px;
  border-radius: 50%;

}
.list{
    width: 100%;
    height: 60px;
    overflow: initial
}
.listbox{
  width: 50%;
  float: left;
  height: 100%;
  font-size: 15px;
  line-height: 30px;
  color: black;
}
.listbox p{
  margin: 0
}
.fonts{
  font-size: 20px;
  font-weight: bold;
  color: red;
   line-height: 60px;

}
.el-divider{
  float: left;
  margin: 0
}
.footer{
  margin-top: 20px;
 font-size: 12px;
  color: #7d7e80;
   line-height:30px;
   text-align: center
}

</style>
