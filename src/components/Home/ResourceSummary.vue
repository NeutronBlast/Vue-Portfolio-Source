<template>
    <div>
    <div class="container">
        <b-row>
            <b-col cols="12">
                <h1 class="text-center">{{$t('navResources')}}</h1>
                <hr class="separator">

                <p class="text-justify">
                    {{$t('resources_desc')}} <br>
                    {{$t('resource_click')}} <router-link to="/resources">{{$t('job_one_link')}}</router-link>
                </p>
            </b-col>
        </b-row>
    </div>
    </div>
</template>