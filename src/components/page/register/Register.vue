
<style scoped >
 .register_content{

 	
 	width:100%;
   
 }


.register_city{
	height:53px;
	border-bottom: 1px solid #dcdcdc;
	padding-left: 55px;
	display: flex;
	align-items: center;
}

.register_city span{
	color:#f39164;
	font-size: 17px;
	margin-right:18px;
}


.register_city i{
	cursor: pointer;
}

.register_box{
	max-width: 1440px;
	width:100%;
	margin:72px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.register_ul{
	
}

 .register_ul li{
 	margin-top:25px;
 	height:35px;
 	display: flex;
 	align-items: center;
 	position: relative;
 }

 .register_ul li.pwd_li{
 	margin-top: 44px;
 }

.register_ul li label{
	width:60px;
	text-align:right;
}

.register_ul li input{
	margin-left:20px;
    width: 306px;
    border-radius: 20px;
    border: 1px solid #6a3906;
    outline: medium;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    height: 35px;
   text-align:center;

}

  .read{

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:33px;
    font-size: 16px;
    position: relative;
  } 

.agree_title{
	width:auto;
	
   position: absolute;
    right: -23px;
    color: red;
}


  .register_button {
    display: inline-block;
    width: 306px;
   
    margin-top: 55px;
    height: 36px;
    background-color: #ffe100;
    border: 1px solid #ffe100;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #6a3906;
    letter-spacing: 10px;
    outline: medium;
    cursor: pointer;
}

.prompt {
	position: absolute;
    display: inline-block;
    color: red;
   right:-120px;

}



.btn_box{
	display: flex;
    justify-content: flex-end;
}

.t_city{
	border-radius: 30px;
    background-color: rgba(0,0,0,.8);
    padding: 40px;
    position: absolute;
    z-index: 100;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.search_city{
	display: flex;
	align-items: center;
}

.city_input{
	    width: 160px;
    height: 30px;
    border-radius: 10px;
    
    padding: 0 10px;
    
    background: #cfcfcf;
    z-index:200;
}

.hot_span{
	margin-left: 43px;
    color: #fff;
    font-size: 18px;
    margin-right: 20px;
}

.hot_city_ul{
	display: flex;
}

.hot_city_ul li{
	color:#fff;
	font-size: 18px;
	margin-right: 10px;
	cursor: pointer;
}

.hot_city_ul li:hover{
	color:red;
}

.city_box{
	margin-top: 20px;
}

.city_area{
	border:none;
	border-top: 1px dashed #fff;
	color:#fff;
}

.city_area legend{
	font-size:18px;
	width: 60px;
}


.province_box{
	display: flex;
	margin-top: 15px;
}

.province{
	margin-right: 28px;
}

.city_list_ul{
	display: flex;
	flex-wrap: wrap;
}

.city_list_ul li{
	margin-right: 10px;
	cursor: pointer;
}

.city_list_ul li:hover{
	color:red;
}


.query_ul{
	position: absolute;
    top: 74px;
    color: #000;
    /*border:1px solid #dcdcdc;*/
}

.query_ul li{
	width: 160px;
    height: 30px;
    padding: 0 10px;
    background: #fff;
    z-index: 200;
    line-height: 36px;
}

.query_ul li:hover{
	background:#cfcfcf;
}

.span_title{
	position: absolute;
    left: 90px;
    top: 39px;
    font-size: 12px;
    color:#a0a0a0;
}

.agreement{
	margin-left:10px;
}

</style>

<style type="text/css">
.el-select{

	margin-left:20px;
    width: 306px;
   
  
}


.el-input__inner{
	  border-radius: 20px;
    border: 1px solid #6a3906;
    height:35px;
    text-align:center;
}




.radio .el-radio__inner{

	width:15px;
	height:15px;
	display: inline-block;
	border:1px solid #6b4013;
	border-radius: 50%;
	margin-right: 5px;
}

</style>
<template>

 <div>
    <Top :isLogin="1"></Top>

  <div class="register_content">
     <div class="register_city">
     	<span>{{currentCity}}</span>
     	<i @click="showCity">[切换城市]</i>
     </div>

      <transition name="fade">

	     <div class="t_city" v-show="isShowCity">

	         <div class="search_city">

	            <input type="text" class="city_input" placeholder="请输入城市关键字" v-model="query"/>
	             
                <span class="hot_span">热门</span>

	            <ul class="hot_city_ul">

	               <li @click="slectCity" >北京</li>
	               <li @click="slectCity">上海</li>
	               <li @click="slectCity">广州</li>
	               <li @click="slectCity">深圳</li>

	            </ul>
	         </div>
             <div class="city_box">
             	<fieldset class="city_area">
				    <legend>西南</legend>

				     <div class="province_box" v-for="(proItem,index) in topList" :key="index">   
		                    <span class="province">{{proItem.Province}}</span>
		                    <ul class="city_list_ul" >

		                    	<li @click="slectCity" v-for="cityItem in proItem.cityList" :key="cityItem.cityId">
                                    {{cityItem.cityName}}
		                    	
		                    	</li>
		                    	
		                    </ul>
				    </div>
				</fieldset>

             </div>

             <ul class="query_ul" >

	             <li v-for="(item, index) in computedList" v-bind:key="index" v-bind:data-index="index" @click="slectCity">
		                 {{ item.cityName}}
		         </li>
            </ul>

	     </div>

     </transition>
     <div class="register_box" >
  	
		  	 <form >
					
					<ul class="register_ul">

					   <li>
					   	 <label>学校</label>
					   
					   	<el-select v-model="schoolValue" placeholder="请选择学校" @change="selectSchool">
							    <el-option
							      v-for="item in schoolList"
							      :key="item.schoolId"
							      :label="item.schoolName"
							      :value="item.schoolId">
							    </el-option>
						  </el-select>

						  <span class="prompt" >{{schoolTitle}}</span>

					   </li>

					    <li>
					   	 <label>班级</label>
					   	
					   	 <el-select v-model="classValue" placeholder="请选择班级" @change="selectClass">
							    <el-option
							      v-for="item in classList"
							      :key="item.classId"
							      :label="item.className"
							      :value="item.classId">
							    </el-option>
						  </el-select>

						   <span class="prompt" >{{classTitle}}</span>

					   </li>

					   <li>
					   	 <label>姓名</label>
					   	 <input type="text" v-model="fullName" placeholder="请输入姓名" v-on:blur="full($event.target.value)">
					   	 <span class="prompt" >{{fullNameTitle}}</span>

					   </li>

					   <li>
							<label>邮箱</label>
							<input type="text"   placeholder="请输入邮箱" v-on:blur="email($event.target.value)" ref="email" v-model="emailName" ><span class="prompt" >{{emailTitle}}</span>
							
						</li>

						 <li>
					   	 <label>用户名</label>
					   	 <input type="text"  v-model="userName" placeholder="请输入用户名" v-on:blur="user($event.target.value)">
					   	  <span class="prompt" >{{userNameTitle}}</span>
					   	  <span class="span_title">不能超过15个字母或汉子</span>

					   </li>


						<li class="pwd_li">
						    <label>密码</label>
						    <input type="password"   placeholder="请输入密码" v-on:blur="pwd($event.target.value)" v-model="password" ref="pwd">
						    <span class="prompt">{{pwdTitle}}</span>
						    <span class="span_title">密码长度8-16位，数字、字母、字符至少包含2种</span>
							
						</li>
						<li class="pwd_li">
							<label>确认密码</label>
						    <input type="password"   placeholder="请确认密码" v-on:change="rpwd($event.target.value)" v-model="rpassword">
						    <span class="prompt">{{rpwdTitle}}</span>
						</li>
						
					</ul>
					<div class="read">
						 
						  <el-radio class="radio" v-model="radio" label="1" >阅读并接受</el-radio>
					    
						  <a href="#" class="agreement">优看用户协议</a>
						  <span class="agree_title">{{agreeTitle}}</span>
					</div>
					
                    <div class="btn_box" >

					     <input type="button"  class="register_button" value="马上注册" v-on:click="register()" />
					</div>     
			</form>

    </div>

  </div>

 </div> 

</template>

<script>


import axios from 'axios'
import Top from '../Header'

export default {
  name: 'Register',
  data () {
    return {
      currentCity:"",
      currentCityId:'',
      topList:[], 	
      query:'',
      cityList:[], 	
      emailTitle:"",
      pwdTitle:"",
      emailName:"",
      emailFlag:false,
      password:"",
      rpassword:"",
      checked:true,
      rpwdTitle:"",
      isShowCity:false,
      schoolList:[],
      schoolValue:'',
      schoolTitle:'',
      classList:[],
      classValue:'',
      classTitle:'',
      fullName:'',
      fullNameTitle:'',
      userName:'',
      userNameTitle:'',
      radio:0,
      agreeTitle:''
    }
  },
   components: {
    Top
  },

  computed: {
    computedList: function () {
    	
	      var vm = this

	      if(this.query==''){

            return [];
	      };

	      return this.cityList.filter(function (item) {
	      	// console.log(this) //为Undefined
	        return item.cityName.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
	      })
    }
  },
  methods: {
        
          showCity:function(){
          	
             this.$set(this,"isShowCity",!this.isShowCity);
             this.$set(this,"query",'');// 让他重新为空
           
          },

          slectCity:function(event){
            //选择城市
             // console.log(event.target.innerHTML) // 获取文本
             this.$set(this,"currentCity",event.target.innerHTML);
             this.$set(this,"isShowCity",false);

          },

          selectSchool:function(){
            //选择学校
             // console.log(this.schoolValue)

              this.$set(this,"schoolTitle","");
              this.$set(this,"classValue",'');// 先清空一下
            
             var vm=this;

             this.schoolList.map(function(item){
             	if(vm.schoolValue==item.schoolId){

             		vm.$set(vm,"classList",item.classList);
             	}
             })

             // console.log(this.classList) 


          },

          selectClass:function(){
          	this.$set(this,"classTitle","");

          },

          full:function(val){
          	//选择姓名 失去焦点触发事件

          	if(val==''){

          	   this.$set(this,'fullNameTitle', "姓名不能为空");
          	}else{

          		this.$set(this,'fullNameTitle', "");

          	}

          },

		  email: function (message) {
		      if(message==""){
		      	// this.$refs.email.focus();
		        this.$set(this,'emailTitle', "邮箱不能为空");
		        this.$set(this,"emailFlag",false);

		      }else{
		         //先验证邮箱

		         var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		         if(reg.test(message)){
	                var that =this;

                  
	                axios.get('http://localhost:8888/static/mock/login/login.json', {
	                   //验证邮箱有没有注册过 	
					    params: {
					      "email": that.emailName
					    }
					  })
					  .then(function (response) {
					    var result=response.data;
	          
				          if(result.code==0){

	                         that.$set(that,'emailTitle', "");
	                          that.$set(that,"emailFlag",true);

				          }else{
				          	 that.$set(that,'emailTitle', "该邮箱已被注册");
				          	 that.$set(that,"emailFlag",false);

				          }



					  })
					  .catch(function (error) {
					    console.log(error);
					  });  	  

                   
                    
		         	
		         }else{
		         	//获取元素焦点
		         	
		         	// this.$refs.email.focus();
		         	
		         	this.$set(this,'emailTitle', "邮箱地址不合法！");
		         	this.$set(this,"emailFlag",false);

		         }

		      }
	       },


	       user:function(val){

		       	if(val==''){
		       		
		       		this.$set(this,"userNameTitle","用户名不能为空");

		       		return false;
		       	}else{

                    //验证用户名格式
		       		var reg=/^(?!_)(?!.*?_$)[a-zA-Z_\u4e00-\u9fa5]{1,15}$/;

		       		// console.log(reg.test(val))

		       		if(!reg.test(val)){

                       this.$set(this,"userNameTitle","用户名格式不对");

                       return false;
		       		}else{

		       			this.$set(this,"userNameTitle","");
		       			return true;
		       		}
		       	}

	       },
	      
	      pwd:function(pwd){

		       if(pwd==""){
		       	     // this.$refs.pwd.focus();
		             this.$set(this,'pwdTitle', "密码不能为空");
		             return false;

		       }else{

                     var reg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;


		            
		             if(!reg.test(pwd)){
		             	this.$set(this,'pwdTitle',"密码格式不正确");
		             	return false;
		             }else{
		               this.$set(this,"pwdTitle","");
		               return true;

		             }
		   	   
		       }

	      },

	      rpwd:function(rpwd){
	      	
           
            if(rpwd==""){
               this.$set(this,'rpwdTitle', "请再次输入密码");
               return false;
            }else if(rpwd!==this.password){
                
            	this.$set(this,'rpwdTitle', "两次密码不一致");
            	return false;
            }else{

            	this.$set(this,'rpwdTitle', "");
            	return true;
            }


	      },

	     

	      register:function(){
             //点击注册 

             if(this.schoolValue==""){

                   this.$set(this,"schoolTitle","请选择学校");

                   return;

              }


              if(this.classValue==""){
              	this.$set(this,"classTitle","请选择班级");
              	return;
              }

              if(this.fullName==""){
              	this.$set(this,"fullNameTitle","请填写姓名");
              	return;
              }

              if(this.emailName==""){
              	this.$set(this,"emailTitle","请填写邮箱");
              	return;
              }

              if(!this.emailFlag){
                  //判断邮箱验证 
                 
              	return;
              }
             
              if(!this.user(this.userName)){
              	//判断用户名验证
              	
              	return;
              } 

              if(!this.pwd(this.password)){
              	//判断密码验证
              	return;
              }
             
              if(!this.rpwd(this.rpassword)){
              	//判断确认密码验证
              	return;
              }



             if(!this.radio){
             	//先验证有没有接受协议
             	this.$set(this,"agreeTitle","请先接受协议");


             }else{

                this.$set(this,"agreeTitle","");


                 //给邮箱发送验证
		           axios.post("http://ucan365.com/api/view/guest/postEmail/addRegister",{
		              data:{
		              	t:new Date().getTime(),
		              	email:this.emailName,
		              	password:this.pwd,
		              	type: "用户注册"
		              }
		         }).then(function(response){

		         	 var result=response.data;

		         	 alert(response)

		         }.bind(this))
		         .catch(function(error){
		         	console.log(error);
		         });
               

             }

   	
	    }

   },

   mounted:function(){

        axios.get("http://localhost:8888/static/mock/register/city.json",{
               
             })
            .then(function (response) {
   
                var result=response.data;

                 // console.log(result)
                
                if(result.code==0){
                 
                 //获取顶级联动
                 this.$set(this,"topList",result.data);
                 
                 //获取当前城市
                 this.$set(this,"currentCity",result.data[0].cityList[0].cityName);
                 //获取当前城市id
                  this.$set(this,"currentCityId",result.data[0].cityList[0].cityId);

                 //获取所有城市
                var cityArray= this.topList.map(function(item,index){
                    
                    return item.cityList.map(function(cityItem,cityIndex){
                    	return cityItem;
                    })

                 });

                 var that=this;

                cityArray.map(function(item,index){
                	that.$set(that,"cityList",that.cityList.concat(item));
                });

                 // console.log(this.cityList) //模糊查询城市cityList集合

                
                  
                }else{

                  console.log(result.msg)
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });


            //根据默认的城市请求显示学校 班级数据

           axios.get("http://localhost:8888/static/mock/register/citySchoolList.json",{
              params:{
              	cityId:this.currentCityId
              }
         }).then(function(response){

         	 var result=response.data;

         	 if(result.code==0){
               
               //获取学校
               this.$set(this,"schoolList",result.data.schoolList);
               // console.log(this.schoolList)

         	 }else{
         	 	console.log(result.msg);
         	 }

         }.bind(this))
         .catch(function(error){
         	console.log(error);
         });

        
          //注册成功后验证邮箱
            var h = window.location.href;
		     var str = h.split("?")[1];
		     console.log(str)
		    
			if(str != null ) {
				
		         //邮箱验证 注册成功

				 axios.get("http://ucan365.com/api/view/guest/postEmail/queryValidAndRegister",{
		              params:{
		              	t:new Date().getTime(),
		              	randomCode: str
		              }
		         }).then(function(response){

		         	 var result=response.data;

		         	 if(result.code==0){
		               
		                this.$set(this,"tip","注册成功！页面将在3秒后跳转！");
		                setTimeout("location.href='../login/login.html'",3000);

		         	 }else{

		         	 	alert("链接已失效！请重新注册！");
		         	 }

		         }.bind(this))
		         .catch(function(error){
		         	console.log(error);
		         });

			}


   }   

}


</script>