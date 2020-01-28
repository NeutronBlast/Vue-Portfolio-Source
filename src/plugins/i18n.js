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

            /* ABOUT */
            skills: 'My Skills',
            experience: 'Experience',
            job_one: 'Front-End Developer',
            job_one_info: "Built the website's interface for the Venezuelan company Per Capital, which includes the company's info and tools like the investment's rentability and saving goal's calculators. It contains an english and spanish version and you can access it clicking",
            job_one_link: 'here',

            responsibilities:'Responsibilities',

            job_one_r1: 'Photoshop skills',
            job_one_r2: 'Knowledge of HTML5, Vue JS and PHP',
            job_one_e1: 'Deploying a website to a public server using cpanel',
            job_one_e2: 'Integrating a back-end framework with a front-end framework',

            job_two: 'Full-Stack Developer',
            job_two_info: 'Built the website for Corporación JSK that contained a survey with the goal of making a study about entrepreneurship and business in women',
            job_two_r1: 'Knowledge of MySQL',
            job_two_r2: 'Knowledge of HTML5 and PHP',
            job_two_e1: 'Deploying specific info from the database into CSV reports from the application',

            education: 'Education',

            education_one: 'Reached 7th semester of Computer Engineering major in Universidad Católica Andrés Bello',
            education_two: 'Completed the first module of Cisco CCNA Networking Course',
            education_three: 'Completed my English course in Fyr Lois',

            /* WORK SUMMARY */

            snakes_ladders:'Snakes & Ladders (with RS232 connection)',
            pic_driver: 'Volume and Brightness controller',
            reading_club: 'Reading Club',
            survey_onu: 'Survey ONU',

            check_all: 'You can check all my projects clicking',
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

            /* ABOUT */
            skills: 'Mis Habilidades',
            experience: 'Experiencia',
            job_one: 'Desarrollador Front-End',
            job_one_info: "Construí la interfaz del sitio web para la compañía venezolana Per Capital, el cual incluye la información de la empresa y herramientas como la calculadora de rentabilidad de inversión y la calculadora de objetivo de ahorro. Contiene una versión en inglés y en español y puedes acceder a ella haciendo clic",
            job_one_link: 'aquí',

            responsibilities:'Responsabilidades',
            job_one_r1: 'Habilidades en Photoshop',
            job_one_r2: 'Conocimiento de HTML5, Vue JS y PHP',
            job_one_e1: 'Publicar un sitio web a un servidor público utilizando cpanel',
            job_one_e2: 'Integrar un framework de front-end con uno de back-end',

            job_two: 'Programador Full-Stack',
            job_two_info: 'Construí el website para Corporación JSK que contiene una encuesta con el objetivo de realizar un estudio acerca del emprendimiento y los negocios en las mujeres',
            job_two_r1: 'Conocimiento de MySQL',
            job_two_r2: 'Conocimiento de HTML5 y PHP',
            job_two_e1: 'Exportar información específica de una base de datos a un reporte CSV',

            education: 'Educación',

            education_one: 'Llegué a 7mo semestre en la carrera Ingenieria Informática en la Universidad Católica Andrés Bello',
            education_two: 'Completé el Módulo 1 del curso de redes Cisco CCNA',
            education_three: 'Completé el curso de inglés de Fyr Lois',

            /* WORK SUMMARY */

            snakes_ladders:'Escaleras y Serpientes con conexión RS232',
            pic_driver: 'Controlador de brillo y volumen',
            reading_club: 'Los clubes de lectura',
            survey_onu: 'Encuesta ONU',

            check_all: 'Puedes visualizar todos mis proyectos cliqueando',
        }
    }
})