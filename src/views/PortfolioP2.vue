<template>
<div id="all">
    <br><br>
    <div class="container">
        <PicDriver /> <hr>
        <TTProto></TTProto><hr>
        <OSFiles></OSFiles><hr>
        <Proveneet></Proveneet><hr>
        <OSPipes></OSPipes><hr>
        <div class="float-right">
            <router-link to="/portfolio" class="previous mypagination">&laquo; {{$t('previous')}}</router-link>
            <router-link to="/portfolio/page/3" class="next mypagination">{{$t('next')}} &raquo;</router-link>
        </div>
        <br><br><br>
    </div>
    <MyFooter></MyFooter>
</div>

</template>

<script>
import PicDriver from '@/components/Portfolio/PicDriver.vue'
import TTProto from '@/components/Portfolio/TTProto.vue'
import OSFiles from '@/components/Portfolio/OSFiles.vue'
import Proveneet from '@/components/Portfolio/Proveneet.vue'
import OSPipes from '@/components/Portfolio/OSPipes.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components:{
        PicDriver,
        TTProto,
        OSFiles,
        Proveneet,
        OSPipes,
        MyFooter,
    },
}
</script>