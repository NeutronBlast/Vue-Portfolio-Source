<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
import MyNav from '@/components/Home/Navbar.vue'
export default {
  components: {
    MyNav,
  },

}
</script>
