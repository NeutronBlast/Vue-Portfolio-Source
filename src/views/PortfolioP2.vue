<template>
<div id="all">
    <br><br>
    <div class="container">
        <OSFiles></OSFiles><hr>
        <Proveneet></Proveneet><hr>
        <OSPipes></OSPipes><hr>
        <OSFT></OSFT><hr>
        <Survey></Survey><hr>
        <div class="float-right">
            <a href="/portfolio" class="previous mypagination">&laquo; {{$t('previous')}}</a>
            <a href="/portfolio/page/3" class="next mypagination">{{$t('next')}} &raquo;</a>
        </div>
        <br><br><br>
    </div>
    <MyFooter></MyFooter>
</div>

</template>

<script>
import OSFiles from '@/components/Portfolio/OSFiles.vue'
import Proveneet from '@/components/Portfolio/Proveneet.vue'
import OSPipes from '@/components/Portfolio/OSPipes.vue'
import OSFT from '@/components/Portfolio/OSFT.vue'
import Survey from '@/components/Portfolio/Survey.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components:{
        OSFiles,
        Proveneet,
        OSPipes,
        OSFT,
        Survey,
        MyFooter,
    },
}
</script>