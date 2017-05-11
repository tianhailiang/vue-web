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



</style>


<template>
  
  <div >

    <Top></Top>

    <div class="school_box">
        
       <SchoolList :rows="kindergartenList" type="幼儿园" v-on:previousPage="pageBack" ></SchoolList>

       <SchoolList :rows="primarySchool" type="小学" ></SchoolList>

    </div>

  </div>

</template>

<script>

import Top from '../Header';

import SchoolList from './SchoolList';

import axios from 'axios';

export default {
  name: 'SmallSchool',
  data () {
    return {
      kindergartenList:[],
      primarySchool:[],
      kindPage:1,
      primaryPage:1
     
    }
  },
  components: {
    Top,SchoolList
  },
  methods:{

     requestKind:function(url){

          axios.get(url,{
             params:{
               pageSize:this.kindPage
             }
           })
          .then(function (response) {

             
              var result=response.data;
              
              if(result.code==0){

                this.$set(this,'kindergartenList',result.data.kindergartenList);
               
              }else{

                console.log(result.msg)
              } 
              
              

          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });
     },

     requestPrimary:function(url){

          axios.get(url,{
             params:{
               pageSize:this.primaryPage
             }
           })
          .then(function (response) {

             
              var result=response.data;
              
              if(result.code==0){

                this.$set(this,'primarySchool',result.data.primarySchool);

              }else{

                console.log(result.msg)
              } 
              
              

          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });
     },

      pageBack:function(){

          this.$set(this,'kindPage',this.kindPage-1);
          if(this.kindPage<1){
            this.$set(this,'kindPage',1);
           
          }else{

            this.requestKind("http://localhost:8888/static/mock/school/kindergartenList.json");
          }

          
      }


  },
  mounted:function(){

     
      this.requestKind("http://localhost:8888/static/mock/school/kindergartenList.json");
      this.requestPrimary('http://localhost:8888/static/mock/school/primarySchool.json');


  }
}

</script>