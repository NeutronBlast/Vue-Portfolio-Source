<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
    <MyFooter />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MyNav from '@/components/Home/Navbar.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
  components: {
    MyNav,
    MyFooter,
  },
  computed:{
    ...mapState(["slides"])
  },
  methods:{
    ...mapMutations(['modify']),
    },
  created(){
    this.$store.commit('modify','en');
  }
}
</script>
