import api from '../../http/API'
import * as types from '../types'

const state = {
    // 文章详情
    detail: {},
    // 菜单信息
    detailMenu: {},
    // 当前菜单
    detailMenuId : "",
    // 文章ID
    detailChannelArticleId : ""
}

const actions = {
    getArticleDetail({commit,state},params){
       commit(types.COM_LOADING_STATUS, true),
       api.getDetail(params).then(resp=>{
          commit(types.COM_LOADING_STATUS, false);
          commit(types.GET_ARTICLE_DETAIL, resp.result);
       }).catch(error=>{
          commit(types.COM_LOADING_STATUS, false);
       })
    },
    setCurrentDetailMenuId({commit,state},menuId){
      commit(types.MODIFY_ARTICLE_DETAIL_MENU_ID, menuId)
    },
    setChannelDetailArticleId({commit,state},channelArticleId){
      commit(types.MODIFY_CHANNEL_ARTICLE_ID, channelArticleId)
    }
}

const getters = {
    detail: state => state.detail,
    detailMenu : state => state.detailMenu,
    detailMenuId : state => state.detailMenuId,
    detailChannelArticleId : state => state.detailChannelArticleId,
}

const mutations = {
    [types.GET_ARTICLE_DETAIL](state, res) {
        state.detail = res;
        state.detailMenu = res.menu;
    },
    [types.MODIFY_ARTICLE_DETAIL_MENU_ID](state,res){
        state.detailMenuId = res
    },
    [types.MODIFY_CHANNEL_ARTICLE_ID](state,res){
        state.detailChannelArticleId = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
