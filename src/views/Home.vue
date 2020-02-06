<template>
  <div class="home">
    <Slide></Slide>
    <About></About>
    <Gallery></Gallery>
    <Res></Res>
    <Contact></Contact>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Slide from '@/components/Home/Slide.vue'
import About from '@/components/Home/About.vue'
import Gallery from '@/components/Home/WorkGallery.vue'
import Res from '@/components/Home/ResourceSummary.vue'
import Contact from '@/components/Home/Contact.vue'
import MyFooter from '@/components/Home/Footer.vue'

export default {
  name: 'home',
  components: {
    Slide,
    About,
    Gallery,
    Res,
    Contact,
    MyFooter,
  }
}
</script>
