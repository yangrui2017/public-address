<template>
  <div class="box">
    <h4>一共分享{{sharenumber}}次，获得总积分{{integral}}积分</h4>
    <table border="1">
      <thead>
       <tr>
        <th>分享时间</th>
        <th>活动名称</th>
        <th>被分享人</th>
        <th>获得奖励</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="index" >
          <td>{{item.created_on}}</td>
          <td>{{item.name}}</td>
          <td>{{item.user}}</td>
          <td>{{item.reward}}</td>
      </tr>
      </tbody>
     
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sharenumber:"20",
      integral:"144",
      list:[
        {
          created_on:"2019-06-10 06:19:21",
          name:"由技师分享用户",
          user:"挑剔",
          reward:"20积分"

        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
  margin: 0;
  padding-top:20px
}
.box{
  width: 100%;
  height: 100%;
  background: url(../assets/true.jpg);
  background-size: 100% 100%;
  color: white
  }
  table{
    margin-top: 30px;
    border-collapse:collapse;
    width: 96%;
    margin-left: 2%
   
  }
  th{
   font-size: 13px
  }
  tbody{
     font-size: 13px
  }
</style>
