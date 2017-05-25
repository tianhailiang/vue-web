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


.detail_banner{
	width:100%;
	margin-top: 110px;

}


.brief_introduction{

	width:100%;
	border:1px solid #dcdcdc;
	margin-top: 45px;
	box-sizing: border-box;
	padding-left: 40px;
	padding-right:40px;


}

.brief_title{
	height:87px;
	border-bottom:1px solid #dcdcdc;
	box-sizing: border-box;
	padding-top: 30px;
	display: flex;
	 justify-content: space-between;
    align-items: center;
}

.brief_title h2{

   height:100%;
   font-size: 25px;
   color:#a0a0a0;
   line-height: 57px;
   border-bottom:1px solid #ffe102;


}

.school_ul{
  width:1120px;
  padding-top: 45px;
  display: flex;
 

}


.school_ul li{
	width:250px;
	margin-right: 37px;
}

.school_ul li:nth-of-type(4n+0){
  margin-right:0;
}


.school_ul li img{
  width:100%;
  height:175px;
  border:1px solid #dcdcdc;

}


.school_ul li figcaption{
  width:100%;
  height:75px;
  text-align:center;
  color:#030303;
 
  line-height: 75px;
}

.nav_div{

   display: flex;
 
    border-bottom:1px solid #dcdcdc;
	height:87px;
	padding-top: 30px;
	box-sizing: border-box;
	
}


.title_span{

   height:100%;
   font-size: 25px;
   color:#a0a0a0;
   line-height: 57px;
 
  margin-right: 27px;
}

.new_ul{
	
}

.new_ul li{
   height:35px;
   line-height: 35px;
   font-size: 14px;
   color:#000;
   border-bottom:1px dashed #dcdcdc;
}


.news_span{
	display: inline-block;
	width:217px;
}

.title_active{
	color:#6e3a08;
	border-bottom:1px solid #6e3a08;
}

</style>

<template>
	<div>
          
          <Top></Top>

     <div class="detail_box" >
     	
     	<div class="detail_top" >
     	     <figure >
                     <img  class="school_img" :src="schoolImg" />
                           
                     <figcaption class="school_name">{{schoolName}}</figcaption> 
              </figure>

     	</div>

     	<div class="detail_main" >

     	    <div class="detail_banner">

             <SchoolBanner :rows="schoolBannerList"></SchoolBanner>

           </div>  


           <div class="brief_introduction" >
                 
                <div class="brief_title">

                   <h2>学校简介</h2>
                
                </div> 

                 <div  class="brief_content" v-html="briefIntroduction">
                      

                 </div>

           </div>

            <div class="brief_introduction" >


               <div class="brief_title">

                    <h2>教学环境</h2>

                    <FlipPage v-on:flip="teachingChangePage" :maxPage="teachMaxPage"></FlipPage>
                
               </div> 

                <ul class="school_ul">
                 
                
                   <li v-for="(item,index) in teachingRows" :key="index" >
                       <figure>
                          <img :src="item.schoolUrl" />
                           
                           <figcaption>{{item.name}}</figcaption> 
                       </figure>

                   </li>  
                  
               </ul>


            </div>


             <div class="brief_introduction" >


               <div class="brief_title">

                    <h2>课程介绍</h2>

                    <FlipPage v-on:flip="courseChangePage" :maxPage="coursMaxPage"></FlipPage>
                
               </div> 

                <ul class="school_ul">
                 
                
                   <li v-for="(item,index) in coursRows" :key="index" >
                       <figure>
                          <img :src="item.schoolUrl" />
                           
                           <figcaption>{{item.name}}</figcaption> 
                       </figure>

                   </li>  
                  
               </ul>


            </div>

            <div class="brief_introduction" >


               <div class="brief_title">

                    <h2>宝贝食谱</h2>

                    <FlipPage v-on:flip="babyChangePage" :maxPage="babyMaxPage"></FlipPage>
                
               </div> 

                <ul class="school_ul">
                 
                
                   <li v-for="(item,index) in babyRows" :key="index" >
                       <figure>
                          <img :src="item.schoolUrl" />
                           
                           <figcaption>{{item.name}}</figcaption> 
                       </figure>

                   </li>  
                  
               </ul>


            </div>


             <div class="brief_introduction" >
                
                <div class="nav_div" >

                       <span class="title_span" @click="toggleTabs(0)" :class="{title_active:shows[0]}">校园动态</span>
                       <span class="title_span" @click="toggleTabs(1)" :class="{title_active:shows[1]}">公告通知</span>
                       <span class="title_span" @click="toggleTabs(2)" :class="{title_active:shows[2]}">教育资讯</span>
                       
                </div>

	                 <ul class="new_ul" v-show="shows[0]">

	                          <router-link   tag="li" v-for="(item,index) in campusDynamics" :key="index" :to="{name:'newsInformation',params: { id: item.id},query:{headImg:schoolImg,name:schoolName,type:0}}" >

	                            
	                                 <span class="news_span">{{item.news}}</span>
	                                 <span class="date_span">{{item.date}}</span>

	                           </router-link>
	                           
	                 </ul>

	                  <ul class="new_ul" v-show="shows[1]">

	                             <router-link   tag="li" v-for="(item,index) in notice" :key="index" :to="{name:'newsInformation',params: { id: item.id},query:{headImg:schoolImg,name:schoolName,type:1}}" >

	                                 <span class="news_span">{{item.news}}</span>
	                                 <span class="date_span">{{item.date}}</span>

	                             </router-link>
	                           
	                 </ul>

	                
	                  <ul class="new_ul" v-show="shows[2]">
                                  
                                  <router-link   tag="li" v-for="(item,index) in educationalInformation" :key="index" :to="{name:'newsInformation',params: { id: item.id},query:{headImg:schoolImg,name:schoolName,type:2}}" >
                                 
	                             
	                                 <span class="news_span">{{item.news}}</span>
	                                 <span class="date_span">{{item.date}}</span>
	                                 
                                 </router-link>
	                           
	                           
	                 </ul>

	                 

	                
             </div>

     	</div>

     </div>     

   </div>
</template>

<script>

import Top from '../Header';

import axios from 'axios';

import SchoolBanner from './SchoolBanner';

import FlipPage from './FlipPage';


export default {
  name: 'SchoolDetail',
  data () {
    return {
      schoolImg:"",
      schoolName:"",
      schoolBannerList:[],
      briefIntroduction:'',
      size:4,
      teachingEnvList:[],
      teachingRows:[],
      teachMaxPage:0,
      courseList:[],
      coursRows:[],
      coursMaxPage:0,
      babyRecipesList:[],
      babyRows:[],
      babyMaxPage:0,
      campusDynamics:[],
      notice:[],
      educationalInformation:[],
      shows:[true,false,false]
     

    }
  },
  components: {
    Top,SchoolBanner,FlipPage
  },

  methods:{

     
    teachingChangePage:function(currentPage){


        this.$set(this,"teachingRows",this.teachingEnvList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
          
    },
    
    courseChangePage:function(currentPage){

        
      this.$set(this,"coursRows",this.courseList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    },

    babyChangePage:function(currentPage){

        
      this.$set(this,"babyRows",this.babyRecipesList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    },

     toggleTabs: function(idx) {
            
          this.shows.forEach(function(value,index,array){
               
                 array[index]=false;  

           });

          
          
           this.shows.splice(idx, 1, true);

           

     }

    

  },

  mounted:function(){

  	// console.log(this.$route.params)

    //http://localhost:8888/static/mock/school/schoolDetail.json

    //调试http://192.168.3.118:8080/ucan_manage/weiSchool/returnSchoolDetails

  	axios.get("http://localhost:8888/static/mock/school/schoolDetail.json",{

  		      params:{
  		      	schoolId:this.$route.params.id
  		      }
               
             })
            .then(function (response) {

              

              var result =response.data;

                
                if(result.code==0){

                   console.log(result)

                   this.$set(this,'schoolImg',result.data.schoolLogoPicture);
                   this.$set(this,"schoolName",result.data.schoolName);
                   this.$set(this,"schoolBannerList",result.data.schoolPicture);
                   this.$set(this,'briefIntroduction',result.data.briefIntroduction);
                   //教学环境列表
                  this.$set(this,'teachingEnvList',result.data.TeachingEnvironment);
                  this.$set(this,"teachingRows",this.teachingEnvList.slice(0,this.size));
                  this.$set(this,"teachMaxPage",Math.ceil(this.teachingEnvList.length/this.size));
                     //课程介绍

				  this.$set(this,'courseList',result.data.CourseIntroduction);
                  this.$set(this,"coursRows",this.courseList.slice(0,this.size));
                  this.$set(this,"coursMaxPage",Math.ceil(this.courseList.length/this.size));

                    //宝贝食谱

                  this.$set(this,'babyRecipesList',result.data.BabyRecipes);
                  this.$set(this,"babyRows",this.babyRecipesList.slice(0,this.size));
                  this.$set(this,"babyMaxPage",Math.ceil(this.babyRecipesList.length/this.size));
                   //校园动态

                  this.$set(this,"campusDynamics",result.data.CampusDynamics); 
                   //校园公告
                  this.$set(this,"notice",result.data.Notice);
                  //教育资讯

                  this.$set(this,"educationalInformation",result.data.educationalInformation);

                  
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