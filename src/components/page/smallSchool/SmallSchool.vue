<style scoped> 


.school_box{
  width:100%;
  max-width:1440px;
  height:1000px;
 
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

.school_ul{
  width:1440px;
  padding-top: 55px;
  display: flex;
  flex-wrap:wrap;

}

.school_ul li{
  width:300px;
  margin-right:45px;
}

.school_ul li:nth-of-type(4n+0){
  margin-right:0;
}

.school_ul li img{
  width:100%;
  height:208px;

}

.school_ul li figcaption{
  width:100%;
  height:83px;
  text-align:center;
  color:#683905;
  padding-top: 18px;
  box-sizing: border-box;
}


</style>


<template>
  
  <div >

    <Top></Top>

    <div class="school_box">
        
      <!--  <SchoolList :rows="kindRows" type="幼儿园" v-on:flip="kindChangePage" :maxPage="kmaxPage" ></SchoolList>

         <SchoolList :rows="primaryRows" type="小学" v-on:flip="primaryChangePage" :maxPage="pmaxPage"></SchoolList> -->

          <div >

                 <div class="school_head">

                    <div class="school_type" >幼儿园</div>
                    
                    <FlipPage v-on:flip="kindChangePage" :maxPage="kmaxPage"></FlipPage>
                   

                 </div>

             
               <ul class="school_ul">
                 
                
                   <router-link   tag="li" v-for="(item,index) in kindRows" :key="index" :to="{name:'schoolDetail',params: { id:item.id }}">
                       <figure>
                          <img :src="item.schoolUrl" />
                           
                           <figcaption>{{item.name}}</figcaption> 
                       </figure>

                   </router-link>  
                  
               </ul>

        </div> 

        
        <div >

                 <div class="school_head">

                    <div class="school_type" >小学</div>
                    
                    <FlipPage v-on:flip="primaryChangePage" :maxPage="pmaxPage"></FlipPage>
                   

                 </div>

             
               <ul class="school_ul">
                 
                
                   <router-link   tag="li" v-for="(item,index) in primaryRows" :key="index" :to="{name:'schoolDetail',params: { id: item.id }}">
                       <figure>
                          <img :src="item.schoolUrl" />
                           
                           <figcaption>{{item.name}}</figcaption> 
                       </figure>

                   </router-link>  
                  
               </ul>

        </div> 





    </div>

</div>

</template>

<script>

import Top from '../Header';

import FlipPage from './FlipPage';

import axios from 'axios';


export default {
  name: 'SmallSchool',
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
    Top,FlipPage
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
         axios.get("http://localhost:8888/static/mock/school/schoolList.json",{
               
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
}



</script>