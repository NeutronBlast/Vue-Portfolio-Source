<template>
<div id="all">
    <br><br>
    <div class="container">
        <CS></CS><hr>
        <Omar></Omar><hr>
        <Earthquake></Earthquake><hr>
        <div class="float-right">
            <router-link to="/portfolio/page/2" class="previous mypagination">&laquo; {{$t('previous')}}</router-link>
        </div>
        <br><br><br>
    </div>
    <MyFooter></MyFooter>
</div>

</template>

<script>
import CS from '@/components/Portfolio/CS.vue'
import Omar from '@/components/Portfolio/Omar.vue'
import Earthquake from '@/components/Portfolio/Earthquake.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components:{
        CS,
        Omar,
        Earthquake,
        MyFooter,
    },
}
</script>