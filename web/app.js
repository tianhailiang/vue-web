// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来

const flipPage = Vue.extend({
    template: '#flip',
    name: 'flipPage',
    props:['maxPage'],
    data () {
      return {

        currentPage:0,
        nextActive:false,
        preActive:false,
        nextFlag:false,
        preFlag:false
       
        
       
      }
    },

    watch:{
      maxPage:function(newValue){

      	// console.log(newValue)
       
        if(newValue>1){
          
           this.$set(this,'nextActive',true);
           this.$set(this,'nextFlag',true);
        }
        
      }
    },
    

    methods:{

     
      previousPage:function(){
         
         this.currentPage--;
         

         
         if(this.currentPage==0){

             
              console.log('已经是第一页');
              alert('已经是第一页')
              this.$set(this,'nextActive',true);
              this.$set(this,'preActive',false);
              this.$set(this,'preFlag',true);
              this.$set(this,'nextFlag',true);
              
         }else if(this.currentPage>0){
           
           this.$set(this,'preFlag',true);

         }else if(this.currentPage<0){
           this.currentPage=0;
           this.$set(this,'preFlag',false);
         }

         // console.log(this.preFlag +"  点击上一页的开关")

         // console.log(this.currentPage +'  点击上一页的当前页')

         if(this.preFlag){


            this.$emit('flip',this.currentPage);
         }

        
        
      },

      nextPage:function(){
           
          
          this.currentPage++;


           if(this.nextFlag){
             //设置一个变量开关
              this.$emit('flip',this.currentPage);
          
           };

         
          // console.log(this.currentPage +"  点击下一页的当前页")

          if(this.currentPage==this.maxPage-1){
          
              console.log('已经是最后一页')
              alert('已经是最后一页')

              this.$set(this,'nextActive',false);
              this.$set(this,'preActive',true);
              this.$set(this,'nextFlag',false);

           }else if(this.currentPage>this.maxPage-1){

               this.currentPage=this.maxPage-1;

           }else if(this.currentPage<this.maxPage-1){
             
              this.$set(this,'nextFlag',true);

           }
         
      }

    }



});



const SchoolList = Vue.extend({
  template: '#schoolList', 
   name: 'schoolList',
    data () {
    return {
      kindergartenList:[],
      kindRows:[],
      primarySchool:[],
      primaryRows:[],
      size:8,
      kmaxPage:0,
      pmaxPage:0
     
     
    }
  },
  components: {
    flipPage
  },
  methods:{

     
     kindChangePage:function(currentPage){


        this.$set(this,"kindRows",this.kindergartenList.slice(currentPage*this.size,(currentPage+1)*this.size)); 
          
    },
    
    primaryChangePage:function(currentPage){

        
      this.$set(this,"primaryRows",this.primarySchool.slice(currentPage*this.size,(currentPage+1)*this.size)); 
    }  



  },
  mounted:function(){



         //http://localhost:8888/static/mock/school/schoolList.json 

         // 调试的 http://192.168.1.81:8080/ucan_manage/schools/returnSchoolsAll
         axios.get("http://localhost:8080/mock/school/schoolList.json ",{
               
             })
            .then(function (response) {

                  console.log(response)
                var result=response.data;

                 // console.log(typeof result)
                 console.log(result)
                
                if(result.code==0){

                  this.$set(this,'kindergartenList',result.data.kindergartenList);
                  this.$set(this,"kindRows",this.kindergartenList.slice(0,this.size));
                  this.$set(this,"kmaxPage",Math.ceil(this.kindergartenList.length/this.size));
                  // console.log(this.kmaxPage)

                  this.$set(this,'primarySchool',result.data.primarySchool);
                  this.$set(this,'primaryRows',this.primarySchool.slice(0,this.size));
                  this.$set(this,"pmaxPage",Math.ceil(this.primarySchool.length/this.size));
                  
                }else{

                  console.log(result.msg)
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

  }
   
});





var SchoolDetail=Vue.extend({
	template:"#schoolDetail",
	name:"schoolDeatil",
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
    flipPage
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

  	axios.get("http://localhost:8080/mock/school/schoolDetail.json",{

  		      params:{
  		      	schoolId:this.$route.params.id
  		      }
               
             })
            .then(function (response) {

              

              var result =response.data;

                
                if(result.code==0){

                   console.log(result)

                   this.$set(this,'schoolImg',result.data.topImg);
                   this.$set(this,"schoolName",result.data.schoolName);
                   this.$set(this,"schoolBannerList",result.data.schoolBanner);
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
});



var NewsInformation =Vue.extend({
    template:"#newsInformation",
     name: 'NewsInformation',
	  data () {

	  	return {

           type:"谁也没进来",
           content:"<p>谁也没进来</p>"
	  	}

	  },

	components: {
      
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

        
         axios.get("http://localhost:8080/mock/school/newsInformation.json",{
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


});

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component:SchoolList},
  {path:"/schoolDetail/:id",name:"schoolDetail",component:SchoolDetail},
  { path: '/newsInformation/:id',
      name:'newsInformation',
      component:NewsInformation
     
    }
  
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！