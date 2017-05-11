<style scoped>




.school_head{
  width:1330px;
  border-bottom:1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 45px;
  
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
  margin-left:45px;
}

/*.school_ul li:nth-of-type(4n+0){
	margin-right:0;
}*/

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
	                         <svg class="icon arrow_font active" aria-hidden="true">
	                              <use xlink:href="#icon-jiantou1"></use>
	                         </svg>
	                      </span>
	                      <span>
	                          <svg class="icon arrow_font" aria-hidden="true">
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

	export default {
	  name: 'SchoolList',
	  props:['rows','type'],
	  data () {
	    return {
	      
	    }
	  },
	  methods:{
	  	previousPage:function(){
	  		

           this.$emit('previousPage')
	  	}

	  }
	  
	}

</script>