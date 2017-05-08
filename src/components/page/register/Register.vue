
<style scoped >
 .register_content{

 	width: 440px;
    height: 420px;
    position: relative;
    margin: 100px auto;
 }

.register_ul{
	width:600px;
}

 .register_ul li{
 	width:100%;
 	height:50px;
 	display: flex;
 	align-items: center;
 }

.register_ul li label{
	width:60px;
	text-align:right;
}

.register_ul li input{
	margin-left:10px;
    width: 310px;
    border-radius: 20px;
    border: 1px solid #6a3906;
    outline: medium;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    height: 35px;
    padding: 0 10px;
}

  .read{

  	 width: 100%;
    text-align: center;
    margin: 25px;
    font-size: 16px;
  } 



  .register_button {
    display: inline-block;
    width: 72%;
    margin-left: 17%;
    margin-top: 35px;
    height: 35px;
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
    display: inline-block;
    color: red;
    width: 150px;
    margin-left:10px;

}


</style>
<template>

  <div class="register_content">
  	
  	 <form >
			
			<ul class="register_ul">

			   <li>
					<label>邮箱</label>
					<input type="text" class="usermessage"  placeholder="请输入邮箱" v-on:blur="user($event.target.value)" ref="email" v-model="userName" autofocus><span class="prompt" >{{userTitle}}</span>
					
				</li>
				<li>
				    <label>密码</label>
				    <input type="password" class="usermessage pwd"  placeholder="请输入密码" v-on:blur="pwd($event.target.value)" v-model="password" ref="pwd"><span class="prompt">{{pwdTitle}}</span>
					
				</li>
				<li>
					<label>确认密码</label>
				    <input type="password"   placeholder="请确认密码" v-on:change="rpwd($event.target.value)" v-model="rpassword"><span></span>
				</li>
				
			</ul>
			<div class="read">
				 <el-checkbox v-model="checked" >我已阅读并接受</el-checkbox>
				<a href="copyRight.html" class="f_b">版权声明</a>和
				<a href="privacy.html" class="f_b">隐私保护</a>条款
			</div>
			<input type="button"  class="register_button" value="马上注册" v-on:click="register()" />
	</form>


  </div>

</template>

<script>


import axios from 'axios'


export default {
  name: 'Register',
  data () {
    return {
      userTitle:"",
      pwdTitle:"",
      userName:"",
      password:"",
      rpassword:"",
      checked:true,
      rpwdTitle:"",
    }
  },

    methods: {
		    user: function (message) {
		      if(message==""){
		      	this.$refs.email.focus();
		        this.$set(this,'userTitle', "邮箱不能为空");
		      }else{
		         //先验证邮箱

		         var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		         if(reg.test(message)){
	                var that =this;


	                axios.get('http://localhost:8080/static/mock/login/login.json', {
	                   //验证邮箱有没有注册过 	
					    params: {
					      "email": that.userName
					    }
					  })
					  .then(function (response) {
					    var result=response.data;
	          
				          if(result.code==0){

	                         that.$set(that,'userTitle', "");

				          }else{
				          	 that.$set(that,'userTitle', "该邮箱已被注册");
				          }



					  })
					  .catch(function (error) {
					    console.log(error);
					  });  	  


		         	
		         }else{
		         	//获取元素焦点
		         	
		         	this.$refs.email.focus();
		         	
		         	this.$set(this,'userTitle', "邮箱地址不合法！");
		         }

		      }
	       },
	      
	      pwd:function(pwd){

		       if(pwd==""){
		       	     this.$refs.pwd.focus();
		            this.$set(this,'pwdTitle', "密码不能为空");
		       }else if(pwd.length<8 || pwd.length>16){

		            this.$set(this,'pwdTitle', "仅支持8-16位密码");
		       } else{
		             var reg = /^(\w){8,16}$/;

		             if(reg.test(pwd)){
		             	this.$set(this,'pwdTitle', "");
		             }else{
		               this.$set(this,"pwdTitle","密码出现非法字符");

		             }
		   	   
		       }

	      },

	      rpwd:function(rpwd){
            console.log(rpwd)
            if(rpwd==""){
               this.$set(this,'rpwdTitle', "请再次输入密码");
            }else if(rpwd!==this.password){
            	this.$set(this,'rpwdTitle', "两次密码不一致");
            }else{
            	this.$set(this,'rpwdTitle', "");
            }


	      },

	      register:function(){

	      	console.log(1)
	      }

   }   

}


</script>