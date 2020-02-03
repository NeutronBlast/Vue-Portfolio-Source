<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/readingclub.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('reading_club')}}</h1>
            {{$t('reading_desc')}}<br><br>

            <strong></strong> {{$t('reading_goals')}}
            <ul>
                <li>{{$t('reading_l1')}}</li>
                <li>{{$t('reading_l2')}}</li>
                <li>{{$t('reading_l3')}}</li>
            </ul>
            <a href="https://github.com/metalsonic21/SBD1-Reading-club" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('reading_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> Laravel, Vue JS, PostgreSQL</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('reading_members')}}</strong><br>

            {{$t('reading_m1')}} <br><br>

            <strong>{{$t('reading_g1')}}</strong><br>
            {{$t('reading_g1d')}} <br><br>

            <strong>{{$t('reading_g2')}}</strong><br>
            {{$t('reading_g2d')}} <br>

            {{$t('reading_g2d2')}}
            <br><br>

            <strong>{{$t('reading_meetings')}}</strong><br>
            {{$t('reading_mt1')}} <br>
            {{$t('reading_mt2')}} <br><br>

            <strong>{{$t('reading_plays')}}</strong><br>
            {{$t('reading_p1')}} <br>
            {{$t('reading_p2')}} <br><br>

            <strong>{{$t('tt_docs')}}</strong><br>
            {{$t('prov_docs')}} <br>

            <ul>
                <li>{{$t('reading_docs1')}}</li>
                <li>{{$t('reading_docs2')}}</li>
            </ul>

        </p>

    </b-row>

    <strong>{{$t('tt_download')}}</strong><br>
    <b-row>
        <b-col cols="12" md="6" class="mt-3">
            <b-card class="download-card-reading">
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-justify">
                        {{$t('reading_docs1')}}
                    </p>

                    <a :href="require('../../assets/all-work/reading-club/Requeriments.pdf')" download>
                        <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>
                    </a>
                </b-card-text>
            </b-card>
        </b-col>

        <b-col cols="12" md="6" class="mt-3">
            <b-card class="download-card-reading">
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-center">
                        {{$t('reading_download2')}} <br><br>
                    </p>

                    <a :href="require('../../assets/all-work/reading-club/Relational.pdf')" download>
                        <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>
                    </a>

                </b-card-text>
            </b-card>
        </b-col>

    </b-row>
    <br>
    <b-row>
        <b-col cols="12">
            <p><strong>{{$t('reading_er')}}</strong></p>

            <b-img v-img :src="require(`../../assets/all-work/reading-club/ER.png`)" fluid alt="Fluid image"></b-img>
            <a :href="require('../../assets/all-work/reading-club/ER.png')" download>{{$t('reading_fi')}}</a>

        </b-col>
    </b-row>

    <br>
    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/reading-club/locales.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/reading-club/presentacion.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/reading-club/member.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
