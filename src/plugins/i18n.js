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
            snakes_date: 'January 17th, 2020',
            snakes_ptr: 'Game rules',
            snakes_pr: "Each player will start with their respective number (1-4) and will take turns to roll the dice which will indicate the number of spaces they will advance. Each player moves according to the board's numeration, in ascending form. If a player gets in a space where a ladder starts once they finished moving he will go up there until the space where it ends. If, however, the player gets in a space where there's a head of a snake he will descend through it until the space where its tail ends.",
            snakes_pr2: 'If a player rolls a six he will be able to roll the dice again. If a player obtains three six in a row he will return to the first space and will not be able to move until rolling a six again. The player that gets to the final space is the winner. In one of the game modes the player must get to the final space with the exact score',
            snakes_mt: 'General changes to the game',
            snakes_mp: 'The following change to the game will be applied: If in any turn the player gets in one of the 3 special slots that will be specified later the player will reverse the direction. It should be noted that due to the topology and the way that the cable will be configured the game will normally follow the same sense, i.e from player 1 to player 4, however, when a player gets to an special space it will be taken in account that even when physically the direction of the game is the same, logically, the direction will be inverse, that is to say, the direction will be from 4 to 1 instead of 1 to 4',
            snakes_t: 'Board',
            snakes_c1: 'Special space 1',
            snakes_c2: 'Special space 2',
            snakes_c3: 'Special space 3',


            /* Pic driver */
            pic_desc:'Console application that receives data sent from a PIC circuit, and according to the value it will either increase or decrease brightness/volume',
            pic_date: 'January 12nd, 2020',
            pic_mats: "Circuit's Components",
            pic_c: 'Quantity',
            pic_com: 'Component',
            pic_com3_4: 'pin base',
            pic_setup:'Circuit',
            btn_details: 'Go to the repository',
            resources: 'Resources',
            screenshots: 'Screenshots',
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
            snakes_date: '17 de Enero de 2020',
            snakes_ptr: 'Reglas del juego',
            snakes_pr: 'Los jugadores comienzan con una ficha y se turnan para lanzar un dado que les indicará la cantidad de casillas que deben avanzar. Las fichas se mueven según la numeración del tablero, en sentido ascendente. Si al finalizar un movimiento un jugador cae en una casilla donde comienza una escalera, sube por ella hasta la casilla donde ésta termina. Si, por el contrario, cae en una en donde comienza la cabeza de una serpiente, desciende por ésta hasta la casilla donde finaliza su cola.',
            snakes_pr2: 'Si un jugador obtiene un 6 podrá mover y tirar nuevamente el dado. Si un jugador obtiene tres 6 consecutivos, deberá regresar a la casilla inicial y no podrá mover su ficha hasta obtener nuevamente un 6. El jugador que logra llegar a la casilla final es el ganador. En una de las modalidades se debe llegar a la casilla final con el puntaje justo. ',
            snakes_mt: 'Modificaciones generales del juego',
            snakes_mp: 'La siguiente modificación es incorporada al juego: Si en alguna jugada el “equipo jugador” cae en una de las 3 “casillas especiales” que se señalan, el juego invertirá su sentido. Cabe destacar que por la topología y la forma en que se ha configurado el cable de comunicaciones, el juego, normalmente seguirá siempre el mismo sentido es decir del jugador 1 al 4 sin embargo al caer el jugador en una de esas “casillas especiales” se deberá tomar en cuenta que a pesar que físicamente el sentido del juego se mantiene, lógicamente se invertirá es decir, el sentido será del jugador 4 al 1.',
            snakes_t: 'Tablero',
            snakes_c1: 'Casilla especial 1',
            snakes_c2: 'Casilla especial 2',
            snakes_c3: 'Casilla especial 3',
            btn_details: 'Ver repositorio',
            resources: 'Recursos',
            screenshots: 'Capturas',
        }
    }
})