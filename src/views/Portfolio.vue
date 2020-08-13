<template>
<div id="all">
    <br><br>
    <div class="container">
        <Covid /><hr>
        <NeutronLanding></NeutronLanding><hr>
        <PerCapital></PerCapital>
        <hr>
        <SnakesLadders></SnakesLadders>
        <hr>
        <ReadingClub></ReadingClub>
        <hr>
        <div class="float-right">
            <router-link to="/portfolio/page/2" class="next mypagination">{{$t('next')}} &raquo;</router-link>
        </div>
        <br><br><br>
    </div>
    <MyFooter></MyFooter>
</div>
</template>

<script>
import Covid from '@/components/Portfolio/Covid.vue'
import NeutronLanding from '@/components/Portfolio/NeutronLanding.vue'
import SnakesLadders from '@/components/Portfolio/SnakesLadders'
import ReadingClub from '@/components/Portfolio/ReadingClub.vue'
import PerCapital from '@/components/Portfolio/PerCapital.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components: {
        Covid,
        NeutronLanding,
        SnakesLadders,
        MyFooter,
        ReadingClub,
        PerCapital,
    }
}
</script>
