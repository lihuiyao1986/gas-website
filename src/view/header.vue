<template>
  <div id="header">
      <div class="header-top aligin-center">
          <img src="../../static/img/logo1.png" class="logo"/>
          <ul class="header-top-right">
             <li class="current-timer">2017年06月21</li>
             <li>
              <span class="search-area">
                <el-input placeholder="请输入搜索内容"  icon="search"></el-input>
              </span>
             </li>
          </ul>
      </div>
      <div class="nav-menu">
        <div class="aligin-center nav-menu-wrap">
             <img src="../../static/img/nav-bg.png"/>
             <ul class="nav-list">
                <li v-for="(item,index) in menus" @click.stop="menuClicked(item)" @mouseenter="menuIn(index)" @mouseleave="cHoverMenuCode=''">
                  {{item.name}}
                  <el-collapse-transition>
                  <ul class="sub-menu-list" v-show="cHoverMenuCode == item.code">
                     <li  v-for="subItem in item.submenus"  @click.stop="subMenuClicked(subItem)">{{subItem.name}}</li>
                  </ul>
                  </el-collapse-transition>
                </li>
             </ul>
        </div>
      </div>
      <div>
          <template>
                 <el-carousel :interval="5000" arrow="always" indicator-position="outside" height="250px">
                    <el-carousel-item v-for="item in banners" :key="item">
                     <img :src="item.url"/>
                    </el-carousel-item>
                  </el-carousel>
         </template>
      </div>
  </div>
</template>

<script>
   import banner from '../components/Banner'
   import menus , {bannerPics} from '../assets/js/menu'
   export default {
       name : 'WebsiteHeader',
       data(){
          return {
            banners : bannerPics,
            menus : menus,
            submenus : [],
            cHoverMenuCode : ""
          }
       },
       methods:{
         menuIn(index){
           let currentMenu = this.menus[index];
           this.cHoverMenuCode = currentMenu.code;
           this.submenus = currentMenu.submenus;
         },
         menuClicked(item){
           this.cHoverMenuCode = ""
           this.$router.push({name:'list',query : {
             menuId : item.code
           }});
         },
         subMenuClicked(item){
           this.cHoverMenuCode = ""
           this.$router.push({name:'list',query : {
             menuId : item.code
           }});
         }
       },
       components : { banner }
   }
</script>

<style scoped lang="scss">
@import "../assets/css/animate.css";
@import "../assets/scss/common.scss";
@import "../assets/scss/header.scss";
</style>
