<style scoped>

.detail_box{
	width:100%;
	max-width:1440px;
	margin:0 auto;

}


.detail_top{
	width:100%;
	height:290px;
	background:#e4f460;
	box-sizing: border-box;
	padding-left: 110px;
	padding-top: 40px;
	background:#edf683;
}

.detail_top figure{
	display: flex;
	align-items: center;
}

.school_img{
   width:380px;
   border:10px solid #fff;
   border-bottom:0;
   box-sizing: border-box;
   height:250px;
}


.school_name{

	margin-left: 75px;
	
	font-size: 36px;
	color:#000;
}


.detail_main{
  padding-left: 120px;
  padding-right: 120px;
}

</style>


<template>

  <div>
  	
  	 <Top></Top>

  	  <div class="detail_box" >

  	     <div class="detail_top" >
	     	     <figure >
	                     <img  class="school_img" :src="$route.query.headImg" />
	                           
	                     <figcaption class="school_name">{{$route.query.name}}</figcaption> 
	              </figure>

     	</div>

     	<div class="detail_main" >
           
             <div>
             	 学校首页>{{type}}
             </div>
             <div v-html="content"></div>

        </div>

      </div>

 </div>
	
</template>

<script >

	import Top from '../Header';

	import axios from 'axios';

	export default {
	  name: 'NewsInformation',
	  data () {

	  	return {

           type:"谁也没进来",
           content:"<p>谁也没进来</p>"
	  	}

	  },

	components: {
      Top
    },
    mounted:function(){

  	    // console.log(this.$route.params)
  	    // console.log(this.$route.query)
  	    if(this.$route.query.type==0){
            
  	    	this.$set(this,"type","校园动态");

  	    }else if(this.$route.query.type==1){

  	    	this.$set(this,"type","公告通知");

  	    }else if(this.$route.query.type==2){

  	    	this.$set(this,"type","教育资讯");
            
  	    }

  	     //http://localhost:8888/static/mock/school/schoolList.json 

        
         axios.get("http://localhost:8888/static/mock/school/newsInformation.json",{
         	  params:{
         	  	id:this.$route.params.id
         	  } 
               
             })
            .then(function (response) {

               
                var result=response.data;

                 
                 console.log(result)
                
                if(result.code==0){
                      
                      this.$set(this,"content",result.data.content)
                  
                }else{

                  console.log(result.msg)
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });




    }


  }



</script>