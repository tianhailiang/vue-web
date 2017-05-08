<template>
  
  <div >

    <Top></Top>

    <div class="wrap_box" >
      <DataStatistics></DataStatistics>
      <Cal></Cal>
    </div>
  </div>

</template>

<script>

import Top from './Header'

import DataStatistics from './DataStatistics'

import Cal from './calendar/Cal'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Top, DataStatistics, Cal
  }
}

</script>

<style scoped> 
 .wrap_box{
   
   width:100%;
   display: flex;
   flex-wrap:wrap;

 }
   
</style>
