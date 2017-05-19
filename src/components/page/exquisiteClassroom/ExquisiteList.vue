<style scoped>

.school_box{
  width:100%;
  max-width:1440px;
  
 
  margin:0 auto;
  padding-left:55px;
  padding-right:55px;
  box-sizing: border-box;

}

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


.course_ul{
  width:1440px;
  padding-top: 55px;
  display: flex;
  

}

.course_ul li{
  
 padding-right:42px;
 border-right:1px dashed #dcdcdc;
 padding-left:40px;

}

.course_ul li:nth-of-type(1){
	padding-left:0;

}

.course_ul li:nth-of-type(4n+0){
 padding-right: 0;
 border-right: 0
}

.course_ul li dl{
	width:270px;
	
}

.course_img{
	width:100%;
	height:150px;
	border:1px solid #dcdcdc;
}

.course_ul li dl dd{
	display: flex;
	flex-direction: column;
	padding-top: 20px;
}

.course_div{
	font-size: 16px;
	color:#000;
}

.course_span{
	display: inline-block;
	width:40px;
	height:20px;
	background:#00b9f0;
	text-align: center;
	line-height: 20px;
	color:#fff;
	font-size: 12px;
	border-radius: 5px;
	margin-right: 5px;
}

.teacher_div{
	font-size: 12px;
	color:#a2a2a2;
	margin-top: 8px;
	margin-bottom: 13px;
}

.money_div{
	font-size: 14px;
	color:#f8881c;
}


.chinese{
	margin-top:70px;
}


.chinese_type{
	border-color: #f39a9c;
}

.chinese_span{
	background:#f39a9c;
}

.math_type{
	border-color: #92c11b;
}

.math_span{
	background:#92c11b;
}

.other_type{

	border-color: #f39501;
}

.other_span{
	background:#f39501;
}

.other{
	margin-bottom: 70px;
}

</style>


<template>

  <div>

        <Top></Top>

         <div class="school_box">

            <div>

	              <div class="school_head">

	                    <div class="school_type" >英语课程</div>
	                    
	                    <FlipPage v-on:flip="EnglishChangePage" :maxPage="EmaxPage"></FlipPage>
	                   

	                 </div>

	                  <ul class="course_ul">



	                   <router-link   tag="li" v-for="(item,index) in EnglishRows" :key="index" :to="{name:'coursePlayback',params: { id:item.courseId }}">
	                      
	                       <dl>
	                       	 <dt>
	                       	 	<img :src="item.courseImg" />
	                       	 </dt>
	                       	 <dd>
	                       	 	<div class="course_div">
	                       	 		<span class="course_span">英语</span>{{item.courseTitle}}
	                       	 	</div>

	                       	 	<div class="teacher_div">授课老师：{{item.courseTeacher}}</div>
	                       	 	<div class="money_div">&yen;{{item.courseMoney}}</div>

	                       	 </dd>
	                       </dl>

	                   </router-link>  


	                  </ul>

           </div>

            <div class="chinese">

	              <div class="school_head">

	                    <div class="school_type chinese_type" >语文课程</div>
	                    
	                    <FlipPage v-on:flip="ChineseChangePage" :maxPage="CmaxPage"></FlipPage>
	                   

	                 </div>

	                  <ul class="course_ul">



	                   <router-link   tag="li" v-for="(item,index) in ChineseRows" :key="index" :to="{name:'coursePlayback',params: { id:item.courseId }}">
	                      
	                       <dl>
	                       	 <dt>
	                       	 	<img :src="item.courseImg" />
	                       	 </dt>
	                       	 <dd>
	                       	 	<div class="course_div">
	                       	 		<span class="course_span chinese_span">语文</span>{{item.courseTitle}}
	                       	 	</div>

	                       	 	<div class="teacher_div">授课老师：{{item.courseTeacher}}</div>
	                       	 	<div class="money_div">&yen;{{item.courseMoney}}</div>

	                       	 </dd>
	                       </dl>

	                   </router-link>  


	                  </ul>

           </div>

           <div class="chinese">

	              <div class="school_head">

	                    <div class="school_type math_type" >数学课程</div>
	                    
	                    <FlipPage v-on:flip="MathChangePage" :maxPage="MmaxPage"></FlipPage>
	                   

	                 </div>

	                  <ul class="course_ul">



	                   <router-link   tag="li" v-for="(item,index) in MathRows" :key="index" :to="{name:'coursePlayback',params: { id:item.courseId }}">
	                      
	                       <dl>
	                       	 <dt>
	                       	 	<img :src="item.courseImg" />
	                       	 </dt>
	                       	 <dd>
	                       	 	<div class="course_div">
	                       	 		<span class="course_span math_span">数学</span>{{item.courseTitle}}
	                       	 	</div>

	                       	 	<div class="teacher_div">授课老师：{{item.courseTeacher}}</div>
	                       	 	<div class="money_div">&yen;{{item.courseMoney}}</div>

	                       	 </dd>
	                       </dl>

	                   </router-link>  


	                  </ul>

           </div>


            <div class="chinese other">

	              <div class="school_head">

	                    <div class="school_type other_type" >其他课程</div>
	                    
	                    <FlipPage v-on:flip="OtherChangePage" :maxPage="OmaxPage"></FlipPage>
	                   

	                 </div>

	                  <ul class="course_ul">



	                   <router-link   tag="li" v-for="(item,index) in OtherRows" :key="index" :to="{name:'coursePlayback',params: { id:item.courseId }}">
	                      
	                       <dl>
	                       	 <dt>
	                       	 	<img :src="item.courseImg" />
	                       	 </dt>
	                       	 <dd>
	                       	 	<div class="course_div">
	                       	 		<span class="course_span other_span">其他</span>{{item.courseTitle}}
	                       	 	</div>

	                       	 	<div class="teacher_div">授课老师：{{item.courseTeacher}}</div>
	                       	 	<div class="money_div">&yen;{{item.courseMoney}}</div>

	                       	 </dd>
	                       </dl>

	                   </router-link>  


	                  </ul>

           </div>

       </div>
      

  </div>
	
</template>

<script>

import Top from '../Header';

import axios from 'axios';

import FlipPage from '../smallSchool/FlipPage';

export default {
  name: 'ExquisiteList',
  data () {
    return {
      size:4,
      EnglishList:[],
      EnglishRows:[],
      EmaxPage:0,
      ChineseList:[],
      ChineseRows:[],
      CmaxPage:0,
      MathList:[],
      MathRows:[],
      MmaxPage:0,
      OtherList:[],
      OtherRows:[],
      OmaxPage:0
      
     
    }
  },
  components: {
    Top,FlipPage
  },
  methods:{

    EnglishChangePage(currentPage){

    	 this.$set(this,"EnglishRows",this.EnglishList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    },

    ChineseChangePage(currentPage){
           
        this.$set(this,"ChineseRows",this.ChineseList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    },
    MathChangePage(currentPage){
       
         this.$set(this,"MathRows",this.MathList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    },

    OtherChangePage(currentPage){
    	

    	this.$set(this,"OtherRows",this.OtherList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    }

  },
  mounted:function(){

       

         axios.get("http://localhost:8888/static/mock/exquisiteClassroom/exquisiteList.json",{
               
             })
            .then(function (response) {
   
                var result=response.data;

                 console.log(result)
                
                if(result.code==0){
                    //英语课程 
                  this.$set(this,'EnglishList',result.data.EnglishCourse);
                  this.$set(this,"EnglishRows",this.EnglishList.slice(0,this.size));
                  this.$set(this,"EmaxPage",Math.ceil(this.EnglishList.length/this.size));
                   
                   //语文课程

                  this.$set(this,'ChineseList',result.data.ChineseCourse);
                  this.$set(this,"ChineseRows",this.ChineseList.slice(0,this.size));
                  this.$set(this,"CmaxPage",Math.ceil(this.ChineseList.length/this.size));

                   //数学课程
                   
                  this.$set(this,'MathList',result.data.MathCourse);
                  this.$set(this,"MathRows",this.MathList.slice(0,this.size));
                  this.$set(this,"MmaxPage",Math.ceil(this.MathList.length/this.size)); 
                   
                   //其它课程

                  this.$set(this,'OtherList',result.data.OtherCourse);
                  this.$set(this,"OtherRows",this.OtherList.slice(0,this.size));
                  this.$set(this,"OmaxPage",Math.ceil(this.OtherList.length/this.size));  
                 
                  
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