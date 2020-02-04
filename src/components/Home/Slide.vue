<template>
<div class="w-75 h-75 mx-auto" id="carousel-container">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide>
            <template v-slot:img>
                <img class="d-block img-fluid w-100" v-bind:src="imgPath(0)" alt="image slot">
            </template>
            <router-link to="/portfolio" class="btn btn-primary check-p">{{$t('checkBtn')}}</router-link>
        </b-carousel-slide>

        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment-->
        <b-carousel-slide>
            <template v-slot:img>
                <img class="d-block img-fluid w-100" v-bind:src="imgPath(1)" alt="image slot">
            </template>
            <a href="#about" class="btn btn-primary check-i">{{$t('infoBtn')}}</a>
        </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        imgPath(index){
          if (index == 0){
            return require('@/assets/'+this.slides.slide_one);
          }

          else if (index==1){
            return require('@/assets/'+this.slides.slide_two);
          }
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    },
    computed:{
        ...mapState(["slides"])
    },
}
</script>
