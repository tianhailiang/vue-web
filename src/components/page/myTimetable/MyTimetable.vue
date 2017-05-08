<template>
    <div>
      <Top></Top>
      <div>欢迎来到我的主页</div>
    </div>
  
</template>

<script>

import Top from '../Header.vue';



export default {
  name: 'MTT',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   components: {
    Top
  }
}

</script>
