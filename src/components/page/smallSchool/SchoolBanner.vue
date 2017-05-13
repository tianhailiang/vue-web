
<style scoped>

.banner_img{
	height:350px;
}

</style>
<template>

 <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(slide,index) in rows" :key="index">
    	<!-- <img :src="slide.bannerUrl" class="banner_img" /> -->
    	<div :style="{background:'url('+slide.schoolUrl+') no-repeat center',backgroundSize:'100%'}" class="banner_img"></div>
    </swiper-slide>

   
    
  </swiper>
	

</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'; 

export default {
  name: 'SchoolBanner',
  props:{
  	rows:{
  		type:Array,
  		default:[]
  	}
  },
  data () {
    return {

      swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop : true,
          direction : 'horizontal',
          grabCursor : false,
          setWrapperSize :true
         
        }

    }    


  },
  components: {
    swiper,
    swiperSlide
  }  

}


</script>