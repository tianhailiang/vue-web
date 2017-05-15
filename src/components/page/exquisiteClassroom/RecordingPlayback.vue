
<style type="text/css" scoped>

.recording_top{
	width:100%;
	background:#6b3906;
	height:40px;
}

.recording_img{
	height:40px;
}

.recording_box{
	width:100%;
	display: flex;
	background:#555555;

}

.video_window{
	flex:1;
	height:840px;
	background:#fef2b8;
	margin:30px 77px 34px;
}
	
.recording_right{
	
}

.teacher{
	padding:30px 40px 27px;
	background:#fef2b8;
}

.teacher_info{
	display: flex;
	align-items: center;
}

.teacher_img{
	width:80px;
	height:80px;


}

.teacher_name{
	margin-left: 14px;
	font-size: 18px;
	color:#f49a00;
}

.teacher_evaluate{
	width:200px;
	height:28px;
	background:#f39801;
	color:#fff;
	text-align: center;
	line-height: 28px;
	color:#fff;
	border-radius: 5px;
}


.course_list{
	width:280px;
	margin-top: 20px;
}

.course_title{
	background:#00a1e9;
	height:32px;
	text-align:center;
	line-height: 32px;
	color:#fff;
	font-size: 17px
}

.course_ul{
	background:#c4f9ff;
	padding-left: 27px;
	padding-top: 26px;
	
}

.course_ul li{
	font-size: 14px;
	color:#7c9c99;
	padding-bottom: 17px;
}


</style>

<template>

  <div>
  	
  	  <div class="recording_top">
  	       <img src="http://localhost:8888/src/assets/header/ucan_logo1.png" class="recording_img">

  	  </div>

  	  <div class="recording_box">
  	  	
  	  	 <div class="video_window">

  	  	    <video  controls width="100%" autoplay height="100%">
				  <source src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4" type='video/mp4'>
				 
				 <!--  <source src="http://www.w3school.com.cn/example/html5/mov_bbb.webm" type='video/webm'> -->
           </video>


  	  	 </div>

  	  	 <aside class="recording_right">

  	  	    <div class="teacher" >
  	  	    	 <div class="teacher_info">
                          <div  class="teacher_img" :style="{background:'url('+teacherPhoto+') no-repeat center',backgroundSize:'80px,80px'}"></div>
                           
                           <span class="teacher_name">{{teacherName}}</span> 
                 </div>

                 <button class="teacher_evaluate" >给老师评价</button>

  	  	    </div>

  	  	    <div class="course_list">

                  <h3 class="course_title">课程列表</h3>
                  <ul class="course_ul">

                      <li v-for="(item,index) in courseList" :key="index">
                      	 
                      	 <span >第{{}}节</span>
                      	 <span>item.courseName</span>
                      </li>
                       

                  </ul>

  	  	    </div>
  	  	 	
  	  	 </aside>


  	  </div>

  </div>
	

</template>


<script >

import axios from 'axios';

export default {
  name: 'RecordingPlayback',
  data () {
    return {
       teacherPhoto:'',
       teacherName:'',
       courseList:[],
     
    }
  },
  components: {
   
  },

  mounted:function(){

  	 	axios.get("http://localhost:8888/static/mock/exquisiteClassroom/RecordingPlayback.json",{

  		      params:{
  		      	courseId:this.$route.params.id
  		      }
               
             })
            .then(function (response) {

              

              var result =response.data;

                
                if(result.code==0){

                   // console.log(result)

                   this.$set(this,'teacherPhoto',result.data.teacherPhoto);
                   this.$set(this,"teacherName",result.data.teacherName);
                   this.$set(this,"courseList",result.data.courseList);

                  
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