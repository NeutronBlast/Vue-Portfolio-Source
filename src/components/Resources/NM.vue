<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/resources/nm/figure.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('nm_tit')}}</h1>
            {{$t('nm_desc')}}<br><br>

            {{$t('nm_includes')}}
            <ul>
                <li>{{$t('nm_1')}}</li>
                <li>{{$t('nm_2')}}</li>
                <li>{{$t('nm_3')}}</li>
                <li>{{$t('nm_4')}}</li>
                <li>{{$t('nm_5')}}</li>
                <li>{{$t('nm_6')}}</li>       
                <li>{{$t('nm_7')}}</li>                                                                
            </ul>
            <a href="https://github.com/metalsonic21/Numeric-Methods" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('nm_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> MATLAB</small>
        </p>
    </b-row>
    <br>


</div>
</template>
