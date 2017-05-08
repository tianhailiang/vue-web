<template>
  
  <div class="data" >
     <div class="data_top" >
       
       <h2>数据统计</h2>
       <div>更多</div>
       


     </div>

  </div>
</template>

<script>

export default {
  name: 'data',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .data{
    width:70%;
    height:400px;
    background:yellow;
  }
.data_top{
  width:100%;
  height:30px;
  display: flex;
  justify-content: space-between;
  background:#999;
}

</style>
