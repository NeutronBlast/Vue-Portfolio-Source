<template>
<div id="all">
    <br><br>
    <div class="container">
        <NetDoc /> <hr>
        <Covid /><hr>
        <NeutronLanding></NeutronLanding><hr>
        <PerCapital></PerCapital>
        <hr>
        <SnakesLadders></SnakesLadders>
        <hr>
        <div class="float-right">
            <router-link to="/portfolio/page/2" class="next mypagination">{{$t('next')}} &raquo;</router-link>
        </div>
        <br><br><br>
    </div>
</div>
</template>

<script>
import NetDoc from '@/components/Portfolio/NetDoc.vue'
import Covid from '@/components/Portfolio/Covid.vue'
import NeutronLanding from '@/components/Portfolio/NeutronLanding.vue'
import SnakesLadders from '@/components/Portfolio/SnakesLadders'
import PerCapital from '@/components/Portfolio/PerCapital.vue'
export default {
    components: {
        NetDoc,
        Covid,
        NeutronLanding,
        SnakesLadders,
        PerCapital,
    }
}
</script>
