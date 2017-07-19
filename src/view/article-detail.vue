<template>
  <div class="article-detail">
      <p class="article-detail-title">{{detail.title}}</p>
      <p class="articel-sub-info"><span class="publish-time">发布时间：{{detail.createDate}}</span><span class="viewCount">浏览次数：{{detail.viewCount}}</span></p>
      <p class="article-detail-content" v-html="detail.content"></p>
  </div>
</template>
<script>
  export default {
     props : ['detail']
  }
</script>
<style lang="scss">
.article-detail{
   .article-detail-title{
     color: #414141;
     font-size: 25px;
     margin-bottom: 15px;
   }
   .articel-sub-info{
    padding: 20px 0px;
    .publish-time{
      font-size: 14px;
      color: #999;
    }
    .viewCount{
      margin-left: 50px;
      font-size: 14px;
      color: #999;
    }
   }
   .article-detail-content{
     padding:20px 0px 40px 0px;
     min-height: 250px;
     img{
       max-width: 100% !important;
       height: auto !important;
     }
   }
}
</style>
