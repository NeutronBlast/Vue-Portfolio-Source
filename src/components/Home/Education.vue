<template>
<div>
    <vue-timeline-update
    :date="new Date('2020-01-18')"
    title="UCAB"
    description=""
    thumbnail="https://vida.ucab.edu.ve/wp-content/uploads/sites/2/2017/03/Isologotipo-VidaUCAB-Horizontal-1.png"
    category="COLLEGE"
    icon="school"
    color="black"
    theme="light">
    </vue-timeline-update>
      <p class="timeline-text">
        {{$t('education_one')}}
      </p>


  <!-- Latest update -->
  <vue-timeline-update
    :date="new Date('2019-08-31')"
    title="Cisco CCNA"
    description=""
    thumbnail="https://i.imgur.com/Xaq1YGF.png"
    category="course"
    icon="computer"
    color="blue"
    theme="light">
  </vue-timeline-update>
  <p class="timeline-text">
    {{$t('education_two')}}
  </p>
    <!-- Yet another update -->
  <vue-timeline-update
    :date="new Date('2012-09-30')"
    title="Fyr Lois"
    description=""
    thumbnail="https://http2.mlstatic.com/libros-interchange-4ta-edition-para-fyr-lois-digital-1bono-D_NQ_NP_549811-MLV20675776756_042016-F.jpg"
    category="course"
    icon="textsms"
    color="black"
    theme="light"
    is-last>
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