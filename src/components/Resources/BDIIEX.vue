<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="bdiiex">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/resources/bdii/example.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('bdii_tit')}}</h1>
            {{$t('bdii_desc')}}<br><br>

            <a href="https://github.com/NeutronBlast/BDII-Practices" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('bdii_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> SQL, PL/SQL</small>
        </p>
    </b-row>
    <br>
</div>
</template>
