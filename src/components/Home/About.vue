<template>
<div id="about">
    <div class="white-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center">{{$t('navAbout')}}</h1>
                    <hr class="separator">
                    <b-row>
                        <b-col cols="6">
                            <h4>{{$t('skills')}}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="4" lg="4" sm="12">
                            <label>CSS3</label>
                            <ProgressBar size="large" val="90" text="90%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>Angular 2</label>
                            <ProgressBar size="large" val="70" text="90%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>HTML5</label>
                            <ProgressBar size="large" val="90" text="90%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="4" lg="4" sm="12">
                            <label>C#</label>
                            <ProgressBar size="large" val="60" text="60%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>SQL</label>
                            <ProgressBar size="large" val="80" text="80%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>PHP</label>
                            <ProgressBar size="large" val="80" text="80%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="4" lg="4" sm="12">
                            <label>Laravel</label>
                            <ProgressBar size="large" val="75" text="75%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>Vue JS</label>
                            <ProgressBar size="large" val="70" text="85%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>

                        <b-col md="4" lg="4" sm="12">
                            <label>C</label>
                            <ProgressBar size="large" val="60" text="60%" text-align="right" text-position="bottom"></ProgressBar>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="6">
                            <h4>{{$t('experience')}}</h4>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col cols="3">
                            <p style="font-family: Roboto">{{$t('job_one')}}
                                <br>
                                <small>Per Capital</small>
                            </p>
                            <hr>
                        </b-col>

                        <b-col cols="9">
                            {{$t('job_one_info')}} <a href="http://per-capital.com">{{$t('job_one_link')}}</a>
                            <br><br>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col cols="3">
                            <p style="font-family: Roboto">{{$t('job_two')}}
                                <br>
                                <small>Corporación JSK</small>
                            </p>
                            <hr>
                        </b-col>

                        <b-col cols="9">
                            {{$t('job_two_info')}}
                            <br><br>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <br>
                <b-row>
                    <b-col cols="6">
                        <h4>{{$t('education')}}</h4>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="12">
                        <Education></Education>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import Education from '@/components/Home/Education.vue'
export default {
    components: {
        ProgressBar,
        Education
    }
}
</script>
