<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/p1-earthquake/menu.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('eq_tit')}}</h1>
            {{$t('eq_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/P1-Earthquake" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('eq_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> Pascal</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('eq_req')}}</strong><br>
            <ul>
                <li>{{$t('eq_req1')}}</li>
                <li>{{$t('eq_req2')}}</li>
                <li>{{$t('eq_req3')}}</li>
                <li>{{$t('eq_req4')}}</li>
            </ul>
        </p>

        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/p1-earthquake/firstdegree.png`)" fluid alt="Fluid image"></b-img>
            <small>{{$t('eq_f')}}</small>
        </b-col>

        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/p1-earthquake/secondDegree.png`)" fluid alt="Fluid image"></b-img>
            <small>{{$t('eq_s')}}</small>
        </b-col>
    </b-row>

    <b-row>
        <b-col>

            <b-img center v-img :src="require(`../../assets/all-work/p1-earthquake/realExample.png`)" fluid alt="Fluid image"></b-img>
            <small>{{$t('eq_r')}}</small>
            <br>
            {{$t('eq_total')}} <code>66+23+82+35+32+321+662+235+346+234+1567+185+1568+156+165+453+346+456+326+547+574+563+836+879+457 = 11114</code>
        </b-col>
    </b-row>

    <br>

    <b-row>
        <p>
            <strong>{{$t('p2_output')}}</strong><br>
            {{$t('p2_od')}}

            <ul>
                <li><strong>{{$t('eq_one')}}: </strong>{{$t('eq_oned')}}</li>
                <li><strong>{{$t('eq_two')}}: </strong>{{$t('eq_twod')}}</li>
                <li><strong>{{$t('eq_three')}}: </strong>{{$t('eq_threed')}}</li>
                <li><strong>{{$t('eq_four')}}: </strong>{{$t('eq_fourd')}}</li>
                <li><strong>{{$t('eq_five')}}: </strong>{{$t('eq_fived')}}</li>


            </ul>
        </p>
    </b-row>
    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p1-earthquake/max.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p1-earthquake/min.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p1-earthquake/zone.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
