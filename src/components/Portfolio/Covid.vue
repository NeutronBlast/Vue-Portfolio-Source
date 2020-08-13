<template>
<div>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/covid/report1.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('covid_tit')}}</h1>
            {{$t('covid_desc')}}<br><br>

            <strong></strong> {{$t('snakes_goals')}}
            <ul>
                <li>{{$t('covid_l1')}}</li>
                <li>{{$t('covid_l2')}}</li>
                <li>{{$t('covid_l3')}}</li>
                <li>{{$t('covid_l4')}}</li>
            </ul>
            <a href="https://github.com/NeutronBlast/BDII-COVID19" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('covid_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> PLSQL</small>
        </p>
    </b-row>
    <b-row class="mx-3">
        <p class="text-justify">
            <strong>{{$t('covid_r')}}</strong><br>
        </p>

        <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('covid_c1')}}</th>
                    <th scope="col">{{$t('covid_c2')}}</th>
                    <th scope="col">{{$t('covid_c3')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{{$t('covid_c2r2')}}</td>
                    <td>{{$t('covid_c3r2')}}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>{{$t('covid_c2r3')}}</td>
                    <td>{{$t('covid_c3r3')}}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>{{$t('covid_c2r4')}}</td>
                    <td>{{$t('covid_c3r4')}}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>{{$t('covid_c2r5')}}</td>
                    <td>{{$t('covid_c3r5')}}</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>{{$t('covid_c2r6')}}</td>
                    <td>{{$t('covid_c3r6')}}</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>{{$t('covid_c2r7')}}</td>
                    <td>{{$t('covid_c3r7')}}</td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>{{$t('covid_c2r8')}}</td>
                    <td>{{$t('covid_c3r8')}}</td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>{{$t('covid_c2r9')}}</td>
                    <td>{{$t('covid_c3r9')}}</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>{{$t('covid_c2r10')}}</td>
                    <td>{{$t('covid_c3r10')}}</td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td v-html="$t('covid_c2r11')"></td>
                    <td>{{$t('covid_c3r11')}}</td>
                </tr>
                <tr>
                    <th scope="row">11</th>
                    <td>{{$t('covid_c2r12')}}</td>
                    <td>{{$t('covid_c3r12')}}</td>
                </tr>
                <tr>
                    <th scope="row">12</th>
                    <td>{{$t('covid_c2r13')}}</td>
                    <td>{{$t('covid_c3r13')}}</td>
                </tr>
                <tr>
                    <th scope="row">13</th>
                    <td>{{$t('covid_c2r14')}}</td>
                    <td>{{$t('covid_c3r14')}}</td>
                </tr>
            </tbody>
        </table>
    </b-row>
    <br>

    <b-row class="mx-3">
        <p>
            <strong>{{$t('tt_docs')}}</strong><br>
            {{$t('prov_docs')}} <br>

            <ul>
                <li>{{$t('covid_docs1')}}</li>
                <li>{{$t('covid_docs2')}}</li>
                <li>{{$t('covid_docs3')}}</li>
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
                        {{$t('covid_docs2')}}, {{$t('covid_docs3')}}
                    </p>

                    <a :href="require('../../assets/all-work/covid/Informe.pdf')" download>
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
                    <p class="text-justify">
                        {{$t('covid_docs4')}}
                    </p>

                    <a :href="require('../../assets/all-work/covid/ReportsnSecurity.pdf')" download>
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

            <b-img v-img :src="require(`../../assets/all-work/covid/ER.png`)" fluid alt="Fluid image"></b-img>
            <a :href="require('../../assets/all-work/covid/ER.png')" download>{{$t('reading_fi')}}</a>

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
            <b-img v-img :src="require(`../../assets/all-work/covid/report10.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/covid/report7.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/covid/report8.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {

}
</script>
