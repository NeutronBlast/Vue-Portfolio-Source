<template>
  <div id="app">
    <MyNav></MyNav>
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    -->
    <router-view/>
  </div>
</template>

<script>
import MyNav from '@/components/Home/Navbar.vue'
export default {
  components: {
    MyNav,
  } 
}
</script>
