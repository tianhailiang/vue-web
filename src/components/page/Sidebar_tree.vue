
<template>
	
	<el-col :span="8">
   
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
    
        


       <el-submenu index="1">
        <template slot="title">系统管理</template>
       
          <el-menu-item index="1-1">
                <router-link to="/User_management" >系统用户管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">用户管理</el-menu-item>        
          <el-menu-item index="1-3">资源管理</el-menu-item>
          <el-menu-item index="1-4">角色管理</el-menu-item>
          <el-menu-item index="1-5">基础数据管理</el-menu-item>

      </el-submenu>
      <el-submenu index="2">

         <template slot="title">内容管理</template>
          <el-menu-item index="1-1">活动管理</el-menu-item>
          <el-menu-item index="1-2">banner管理</el-menu-item>        
      </el-submenu>

      <el-submenu index="3">

         <template slot="title">教学管理</template>
          <el-menu-item index="1-1">教师管理</el-menu-item>
          <el-menu-item index="1-2">名师管理</el-menu-item>
          <el-menu-item index="1-3">课程管理</el-menu-item>
          <el-menu-item index="1-4">课件管理</el-menu-item>
          <el-menu-item index="1-5">题库管理</el-menu-item>

      </el-submenu>
      
       <el-submenu index="4">
           
           <template slot="title">学校管理</template>
            <el-menu-item index="1-1">学校管理</el-menu-item>
            <el-menu-item index="1-2">学生管理</el-menu-item>

      </el-submenu>

       <el-submenu index="5">
            <template slot="title">支付管理</template>
            <el-menu-item index="1-1">提现审批</el-menu-item>
            <el-menu-item index="1-2">退费审批</el-menu-item>
              
      </el-submenu>

    </el-menu>
  </el-col>

</template>

<script>


	export default {
       props:['data'],
       data(){
         return {
         
            

           }  
       },

      
       methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }

       }
   }	
</script>
