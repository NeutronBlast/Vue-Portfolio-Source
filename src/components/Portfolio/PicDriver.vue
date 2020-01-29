<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/picdriver.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('pic_driver')}}</h1>
            {{$t('pic_desc')}}<br><br>

            <a href="https://github.com/metalsonic21/CA-Pic-Driver" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('pic_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C#</small>
            <br>

            <strong>{{$t('pic_mats')}}</strong>
        </p>

        <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('pic_c')}}</th>
                    <th scope="col">{{$t('pic_com')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>PIC16F84</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>MAX232</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>16 {{$t('pic_com3_4')}}</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>13</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>17</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>17</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>17</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>17</td>
                </tr>

                <tr>
                    <th scope="row">1</th>
                    <td>17</td>
                </tr>
            </tbody>
        </table>
    </b-row>
    <br>

    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('pic_setup')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col cols="12">
            <b-img v-img center :src="require(`../../assets/all-work/pic-driver/circuit.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
