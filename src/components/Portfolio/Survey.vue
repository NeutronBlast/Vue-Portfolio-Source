<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/survey/firstq.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('survey_tit')}}</h1>
            {{$t('survey_desc')}}<br><br>

            <a href="https://github.com/NeutronBlast/SurveyONUMujeres" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('survey_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> HTML, Bootstrap 4, Javascript, PHP, MySQL</small>
        </p>
    </b-row>
    <br>

    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/survey/data.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/survey/end.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

    </b-row>
</div>
</template>

<script>
export default {

}
</script>
