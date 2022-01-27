<template>
    <div class="fixed h-screen bg-gray-800 p-4 flex flex-col gap-4 group transition-width text-gray-400" :class="[navOpen ? 'w-48' : 'w-20']">
        <div class="flex justify-end">
          <button @click="toggleMenu" :class="[navOpen ? 'transform rotate-180' : 'transform rotate-0']" class="transition-transform duration-500 p-2"><arrow-icon class="w-8 h-8" /></button>
        </div>
        <navlink to="/" name="Home">
          <home-icon class="w-8 h-8"/>
        </navlink>
        <navlink to="/about" name="About">
          <about-icon class="w-8 h-8"/>
        </navlink>
        <navlink to="/forms" name="Forms">
          <forms-icon class="w-8 h-8"/>
        </navlink>
        <navlink to="/settings" name="Settings">
          <settings-icon class="w-8 h-8"/>
        </navlink>
    </div>
</template>
<style>
.router-link-active{
  @apply text-gray-50;
}
</style>
<script>
import homeIcon from '../icons/HomeIcon.vue'
import aboutIcon from '../icons/AboutIcon.vue'
import formsIcon from '../icons/FormsIcon.vue'
//import menuIcon from '../icons/MenuIcon.vue'
import settingsIcon from '../icons/SettingsIcon.vue'
import navlink from '../nav/Navlink.vue'
import circleArrowRight from '../icons/CircleArrowRight.vue'

export default {
  components: {
    homeIcon,
    aboutIcon,
    formsIcon,
    //menuIcon,
    settingsIcon,
    navlink,
    arrowIcon: circleArrowRight
  },
  methods: {
    toggleMenu(){
      this.$store.commit('toggleNav')
    }
  },
  computed:{
      navOpen(){
          return this.$store.getters.navOpen
      }
  }
}
</script>
