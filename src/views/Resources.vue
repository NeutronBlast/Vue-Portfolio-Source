<template>
    <div class="container">
        <BDIIEX /> <hr>
        <P1Ex></P1Ex><hr>
        <NM></NM><hr>
        <P3Ex></P3Ex><hr>
    </div>
</template>

<script>
import BDIIEX from '@/components/Resources/BDIIEX.vue'
import P1Ex from '@/components/Resources/P1Ex.vue'
import NM from '@/components/Resources/NM.vue'
import P3Ex from '@/components/Resources/P3Ex.vue'
export default {
    components: {
        BDIIEX,
        P1Ex,
        NM,
        P3Ex,
    }
}
</script>