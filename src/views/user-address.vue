<template>

  <div class="box">
    <header>
      <img :src="headerimg"
           class="headerimg" />
      <div class="header">{{nickname}}</div>
    </header>
    <h4>请输入您要预约洗车的地址，查询是否已开通E帮上门洗车服务！</h4>
    <el-row>
      <el-col :span="19">
        <el-form>

          <el-form-item required
                        class="housing_input">
            <el-input id="suggestId"
                      v-model="city"
                      placeholder="请输入地址"
                      name="address_detail" />
            <div id="allmap"></div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-button type="success"
                   @click="query()">查询</el-button>
      </el-col>
    </el-row>
    <el-button type="primary"
               @click="location()"
               class="zidong">自动定位</el-button>

  </div>
</template>

<script>
import { setTimeout } from 'timers'
import jsonp from 'jsonp'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      onoff: true,
      data1: '',
      nickname: '',
      headerimg: '',
      lng: '',
      lat: '',
      city: '',
      address_detail: null // 详细地址

    }
  },
  created () { },
  mounted () {
    this.getcity()
    var _that = this
    var urls = window.location.href.split('?')[0]
    _that._data.headerimg = JSON.parse(localStorage.getItem('userinfo')).headimgurl
    _that._data.nickname = JSON.parse(localStorage.getItem('userinfo')).nickname
    // 获取微信分享sdkconfig
    let formData = new FormData()
    formData.append('r_url', urls) // 'file' 可变 相当于 input 表单的name 属性
    _that.$http.post(_that.$api + '/wx/wx_js_sign', formData)
      .then(function (response) {
        if (JSON.stringify(response.data) == '{}') {
          alert('没有获取到jsdk')
        } else {
          _that._data.data1 = response.data
        }
      })
  },
  methods: {
    // 查询
    query () {
      var _that = this
      if (_that._data.city != '') {
        if (_that.onoff) {
          // 手动输入
          _that.addresstranslation(_that._data.city)
        } else {
          _that.https()
        }
      } else {
        this.$message.error('请输入地址或点击自动定位')
      }
    },
    // 自动定位
    location () {
      var _that = this
      _that.onoff = false
      _that.wxInit(_that._data.data1)
    },
    // 微信sdk
    wxInit (res) {
      var _that = this
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.noncestr,
        signature: res.signature,
        jsApiList: ['getLocation']
      })
      wx.checkJsApi({
        jsApiList: ['getLocation'],
        success: function (res) {
          if (res.checkResult.getLocation == false) {
            alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！')
          }
        }
      })

      // 微信分享失败
      wx.error(function (err) {
        alert(JSON.stringify(err))
      })
      // 微信分享成功
      wx.ready(function () {
        wx.getLocation({
          success: function (res) {
            var points = _that.qqMapTransBMap(res.latitude, res.longitude)
            _that._data.lng = points.lng
            _that._data.lat = points.lat
            _that.getCurrentCity(points.lng, points.lat)
          },
          cancel: function (res) {
            alert('用户拒绝授权获取地理位置')
          }
        })
      })
    },
    // 获取当前城市,行政区 // 百度地图API功能
    getCurrentCity (longitude, latitude) {
      var that = this
      let address = ''
      let point = new BMap.Point(longitude, latitude)
      let gc = new BMap.Geocoder()
      gc.getLocation(point, function (rs) {
        let addComp = rs.addressComponents
        // 详细地址为省，市，行政区，街道，街道地址
        address = addComp.province + ',' + addComp.city + ',' + addComp.district + ',' + addComp.street + ',' + addComp.streetNumber
        that._data.city = address
      })
    },
    qqMapTransBMap (lat, lng) {
      let x_pi = 3.14159265358979324 * 3000.0 / 180.0

      let x = lng

      let y = lat

      let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi)

      let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi)

      let lngs = z * Math.cos(theta) + 0.0065

      let lats = z * Math.sin(theta) + 0.006

      return {

        lng: lngs,

        lat: lats

      }
    },
    // 通过地址获取经纬度
    addresstranslation (res) {
      var _that = this
      jsonp('https://api.map.baidu.com/geocoder/v2/?address=' + res + '&output=json&ak=7hhI8dTWwLRQ8KLTWqi8kOoLUhClNDxS&callback=showLocation', null, (err, data) => {
        if (err) {
          console.error(err.message)
        } else {
          _that._data.lat = data.result.location.lat
          _that._data.lng = data.result.location.lng
          _that.https()
        }
      })
    },
    //
    https () {
      var _that = this
      var unionid = JSON.parse(localStorage.getItem('userinfo')).unionid
      _that.$http.post('https://wx.upctech.com.cn/api/map/judge_active_area', {
        lat: Number(_that._data.lat),
        lng: Number(_that._data.lng),
        unionid: unionid,
        openid: JSON.parse(localStorage.getItem('userinfo')).openid,
        address: _that._data.city
      })
        .then(function (response) {
          if (response.data.active) {
            Dialog.alert({
              title: '消息提示',
              message: '您所查询的地址已开放E帮洗车上门服务'
            }).then(() => {
              // on close
            })
          } else {
            Dialog.alert({
              title: '消息提示',
              message: '您所查询的地址尚未开放E帮洗车上门服务，敬请谅解。详情请咨询：4008219308'
            }).then(() => {
              // on close
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getcity () {
      this.$nextTick(function () {
        var th = this
        // 创建Map实例
        var map = new BMap.Map('allmap')
        // 初始化地图,设置中心点坐标，
        var point = new BMap.Point(120.211877, 30.255194) // 创建点坐标，汉得公司的经纬度坐标
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom()

        var ac = new BMap.Autocomplete( // 建立一个自动完成的对象
          {
            'input': 'suggestId',
            'location': map
          })
        var myValue
        ac.addEventListener('onconfirm', function (e) { // 鼠标点击下拉列表后的事件
          var _value = e.item.value // 获取点击的条目
          myValue = _value.province + _value.city + _value.district + _value.street + _value.business // 地址拼接赋给一个变量
          th.city = myValue // 将地址赋给data中的city
          // console.log(th.city)
          setPlace()
        })
        // console.log(ac.pc.input)
        function setPlace () {
          map.clearOverlays() // 清除地图上所有覆盖物
          function myFun () {
            th.userlocation = local.getResults().getPoi(0).point // 获取第一个智能搜索的结果
            map.centerAndZoom(th.userlocation, 18)
            map.addOverlay(new BMap.Marker(th.userlocation)) // 添加标注
          }

          var local = new BMap.LocalSearch(map, { // 智能搜索
            onSearchComplete: myFun
          })
          local.search(myValue)

          // 测试输出坐标（指的是输入框最后确定地点的经纬度）
          map.addEventListener('click', function (e) {
            // 经度
            console.log(th.userlocation.lng)
            // 纬度
            console.log(th.userlocation.lat)
          })
        }
      })
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  background: #25034d;
  height: 150px;
}

.zidong {
  margin-top: 50px;
}

.header {
  float: left;
  color: white;
  line-height: 150px;
  text-indent: 2em;
}

.headerimg {
  margin-left: 20px;
  width: 20%;
  float: left;
  margin-top: 40px;
  border-radius: 50%;
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
</style>
