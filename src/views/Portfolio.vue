<template>
<div id="all">
    <br><br>
    <div class="container">
        <SnakesLadders></SnakesLadders><hr>
        <PicDriver></PicDriver>
    </div>
</div>
</template>

<script>
import SnakesLadders from '@/components/Portfolio/SnakesLadders'
import PicDriver from '@/components/Portfolio/PicDriver.vue'
export default {
    components:{
        SnakesLadders,
        PicDriver,
    }
}
</script>
