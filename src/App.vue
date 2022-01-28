<template>
  <div class="relative z-10"><navbar/></div>
  <router-view class="transition-margin duration-300" :class="[navOpen ? 'lg:ml-48' : 'lg:ml-20']" />
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