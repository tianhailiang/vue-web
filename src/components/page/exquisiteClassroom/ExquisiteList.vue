<style scoped>

.school_box{
  width:100%;
  max-width:1440px;
  height:1000px;
 
  margin:0 auto;
  padding-left:55px;
  padding-right:55px;
  box-sizing: border-box;

}

.school_head{
  width:100%;
  border-bottom:1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  
}


</style>


<template>

  <div>

        <Top></Top>

         <div class="school_box">

              <div class="school_head">

                   
                    
                    <!-- <FlipPage v-on:flip="kindChangePage" :maxPage="kmaxPage"></FlipPage> -->
                   

                 </div>

                  <ul class="school_ul">



                   <router-link   tag="li"  :to="{name:'recordingPlayback',params: { id:123 }}">
                       123

                   </router-link>  


                  </ul>


         </div>
      

  </div>
	

</template>

<script>

import Top from '../Header';

export default {
  name: 'ExquisiteList',
  data () {
    return {
      
     
     
    }
  },
  components: {
    Top
  }

}  


</script>