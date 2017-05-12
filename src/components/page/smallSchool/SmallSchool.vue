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
        
       <SchoolList :rows="kindRows" type="幼儿园" v-on:flip="kindChangePage" :maxPage="kmaxPage" ></SchoolList>

       <SchoolList :rows="primaryRows" type="小学" v-on:flip="primaryChangePage" :maxPage="pmaxPage"></SchoolList>

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
      kindRows:[],
      primarySchool:[],
      primaryRows:[],
      size:8,
      kmaxPage:0,
      pmaxPage:0
     
     
    }
  },
  components: {
    Top,SchoolList
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

     
         axios.get("http://localhost:8888/static/mock/school/schoolList.json",{
               
             })
            .then(function (response) {

               
                var result=response.data;
                
                if(result.code==0){

                  this.$set(this,'kindergartenList',result.data.kindergartenList);
                  this.$set(this,"kindRows",this.kindergartenList.slice(0,this.size));
                  this.$set(this,"kmaxPage",Math.ceil(this.kindergartenList.length/this.size));

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