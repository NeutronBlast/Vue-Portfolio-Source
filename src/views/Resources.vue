<template>
    <div class="container">
        <P1Ex></P1Ex><hr>
        <NM></NM><hr>
        <P3Ex></P3Ex><hr>
    </div>
</template>

<script>
import P1Ex from '@/components/Resources/P1Ex.vue'
import NM from '@/components/Resources/NM.vue'
import P3Ex from '@/components/Resources/P3Ex.vue'
export default {
    components: {
        P1Ex,
        NM,
        P3Ex,
    }
}
</script>