<template>
  <div id="app" v-loading="loading">
    <WebsiteHeader></WebsiteHeader>
    <transition enter-active-class="animated fadeInRight" >
      <router-view></router-view>
    </transition>
    <WebsiteFooter></WebsiteFooter>
  </div>
</template>

<script>
import WebsiteHeader from './view/header'
import WebsiteFooter from './view/footer'
import { mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data(){
     return {
        value : ""
     }
  },
  computed : {
    ...mapGetters([
      'loading'
    ])
  },
  components:{
    WebsiteHeader,
    WebsiteFooter
  }
}
</script>

<style>
</style>
