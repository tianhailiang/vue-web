
<style scoped>

.playback_main{
	width:100%;
   max-width:1440px;
  
 
  margin:0 auto;
  padding-left:120px;
  padding-right:120px;
  box-sizing: border-box;
}

.playback_top{
	width:100%;
	border:1px solid #dcdcdc;
	margin-top: 102px;
	display: flex;
	padding:40px;
	box-sizing: border-box;
}


.playback_img{
	display: block;
	width:420px;
	height:300px;
}


.playback_top_right{
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	flex:1;
}

.playback_title{

	font-size: 21px;
	line-height: 21px;
	color:#68390b;
}

.playback_price{
	background:#fef2b8;
	width:100%;
	margin-top: 30px;
	height:55px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.playback_price_left{
	margin-left: 15px;
}

.playback_price_left b{
	font-size: 24px;
	color:#ee9902;
	font-weight: normal;
	line-height: 24px;
}

.playback_money{
	display: inline-block;
	width:23px;
	height:23px;
	background:url(../../../assets/boutique_course/money.png) no-repeat 0 0;
	background-size:cover;
	margin-left: 5px;
}


.collect{
	height:36px;
	border-left: 1px solid #dbdcde;
	padding:0 13px;
	display: flex;
	align-items: center;
}

.collect svg{
	font-size: 17px;
	 margin-right: 5px;
}


.wish{
	
    color: #ea2b5e;
   
}

.chapter{
	margin:20px 0;
}

.playback_times{
	margin-bottom:25px;

}

.playback_times b{
	color:#ee8e64;
	font-weight: normal;
}


.authentication_ul{
	display: flex;
}

.authentication_ul li{
	width:94px;
	height:20px;
	line-height: 20px;
	font-size: 12px;
	box-sizing: border-box;
	padding-left: 32px;
	margin-right:12px;
}

.authentication_ul li:nth-of-type(1){
	background:url(../../../assets/boutique_course/realname.png) no-repeat 0 0;
	background-size: 94px 20px;
	color:#ffb76d;
}

.authentication_ul li:nth-of-type(2){
	background:url(../../../assets/boutique_course/qualifications.png) no-repeat 0 0;
	background-size: 94px 20px;
	color:#ec6876;
}

.authentication_ul li:nth-of-type(3){
	background:url(../../../assets/boutique_course/signup.png) no-repeat 0 0;
	background-size: 94px 20px;
	color:#92c626;
}

.watch_div{
	margin-top: 30px;
	display: flex;
	justify-content: flex-end;
}

.watch_div span{
	display: block;
	width:200px;
	height:40px;
	background:#6b3906;
	text-align:center;
	line-height: 40px;
	font-size: 20px;
	color:#fff;
	border-radius: 10px;
}

.watch_div span:active{
	background:rgba(0,0,0,0.7);
}


.course_synopsis{
	width:100%;
	border:1px solid #dcdcdc;
	margin-top: 45px;
	padding-top:30px;
	padding-left:40px;
	padding-right:40px;
	box-sizing: border-box;
}


.course_synopsis_title{

  font-weight: normal;
  border-bottom:1px solid #dcdcdc;
}

.course_synopsis_title span{
	height:58px;
	border-bottom:1px solid #ffdf01;
	line-height: 58px;
	font-size: 24px;
	color:#a0a0a0;
	display: inline-block;
	
}

.course_content{
	display: flex;
	padding-top: 40px;
	
	font-size: 14px;
	color:#acacac;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 30px;

}

.course_content span{
	display: block;
	line-height: 24px;

	
}
.course_content p{
	line-height: 25px;
	flex:1;
}

.opening_time{
	height:74px;
	border-top:1px dashed #dcdcdc;
	border-bottom: 1px dashed #dcdcdc;
	line-height: 74px;
	box-sizing: border-box;
	margin:0 30px;
	font-size: 14px;
	color:#acacac;
}

.matters_needing_attention{
	height:93px;
	padding-top: 30px;
	padding-bottom: 50px;
	margin:0 30px;
	box-sizing: border-box;
	color:#acacac; 
}

.curriculum_evaluation{

	width:100%;
	border:1px solid #dcdcdc;
	margin-top: 45px;
	padding-top:30px;
	padding-left:40px;
	padding-right:40px;
	box-sizing: border-box;
	margin-bottom: 100px;
}


.evaluate_h2 span{
	border-color:#ec677a;
}

.evaluate_ul{
	padding-left:30px;
	padding-right: 30px;
}

.evaluate_ul li{
	padding-top: 40px;
	display: flex;
}

.user_header{
	display: block;
	width:80px;
	height:80px;
	border-radius: 5px;
	margin-right: 30px;
}

.evaluate_hua{
	font-size: 22px;
	color:#dbdbdb;
}

.student_evaluate{
	font-size: 14px;
	color:#a5a5a5;
	line-height: 24px;
	margin-top: 10px;
}

.evaluate_time{
	color:#a5a5a5;
}


.evaluate_img{
	display: block;
	width:80px;
	height:80px;
	margin-right: 28px;

}

.page_count{
	height:30px;
	line-height: 30px;
	display: inline-block;
	margin-left: 10px;
}

.pagetion{
	margin-top:78px;
	margin-bottom: 50px;
	display: flex;
	justify-content: center;
}


.evaluate_hua_active{
	color:#6b3906;
}


</style>

<template>
	
	<div>

	    <Top></Top>
        
        <div class="playback_main">
        	
	            <div class="playback_top">

	               <img :src="curriculumImg" class="playback_img" />

	               <div class="playback_top_right">
	                    <h3 class="playback_title">{{curriculumTitle}}</h3>
	                    <div class="playback_price">

	                       <div class="playback_price_left">
	                       	  <span>课程价格：<b>{{curriculumPrice}}</b></span>
	                       	  <span class="playback_money"></span>
	                       </div>

	                       <div class="collect" @click="handCollect">
	                          <svg class="icon" aria-hidden="true" :class="{wish:!collect}">
	                               <use xlink:href="#icon-heart-full"></use>
	                          </svg>
	                       	  <span >{{collect ? '已收藏': '收藏'}}</span>
	                       </div>

	                    </div>

	                    <div class="chapter" >
	                        共{{chapterNumber}}节
	                    </div>

	                    <div class="playback_times" >
	                    	已播放<b>{{playbackTimes}}</b>次
	                    </div>

	                    <ul class="authentication_ul" >
	                    	<li>实名认证</li>
	                    	<li>资格认证</li>
	                    	<li>随时报名</li>
	                    </ul>

	                    <div class="watch_div">

	                       <span @click="play">观看</span>
	                    	
	                    </div>

	               </div>

	            </div>

	            <div class="course_synopsis">

	               <h2 class="course_synopsis_title">
	               	 <span>课程简介</span>
	               </h2>
	               <div class="course_content">
	               	  <span>课程内容：</span>
	               	  <p>
	               	  	{{courseContent}}

	               	  </p>
	               	  
	               </div>

	               <div class="opening_time" >
	               	   
	               	    <span>开课时间：{{openTime}}</span>
	               </div>

	               <div class="matters_needing_attention" >

	                   注意事项： {{matter}}

	               </div>

	            </div>


	            <div class="curriculum_evaluation" >
                        

	               <h2 class="course_synopsis_title evaluate_h2">
	               	 <span>课程评价</span>
	               </h2>    

	               <ul class="evaluate_ul" >

	                   <li v-for="(item,index) in ceRows" :key="index">
	                   	  
	                   	  <img :src="item.userImg" class="evaluate_img" />

	                   	  <div>
	                   	  	  
	                   	  	  <div v-if="item.teacherScore==5">
	                   	  	  	  
                   	  	  	   <svg class="icon evaluate_hua evaluate_hua_active" aria-hidden="true" v-for="n in 5" >
                                   <use xlink:href="#icon-hua"></use>
                               </svg>


	                   	  	  </div>

                              <div v-else-if="item.teacherScore==4">

                                   <svg class="icon evaluate_hua evaluate_hua_active" aria-hidden="true" v-for="n in 4" >
                                        <use xlink:href="#icon-hua"></use>
                                   </svg>

                                   <svg class="icon evaluate_hua " aria-hidden="true"  >
                                        <use xlink:href="#icon-hua"></use>
                                   </svg>


                              </div>

                              <div v-else-if="item.teacherScore==3">
                                    
                                     <svg class="icon evaluate_hua evaluate_hua_active" aria-hidden="true" v-for="n in 3" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg>
                                     
                                     <svg class="icon evaluate_hua" aria-hidden="true" v-for="n in 2" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg>


                              </div>

                              <div v-else-if="item.teacherScore==2">
                                   
                                    <svg class="icon evaluate_hua evaluate_hua_active" aria-hidden="true" v-for="n in 2" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg> 
                                       <svg class="icon evaluate_hua" aria-hidden="true" v-for="n in 3" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg>


                              </div>

                               <div v-else-if="item.teacherScore==1">
                                   
                                    <svg class="icon evaluate_hua evaluate_hua_active" aria-hidden="true" v-for="n in 1" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg> 
                                    
                                    <svg class="icon evaluate_hua" aria-hidden="true" v-for="n in 4" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg>


                              </div>

                               <div v-else="item.teacherScore==0">
                                   

                                    <svg class="icon evaluate_hua" aria-hidden="true" v-for="n in 5" >
                                        <use xlink:href="#icon-hua"></use>
                                     </svg>

                               </div>

	                   	  	  <p class="student_evaluate">
	                   	  	  	{{item.studentContent}}
	                   	  	  </p>

	                   	  	  <div class="evaluate_time">
	                   	  	  	 {{item.evaluateTime}}
	                   	  	  </div>

	                   	  </div>
	                   </li>


	               </ul>

	                <div class="pagetion">
					  
					    <el-pagination
					      @current-change="handleCurrentChange"
					      :current-page="currentPage"
					      :page-size="10"
					      layout="prev, pager, next, slot,jumper"
					      :total="total+1" >

					      <slot name="page" >
					      	 <span class="page_count">共{{maxPage}}页</span>
					      </slot>
					    </el-pagination>

                    </div>


	            </div>
  
     </div> 

 </div>
</template>

<script>
	
import Top from '../Header';

import axios from 'axios';


export default {
  name: 'CoursePlayback',
  data () {
    return {
      
      currentPage: 1,
      curriculumImg:"",
      curriculumTitle:'',
      curriculumPrice:'',
      collect:0,
      chapterNumber:0,
      playbackTimes:0,
      courseContent:'',
      openTime:'',
      matter:'',
      curriculumEvaluation:[],
      ceRows:[],
      size:10,
      maxPage:0,
      total:0,
     
     
    }
  },
  components: {
    Top
  },
  methods:{

	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);

	    var currentPage=val-1; // 把当前页减一获取对应的数据

	    this.$set(this,"ceRows",this.curriculumEvaluation.slice(currentPage*this.size,(currentPage+1)*this.size)); 
	  },

	  handCollect(){
     

	  	 if(this.collect){
         
	  	 	this.$message({
	          message: '您已收藏',
	          type: 'warning'
	        });

	        return;
	  	 }

         // 收藏接口
           axios.get("http://localhost:8888/static/mock/exquisiteClassroom/coursePlayback.json",{

  		      params:{
  		      	courseId:this.$route.params.id
  		      }
               
             })
            .then(function (response) {

              var result =response.data;

                
                if(result.code==0){

                   // console.log(result)
                   this.$message({

			          message: '收藏成功',
			          type: 'success'
			       });
		                
                   this.$set(this,"collect",1);
                
                  
                }else{

                  console.log(result.msg)
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });


	  },


	  play(){
         
         //路由添加到 播放界面
          this.$router.push({ name: 'recordingPlayback', params: { id: this.$route.params.id }});

	  }

  },

  mounted:function(){

  		axios.get("http://localhost:8888/static/mock/exquisiteClassroom/coursePlayback.json",{

  		      params:{
  		      	courseId:this.$route.params.id
  		      }
               
             })
            .then(function (response) {

              

              var result =response.data;

                
                if(result.code==0){

                   // console.log(result)

                  this.$set(this,'curriculumImg',result.data.curriculumImg);
                  this.$set(this,'curriculumTitle',result.data.curriculumTitle);
                  this.$set(this,"curriculumPrice",result.data.curriculumPrice);
                  this.$set(this,"collect",result.data.collect);
                  this.$set(this,"chapterNumber",result.data.chapterNumber);
                  this.$set(this,"playbackTimes",result.data.playbackTimes);
                  this.$set(this,"courseContent",result.data.courseContent);
                  
                  this.$set(this,'openTime',result.data.openTime);
                  this.$set(this,'matter',result.data.matter);

                  this.$set(this,"curriculumEvaluation",result.data.curriculumEvaluation);
                  this.$set(this,"ceRows",this.curriculumEvaluation.slice(0,this.size));
                  this.$set(this,"maxPage",Math.ceil(this.curriculumEvaluation.length/this.size));  
                 
                  //总的条数

                  this.$set(this,"total",this.curriculumEvaluation.length);
                

                  
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