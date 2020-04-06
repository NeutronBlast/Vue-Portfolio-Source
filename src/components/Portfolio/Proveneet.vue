<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/proveneet/welcome.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>Proveneet</h1>
            {{$t('prov_desc')}}<br><br>

            <ul>
                <li><strong>{{$t('prov_c1')}}: </strong>{{$t('prov_c1d')}}</li>
                <li><strong>{{$t('prov_c2')}}: </strong>{{$t('prov_c2d')}}</li>
                <li><strong>{{$t('prov_c3')}}: </strong>{{$t('prov_c3d')}}</li>
                <li><strong>{{$t('prov_c4')}}: </strong>{{$t('prov_c4d')}}</li>
            </ul>
            <a href="https://github.com/NeutronBlast/IS-Proveneet" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('prov_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> HTML, Bootstrap 4, Javascript, PHP, MySQL</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('tt_docs')}}</strong><br>

            {{$t('prov_docs')}} <br><br>
            <strong>{{$t('prov_ers')}} <br><br></strong>

            <ul>
                <li><strong>{{$t('prov_ers1')}}: </strong>{{$t('prov_ers1d')}}</li>
                <li><strong>{{$t('prov_ers2')}}: </strong>{{$t('prov_ers2d')}}</li>
                <li><strong>{{$t('prov_ers3')}}: </strong>{{$t('prov_ers3d')}}</li>
                <li><strong>{{$t('prov_ers4')}}</strong></li>
            </ul>

            <strong>{{$t('prov_das')}}</strong><br>
                {{$t('prov_dasd')}}
            <ul>
                <li>{{$t('prov_das1')}}</li>
                <li>{{$t('prov_das2')}}</li>
                <li>{{$t('prov_das3')}}</li>
                <li>{{$t('prov_das4')}}</li>
                <li>{{$t('prov_das5')}}</li>
                <li>{{$t('prov_das6')}}</li>
            </ul>
        </p>

        
    </b-row>
    <b-row>
        <b-col cols="12">
            <p>
                <strong>{{$t('tt_download')}}</strong>
            </p>
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="12" md="6" class="mt-3">
            <b-card class="download-card-prov">
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-center">
                        {{$t('prov_download1')}}
                    </p>
                    
                    <a :href="require('../../assets/all-work/proveneet/ERS.pdf')" download>
                        <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>
                    </a>

                </b-card-text>
            </b-card>
        </b-col>

        <b-col cols="12" md="6" class="mt-3">
            <b-card class="download-card-prov">
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-center">
                        {{$t('prov_download2')}}
                    </p>
                    
                    <a :href="require('../../assets/all-work/proveneet/DAS.pdf')" download>
                        <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>
                    </a>

                </b-card-text>
            </b-card>
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
            <b-img v-img :src="require(`../../assets/all-work/proveneet/reset.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/proveneet/providers.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/proveneet/products.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
