<template>
<div>
    <br><br>
    <b-row class="mx-auto" id="snakes-ladders">
        <b-col md="6" lg="6" sm="12">
            <b-img :src="require(`../../assets/all-work/snakesladders.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="6" lg="6" sm="12">
            <h1>{{$t('snakes_tit')}}</h1>
            {{$t('snakes_desc')}}<br><br>

            <strong></strong> {{$t('snakes_goals')}}
            <ul>
                <li>{{$t('snakes_l1')}}</li>
                <li>{{$t('snakes_l2')}}</li>
                <li>{{$t('snakes_l3')}}</li>
                <li>{{$t('snakes_l4')}}</li>
            </ul>
            <a href="https://github.com/metalsonic21/N1-SnakesLadders" class="btn btn-primary float-right">{{$t('btn_details')}}</a>
        </b-col>
    </b-row>
    <b-row class="ml-3 mr-3">
        <p>
            <small>{{$t('snakes_date')}}</small>
            <br>
            <small> <strong>{{$t('resources')}}</strong> C#</small>
        </p>
        <p class="text-justify">
            <strong>{{$t('snakes_ptr')}}</strong><br>

            {{$t('snakes_pr')}} <br><br>
            {{$t('snakes_pr2')}} <br><br>

            <strong>{{$t('snakes_mt')}}</strong><br>
            {{$t('snakes_mp')}}
        </p>

        <table class="table table-hover table-bordered">
            <thead style="background-color:#BAE5FF">
                <tr>
                    <th scope="col">{{$t('snakes_t')}}</th>
                    <th scope="col">{{$t('snakes_c1')}}</th>
                    <th scope="col">{{$t('snakes_c2')}}</th>
                    <th scope="col">{{$t('snakes_c3')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>18</td>
                    <td>46</td>
                    <td>85</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>17</td>
                    <td>45</td>
                    <td>85</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>23</td>
                    <td>54</td>
                    <td>88</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>13</td>
                    <td>41</td>
                    <td>94</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>12</td>
                    <td>48</td>
                    <td>94</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>17</td>
                    <td>41</td>
                    <td>81</td>
                </tr>
            </tbody>
        </table>
    </b-row>
    <br>

    <b-row class="mx-auto">
        <b-col cols="12">
            <p><strong>{{$t('screenshots')}}</strong></p>
        </b-col>
    </b-row>

    <b-row class="mx-auto">
        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/snakes-ladders/one.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/snakes-ladders/select.png`)" fluid alt="Fluid image"></b-img>
        </b-col>

        <b-col md="4" sm="12" lg="4">
            <b-img v-img :src="require(`../../assets/all-work/snakes-ladders/winner.png`)" fluid alt="Fluid image"></b-img>
        </b-col>
    </b-row>
</div>
</template>
