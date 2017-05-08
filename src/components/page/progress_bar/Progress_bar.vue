



<template>

<div>
  

      <div class="block">
         
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[10, 20, 300, 400]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="tot">
          </el-pagination>
           <span>共{{tot/10}}页</span>
      </div>

</div>
</template>

<script>
  export default {
    props:{
      tot:{
        type:Number,
        default: 0
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        //向父元素传人当前的页数
        this.$emit('handleCurrentChange',val)

      }
    },
    created:function(){
       
    },
    data() {
      return {
        currentPage1: 1
       
      };
    }
  }

</script>