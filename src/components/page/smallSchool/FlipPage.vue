
<style scoped>

.arrow{
  display: flex;
  border:1px solid #dcdcdc;
  height:30px;
  border-radius: 10px;
}

.arrow span{
  display: block;
  width:30px;
  height:30px;
  text-align:center;
  line-height:30px;
}
   
.arrow span:nth-of-type(1){
  border-right:1px solid #dcdcdc;
}

.arrow_font{
  font-size:18px;
  color:#dcdcdc;
}

.active{
  color:#333;
}



</style>

<template>
	
       

      <div class="arrow" >


        
          <span @click="previousPage">
             <svg class="icon arrow_font" aria-hidden="true" :class="{active:preActive}">
                  <use xlink:href="#icon-jiantou1"></use>
             </svg>
          </span>
          <span @click="nextPage" >
              <svg class="icon arrow_font" aria-hidden="true" :class="{active:nextActive}">
                  <use xlink:href="#icon-jiantou"></use>
             </svg>
          </span>

      </div>

	              
</template>


<script>


export default {
    name: 'FilpPage',
    props:['maxPage'],
    data () {
      return {

        currentPage:0,
        nextActive:false,
        preActive:false,
        nextFlag:false,
        preFlag:false
       
        
       
      }
    },

    watch:{
      maxPage:function(newValue){

      	// console.log(newValue)
       
        if(newValue>1){
          
           this.$set(this,'nextActive',true);
           this.$set(this,'nextFlag',true);
        }
        
      }
    },
    

    methods:{

     
      previousPage:function(){
         
         this.currentPage--;
         

         
         if(this.currentPage==0){

             
              console.log('已经是第一页');
              alert('已经是第一页')
              this.$set(this,'nextActive',true);
              this.$set(this,'preActive',false);
              this.$set(this,'preFlag',true);
              this.$set(this,'nextFlag',true);
              
         }else if(this.currentPage>0){
           
           this.$set(this,'preFlag',true);

         }else if(this.currentPage<0){
           this.currentPage=0;
           this.$set(this,'preFlag',false);
         }

         // console.log(this.preFlag +"  点击上一页的开关")

         // console.log(this.currentPage +'  点击上一页的当前页')

         if(this.preFlag){


            this.$emit('flip',this.currentPage);
         }

        
        
      },

      nextPage:function(){
           
          
          this.currentPage++;


           if(this.nextFlag){
             //设置一个变量开关
              this.$emit('flip',this.currentPage);
          
           };

         
          // console.log(this.currentPage +"  点击下一页的当前页")

          if(this.currentPage==this.maxPage-1){
          
              console.log('已经是最后一页')
              alert('已经是最后一页')

              this.$set(this,'nextActive',false);
              this.$set(this,'preActive',true);
              this.$set(this,'nextFlag',false);

           }else if(this.currentPage>this.maxPage-1){

               this.currentPage=this.maxPage-1;

           }else if(this.currentPage<this.maxPage-1){
             
              this.$set(this,'nextFlag',true);

           }



         
      }

    },

    mounted:function(){

    	
    }

   
    
}



</script>