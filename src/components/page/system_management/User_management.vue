
<style scoped>

.content_box{
  position:absolute;
  left:200px;
  top:107px;
  border:1px solid #dfe6ec;	
}

.top{
  width:100%;
  height:40px;
  display: flex;
  justify-content: flex-end;

}

.top_nav{
  width:202px;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
	
.top_nav span{
  display: inline-block;
  flex:1;
  height:100%;
  text-align:center;
  line-height:40px;
  


}

.active{
  background:#e45f00;
  color:#fff;
}

</style>

<style type="text/css" media="screen">
  
.el-table th{
  background:#f39801;

}

 .el-table__header-wrapper thead div{
  background:#f39801;
  color:#fff;
  
 }


 .el-table .cell, .el-table th>div {
    padding-left: 0px; 
    padding-right: 0px; 
    box-sizing: border-box;
    text-overflow: ellipsis;
}

.el-button--small {
    padding: 7px 20px;
    font-size: 12px;
    border-radius: 4px;
    background: #ff7b0f;
    color: #fff;
}

.deleteAll{
  color:#fff;
  float: right;
  margin-right:5px;
  background:#f39801;
}

.el-button--text {
   
    flex: 1;

}

.el-dialog__header{
  text-align:center;
}


.el-form-item {
    
    display: inline-block;
}


.el-dialog__footer{
  text-align:center;
}

.el-table{
  height:440px;/*只显示10条的高度 */
}


</style>

<template>
 <div class="content_box">

      <div class="top">
        
          <div class="top_nav" >
            
             <span v-bind:class="{ active: isActiveA }" v-on:click="admainList()">管理员列表</span>
            <!--  <span v-on:click="addAdmain()" v-bind:class="{ active: isActiveB }">添加管理员</span> -->

             <el-button type="text" @click="addAdmain()" v-bind:class="{ active: isActiveB }">添加管理员</el-button>

          </div> 

      </div>

       <el-dialog title="添加用户" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :show-close="false">
              <el-form :model="form">
                <el-form-item label="账号" :label-width="formLabelWidth">
                  <el-input v-model="form.account" auto-complete="off"></el-input>
                 
                </el-form-item>
                
                <el-form-item label="申请日期" :label-width="formLabelWidth">
                 <!--  <el-input v-model="form.applicationDate" auto-complete="off"></el-input> -->
                   <el-date-picker v-model="form.applicationDate" type="date" placeholder="选择日期时间" :picker-options="pickerOptions0" > </el-date-picker>
                </el-form-item>
                
                 <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="form.phoneNumber" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系QQ" :label-width="formLabelWidth">
                  <el-input v-model="form.userQQ" auto-complete="off"></el-input>
                </el-form-item>



                <el-form-item label="状态" :label-width="formLabelWidth">
                  <el-select v-model="form.state" placeholder="请选择状态">
                    <el-option label="开通" value="开通"></el-option>
                    <el-option label="关闭" value="关闭"></el-option>
                  </el-select>
                </el-form-item>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sureBtn()">确 定</el-button>
              </div>
    </el-dialog>


    
    
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" row-key>
          <el-table-column type="selection" width="55" align="center" >
          </el-table-column>

          <el-table-column label="账号" width="150" align="center">
            <template scope="scope">{{ scope.row.account }}</template>
          </el-table-column>

          <el-table-column  label="姓名" width="150" align="center">

               <template scope="scope">{{ scope.row.name }}</template>

          </el-table-column>
          <el-table-column  label="联系电话"  width="150" align="center">

             <template scope="scope">{{ scope.row.phoneNumber }}</template>

          </el-table-column>

           <el-table-column  label="联系QQ"  width="150" align="center">

             <template scope="scope">{{ scope.row.userQQ }}</template>

           </el-table-column>

            <el-table-column  label="申请日期"  width="150" align="center" >

             <template scope="scope">{{ scope.row.applicationDate}}</template>

           </el-table-column>

          <el-table-column  label="状态"  width="150" align="center">

             <template scope="scope">{{ scope.row.state}}</template>

           </el-table-column>

           <el-table-column  label="操作" width="202" align="center">

                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                      移除
                    </el-button>
                </template>
             </el-table-column>

           

        </el-table>

        <div style="margin-top: 20px">
           
            <el-button @click="deleteRowAll()" class="deleteAll">批量删除</el-button>
        </div>


    <div>

      <ProgressBar :tot="total" v-on:handleCurrentChange="getPagedata"></ProgressBar>

    </div>

</div>

</template>


<script>

import axios from 'axios';

import ProgressBar from '../progress_bar/Progress_bar';

var moment = require('moment');
// console.log(moment('2016-09-18').format('YYYY-MM-DD'));

  export default {
    data() {
      return {

        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },

        tableData:[],
        multipleSelection: [],
        total:0,
        isActiveA:true,
        isActiveB:false,
        dialogFormVisible: false,
        form: {
          name:'',
          account:'',
          applicationDate:'',
          phoneNumber:'',
          userQQ:'',
          state:''
        },
        type:'',
        idx:'',
        formLabelWidth: '80px'
      }

    },
    created:function(){
    
    },
     components: {
       ProgressBar
    },

    methods: {

      getPagedata(data){
        //接受子元素传来的值
         console.log(data)
          //http://m.wishlist1314.com/wishlist_mobile/mobile/getBannerList
             axios.get("http://localhost:9000/static/mock/user_admain/user_admain1.json",{
              
               params:{
                 pageSize:data
               }
             })
            .then(function (response) {

                
                var result=response.data;
                
                if(result.code==0){     
                 
                   this.$set(this,"tableData",result.data.rows);
                         

                }else{

                  console.log(result.msg)
                } 
                
                

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

      },

      deleteRowAll() {
       

         if(this.multipleSelection.length==0){
            
            return; 

         }else{


             this.multipleSelection.forEach((val) => {
                   
                    this.tableData.forEach((row,index) =>{
                       

                         if(row.id==val.id){
                            //判断是否相等
                           
                            console.log("true")
                            this.tableData.splice(index,1)

                         }

                    });
              });

         }

         
         

      },

      handleSelectionChange(val) {

       this.multipleSelection =val;
       
      },

      deleteRow(index, rows) {
          //删除
            

             this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {

                   //http://m.wishlist1314.com/wishlist_mobile/mobile/getBannerList
                   axios.get("http://localhost:9000/static/mock/user_admain/user_admain1.json",{

                      params:{

                      }
                    
                   })
                  .then(function (response) {

                      
                      var result=response.data;
                      
                      if(result.code==0){

                          rows.splice(index, 1);

                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                          });
                         
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

               

              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });


      },

      handleEdit(index,rows){
        
        //点击修改 显示Dialog 弹窗  让其显示原有的默认值

          this.$set(this,"form",{
            name:rows.name,
            account:rows.account,
            applicationDate:rows.applicationDate,
            phoneNumber:rows.phoneNumber,
            userQQ:rows.userQQ,
            state:rows.state
          });

          this.$set(this,'type',1); //修改为1 添加管理员为0 
          this.$set(this,'idx',index); //把修改的下标 存起来
          
          this.$set(this,"dialogFormVisible",true);

      },

       addAdmain(){
        //添加管理员

         this.$set(this,"form",{
            name:'',
            account:'',
            applicationDate:'',
            phoneNumber:'',
            userQQ:'',
            state:''})
    
         this.$set(this,"isActiveA",false);
         this.$set(this,"isActiveB",true);
         //显示Dialog 弹窗
         this.$set(this,'type',0);

         this.$set(this,"dialogFormVisible",true);


      },

      admainList(){
         //点击管理员列表

         this.$set(this,"isActiveA",true);
         this.$set(this,"isActiveB",false);

      },

      sureBtn(){
        //确定提交按钮

           //http://m.wishlist1314.com/wishlist_mobile/mobile/getBannerList
             axios.get("http://localhost:9000/static/mock/user_admain/user_admain1.json",{

                params:{


                }
              
             })
            .then(function (response) {

                
                var result=response.data;
                
                if(result.code==0){

                      if(this.type==0){

                          this.$message({
                                type: 'success',
                                message: '添加成功!'
                          });
                     
                    
                       //日期格式化
                        this.form.applicationDate=moment(this.form.applicationDate).format('YYYY-MM-DD');                    
                        this.tableData.unshift(this.form);  //向头部添加
                        this.$set(this,"dialogFormVisible",false);

                      }else if(this.type==1){

                           this.$message({
                                  type: 'success',
                                  message: '修改成功!'
                            });

                           //修改对应的数组 

                           this.$set(this.tableData,this.idx,this.form)

                           this.$set(this,"dialogFormVisible",false);


                      }else{

                      }

                    
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

     mounted: function () {

          //http://m.wishlist1314.com/wishlist_mobile/mobile/getBannerList
             axios.get("http://localhost:9000/static/mock/user_admain/user_admain.json",{
              
             })
            .then(function (response) {

                
                var result=response.data;
                
                if(result.code==0){
              
                 
                   this.$set(this,"tableData",result.data.rows);
                   this.$set(this,"total",result.data.total);
                 

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