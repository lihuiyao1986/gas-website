<template>
  <div class="left-menu-zone">
     <p class="left-menu-title"><span>{{menu.name}}</span></p>
     <ul class="left-menu-list">
       <slot name="left-menu-item" v-for="item of menu.childMenuList" :submenu="item" :currentMenucode="currentMenucode"></slot>
     </ul>
  </div>
</template>
<script>
  export default{
    props : ["menu","currentMenucode"]
  }
</script>

<style lang="scss" scoped>
.left-menu-zone{
  margin-bottom: 30px;
  border-right: 1px dashed rgb(227, 226, 226);
  .left-menu-title{
    font-size: 18px;
    color: #414141;
    height: 40px;
    line-height: 40px;
    &:before{
       content: '';
       width: 5px;
       height: 20px;
       background-color: #459dee;
       position: relative;
       left: 0px;
       display: inline-block;
       float: left;
       vertical-align: middle;
       top: 50%;
       margin-top: -10px;
       margin-right: 5px;
    }
  }
  .left-menu-list{
    .left-menu-item{
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      padding-left: 10px;
      &.selected{
         color: #459dee;
      }
      &:hover{
        color: #459dee;
        cursor: pointer;
      }
    }
  }
}
</style>
