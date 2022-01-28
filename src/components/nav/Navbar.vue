<template>
  <div class="fixed z-20 flex lg:hidden justify-end top-2 right-2" :class="[navOpen ? 'text-gray-400' : 'text-gray-800']">
    <button @click="toggleMenu" :class="[navOpen ? 'transform rotate-180' : 'transform rotate-0']" class="transition-transform duration-500 p-2"><burger-icon class="w-6 h-6" /></button>
  </div>
    <div class="fixed h-screen bg-gray-800 p-4 flex flex-col justify-between gap-4 group transition-widthMargin duration-300 text-gray-400" :class="[navOpen ? 'lg:w-48 w-screen' : 'w-20 -ml-20 lg:ml-0']">
        <div class="flex flex-col gap-2">
          <div class="hidden lg:flex justify-end">
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
        <div class="flex flex-col gap-2">
          <a href="https://github.com/gnireeG" target="_blank" class="flex items-center justify-start gap-2 transition-all duration-300 relative group-one">
            <div class="icon-bg rounded-full bg-gray-800 group-one-hover:bg-gray-700 p-2 transition-colors"><logo-github class="h-8 w-8" /></div>
              <p class="text-lg transition-all duration-300 overflow-hidden group-one-hover:text-gray-50" :class="[navOpen ? 'opacity-100 ml-0' : 'opacity-0 -ml-8']">GitHub</p>
            <div class="tooltip rounded-md absolute left-16 ml-4 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-800 scale-0 group-one-hover:scale-100 origin-left transition-all" :class="[navOpen ? 'hidden' : 'block']">GitHub</div>
        </a>
          <navlink to="/about" name="geering.dev">
            <logo-icon class="w-8 h-8"/>
          </navlink>
        </div>
    </div>
</template>
<style>
.router-link-active{
  @apply text-gray-50;
}
.tooltip:before{
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 10px 7px 0;
    @apply border-gray-800;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
</style>
<script>
import homeIcon from '../icons/HomeIcon.vue'
import aboutIcon from '../icons/AboutIcon.vue'
import formsIcon from '../icons/FormsIcon.vue'
import settingsIcon from '../icons/SettingsIcon.vue'
import burgerIcon from '../icons/BurgerIcon.vue'
import LogoGithub from '../icons/LogoGithub.vue'
import logoIcon from '../icons/LogoIcon.vue'
import navlink from '../nav/Navlink.vue'
import circleArrowRight from '../icons/CircleArrowRight.vue'
export default {
  components: {
    homeIcon,
    aboutIcon,
    formsIcon,
    settingsIcon,
    navlink,
    arrowIcon: circleArrowRight,
    logoIcon,
    burgerIcon,
    LogoGithub
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
