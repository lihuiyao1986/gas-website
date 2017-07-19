<template>
  <div class="hsk-pannel">
    <ul class="hsk-pannel-title">
      <li v-for="(title,index) in titles" @mouseenter="titleHover(index)" :class="{selected : currentIndex == index}">
           <slot name="hsk-pannel-title" :title="title"></slot>
      </li>
    </ul>
    <slot name="hsk-pannel-content"></slot>
  </div>
</template>

<script>
   export default {
      data (){
        return {
           currentIndex : 0
        }
      },
      methods : {
        titleHover(index){
            this.currentIndex = index;
            this.$emit("itemSelected",{index:index,item:this.titles[index]});
        }
      },
      props: ['titles']
   }
</script>

<style lang="scss">

.hsk-pannel{
  .hsk-pannel-title{
    border-bottom: 1px solid rgb(69, 157, 238);
    &:after{
      content:".";
      display:block;
      height:0;
      clear:both;
      visibility:hidden;
    }
     >li{
       float: left;
       font-size: 18px;
       height: 55px;
       line-height: 55px;
       color: #414141;
       padding: 0px 10px;
       text-align: center;
       &:hover{
         cursor: pointer;
       }
       &.selected{
         background-color: rgb(69, 157, 238);
         color: white;
       }
     }
  }
}

</style>
