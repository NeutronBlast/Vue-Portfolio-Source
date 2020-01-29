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

            /* CONTACT */
            c_title: 'Get in touch',
            c_description: 'If you have a question, want to talk to me about a project, hire me, or just say hi, fill the form below or contact me in my social media',
            cf_name: 'Name',
            cf_message: 'Message',
            cf_submit: 'Submit',

            /* Snakes & Ladders */
            snakes_tit: 'Snakes & Ladders',
            snakes_desc: 'Board game with RS232 connection for Networking I subject.',
            snakes_goals: 'Goals',
            snakes_l1: 'Create a graphic interface that allows the user interact with the game',
            snakes_l2: 'Use RS232 to create a functional and stable game',
            snakes_l3: 'Create an standard data protocol to connect with the players of the game',
            snakes_l4: 'Manage in an efficent way the concept of addressing',
            btn_details: 'Go to the repository',
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

            /* CONTACT */
            c_title: 'Contactame',
            c_description: 'Si tienes alguna pregunta, quieres hablar conmigo acerca de un proyecto, contratarme, o simplemente decir hola rellena el formulario de abajo o contáctame en mis redes sociales',
            cf_name: 'Nombre',
            cf_message: 'Mensaje',
            cf_submit: 'Enviar',

            /* Snakes & Ladders */
            snakes_tit: 'Snakes & Ladders',
            snakes_desc: 'Juego de mesa con conexión RS232 para la materia Redes I',
            snakes_goals: 'Objetivos',
            snakes_l1: 'Crear una interfaz gráfica que permita al usuario interactuar con el juego',
            snakes_l2: 'Usar conexión RS232 para crear un juego funcional y estable',
            snakes_l3: 'Crear un protocolo de datos estándar para conectarse con los jugadores',
            snakes_l4: 'Gestionar de manera eficiente el concepto de direccionamiento',
            btn_details: 'Ver repositorio',
        }
    }
})