<template>
  <div>
    <ul class="clearfix article-list">
      <li class="article-item list clearfix" v-if="!showCard" v-for="item in articleList" @click="itemClicked(item)">
        <a class="single-text" :title="item.title">{{item.title}}</a>
        <span class="date">{{item.createDate | moment}}</span>
      </li>
      <li class="article-item card" v-if="showCard" v-for="item of articleList" @click="itemClicked(item)">
            <img v-lazy="item.url"/>
            <p>{{item.title}}</p>
      </li>
    </ul>
    <div class="pagination">
        <el-pagination
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
      methods : {
        itemClicked(item){
          this.$emit("articleItemClicked",item);
        },
        handleCurrentChange(val) {
           this.$emit("pageChanged",{pageNo:val});
        }
      },
      props : ["articleList","showCard",'pageSize','total']
  }
</script>

<style lang="scss" scoped>
.article-list{
  margin: 10px 0px;
  .card.article-item {
    display: inline-block;
    margin: 0px 15px 15px 0px;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),
                0 0 6px 0 rgba(0,0,0,.04);
    width: 30%;
    box-sizing: border-box;
    &:hover{
      cursor: pointer;
      border: 1px solid rgb(69, 157, 238);
    }
    img{
      width: 100%;
      height: 100%;
    }
    p{
      color: #414141;
      padding: 0px 5px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }

  .list.article-item{
    display: block;
    overflow: hidden;
    width: 100%;
    line-height: 50px;
    height: 50px;
    text-align:left;
    margin: 0px;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px dashed rgb(227, 226, 226);
    &:hover{
      cursor: pointer;
      border: none;
      border-bottom: 1px dashed rgb(227, 226, 226);
    }
    >a{
      &:before{
        content: "●";
        color: #459dee;
        width: 10px;
        height: 10px;
        display: inline-block;
      }
      height: 100%;
      display: inline-block;
      width: 70%;
      font-size: 12px;
      &:hover{
         color:rgb(69, 157, 238);
      }
    }
    .date{
      text-align: right;
      height: 100%;
      display: inline-block;
      width: 20%;
      vertical-align: middle;
      color:#999999;
      float: right;
      font-size: 12px;
    }
  }
}
.Card{
  text-align: center;
}

.pagination{
   text-align:center;
   margin:40px 0px;
}
</style>
