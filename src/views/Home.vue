<template>
  <div class="home">
    <Slide></Slide>
    <About></About>
  </div>
</template>

<script>
import Slide from '@/components/Home/Slide.vue'
import About from '@/components/Home/About.vue'

export default {
  name: 'home',
  components: {
    Slide,
    About,
  }
}
</script>
