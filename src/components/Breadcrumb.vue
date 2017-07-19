<template>
  <div class="hsk-breadcrumb">
     <ul class="hsk-breadcrumb-list">
        <li class="hsk-breadcrumb-item" v-for="(item,index) of items" @click="itemClicked(item,index)">
          <span class="hsk-breadcrumb-item-title">{{item.title}}</span>
          <span class="hsk-breadcrumb-item-seperater" v-if="(items.length - 1)!=index">{{seperater}}</span>
        </li>
     </ul>
  </div>
</template>
<script>
   export default{
      props : ['items','seperater'],
      methods : {
         itemClicked(item,index){
           this.$emit("itemClicked",{item:item,index:index});
         }
      }
   }
</script>

<style lang="scss" scoped>
.hsk-breadcrumb{
   display: inline-block;
   float: right;
   .hsk-breadcrumb-list{
     .hsk-breadcrumb-item{
       height: 100%;
       display: inline-block;
       span{
          display: inline-block;
          height: 100%;
          &.hsk-breadcrumb-item-title{
            font-size: 14px;
            &:hover{
               color: rgb(69, 157, 238);
               cursor: pointer;
            }
            &.hsk-breadcrumb-item-title:last-child{
               color: #999999
            }
          }
          &.hsk-breadcrumb-item-seperater{
            font-size: 14px;
            margin: 0px 5px;
          }
       }
     }
   }
}

</style>
