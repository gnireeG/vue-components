<template>
    <router-link class="flex items-center justify-start gap-2 transition-all duration-300 relative group-one" :to="to">
        <div class="rounded-full bg-gray-800 group-one-hover:bg-gray-700 p-2"><slot class="group-one-hover: text-gray-50" /></div>
        <p class="text-lg transition-all overflow-hidden" :class="[navOpen ? 'opacity-100 ml-0 w-auto' : 'opacity-0 -ml-8 w-0']">{{name}}</p>
        <div class="tooltip rounded-md absolute left-16 ml-4 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-800 scale-0 group-one-hover:scale-100 origin-left transition-all" :class="[navOpen ? 'hidden' : 'block']">{{name}}</div>
    </router-link>
</template>
<style scoped>
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
export default{
    props: {
        to: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    computed:{
      navOpen(){
          return this.$store.getters.navOpen
      }
  }
}
</script>
