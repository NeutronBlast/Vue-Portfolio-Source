<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/os-files/reportconsole.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('osf_tit')}}</h1>
            {{$t('osf_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/OS-Files" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('osf_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('osf_info')}}</strong><br>

            <ul>
                <li>{{$t('osf_info1')}}</li>
                <li>{{$t('osf_info2')}} <code>ls -l</code> </li>
                <li><code>user-id</code> {{$t('osf_info3')}}</li>
                <li><code>group-id</code> {{$t('osf_info3')}}</li>
                <li>{{$t('osf_info4')}}</li>
                <li>{{$t('osf_info5')}}</li>
                <li>{{$t('osf_info6')}}</li>
                <li>{{$t('osf_info7')}}</li>
            </ul>

            <strong>{{$t('osf_implementation')}}</strong><br>

            <ul>
                <li>{{$t('osf_im1')}}</li>
                <li>{{$t('osf_im2')}}</li>
                <li>{{$t('osf_im3')}}</li>
                <li>{{$t('osf_im4')}}</li>
                <li>{{$t('osf_im5')}}</li>
                <li>{{$t('osf_im6')}}</li>
            </ul>
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
            <b-img v-img :src="require(`../../assets/all-work/os-files/reportparent.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/os-files/reportchild.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

    </b-row>
</div>
</template>
