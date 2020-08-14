<template>
<div id="all">
    <br><br>
    <div class="container">
        <OSPipes />
        <hr>
        <OSFT />
        <hr>
        <Survey></Survey>
        <hr>
        <CS></CS>
        <hr>
        <Omar></Omar>
        <hr>
        <div class="float-right">
            <router-link to="/portfolio/page/2" class="previous mypagination">&laquo; {{$t('previous')}}</router-link>
            <router-link to="/portfolio/page/4" class="next mypagination">{{$t('next')}} &raquo;</router-link>
        </div>
        <br><br><br>
    </div>
</div>
</template>

<script>
import OSPipes from '@/components/Portfolio/OSPipes.vue'
import OSFT from '@/components/Portfolio/OSFT.vue'
import Survey from '@/components/Portfolio/Survey.vue'
import CS from '@/components/Portfolio/CS.vue'
import Omar from '@/components/Portfolio/Omar.vue'
export default {
    components: {
        OSPipes,
        OSFT,
        Survey,
        CS,
        Omar,
    },
}
</script>
