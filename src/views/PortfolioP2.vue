<template>
<div id="all">
    <br><br>
    <div class="container">
        <ReadingClub /> <hr>
        <PicDriver /> <hr>
        <TTProto></TTProto><hr>
        <OSFiles></OSFiles><hr>
        <Proveneet></Proveneet><hr>
        <div class="float-right">
            <router-link to="/portfolio" class="previous mypagination">&laquo; {{$t('previous')}}</router-link>
            <router-link to="/portfolio/page/3" class="next mypagination">{{$t('next')}} &raquo;</router-link>
        </div>
        <br><br><br>
    </div>
</div>

</template>

<script>
import ReadingClub from '@/components/Portfolio/ReadingClub.vue'
import PicDriver from '@/components/Portfolio/PicDriver.vue'
import TTProto from '@/components/Portfolio/TTProto.vue'
import OSFiles from '@/components/Portfolio/OSFiles.vue'
import Proveneet from '@/components/Portfolio/Proveneet.vue'
export default {
    components:{
        ReadingClub,
        PicDriver,
        TTProto,
        OSFiles,
        Proveneet,
    },
}
</script>