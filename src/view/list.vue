<template>
  <div id="article-list" class="aligin-center">
    <el-row :gutter="80">
      <el-col :span="5">
        <LeftMenu :menu="menu" :currentMenucode="menuId">
           <template scope="props" slot="left-menu-item">
                <li class="left-menu-item" @click="leftMenuClick(props.submenu)" :class="{selected : props.submenu.id == props.currentMenucode}">{{props.submenu.name}}</li>
           </template>
        </LeftMenu>
      </el-col>
      <el-col :span="19">
        <div class="article-content">
          <div class="article-content-top clearfix">
            <p class="article-menu-name">{{tabs.currentMenuTitle}}</p>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item of tabs.items" :key="item.id" :to="{path : '/list',query : {menuId : item.id} }">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <ArticleList :articleList="articleList" @articleItemClicked="articleItemClicked" v-if="articleList.length > 0" @pageChanged="pageChanged" :total="total" :showCard="showCard" :pageSize="pageSize"></ArticleList>
          <ErrorPage v-else errorMsg="暂无文章信息" errorIcon="../static/img/not-found.png"></ErrorPage>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
   import ArticleList from '../components/ArticleList'
   import LeftMenu from '../components/LeftMenu'
   import API from '../http/API'
   import ErrorPage from '../view/error'
   import Breadcrumb from '../components/Breadcrumb'
   import { mapGetters,mapActions} from 'vuex'
   export default {
     data(){
        return {
          showCard : false,
        }
     },
     computed : {
       ...mapGetters([
         'articleList',// 文章列表
         'menu',// 菜单信息
         'total',// 总页数
         'pageNo',// 当前页
         'pageSize',// 每页记录数
         'menuId'// 当前菜单id
       ]),
       tabs(){
         try{
           let currentMenu = {};
           if(this.menuId == this.menu.id){ //传过来的菜单是父菜单
               currentMenu = this.menu.childMenuList.length > 0 ? this.menu.childMenuList[0] : {};
               this.setCurrentMenuId(currentMenu.id)
           }else{
             let arr = [];
             if (this.menu.childMenuList.length > 0) {
               arr = this.menu.childMenuList.filter(item=>{
                return item.id == this.menuId
               });
             }
             currentMenu = arr.length > 0 ? arr[0] : {};
          }
          return {
              currentMenuTitle : currentMenu.name || "",
              items :[
                   {
                     name : this.menu.name || "",
                     id : this.menu.id || ""
                   },{
                     name : currentMenu.name || "",
                     id : currentMenu.id || ""
                   }
              ]
           };
         }catch(ex){
           return {
             currentMenuTitle : "",
             items :[]
           }
        }
       }
     },
     methods : {
        ...mapActions([
          'getArticleList',
          'setCurrentMenuId',
          'setPageNo'
        ]),
        articleItemClicked(item){
          this.$router.push({path:'/detail',query:{
            menuId : item.menuId,
            channelArticleId : item.channelArticleId
          }});
        },
        leftMenuClick(item){ // 左边菜单被点击
           this.setCurrentMenuId(item.id)
           this.setPageNo(1);
           this.$router.push({path:'/list',query:{
             menuId : item.id
           }});
        },
        pageChanged(obj){
           this.setPageNo(obj.pageNo);
           this.getData();
        },
        getData(){
          this.setCurrentMenuId(this.$route.query.menuId)
          this.getArticleList({
            id : this.menuId,
            pageNum : this.pageNo,
            pageSize : this.pageSize
          })
        },
        queryData(){
           this.getData();
        }
     },
     created(){
        this.getData();
     },
     watch: {
       // 如果路由有变化，会再次执行该方法
       '$route': 'queryData'
     },
     components : {
       ArticleList,
       LeftMenu,
       ErrorPage,
       Breadcrumb
     }
   }
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/list.scss";
</style>
