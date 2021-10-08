<template>
<div>
    <vue-timeline-update :date="new Date('2021-08-12')" title="UCAB" description="" :thumbnail="require(`../../assets/about/ucab.png`)" category="COLLEGE" icon="school" color="black" theme="light">
    </vue-timeline-update>
    <p class="timeline-text">
        {{$t('education_one')}}
    </p>

    <!-- Latest update -->
    <vue-timeline-update :date="new Date('2019-08-31')" title="Cisco CCNA" description="" :thumbnail="require(`../../assets/about/cisco.jpg`)" category="course" icon="computer" color="blue" theme="light">
    </vue-timeline-update>
    <p class="timeline-text">
        {{$t('education_two')}}
    </p>
    <!-- Yet another update -->
    <vue-timeline-update :date="new Date('2012-09-30')" title="Fyr Lois" description="" :thumbnail="require(`../../assets/about/fl.jpg`)" category="course" icon="textsms" color="black" theme="light" is-last>
    </vue-timeline-update>
    <p class="timeline-text">
        {{$t('education_three')}}
    </p>
</div>
</template>

<script>
export default {

}
</script>
