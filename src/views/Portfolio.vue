<template>
<div id="all">
    <br><br>
    <div class="container">
        <SnakesLadders></SnakesLadders><hr>
        <ReadingClub></ReadingClub><hr>
        <PicDriver></PicDriver>
    </div>
    <MyFooter></MyFooter>
</div>
</template>

<script>
import SnakesLadders from '@/components/Portfolio/SnakesLadders'
import PicDriver from '@/components/Portfolio/PicDriver.vue'
import ReadingClub from '@/components/Portfolio/ReadingClub.vue'
//import PerCapital from '@/components/Portfolio/PerCapital.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components:{
        SnakesLadders,
        PicDriver,
        MyFooter,
        ReadingClub,
        //PerCapital,
    }
}
</script>
