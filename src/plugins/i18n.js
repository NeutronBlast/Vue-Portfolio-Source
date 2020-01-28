import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'es',
    messages:{
        en:{
            navHome: 'Home',
            navWork: 'Work',
            navAbout: 'About',
            navContact: 'Contact',
            navLang: 'Language',

            /* SLIDE */

            checkBtn: 'Check Portfolio',
            infoBtn: 'Check Info',
        },
        es:{
            navHome: 'Inicio',
            navWork: 'Trabajos',
            navAbout: 'Información',
            navContact: 'Contacto',
            navLang: 'Idioma',

            /* SLIDE */

            checkBtn: 'Ver Portafolio',
            infoBtn: 'Ver Información',
        }
    }
})