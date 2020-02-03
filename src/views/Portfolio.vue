<template>
<div id="all">
    <br><br>
    <div class="container">
        <PerCapital></PerCapital><hr>
        <SnakesLadders></SnakesLadders><hr>
        <ReadingClub></ReadingClub><hr>
        <PicDriver></PicDriver><hr>
        <TTProto></TTProto><hr>
        <OSFiles></OSFiles><hr>
        <Proveneet></Proveneet><hr>
        <OSPipes></OSPipes><hr>
        <OSFT></OSFT><hr>
        <CS></CS><hr>
        <Omar></Omar><hr>
        <Earthquake></Earthquake><hr>
        <Survey></Survey>
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
import OSFiles from '@/components/Portfolio/OSFiles.vue'
import Proveneet from '@/components/Portfolio/Proveneet.vue'
import OSPipes from '@/components/Portfolio/OSPipes.vue'
import OSFT from '@/components/Portfolio/OSFT.vue'
import CS from '@/components/Portfolio/CS.vue'
import Omar from '@/components/Portfolio/Omar.vue'
import Earthquake from '@/components/Portfolio/Earthquake.vue'
import Survey from '@/components/Portfolio/Survey.vue'
import MyFooter from '@/components/Home/Footer.vue'
export default {
    components:{
        SnakesLadders,
        PicDriver,
        MyFooter,
        ReadingClub,
        PerCapital,
        TTProto,
        OSFiles,
        Proveneet,
        OSPipes,
        OSFT,
        CS,
        Omar,
        Earthquake,
        Survey,
    }
}
</script>
