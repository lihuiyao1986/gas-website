<template>
  <div id="article-detail" class="aligin-center">
    <el-row :gutter="80">
      <el-col :span="5">
        <LeftMenu :menu="detailMenu" :currentMenucode="detailMenuId">
           <template scope="props" slot="left-menu-item">
                <li class="left-menu-item" @click="leftMenuClick(props.submenu)" :class="{selected : props.submenu.id == props.currentMenucode}">{{props.submenu.name}}</li>
           </template>
        </LeftMenu>
      </el-col>
      <el-col :span="19">
         <ArticleDetail :detail="detail" v-if="!error"></ArticleDetail>
         <ErrorPage v-else :errorMsg="errorMsg" :errorIcon="errorIcon"></ErrorPage>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import API from '../http/API'
  import LeftMenu from '../components/LeftMenu'
  import ArticleDetail from '../view/article-detail'
  import ErrorPage from '../view/error'
  import { mapGetters,mapActions} from 'vuex'
  export default{
    data(){
      return {
        error : false,
        errorMsg : "",
        errorIcon : "../static/img/not-found.png",
      }
    },
    computed : {
      ...mapGetters([
        'detail', // 文章列表
        'detailMenu', // 菜单信息
        'detailMenuId', // 当前菜单ID
        'detailChannelArticleId' // 文章ID
      ]),
    },
    created(){
       this.getData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getData'
    },
    methods : {
      leftMenuClick(item){
        this.$router.push({path:'/list',query:{
          menuId : item.id
        }});
      },
      ...mapActions([
        'setCurrentDetailMenuId',
        'getArticleDetail',
        'setChannelDetailArticleId'
      ]),
      getData(){
        this.setCurrentDetailMenuId(this.$route.query.menuId)
        this.setChannelDetailArticleId(this.$route.query.channelArticleId)
        this.getArticleDetail({
            channelArticleId : this.detailChannelArticleId,
            menuId : this.detailMenuId,
        });
      }
    },
    components : {
       LeftMenu,
       ArticleDetail,
       ErrorPage
    }
}
</script>

<style scoped lang="scss">
@import "../assets/css/reset.css";
@import "../assets/scss/common.scss";
</style>
