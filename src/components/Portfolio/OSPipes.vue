<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/os-pipes/validation.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('osp_tit')}}</h1>
            {{$t('osp_desc')}}<br><br>

            <strong></strong> {{$t('snakes_goals')}}
            <ul>
                <li>{{$t('osp_l1')}}</li>
                <li>{{$t('osp_l2')}}</li>
                <li>{{$t('osp_l3')}}</li>
                <li>{{$t('osp_l4')}}</li>
            </ul>
            <a href="https://github.com/metalsonic21/OS-Pipes" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('osp_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('osp_details')}}</strong><br>

            {{$t('osp_d1')}} <br>
            <code>{{$t('osp_d1w')}}</code> <br>
            {{$t('osp_d2')}} <br>
            <code>{{$t('osp_d2w')}}</code> <br>
            {{$t('osp_d3')}} <br>
        </p>

        <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('osp_t')}}</th>
                    <th scope="col">{{$t('osp_c')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">M</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th scope="row">U</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">R</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th scope="row">C</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th scope="row">I</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th scope="row">E</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">L</th>
                    <td>6</td>
                </tr>
                <tr>
                    <th scope="row">A</th>
                    <td>7</td>
                </tr>
                <tr>
                    <th scope="row">G</th>
                    <td>8</td>
                </tr>
                <tr>
                    <th scope="row">O</th>
                    <td>9</td>
                </tr>
            </tbody>
        </table>

        <br>

        <p class="text-justify">
            {{$t('osp_d4')}} <br><br>

            <strong>{{$t('osp_usage')}}</strong> <br>

            <code>cript_p {-c/-d} {{$t('osp_nchildren')}} {{$t('osp_inputfile')}} {{$t('osp_outputfile')}}</code> {{$t('osp_usagen')}} <br>

            <code>cript_p {-c/-d} {{$t('osp_inputfile')}} {{$t('osp_outputfile')}}</code> {{$t('osp_usagetwo')}} <br>
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
            <b-img v-img :src="require(`../../assets/all-work/os-pipes/output.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" sm="12" lg="6">
            <b-img v-img :src="require(`../../assets/all-work/os-pipes/outputinput.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

    </b-row>
</div>
</template>
