<template>
   <div class="error-page-wrap">
        <div class="error-page-wrap-inner">
          <img :src="errorIcon"/>
          <p class="error-tip">{{errorMsg}}</p>
        </div>
   </div>
</template>
<script>
    export default{
       props : ["errorMsg", "errorIcon"]
    }
</script>

<style lang="scss" scoped>
.error-page-wrap{
  min-height: 400px;
  height: 400px;
  position: relative;
  .error-page-wrap-inner{
    height: 190px;
    width: 100%;
    text-align: center;
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -90px;
    img{
       height: 154px;
       width: 153px;
    }
    .error-tip{
       height: 40px;
       text-align: center;
       color: red;
       font-size: 14px;
       line-height: 40px;
    }
  }
}
</style>
