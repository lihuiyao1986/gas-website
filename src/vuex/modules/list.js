import api from '../../http/API'
import * as types from '../types'

const state = {
    // 文章列表
    articleList: [],
    // 菜单信息
    menu: {},
    // 总页数
    total : 0,
    // 当前页
    pageNo : 1,
    // 每页记录数
    pageSize : 10,
    // 当前菜单id
    menuId : ""
}

const actions = {
    getArticleList({commit,state},params){
       commit(types.COM_LOADING_STATUS, true),
       api.getList(params).then(resp=>{
          commit(types.COM_LOADING_STATUS, false);
          commit(types.GET_ARTICLE_LIST, resp.result);
       }).catch(error=>{
          commit(types.COM_LOADING_STATUS, false);
       })
    },
    setCurrentMenuId({commit,state},menuId){
      commit(types.MODIFY_ARTICLE_LIST_MENU_ID, menuId)
    },
    setPageNo({commit,state},pageNo){
      commit(types.MODIFY_ARTICLE_LIST_PAGE_NO, pageNo)
    }
}

const getters = {
    articleList: state => state.articleList,
    menu : state => state.menu,
    total : state => state.total,
    pageNo : state => state.pageNo,
    pageSize : state => state.pageSize,
    menuId : state => state.menuId,
}

const mutations = {
    [types.GET_ARTICLE_LIST](state, res) {
        state.articleList = res.article.list
        state.menu = res.menu
        state.total = res.article.total
        state.pageNo = res.article.pageNum
        state.pageSize = res.article.pageSize
    },
    [types.MODIFY_ARTICLE_LIST_MENU_ID](state,res){
        state.menuId = res
    },
    [types.MODIFY_ARTICLE_LIST_PAGE_NO](state,res){
        state.pageNo = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
