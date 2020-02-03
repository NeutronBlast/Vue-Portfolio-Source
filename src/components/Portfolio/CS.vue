<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/cs/emu1.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('cs_tit')}}</h1>
            {{$t('cs_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/CS-Route" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('cs_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> x86 Assembly</small>
        </p>
    </b-row>

    <b-row class="ml-3 mr-3" style="margin-top:-30px">
        <p class="text-justify">
            <br><br>
            <strong>{{$t('cs_details')}}</strong><br>

            <ul>
                <li>{{$t('cs_d1')}}</li>
                <li>{{$t('cs_d2')}}
                    <code>[(a,b)*(a-1,b-1)]*10 mod 90</code>
                </li>
                <li>{{$t('cs_d4')}} <code>SNIPPET.cpp</code> {{$t('cs_d42')}}</li>
                <li>{{$t('cs_d3')}}
                </li>
            </ul>
        </p>
 <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('cs_t')}}</th>
                    <th scope="col">{{$t('cs_t2')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{{$t('cs_la')}}</th>
                    <td>{{$t('cs_laa')}}</td>
                </tr>
                <tr>
                    <th scope="row">{{$t('cs_ra')}}</th>
                    <td>{{$t('cs_raa')}}</td>
                </tr>
                <tr>
                    <th scope="row">{{$t('cs_ua')}}</th>
                    <td>{{$t('cs_uaa')}}</td>
                </tr>
               
            </tbody>
        </table>
    </b-row>
    <br>

    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/cs/code.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/cs/crash.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/cs/route.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
