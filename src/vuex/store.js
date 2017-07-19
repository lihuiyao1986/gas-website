import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import common from './modules/common'
import detail from './modules/detail'
import index from './modules/index'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        index,
        list,
        detail,
        common
    }
})
