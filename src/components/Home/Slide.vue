<template>
<div>
    <div class="w-75 mx-auto mt-2 d-none d-md-flex">
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators>
            <b-carousel-slide :img-src="imgPath(0)">
            </b-carousel-slide>
            <b-carousel-slide :img-src="imgPath(1)">
            </b-carousel-slide>
        </b-carousel>
    </div>

    <div class="mx-auto mt-5 d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators>
            <b-carousel-slide :img-src="imgPath(0)">
            </b-carousel-slide>
            <b-carousel-slide :img-src="imgPath(1)">
            </b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        imgPath(index) {
            if (index == 0) {
                return require('@/assets/' + this.slides.slide_one);
            } else if (index == 1) {
                return require('@/assets/' + this.slides.slide_two);
            }
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    },
    computed: {
        ...mapState(["slides"])
    },
}
</script>
