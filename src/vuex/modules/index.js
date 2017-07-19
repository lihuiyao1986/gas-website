import api from '../../http/API'
import * as types from '../types'

const state = {
    // 图片新闻列表
    picNewsList: [],
    // 公告通知列表
    noticeList: [],
    // 行业新闻
    industryNewsList : [],
    // 公司新闻
    companyNewsList : [],
    // 燃气知识列表
    gasKnowledgeList : []
}

const actions = {
    getNoticeList({commit,state},params){
       commit(types.COM_LOADING_STATUS, true),
       api.getList(params).then(resp=>{
          commit(types.GET_NOTICES_LIST, resp.result.article.list);
          commit(types.COM_LOADING_STATUS, false);
       }).catch(error=>{
          commit(types.COM_LOADING_STATUS, false);
          console.log(error);
       })
    },
    getPicNewsList({commit,state},params){
       api.getList(params).then(resp=>{
          commit(types.GET_PIC_NEWS, resp.result.article.list)
       }).catch(error=>{

       })
    },
    getIndustryNewsList({commit,state},params){
      api.getList(params).then(resp=>{
         commit(types.GET_INDUSTRY_NEWS, resp.result.article.list)
      }).catch(error=>{

      })
    },
    getCompanyNewsList({commit,state},params){
      api.getList(params).then(resp=>{
         commit(types.GET_COMPANY_NEWS, resp.result.article.list)
      }).catch(error=>{

      })
    },
    getGasKnowledgeList({commit,state},params){
      api.getGasKnowledge(params).then(resp=>{
         commit(types.GET_GAS_KNOWLEDGE, resp.result)
      }).catch(error=>{

      })
    }
}

const getters = {
    noticeList: state => state.noticeList,
    picNewsList : state => state.picNewsList,
    industryNewsList : state => state.industryNewsList,
    companyNewsList : state => state.companyNewsList,
    gasKnowledgeList : state => state.gasKnowledgeList
}

const mutations = {
    [types.GET_NOTICES_LIST](state, res) {
        state.noticeList = res
    },
    [types.GET_PIC_NEWS](state, res) {
        state.picNewsList = res
    },
    [types.GET_INDUSTRY_NEWS](state, res) {
        state.industryNewsList = res
    },
    [types.GET_COMPANY_NEWS](state, res) {
        state.companyNewsList = res
    },
    [types.GET_GAS_KNOWLEDGE](state, res) {
        state.gasKnowledgeList = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
