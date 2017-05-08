<template>
  <div class="block">

    <span class="demonstration">默认</span>
     <el-date-picker v-model="value1" type="date" placeholder="选择日期时间">
    </el-date-picker>
  </div>
 
</template>


<script>

    
var Calendar = {
    data() {
      return {
       
        value1: ''
       
      };
    }
  };

  export default Calendar;

</script>