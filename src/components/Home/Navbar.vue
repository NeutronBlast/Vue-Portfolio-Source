<template>
<div>
    <b-navbar toggleable="lg" type="light" variant="secondary" class="navbar-fh">
        <b-navbar-brand to="/"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/">{{$t('navHome')}}</b-nav-item>
                <b-nav-item to="/work">{{$t('navWork')}}</b-nav-item>
                <b-nav-item to="/about">{{$t('navAbout')}}</b-nav-item>
                <b-nav-item to="/contact">{{$t('navContact')}}</b-nav-item>

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
export default {
    methods:{
        setLocale(locale){
            this.$i18n.locale = locale;
        }
    }
}
</script>
