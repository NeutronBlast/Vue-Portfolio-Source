<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/resources/p3-ex/chat.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('p3ex_tit')}}</h1>
            {{$t('p3ex_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/P3-Ex" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('p3ex_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> Java</small>
        </p>
    </b-row>
    <br>


</div>
</template>
