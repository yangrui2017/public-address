<template>
    <div>
       <div class="company">
                        <img src="../assets/logo.png"/>
                        <span>上海联产电子科技有限公司</span>
            </div>
        <transition name="fade" class="content">
           
            <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
                <!-- 第一页 -->
                <swiper-slide class="swiper-slide1">
                     <img src="../assets/fuwu.jpg" class="gongsi"/>
                      <h3>洗车优点</h3>
                      <p>1、不损伤车辆漆面。长期使用该方法，相反能起到对车辆的养护作用。</p>
                      <p>2、操作清洗不使用一滴水，可节约大量水资源。</p>
                      <p>3、不污染环境，无任何废水废气排放。</p>
                      <p>4、方便易行，可上门服务。无需车辆开到洗车点，易受车主欢迎</p>			
                </swiper-slide>
                <!-- 第二页 -->
                <swiper-slide class="swiper-slide2">
                     <img src="../assets/wushui.png" class="gongsi"/>
                      <h3>洗车产品</h3>
                      <p>服务产品:活性剂 抗静电剂 泥巴软化剂 颗粒悬浮剂 包裹剂 光亮因子等原材料组成。</p>
                      <p>产品特点:本产品采用先进配方和工艺配制,在清洁车身同时打蜡 上光 镀膜一次完成,超强的光亮因子,细腻的平滑性,均匀剔透的保护膜抗击紫外线,强劲的驱水镀膜保护整台爱车,使整台车子表面光亮如镜子般剔透.不易粘土 灰尘 污垢 减小风阻,降低油耗,大大延长车漆使用寿命。</p>
                      <p>使用方法:将产品以雾状均匀喷洒于毛巾表面擦拭车身,再用专用纳米毛巾轻轻打磨,马上可以将车漆表面擦成均匀透亮.一擦一抹轻松完成,本产品是一种最为轻松方便适合任何车漆颜色.</p>
                </swiper-slide>
             
                
               <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </transition>
    </div>
</template>
<script>
     import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        name: 'index',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    // swiper configs 所有的配置同swiper官方api配置
                    notNextTick: true,//notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    direction: 'vertical',//水平方向移动
                     pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                      },
                    grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    setWrapperSize: true,//Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
                    mousewheel: false,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                    mousewheelControl: false,//同上
                   
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
                    observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    onTransitionStart(swiper){
                        console.log(swiper)
                    },
                    on: {
                        //监听滑动切换事件，返回swiper对象
                        slideChange: ()=>{
                           let swiper = this.$refs.mySwiper.swiper;
                           console.log(swiper.activeIndex); //滑动打印当前索引
                        }
                    }
                }
            }
        },
        methods: {},
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(0, 1000, false)  //初始滑动到哪个页面
        },
        watch: {}
    }
</script>
<style scoped>
.company{
    height: 50px;
    width: 100%;
    background: #bed7f1;
    position: fixed;
    top: 0;
    z-index: 2
}
.company img{
    height: 24px;
    margin-top: 13px;
    margin-left: 2%;
    float: left;


}
.company span{
    font-size: 13px;
    line-height: 56px;
    float: left;
}
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    .swiper-slide1{
    }

    .swiper-slide2{
    }

    .swiper-slide3{
        background: blanchedalmond;
    }
    .page h3{
      margin: 0
    }
    .question{
            color: #4c5667;
            width: 80%;
            margin-left: 10%;
            text-align: left;
            line-height: 30px;
            font-size: 15px;

    }
    .gongsi{
        width: 100%;
        margin-top: 50px
    }
    .swiper-slide2 p{
        margin: 0 6% 0 2%;  
        line-height: 30px;
        font-size: 15px;
        width: 92%;
        text-align: left;
            
    }
    .swiper-slide1 p{
         margin: 0 6% 0 2%;  
        line-height: 40px;
        font-size: 17px;
        width: 92%;
        text-align: left;
    }
</style>