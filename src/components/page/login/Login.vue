<style scoped>
 
  .login{
         width: 420px;
         height: 420px;
       position: relative;
       margin: 100px auto;
  }

 
.user_login_content {
   
    width: 570px;
}

.user_login_content label {
    text-align: center;
    margin: 10px;
    width: 70px;
}

.usermessage {
    margin: 15px 10px;
    width: 325px;
    border-radius: 20px;
    border: 1px solid #6a3906;
    outline: medium;
    
    appearance: none;
    height: 35px;
    padding: 0 10px;
}


.prompt {
    display: inline-block;
    color: red;
    width: 150px;

}

.auto_login_content {
    width: 420px;
    text-align: center;
    margin: 10px;
    font-size: 16px;
}

.auto_login {
    border: 1px solid #6a3906;
    width: 10px;
    height: 10px;
    color: #6a3906;
  /*  border-radius: 20px;*/
    margin-left: 10px;
}

.font{
  color: #a0a0a0;
    font-size: 14px;
   margin-left: 30px;
}


.login_re {
    width: 420px;
    text-align: center;
}

.login_button {
    display: inline-block;
    text-indent: 0.5em;
    width: 130px;
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

.login_re p {
    display: inline-block;
    text-align: center;
    margin: 20px;
    font-size: 16px;
}


</style>


<template>
<div>
  
  <Top :isLogin="1"></Top>
  
 <div class="login">
  
      
      <div class="top" >
         <h1></h1>   
      </div>
      
      <div id="user_login_content" class="user_login_content">
        <label>邮箱</label>
        <input type="text" class="usermessage"  placeholder="请输入邮箱"  ref="email" v-model="userName" v-focus v-blurs="user"><span class="prompt" >{{userTitle}}</span>
        
        <label>密码</label>
        <input type="password" class="usermessage pwd"  placeholder="请输入密码"  v-model="password" ref="pwd" v-blurs="pwd"><span class="prompt">{{pwdTitle}}</span>

        <div id="auto_login_content" class="auto_login_content">
        
           <el-checkbox v-model="checked">下次自动登录</el-checkbox>
        
          <span class="font">使用公共电脑请谨慎选择</span>

        </div>
        <div id="login_re" class="login_re">
          <input type="button"  id="login_button" value="登录" class="login_button" v-on:click="login()" />
          <p>
            <a href="../resetPassword/resetPassword.html">忘记密码</a>|
             <router-link to="/register" >免费注册</router-link>
          </p>

        </div>
        

      </div>


 </div>

</div> 

</template>

<script>

import axios from 'axios'

import Top from '../Header'
 //设置cookie

function setCookie(name,value,leftCircle){
         
       var oDate=new Date();
       console.log(oDate)
       oDate.setDate(oDate.getDate()+leftCircle);
    
       document.cookie=name+"="+value+";expiers="+oDate+";path=/;";

      
};
  

function Base64() {
 // private property
 var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 // public method for encoding
 this.encode = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  input = _utf8_encode(input);
  while (i < input.length) {
   chr1 = input.charCodeAt(i++);
   chr2 = input.charCodeAt(i++);
   chr3 = input.charCodeAt(i++);
   enc1 = chr1 >> 2;
   enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
   enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
   enc4 = chr3 & 63;
   if (isNaN(chr2)) {
    enc3 = enc4 = 64;
   } else if (isNaN(chr3)) {
    enc4 = 64;
   }
   output = output +
   _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
   _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
 }
 // public method for decoding
 this.decode = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
   enc1 = _keyStr.indexOf(input.charAt(i++));
   enc2 = _keyStr.indexOf(input.charAt(i++));
   enc3 = _keyStr.indexOf(input.charAt(i++));
   enc4 = _keyStr.indexOf(input.charAt(i++));
   chr1 = (enc1 << 2) | (enc2 >> 4);
   chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
   chr3 = ((enc3 & 3) << 6) | enc4;
   output = output + String.fromCharCode(chr1);
   if (enc3 != 64) {
    output = output + String.fromCharCode(chr2);
   }
   if (enc4 != 64) {
    output = output + String.fromCharCode(chr3);
   }
  }
  output = _utf8_decode(output);
  return output;
 }
 // private method for UTF-8 encoding
 var _utf8_encode = function (string) {
  string = string.replace(/\r\n/g,"\n");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
   var c = string.charCodeAt(n);
   if (c < 128) {
    utftext += String.fromCharCode(c);
   } else if((c > 127) && (c < 2048)) {
    utftext += String.fromCharCode((c >> 6) | 192);
    utftext += String.fromCharCode((c & 63) | 128);
   } else {
    utftext += String.fromCharCode((c >> 12) | 224);
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
    utftext += String.fromCharCode((c & 63) | 128);
   }
  }
  return utftext;
 }
 // private method for UTF-8 decoding
var  _utf8_decode = function (utftext) {
  var string = "";
  var i = 0;
  var c = c1 = c2 = 0;
  while ( i < utftext.length ) {
   c = utftext.charCodeAt(i);
   if (c < 128) {
    string += String.fromCharCode(c);
    i++;
   } else if((c > 191) && (c < 224)) {
    c2 = utftext.charCodeAt(i+1);
    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
    i += 2;
   } else {
    c2 = utftext.charCodeAt(i+1);
    c3 = utftext.charCodeAt(i+2);
    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
    i += 3;
   }
  }
  return string;
 }
}


//  生成随机码

var b = new Base64();

function code(value){
  var s=["A","B","C","D","@","^","*","&","%","!","$","/","K","F","G","F","E","I","J","L","M","N","O","P",
  "Q","R","S","T","U","V","W","X","Y","Z","%","?"];
  var code="";
  for(var i=0;i<20;i++){
    code +=s[Math.ceil(Math.random()*35)];
  }
  var random=code.slice(0,9)+b.encode(value)+code.slice(10,19);
  return random;
}


export default {
  name: 'login',
  data () {
    return {
      userTitle:"",
      pwdTitle:"",

      userName:"",
      password:"",
      checked:true

    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建

        next(vm => {
        // 通过 `vm` 访问组件实例
          // console.log(vm)

      })
  },

  directives: {
    focus: {
      inserted:function(el,{value}){

          el.focus(); //自动获取焦点

         
      }

    },

    blurs:{

       inserted:function(el,binding){
       
           if(typeof binding.value == 'function'){
              el.onblur=binding.value(el);
              
           }

      }
        
    }


  },

  components: {
    Top
  },
  methods: {

    user: function () {

     return (el)=>{
     

            if(this.userName==""){
            
               this.$set(this,'userTitle', "用户名不能为空");

            }else{
               //先验证邮箱

               var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

               if(reg.test(this.userName)){
                   
                  this.$set(this,'userTitle', "");

               }else{
                //获取元素焦点 通过自定义的指令返回 为了防止 this.$refs.email.focus(); 还没挂载上 报错

                   el.target.focus();

                  this.$set(this,'userTitle', "邮箱地址不合法！");
               }

            }
            
      }

      
    },

    pwd:function(){

       return (el)=>{

           if(this.password==""){
               el.target.focus();
              this.$set(this,'pwdTitle', "密码不能为空");

           }else{

               this.$set(this,'pwdTitle', "");
           }

       }    

    },

    login:function(){
     
       if(this.userName==""){
          this.$refs.email.focus();
          this.$set(this,'userTitle', "用户名不能为空");
           return;
       }

       if(this.password==""){
            this.$refs.pwd.focus();
            this.$set(this,'pwdTitle', "密码不能为空");   
            return;      
       }
     
      
       // 后台接口 不允许跨源 跨域http://ucan.bin-go.cc/api/login
       //http://localhost:8080/static/mock/login/login.json
       axios.get("http://localhost:8888/static/mock/login/login.json",{
         
         params: {

          "username":that.userName,
          "password":that.password

         }

       })
      .then(function (response) {

          
          var result=response.data;
          
          if(result.code==0){

             if(this.checked){
                  
                   setCookie("VY_T",this.userName, 7);
                   setCookie("KU_FT", code(this.password),7);

             }else{

                   setCookie("VY_T","", -1);
                   setCookie("KU_FT","",-1); 
             }

             // 临时存储数据
              
            console.log(result)
            sessionStorage.obj =JSON.stringify(result.data);

             this.$router.push({ path: '/' });

          }else{

            alert(result.msg)
          } 
          
          

      }.bind(this))
      .catch(function (error) {
          console.log(error);
      });

    }
  },

  mounted:function(){





  }

}
</script>




