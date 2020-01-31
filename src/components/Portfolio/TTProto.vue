<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/tt-proto/home.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('tt_tit')}}</h1>
            {{$t('tt_desc')}}<br><br>

            <strong></strong> {{$t('snakes_goals')}}
            <ul>
                <li>{{$t('tt_l1')}}</li>
                <li>{{$t('tt_l2')}}</li>
            </ul>
            <a href="https://metalsonic21.github.io/IHC-TTProto/" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('tt_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> Bootstrap 4, HTML, Javascript</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('tt_c')}}</strong><br>

            <ul>
                <li>{{$t('tt_c1')}}</li>
                <li>{{$t('tt_c2')}}</li>
                <li>{{$t('tt_c4')}}</li>
            </ul>

            <strong>{{$t('tt_docs')}}</strong><br>
            {{$t('tt_docsinfo')}} <br><br>

            <ul>
                <li><strong>{{$t('tt_di1')}} : </strong>{{$t('tt_di1d')}}</li>
                <li><strong>{{$t('tt_di2')}} : </strong>{{$t('tt_di2d')}}</li>
                <li><strong>{{$t('tt_di3')}}</strong></li>
                <li><strong>{{$t('tt_di4')}} : </strong>{{$t('tt_di4d')}}</li>
                <li><strong>{{$t('tt_di5')}}</strong></li>
                <li><strong>{{$t('tt_di6')}}</strong></li>
                <li><strong>{{$t('tt_di7')}}</strong></li>
                <li><strong>{{$t('tt_di8')}}</strong></li>
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
            <b-card>
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-justify">
                        {{$t('tt_download1')}}
                    </p>

                    <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>
                </b-card-text>
            </b-card>
        </b-col>

        <b-col cols="12" md="6" class="mt-3">
            <b-card>
                <b-card-text align="center">
                    <font-awesome-icon icon="book" size="4x"></font-awesome-icon>
                    <br><br>
                    <p class="text-justify">
                        {{$t('tt_download2')}}
                        <br><br>
                    </p>
                    
                    <b-button variant="primary">{{$t('tt_downloadbtn')}}</b-button>

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
            <b-img v-img :src="require(`../../assets/all-work/tt-proto/cart.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/tt-proto/checkout.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/tt-proto/products.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>