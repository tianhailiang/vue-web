
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
	margin-top:22px;
}

.teacher_evaluate:active{
	background:rgba(243,152,1,0.7);
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
	cursor: pointer;
}

.hua{

	font-size: 22px;
	color:#dbdbdb;
}

.hua_active{
	color:#6b3906;
}

.score{

	display: flex;
	align-items: center;
	margin-bottom: 27px;
}

.score span{
	margin-right: 10px;
}


.course_footer{
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}

.course_footer span{
	display: block;
	width:120px;
	height:35px;
	border:1px solid #6b3906;
	text-align:center;
	line-height: 35px;
	font-size: 20px;
	border-radius: 10px;
	color:#6d3b0a;
}

.course_footer .spanActive{
	color:#fff;
	background:#6b3906;
}

.course_footer .spanActive:active{
	background:rgba(107,57,6,0.7);
}

.course_footer span:nth-of-type(1){
	margin-right: 27px;
}

</style>

<style type="text/css" media="screen">
.el-dialog__body {
    padding: 30px 50px;
    
}

.el-dialog--tiny {
    width: 50%;
}
	
.el-textarea__inner{
	height:230px;
}

</style>

<template>

  <div>
  	
  	  <div class="recording_top">
  	       <img src="http://localhost:8888/src/assets/header/ucan_logo1.png" class="recording_img">

  	  </div>

  	  <div class="recording_box">
  	  	
  	  	 <div class="video_window">

  	  	    <video  controls width="100%"  height="100%" ref="courseVideo" autoplay :src="source" >
				<!--   <source :src="source" :type="'video/'+type"> -->
				 
				
           </video>


  	  	 </div>

  	  	 <aside class="recording_right">

  	  	    <div class="teacher" >
  	  	    	 <div class="teacher_info">
                          <div  class="teacher_img" :style="{background:'url('+teacherPhoto+') no-repeat center',backgroundSize:'80px,80px'}"></div>
                           
                           <span class="teacher_name">{{teacherName}}</span> 
                 </div>

                 <button class="teacher_evaluate" @click="dialogVisible = true">给老师评价</button>


  	  	    </div>

  	  	    <div class="course_list">

                  <h3 class="course_title">课程列表</h3>
                  <ul class="course_ul">

                      <li v-for="(item,index) in courseList" :key="index" @click="coursePlay(item.source,item.type)">
                      	 
                      	 <span >第{{index | transChineseNumber(index)}}节</span>
                      	 <span>{{item.courseName}}</span>
                      </li>
                       

                  </ul>

  	  	    </div>
  	  	 	
  	  	 </aside>


  	  </div>

  	  <el-dialog  :visible.sync="dialogVisible" size="tiny" >
		  <div class="score">
		  	 <span>评分:</span>

		  	 <svg class="icon hua" aria-hidden="true" @click="scoreCount(1)" :class="{hua_active:flowerList[0]}">
                  <use xlink:href="#icon-hua"></use>
             </svg>
             <svg class="icon hua" aria-hidden="true"  @click="scoreCount(2)" :class="{hua_active:flowerList[1]}">
                  <use xlink:href="#icon-hua"></use>
             </svg>
              <svg class="icon hua" aria-hidden="true"  @click="scoreCount(3)" :class="{hua_active:flowerList[2]}">
                  <use xlink:href="#icon-hua"></use>
             </svg>
              <svg class="icon hua" aria-hidden="true"  @click="scoreCount(4)" :class="{hua_active:flowerList[3]}">
                  <use xlink:href="#icon-hua"></use>
             </svg>
              <svg class="icon hua" aria-hidden="true"  @click="scoreCount(5)" :class="{hua_active:flowerList[4]}">
                  <use xlink:href="#icon-hua"></use>
             </svg>

		  </div>

		   <el-form :model="form" class="teacher_area">
                 
                 <el-input type="textarea" v-model="form.desc" placeholder="请输入对老师的评价" ></el-input>

		   </el-form>
		   <div class="course_footer" >
		
			     <span @click="dialogVisible = false" >取 消</span>
			     <span  @click="submitComments()" class="spanActive">提交评价</span>
		   </div> 
		</el-dialog>

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
       source:'',
       type:'',
       dialogVisible: false,
       form: {

          desc: ''
        },

       count:0, 
       flowerList:[false,false,false,false,false],
      

     
    }
  },

  filters:{

  	transChineseNumber:function(val){

		        var Utils={
				   
				    units:'个十百千万@#%亿^&~', // 单位
				  
				    chars:'零一二三四五六七八九', //字符
				    /*
				        数字转中文
				        @number {Integer} 形如123的数字
				        @return {String} 返回转换成的形如 一百二十三 的字符串             
				    */
				    numberToChinese:function(number){
				        var a=(number+'').split(''),s=[],t=this;
				        if(a.length>12){
				            throw new Error('too big');
				        }else{
				            for(var i=0,j=a.length-1;i<=j;i++){
				                if(j==1||j==5||j==9){//两位数 处理特殊的 1*
				                    if(i==0){
				                        if(a[i]!='1')s.push(t.chars.charAt(a[i]));
				                    }else{
				                        s.push(t.chars.charAt(a[i]));
				                    }
				                }else{
				                    s.push(t.chars.charAt(a[i]));
				                }
				                if(i!=j){
				                    s.push(t.units.charAt(j-i));
				                }
				            }
				        }
				        //return s;
				        return s.join('').replace(/零([十百千万亿@#%^&~])/g,function(m,d,b){//优先处理 零百 零千 等
				            b=t.units.indexOf(d);
				            if(b!=-1){
				                if(d=='亿')return d;
				                if(d=='万')return d;
				                if(a[j-b]=='0')return '零'
				            }
				            return '';
				        }).replace(/零+/g,'零').replace(/零([万亿])/g,function(m,b){// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
				            return b;
				        }).replace(/亿[万千百]/g,'亿').replace(/[零]$/,'').replace(/[@#%^&~]/g,function(m){
				            return {'@':'十','#':'百','%':'千','^':'十','&':'百','~':'千'}[m];
				        }).replace(/([亿万])([一-九])/g,function(m,d,b,c){
				            c=t.units.indexOf(d);
				            if(c!=-1){
				                if(a[j-c]=='0')return d+'零'+b
				            }
				            return m;
				        });
				    }


             }  

  	     return  Utils.numberToChinese(val+1);
  	     
  	}

  },
  components: {
   
  },

  methods:{

   coursePlay:function(val,type){
      
       this.$set(this,'source',val);
       this.$set(this,'type',type);
      
       
       this.$refs.courseVideo.load(); //重新加载
   },

   scoreCount:function(val){
      
     this.$set(this,'count',val);
     
      this.flowerList.forEach(function(value,index,array){
               
                 array[index]=false;  

       });

     switch(val)
	{
	case 1:
	   this.flowerList.splice(0,1,true)
	  break;
	case 2:
	   this.flowerList.splice(0,2,true,true)
	  break;
	case 3:
	   this.flowerList.splice(0,3,true,true,true)
	  break;
    case 4:
	   this.flowerList.splice(0,4,true,true,true,true)
	  break;

	case 5:
	   this.flowerList.splice(0,5,true,true,true,true,true)
	  break;  

	}

    
     // console.log(this.flowerList)
    

   },

   submitComments:function(){

     

      if(this.form.desc==''){

	      	this.$message({
	          message: '请输入对老师的评论',
	          type: 'warning'
	        });

	       return ;
      }

     if(this.count==0){
         
         	this.$message({
	          message: '请对老师评分',
	          type: 'warning'
	        });

	       return ;  

     }
        

        axios.get("http://localhost:8888/static/mock/exquisiteClassroom/RecordingPlayback.json",{

  		      params:{
  		      	courseId:this.$route.params.id,
  		      	desc:this.form.desc,
  		      	scoreCount:this.count
  		      }
               
             })
            .then(function (response) {

              

              var result =response.data;

                
                if(result.code==0){

                	  this.$message({
                            type: 'success',
                            message: '评论成功!'
                       });

                     this.$set(this,'dialogVisible',false); 
                  
                }else{

                      this.$message({
                            type: 'error',
                            message:result.msg
                        });
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

   }

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