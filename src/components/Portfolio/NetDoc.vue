<template>
    <div>
        <b-row class="mx-auto" id="netdoc">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/netdoc/homepage.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>NetDoc</h1>
            {{$t('netdoc_desc')}}<br><br>

            <strong></strong> {{$t('snakes_goals')}}
            <ul>
                <li>{{$t('netdoc_l1')}}</li>
                <li>{{$t('netdoc_l2')}}</li>
                <li>{{$t('netdoc_l3')}}</li>
            </ul>
            <a href="https://github.com/NeutronBlast/NetDoc" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('netdoc_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> Vue JS</small>
        </p>
    </b-row>
    <b-row class="mx-3">
        <p class="text-justify">
            <strong>{{$t('netdoc_v')}}</strong><br>
        </p>

        <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('netdoc_c1')}}</th>
                    <th scope="col">{{$t('netdoc_c2')}}</th>
                    <th scope="col">{{$t('covid_c2')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{{$t('netdoc_c1r1')}}</td>
                    <td>{{$t('netdoc_c2r1')}}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>{{$t('netdoc_c1r2')}}</td>
                    <td>{{$t('netdoc_c2r2')}}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>{{$t('netdoc_c1r3')}}</td>
                    <td>{{$t('netdoc_c2r3')}}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>{{$t('netdoc_c1r4')}}</td>
                    <td>{{$t('netdoc_c2r4')}}</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>{{$t('netdoc_c1r5')}}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>{{$t('netdoc_c1r6')}}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>{{$t('netdoc_c1r7')}}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>{{$t('netdoc_c1r8')}}</td>
                    <td>{{$t('netdoc_c2r8')}}</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>{{$t('netdoc_c1r9')}}</td>
                    <td>{{$t('netdoc_c2r9')}}</td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td>{{$t('netdoc_c1r10')}}</td>
                    <td>{{$t('netdoc_c2r10')}}</td>
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
                <li>{{$t('netdoc_docs1')}}</li>
                <li>{{$t('netdoc_docs2')}}</li>
                <li>{{$t('netdoc_docs3')}}</li>
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
                        {{$t('netdoc_docs1')}}
                    </p>

                    <a :href="require('../../assets/all-work/netdoc/DVHybrid.pdf')" download>
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
                        {{$t('netdoc_dd')}}
                    </p>

                    <a :href="require('../../assets/all-work/netdoc/Design.pdf')" download>
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
            <b-img v-img :src="require(`../../assets/all-work/netdoc/communities.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/netdoc/chat.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/netdoc/profile.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
    </div>
</template>

<script>
export default {
    
}
</script>