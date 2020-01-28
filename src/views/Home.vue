<template>
  <div class="home">
    <Slide></Slide>
    <About></About>
    <Gallery></Gallery>
    <Contact></Contact>
  </div>
</template>

<script>
import Slide from '@/components/Home/Slide.vue'
import About from '@/components/Home/About.vue'
import Gallery from '@/components/Home/WorkGallery.vue'
import Contact from '@/components/Home/Contact.vue'

export default {
  name: 'home',
  components: {
    Slide,
    About,
    Gallery,
    Contact,
  }
}
</script>
