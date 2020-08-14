<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/resources/p1-ex/linkedlist.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('p1ex_tit')}}</h1>
            {{$t('p1ex_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/P1-Ex" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('p1ex_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C</small>
        </p>
    </b-row>
    <br>
</div>
</template>
