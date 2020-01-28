<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MyNav from '@/components/Home/Navbar.vue'
export default {
  components: {
    MyNav,
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
