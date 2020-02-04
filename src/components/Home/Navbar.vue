<template>
<div>
    <b-navbar toggleable="lg" type="light" variant="secondary" class="navbar-fh">
        <b-navbar-brand to="/">
            <img src="../../../public/LogoV1.png" alt="" class="logo-home">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto menu-items">
                <b-nav-item to="/">{{$t('navHome')}}</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#about'">{{$t('navAbout')}}</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#contact'">{{$t('navContact')}}</b-nav-item>

                <b-nav-item to="/portfolio">{{$t('portfolio')}}</b-nav-item>

                <b-nav-item-dropdown :text="$t('navLang')" right>
                    <b-dropdown-item @click="setLocale('en')"><flag iso="us"></flag> English</b-dropdown-item>
                    <b-dropdown-item @click="setLocale('es')"><flag iso="es"></flag> Español</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed:{
        ...mapState(["slides"])
    },
    methods:{
        ...mapMutations(['modify']),
        setLocale(locale){
            this.$i18n.locale = locale;
            this.$store.commit('modify',locale);
        }
    },

}
</script>
