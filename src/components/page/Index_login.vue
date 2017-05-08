
<style scoped>

.Sidebar_tree{
  width:420px;
}

</style>

<template>
  
  <div >

    <Top></Top>
    <div class="Sidebar_tree">
      
      <SidebarTree ></SidebarTree>

    </div>

    <router-view></router-view>
        
  </div>

</template>

<script>
	
import Top from './Header';
import SidebarTree from './Sidebar_tree'

import axios from 'axios'

export default {
  name: 'Index_login',
  
  data () {
    return {
      
    }
  },
  components: {
    Top,SidebarTree
  },

  
   
}

</script>