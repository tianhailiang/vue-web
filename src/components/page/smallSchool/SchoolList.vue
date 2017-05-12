<style scoped>




.school_head{
  width:100%;
  border-bottom:1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  
}


.school_type{
  line-height:53px;
  font-size:24px;
  color:#a0a0a0;
  border-bottom: 1px solid #02b8ea;
  text-align:center;

}

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

.school_ul{
  width:1440px;
  padding-top: 55px;
  display: flex;
  flex-wrap:wrap;

}

.school_ul li{
  width:300px;
  margin-right:45px;
}

.school_ul li:nth-of-type(4n+0){
	margin-right:0;
}

.school_ul li img{
  width:100%;
  height:208px;

}

.school_ul li figcaption{
  width:100%;
  height:83px;
  text-align:center;
  color:#683905;
  padding-top: 18px;
  box-sizing: border-box;
}

	
</style>


<template>
	 <div  >

	      

	               <div class="school_head">

	                  <div class="school_type">{{type}}</div>

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

	               </div>

             
               <ul class="school_ul">
                 
                 <li v-for="(item,index) in rows" :key="index">
                   <figure>
                      <img :src="item.schoolUrl" />
                       
                       <figcaption>{{item.name}}</figcaption> 
                   </figure>
                 </li>
               </ul>

        </div> 
</template>

<script>


var vm={
    name: 'SchoolList',
    props:['rows','type','maxPage'],
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

       
       
    },
    
}



	export default vm


</script>