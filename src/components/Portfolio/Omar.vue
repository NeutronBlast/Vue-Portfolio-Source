<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/p2-bank/console.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('p2_tit')}}</h1>
            {{$t('p2_desc')}}<br><br>
            
            <a href="https://github.com/metalsonic21/P2-Bank" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('p2_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('p2_req')}}</strong><br>
            <ul>
                <li><strong>{{$t('p2_req1')}}: </strong>{{$t('p2_req1d')}}</li>
                <li><strong>{{$t('p2_req2')}}: </strong>{{$t('p2_req2d')}}</li>
                <li><strong>{{$t('p2_req3')}}: </strong>{{$t('p2_req3d')}}</li>
                <li>{{$t('p2_req4')}}</li>
            </ul>
        </p>

                <p class="text-justify">
            <strong>{{$t('p2_output')}}</strong><br>
            {{$t('p2_od')}}
            <ul>
                <li><strong>{{$t('p2_o1')}}: </strong>{{$t('p2_o1d')}}</li>
                <li>
                    <strong>{{$t('p2_o2')}}: </strong>{{$t('p2_o2d')}}
                    <ul>
                        <li>{{$t('p2_o2d1')}}</li>
                        <li>{{$t('p2_o2d2')}}</li>
                        <li>{{$t('p2_o2d3')}}</li>
                        <li>{{$t('p2_o2d4')}}</li>
                        <li>{{$t('p2_o2d5')}}</li>
                        <li>{{$t('p2_o2d6')}}</li>
                    </ul>
                    
                </li>

                <li>
                    <strong>{{$t('p2_o3')}}: </strong> {{$t('p2_o3d')}}
                    <ul>
                        <li>{{$t('p2_o3d1')}}</li>
                        <li>{{$t('p2_o3d2')}}</li>
                        <li>{{$t('p2_o3d3')}}</li>
                        <li>{{$t('p2_o3d4')}}</li>
                        <li>{{$t('p2_o3d5')}}</li>

                    </ul>
                </li>
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
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p2-bank/file.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p2-bank/trans.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/p2-bank/deltrans.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
