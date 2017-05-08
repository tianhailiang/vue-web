<template>
  
  <div class="calendar_box" >
   <Calendar></Calendar>

  </div>
</template>

<script>

import Calendar from './Calendar'

// console.log(Calendar)

export default {
  name: 'Cal',
  components:{
       Calendar
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calendar_box{
    width:30%;
    height:400px;
   
    
  }



</style>
