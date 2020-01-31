<template>
<div class="white-section" id="work">
    <div class="container">
        <b-row>
            <b-col cols="12">
                <h1 class="text-center">{{$t('navWork')}}</h1>
                <hr class="separator">
            </b-col>
        </b-row>

        <b-row class="mx-auto">
            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/snakes.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="" class="work-link text-center">
                            <a href="https://github.com/metalsonic21/N1-SnakesLadders" class="my-link"><h5 class="mb-0"><strong>{{$t('snakes_ladders')}}</strong></h5></a>
                        </a>
                    </template>

                </b-card>
            </b-col>

            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/picdriver.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="https://github.com/metalsonic21/CA-Pic-Driver" class="work-link text-center">
                            <h5 class="mb-0"><strong>{{$t('pic_driver')}}</strong></h5>
                        </a>
                    </template>

                </b-card>
            </b-col>

            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/readingclub.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="https://github.com/metalsonic21/SBD1-Reading-club" class="work-link text-center">
                            <h5 class="mb-0"><strong>{{$t('reading_club')}}</strong></h5>
                        </a>
                    </template>

                </b-card>
            </b-col>
        </b-row>
        <br>

        <b-row class="mx-auto">
            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/percapital.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="http://percapital.merakengineers.com" class="work-link text-center">
                            <h5 class="mb-0"><strong>Per Capital</strong></h5>
                        </a>
                    </template>

                </b-card>
            </b-col>

            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/proveneet.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="" class="work-link text-center">
                            <h5 class="mb-0"><strong>Proveneet</strong></h5>
                        </a>
                    </template>

                </b-card>
            </b-col>

            <b-col sm="12" md="4" lg="4" xs="12">
                <b-card no-body style="max-width: 20rem;" :img-src="require(`../../assets/work/survey.png`)" img-alt="Image" img-top>
                    <template v-slot:header>
                        <a href="" class="work-link text-center">
                            <h5 class="mb-0"><strong>{{$t('survey_onu')}}</strong></h5>
                        </a>
                    </template>

                </b-card>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col cols="12">
                <p>
                    {{$t('check_all')}} <router-link to="/portfolio">{{$t('job_one_link')}}</router-link>
                </p>
            </b-col>
        </b-row>
    </div>
</div>
</template>

<script>
export default {

}
</script>
