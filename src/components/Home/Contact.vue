<template>
<div id="contact" class="white-section">
    <div class="container">
        <b-row>
            <b-col cols="12">
                <h1 class="text-center">{{$t('navContact')}}</h1>
                <hr class="separator">
            </b-col>
        </b-row>

        <b-row class="mx-auto">

            <b-col sm="12" md="4" lg="4">
                <h4>{{$t('c_title')}}</h4>
                <p class="text-justify">{{$t('c_description')}}</p>

                <b-row>
                    <b-col cols="1">
                        <a href=""><img src="@/assets/contact/fb.png" alt="fb" width="25px" height="25px"></a>
                    </b-col>

                    <b-col cols="1">
                        <a href=""><img src="@/assets/contact/twitter.png" alt="twitter" width="25px" height="25px"></a>
                    </b-col>

                    <b-col cols="1">
                        <a href=""><img src="@/assets/contact/github.png" alt="github" width="25px" height="25px"></a>
                    </b-col>

                    <b-col>
                        <a href=""><img src="@/assets/contact/linkedin.png" alt="linkedin" width="25px" height="25px"></a>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="12" md="8" lg="8">
                <form action="https://send.pageclip.co/VqcSgTFXG7HaQvbtOvHOF8Jrj2ONiZJf" class="pageclip-form" method="post">
                    <b-row>
                        <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
                        <b-col cols="6">
                            <label for="name">{{$t('cf_name')}}</label>
                            <b-form-input type="text" name="name" required></b-form-input>
                        </b-col>

                        <b-col cols="6">
                            <label for="email">E-mail</label>
                            <b-form-input type="email" name="email" required></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="12">
                            <label for="message">{{$t('cf_message')}}</label>
                            <b-form-textarea name="message" required></b-form-textarea>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="float-right mr-1">
                        <!-- This button will have a loading spinner. Keep the inner span for best results. -->
                        <button type="submit" class="pageclip-form__submit btn btn-primary">
                            <span>{{$t('cf_submit')}}</span>
                        </button>
                    </b-row>
                </form>
            </b-col>
        </b-row>
        <br><br>
    </div>
</div>
</template>

<script>
export default {

}
</script>
