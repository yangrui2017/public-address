<template>
  <div class="box">
     <img src="../assets/test.png" class="img"/>
      <div class="content">
        <el-row class="butsort">
          <el-button type="warning" plain @click="showtimesort" autofocus="true">按时间排序</el-button>
          <el-button type="warning" plain  @click="showplacesort">按地点排序</el-button>
        </el-row>
        <div  v-if="timesort">
          <div class="listbox abox">           
            <p class="service_start_text">预计服务时间：<span>10:00-12:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">10:00-12:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
        <div class="listbox bbox">           
            <p class="service_start_text">预计服务时间：<span>12:00-14:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">12:00-14:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
        <div class="listbox abox">           
            <p class="service_start_text">预计服务时间：<span>14:00-15:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">14:00-15:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
        
        </div>
       
         <div class="listbox" v-if="placesort">
          <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="A类  10:00~15:00 两单" name="1">
   <div class="listbox">           
            <p class="service_start_text">预计服务时间：<span>10:00-12:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">10:00-12:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
        <div class="listbox">           
            <p class="service_start_text">预计服务时间：<span>14:00-15:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">14:00-15:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
  </el-collapse-item>
  <el-collapse-item title="B类 12:00~14:00 一单" name="2">
     <div class="listbox">           
            <p class="service_start_text">预计服务时间：<span>12:00~14:00</span></p>
            <el-row>
            <el-col :span="6"><div class="introduce">京TG1245</div></el-col>
            <el-col :span="6"><div class="introduce">12:00~14:00</div></el-col>
            <el-col :span="6"><div class="introduce">内外清洗</div></el-col>
            <el-col :span="6"><div class="introduce">待服务</div></el-col>
            </el-row>
            
            <el-row class="carwashtext">
               <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="11"><div class="introduce2">露天占道非固定车位</div></el-col>
             <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><el-button type="warning" size="mini">详情</el-button></el-col>
            </el-row>
              <img src="../assets/pluce.png" class="img"/>
        </div>
  </el-collapse-item>
 
</el-collapse>
        </div>
      </div>
     
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      activeNames: ['1'],
        timesort:true,
        placesort:false,
        list:"",
        list2:""
    };
  },
  created() {
  },
  mounted() {
      var _that=this;
    // _that.$http.post("extend/getDispatchOrderList",{
    //     "access_key":"xunjiepf",
    //         "uid":709
    // })
    //       .then(function(response) {
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
       _that.$http.get("http://localhost:8080/static/shuju.json")
          .then(function(response) {
           _that._data.list=_that.dealWithData(response.data.data)
            _that._data.list2=response.data.data;
            console.log( _that._data.list2)
          })
          .catch(function(error) {
            console.log(error);
          });
  },
  methods: {
    dealWithData(data){
            let c = [];
            let d = {};
            data.forEach(element => {
                if(!d[element.addr_id]){
                    c.push({
                        addr_id: element.addr_id,
                        allData: [element]
                    });
                    d[element.addr_id] = element;
                }else{
                    c.forEach(ele => {
                        if(ele.addr_id == element.addr_id){
                            ele.allData.push(element);
                        }
                    });
                }
                          
          });
          return c;
          },
      showtimesort(){
        var _that=this;
        console.log(_that._data)
        _that._data.timesort=true;
         _that._data.placesort=false;
      },
       showplacesort(){
        var _that=this;
        _that._data.placesort=true;
         _that._data.timesort=false;
      },
       handleChange(val) {
        console.log(val);
      }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    margin: 0
}
.box{
    background: rgb(242, 242, 242);
    width:100%;
}
.img{
    width: 100%
}
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height:40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content{
      margin-top:10px;
  }
  .listbox{
      width: 90%;
      margin-left: 5%;
      background: white;   
      margin-top: 10px;
      border-radius: 10px;
  }
  .service_start_text{
        text-indent: 1em;
        font-size: 15px;
        font-weight: 600;
          line-height: 30px;
          text-align: left
     
  }
   .service_start_time{
       line-height: 30px;
      font-size: 13px;
      border-bottom:1px solid #c0c4cc
   }
   .introduce{
       font-size: 14px;
        line-height: 40px
   }
   .introduce2{
         font-size: 14px;
        line-height: 40px;
       text-align: left
   }
   .carwashtext{
     border-bottom: 1px solid #c0c4cc
   }
   .butsort{
     margin-bottom: 10px
   }
   .abox{
     background: #a8c5e2
   }
   .bbox{
     background: #eaabab
   }
</style>
