<template>
  <navbar/>
  <router-view class="transition-margin" :class="[navOpen ? 'ml-48' : 'ml-20']" />
</template>
<script>
import navbar from './components/nav/Navbar.vue'
export default {
  components: {
    navbar
  },
  computed:{
      navOpen(){
          return this.$store.getters.navOpen
      }
  }
}
</script>