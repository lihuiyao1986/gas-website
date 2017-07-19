import * as types from '../types'

const state = {
    // 页面是否正在加载
    loading: false
}

const actions = {
    setLoading({commit,state},status){
       commit(types.COM_LOADING_STATUS,status);
    }
}

const getters = {
    loading: state => state.loading
}

const mutations = {
  [types.COM_LOADING_STATUS](state, status) {
      state.loading = status
  }
}

export default {
    state,
    actions,
    getters,
    mutations
}
