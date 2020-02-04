<template>
<div id="all">
    <br><br>
    <div class="container">
        <PerCapital></PerCapital>
        <hr>
        <SnakesLadders></SnakesLadders>
        <hr>
        <ReadingClub></ReadingClub>
        <hr>
        <PicDriver></PicDriver>
        <hr>
        <TTProto></TTProto>
        <hr>
        <div class="float-right">
            <a href="/portfolio/page/2" class="next mypagination">{{$t('next')}} &raquo;</a>
        </div>
        <br><br><br>
    </div>
    <MyFooter></MyFooter>
</div>
</template>

<script>
import SnakesLadders from '@/components/Portfolio/SnakesLadders'
import PicDriver from '@/components/Portfolio/PicDriver.vue'
import ReadingClub from '@/components/Portfolio/ReadingClub.vue'
import PerCapital from '@/components/Portfolio/PerCapital.vue'
import TTProto from '@/components/Portfolio/TTProto.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components: {
        SnakesLadders,
        PicDriver,
        MyFooter,
        ReadingClub,
        PerCapital,
        TTProto,
    }
}
</script>
