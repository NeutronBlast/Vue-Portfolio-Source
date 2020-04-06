<template>
<div>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/neutron-landing/start.jpg`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>Neutron Landing</h1>
            {{$t('neutron_desc')}}<br><br>
            <a href="https://github.com/NeutronBlast/Neutron-Landing" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('neutron_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> HTML5</small>
        </p>
        
        </b-row>
    <br>

    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/neutron-landing/features.jpg`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/neutron-landing/services.jpg`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/neutron-landing/projects.jpg`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
