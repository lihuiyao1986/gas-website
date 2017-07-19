<template>
  <div class="index-container aligin-center">
    <!--公告通知,燃气知识等-->
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="pannel-container">
          <p class="pannel-title">公告通知</p>
          <template v-if="noticeList.length > 0">
            <ul class="pannel-content">
               <li class="pannel-item" v-for="item of noticeList">
                 <a class="single-text w100" :title="item.title" @click="itemClicked(item)">{{item.title}}</a>
               </li>
            </ul>
          </template>
          <template v-else>
            <p class="no-data">暂无数据</p>
          </template>
        </div>
      </el-col>
      <el-col :span="12">
         <Pannel :titles="titles" @itemSelected="itemSelected">
            <template scope="props" slot="hsk-pannel-title">
                 <span>{{props.title.title}}</span>
            </template>
            <div slot="hsk-pannel-content" class="hsk-pannel-content">
               <ul>
                 <li class="hsk-pannel-item clearfix" v-for="item of tabData" @click="itemClicked(item)">
                   <a class="single-text" :title="item.title">{{item.title}}</a>
                   <span class="date">{{item.createDate | moment}}</span>
                 </li>
               </ul>
            </div>
         </Pannel>
      </el-col>
      <el-col :span="7">
        <div class="pannel-container">
          <p class="pannel-title-2"><i class="el-icon-caret-right right-icon"></i><label>燃气知识</label></p>
          <template v-if="gasKnowledgeList.length > 0">
            <ul class="pannel-content">
              <li class="pannel-item" v-for="item of gasKnowledgeList">
                <a class="single-text" :title="item.title" @click="itemClicked(item)">{{item.title}}</a>
                <span class="date">{{item.createDate | moment}}</span>
              </li>
            </ul>
          </template>
          <template v-else>
            <p class="no-data">暂无数据</p>
          </template>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="17">
          <div class="pic-news">
            <p class="pic-news-title" ><i class="el-icon-caret-right right-icon"></i><label>图片新闻</label></p>
            <template v-if="picNewsList.length > 0">
              <el-carousel :interval="1500" type="card" arrow="never" indicator-position="none" height="200px">
                <el-carousel-item v-for="item of picNewsList" :key="item">
                  <div @click="itemClicked(item)">
                    <img v-lazy="item.url"/>
                    <p>{{item.title}}</p>
                  </div>
               </el-carousel-item>
             </el-carousel>
            </template>
            <template v-else>
                <p class="no-data" style="height:200px;min-height:200px;line-height:200px;">暂无数据</p>
            </template>
         </div>
      </el-col>
      <el-col :span="7">
        <div class="pannel-container swift-menu">
          <p class="pannel-title-2"><i class="el-icon-caret-right right-icon"></i><label>快捷菜单</label></p>
          <div class="pannel-content">
             <ul class="swift-menu-list">
                  <li v-for="item of swiftMenuList" class="swift-menu-item">
                      <img :src="item.url"/>
                      <p>{{item.name}}</p>
                 </li>
             </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Pannel from '../components/Pannel'
import {swiftMenus} from '../assets/js/menu'
import { mapGetters,mapActions} from 'vuex'
import API from '../http/API'
export default {
    data(){
      return {
        titles : [
          {title : "公司新闻",code:"20"},
          {title : "行业新闻",code:"21"}
        ],
        selectedTabIndx : 0,
        swiftMenuList : swiftMenus //快捷菜单
      }
    },
    computed: {
      ...mapGetters([
        'noticeList',
        'picNewsList',
        'industryNewsList',
        'companyNewsList',
        'gasKnowledgeList'
      ]),
      tabData : function(){
         if (this.selectedTabIndx == 0) {
             return this.companyNewsList
         }else{
             return this.industryNewsList;
         }
      },
      getData(){
        // 查询公告列表
        this.getNoticeList({
          id : "19",
          pageNum : "1",
          pageSize : "6"
        });

        // 查询图片新闻
        this.getPicNewsList({
          id : "34",
          pageNum : "1",
          pageSize : "6"
        });

        // 查询行业新闻
        this.getIndustryNewsList({
          id : "21",
          pageNum : "1",
          pageSize : "6"
        });

        // 查询安全知识
        this.getGasKnowledgeList({
        });

        // 查询公司新闻
        this.getCompanyNewsList({
          id : "20",
          pageNum : "1",
          pageSize : "6"
        })
      }
    },
    methods : {
      ...mapActions([
        'getNoticeList',
        'getPicNewsList',
        'getIndustryNewsList',
        'getCompanyNewsList',
        'getGasKnowledgeList'
      ]),
      itemSelected(item){
         this.selectedTabIndx = item.index;
      },
      itemClicked(item){
         this.$router.push({path:'/detail',query:{
          menuId : item.menuId,
          channelArticleId : item.channelArticleId
        }});
      }
    },
    watch: {
      '$route': 'getData'
    },
    components : {
      Pannel
    }
 }
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/index.scss";

</style>
