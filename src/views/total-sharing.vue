<template>
  <div class="box">
			<h2 id="text1">{{name}}<br>{{text}}</h2>
            <p>---------------------邀请规则---------------------</p>
            <div class="rule">{{rule}}</div>
            <div class="but">
             <div  v-for="(item,index) in list" :key="index"  @click="operable(index)">
                 <p>{{item.name}}</p>
             </div>
            </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      name:'邀友有礼',
      text:'荐者有份',
      rule:'1.规则，是运行、运作规律所遵循的法则。规则，一般指由群众共同制定、公认或由代表人统一制定并通过的，由群体里的所有成员一起遵守的条例和章程。它存在三种形式：明规则、潜规则、元规则，无论何种规则只要违背善恶的道德必须严惩不贷以维护世间和谐；明规则是有明文规定的规则，存在需要不断完善的局',
      record:{},
      list:[
          {id:"0",
           name:"用户分享用户",
          text:"这是用户分享用户"
          },
          {id:"1",
           name:"技师分享用户",
          text:"这是技师分享用户"
          },
          {id:"2",
          name:"技师分享技师",
          text:"这是技师分享技师"
          }
      ]
    }
  },
  created(){
    
  },
   mounted(){
       var _that=this;
       var openid=localStorage.getItem("openid");
        _that.$http.post(_that.$api+"/wx/event/user_event/list/", {
            open_id:openid
          })
          .then(function(response) {
           _that._data.list= response.data.event[0];
          })
          .catch(function(error) {
            console.log(error);
          });
        
  },
  methods: {
      getQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)
			        return  unescape(r[2]);
			      return null;
      },
      operable(index){
            sessionStorage.setItem("operable", JSON.stringify(this.list[index]));//保存当前点击菜单
            this.$router.push({path:'/user-sharing'});
      }
  }
}

</script>
<style scoped>
a{text-decoration:none}
    .box {
        width: 100%;
        height: 100%;
        background: url(../assets/fuwu.png);
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
    
    h2 {
        margin-top:50px;
        text-align:center;
        font-size:30px;
        color:#FFFFFF; 
        text-shadow: 0 4px 0 #ccc,  0 2px 0 #c9c9c9,  0 3px 0 #bbb, 
        0 4px 0 #b9b9b9,  0 5px 0 #aaa,  0 6px 1px rgba(0,0,0,.1), 
        0 0 5px rgba(0,0,0,.1),   0 1px 3px rgba(0,0,0,.3), 
        0 3px 5px rgba(0,0,0,.2), 
        0 5px 10px rgba(0,0,0,.25), 
        0 10px 10px rgba(0,0,0,.2), 
        0 20px 20px rgba(0,0,0,.15); 
    }
    p {
        width:90%;
        margin-left:5%;
        margin-bottom: 10px;
    }
    .rule{
        font-size:15px;
         width:86%;
         margin-bottom: 10px;
         border-radius:5px;
         background:#e06319;
         padding:3%;
         margin-left:4%;
         text-align:left;
         color:white
    }
    .but{
        
        margin-top:40px
    }
    .but div{
        display:inline-block;
        padding:10px;
        margin-left:10px;
        text-align:center;
        background:#00c2ff;
        border-radius:10px;
        line-height:30px;
        font-size:15px;
    }
</style>
