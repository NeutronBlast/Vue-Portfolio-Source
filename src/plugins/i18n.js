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
            workSummary: 'Summary of my projects',
            portfolio: 'Portfolio',
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
            pic_com3: '16 pin base',
            pic_com4: '18 pin base',
            pic_com5: 'Quartz Crystal (4MHz)',
            pic_com6: '20pF condensor',
            pic_com7: 'Buttons',
            pic_com8: '10K Resistors',
            pic_com9: '10uF Tantalium condensors',
            pic_com10: 'DB9 connector',
            pic_setup:'Circuit',

            /* Reading Club */
            reading_desc: 'Web application that uses a transactional and relational database',
            reading_goals: 'The system contemplates the following',
            reading_l1: 'Managing clubs: Managing basic data (includes associations with other clubs); reading groups control; managing members (includes payment management), and management of books',
            reading_l2: 'Managing meetings: Manage monthly meetings; choosing the book and the moderators for each meeting; attendance control and closing discussions',
            reading_l3: 'Planning and executing theater plays: Managing plays (including characters), manage planned plays; manage scoring of actors and plays',
            reading_date: 'January 16th, 2020',
            reading_members: 'Readers',
            reading_m1: 'The ideal quantity of active members in a reading club is around 5 and 15 people per group. Readers can be adults (from 18 years old), kids (between 9 and 12 years old) and teens (between 13 and 17 years old), groups cannot be mixed up but each club can have every kind of group',
            reading_g1: 'Adults groups',
            reading_g1d: 'They can start functioning when there are 10 people. When a group is above 15 members it must be divided in two. In this way new people can join to them until the limit is reached again and a new division is necessary.',
            reading_g2: 'Kids and Teens groups',
            reading_g2d: 'These groups can start functioning when there are 5 people, and it is not convenient that they have more than 10 members. Members of clubs that are not linked with an institution will pay $100,00 every year for membership. As more members join the groups there should be more meetings planned and each meeting will be linked to only one group (Each meeting must have a moderator, which will organize the discussions and comments). Moderators are also club members, that belong to the group the meeting is linked with – in case of groups of kids the moderador will be a member of a group of adults. For the same book the moderator will be the same in all the discussions', 
            reading_g2d2: 'From each club member certain data is needed (full name, nationality, gender, age, phone), and when they join a new club they should specify their favorite books (with genre and type), indicating the preferred order. A member can move city or country and join another club, or simply switching clubs in their same city. As each member does activity in a club it is important to register a history that shows per club the activity, when did each member joined and analyzed books. A member cannot be active in more than one club and group at time',
            reading_meetings: 'Meetings',
            reading_mt1: 'Meetings last 2 horus maximum and if they come from groups of kids they must not end after 7 pm. For each reading group, the goal of each meeting is to analyze a book that was accorded previously between the readers – the discussion can last from 1 to 3 meetings maximum according to the length and the complexity of the book. Various clubs and groups can analyze the same book at time. When the discussion ends the conclusions and the final score of the book must be registered - an score from 1 to 5 accorded between all the readers. If a same book is analyzed by different groups the score registered is the average from all the groups, so for a same club, the queries for a list can show different scores since the score can vary with the time',
            reading_mt2: 'For each meeting the moderator will register the attendance of the members, if a member stops attending to the 30% of the meetings in 2 months is kicked out the club and cannot join again. Each club should have the summary of the books that they have analyzed through its history',
            reading_plays:'Plays',
            reading_p1: 'In each play every club member and members from associated clubs can participate – normally, each play is related to the story of a book that was previously analyzed by the club (like a theater play). The cost of the ticket is decided by each club and can be different depending on the play. Sometimes the same club has some spaces that can be used for the play (an auditorium or a venue) or are just rented. The capacity of people varies depending on the place', 
            reading_p2: 'For each play it should be registered from which book is making reference, a summary of its story, the characters (and actors), planned plays (date for each play, place, hour and length). In each completed play the guests will vote for the best actor (ties are allowed), and score the play with a maximum of 5 stars. It is part of the basic information from a club the list of plays completed, its average score (according to the individual score obtained in each play) and the total of earnings received from the ticket sales (there are plays that can be still done and others that are not available anymore)',


            /* Per Capital */
            per_desc: 'Smart Finance - The time is now - Invest, move forward',
            per_desc3: 'PER CAPITAL offers easy access to Premium investment portfolios in Capital Markets, Real Estate and Venture Capital Projects, previously evaluated and approved by our experts, for institutional and private investors.',
            per_desc4: 'In any economy it is important to take actions to protect the asset value, preserve the capital and take advantage of the opportunities offered by the market.',
            btn_detailsw: 'Go to the website',
            per_date: 'January 22nd, 2020',

            /* TT Proto */
            tt_tit: 'ToyToys prototype',
            tt_desc: 'ToyToys is a fictional store located in the New York City of United States of America. It started as store that used to sell a huge variety of articles, however, after the WW2 the world wide sellings of toys increased considerably, thanks to that, in 1953, the name of ToyToys was given to the store', 
            tt_l1: 'Design a website prototype for Toy Toys store centered in the user (only interface)',
            tt_l2: 'Identify the needs and the main characteristics of the potential users of the website',
            tt_date: 'July 17th, 2019',
            tt_c: 'Prototyped characteristics',
            tt_c1: 'Featured offers in the main page',
            tt_c2: 'Payment systems',
            tt_c4: 'Registered user',

            tt_docs: 'Documentation',
            tt_docsinfo: 'Despite of this website prototype being centered only on the user interface the documentation describes every functionality and characteristic of the website. These docs are divided in the following topics',
            tt_di1: 'People',
            tt_di1d: 'Analysis of the possible users that will visit and use the Toy Toys website. Their characteristics and necessities',
            tt_di2: 'Competitors',
            tt_di2d: "Analysis of the websites belonging to direct and indirect competitors, naming their most important characteristics related to user's interaction",
            tt_di3: 'Diagrams',
            tt_di4: 'Card Sorting sessions',
            tt_di4d: 'There was done an interview to different people for a card sorting session, with the goal of obtaining clues about how the website should be distributed',
            tt_di5: 'Activity diagrams',
            tt_di6: 'Sketches, Wireframes, Storyboards and Mockups',
            tt_di7: 'Usability tests',
            tt_di8: 'Heuristic evaluation',
            tt_download: 'Download documentation (only available in spanish)',
            tt_download1: 'Download the first part of the documentation. It contains: Analysis of potential users, competitor analysis, various diagrams and activity diagrams and card sorting sessions',
            tt_download2: 'Download the second part of the documentation. It contains: Sketches, storyboards, wirefrimes, usability tests, mockups, heuristic evaluation',
            tt_downloadbtn: 'Download',


            /* File system */

            osf_tit: 'File system and signal management',
            osf_desc: 'Using UNIX system calls and tools, this console application called els (enhanced - ls) prints report files with the most important information of directories and subdirectories where the application is located', 
            osf_date: 'July 7th, 2019',
            osf_info: 'The information that will be shown in the report files is the following',
            osf_info1: 'Absolute path of the directory',
            osf_info2: 'Permissions, as they are shown when you execute the following command',
            osf_info3: "from the directory's owner",
            osf_info4: 'Last modified date',
            osf_info5: 'Last access date',
            osf_info6: 'Number of files contained in the directory (including subdirectories)',
            osf_info7: 'Number of total bytes occupied by the files contained in that directory (does not include subdirectories)',
            osf_implementation: 'Detalles de implementación',
            osf_im1:'The file name of each report done by a child process will be generated with its PID and a .txt extension (PID.txt)',
            osf_im2: 'In case of finding a .dmp file, this has to be deleted and there should be added its information to the report, which includes path, last modified date and size',
            osf_im3: 'The final process should create a process for each subdirectory that exists in the directory where the project is executed. As it should exist a child process for each subidrectory',
            osf_im4: 'Each child process should generate a report with the information specified previously from the subdirectory that it is assigned to it',
            osf_im5: 'The Parent process will generate a final report with its directory information and the global information from each child process',
            osf_im6: 'The Parent process should have a signal management that avoids that the process is killed with CTRL+C from the console',


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

            /* Pic driver */
            pic_desc:'Aplicación de consola que recibe data de un circuito controlado por un PIC y de acuerdo al valor enviado, ésta aumentará/disminuirá el volumen o el brillo de la plantalla',
            pic_date: '12 de Enero de 2020',
            pic_mats: "Componentes para el circuito",
            pic_c: 'Cantidad',
            pic_com: 'Componente',
            pic_com3: 'Base de 16 pines',
            pic_com4: 'Base de 18 pines',
            pic_com5: 'Cristal de Cuarzo (4MHz)',
            pic_com6: 'Condensador 20pF',
            pic_com7: 'Pulsadores',
            pic_com8: 'Resistencias de 10K',
            pic_com9: 'Condensadores de Tantalio de 10uF',
            pic_com10: 'Conector DB9',
            pic_setup:'Circuito',

            /* Reading Club */
            reading_desc: 'Aplicación web que utiliza una base de datos relacional transaccional',
            reading_goals: 'El sistema contempla lo siguiente',
            reading_l1: 'Administración de clubes: Mantenimiento de datos básicos (incluye asociaciones con otros clubes); control de grupos de lectura; mantenimiento de miembros (incluye control de pagos) y mantenimiento de libros',
            reading_l2: 'Administración de Reuniones: Mantenimiento de calendario mensual de reuniones; elecciones de libros y asignación de moderadores; control de asistencia y cierre de discusiones',
            reading_l3: 'Planificación y Ejecución de Obras Actuadas: Mantenimiento de obras (incluye elenco); mantenimiento de calendario de presentaciones; mantenimiento de valoraciones de actores y obras.',
            reading_date: '16 de Enero de 2020',
            reading_members: 'Lectores',
            reading_m1: 'La cantidad idónea de lectores participantes en un club de lectura oscila entre 5 y 15 personas por grupo. Los lectores de un club pueden ser adultos (desde los 18 años), niños (entre 9 y 12 años) y jóvenes (desde los 13 a los 17 años). No se mezclan los grupos aunque un mismo club puede agrupar los tres tipos',
            reading_g1: 'Grupo de adultos',
            reading_g1d: 'Pueden empezar a funcionar cuando haya 10 personas dispuestas a arrancar. Cuando un grupo sobrepasa los 15 integrantes debe dividirse en dos. Así pueden incorporarse nuevas personas en cada uno de ellos hasta que se alcance de nuevo la cantidad aludida y sea necesaria una nueva división.',
            reading_g2: 'Grupos de niños y jovenes',
            reading_g2d: 'Los grupos pueden empezar a funcionar cuando haya 5 lectores dispuestos a ello, y no conviene que exceda de 10. Los integrantes de clubes independientes aportan anualmente $100,00 por membresía. A medida que aumenten los integrantes se deben planificar más reuniones y se asignan los grupos a su reunión correspondiente (cada reunión debe tener un moderador, quién facilita las discusiones y comentarios). Los moderadores son también miembros del club, pertenecientes al grupo de la reunión – en el caso de los grupos de niños el moderador debe ser un integrante de algún grupo de adultos. Se mantiene el mismo moderador para todas las reuniones relacionadas a un mismo libro.',
            reading_g2d2: 'De cada integrante de un club se debe tener todos sus datos básicos necesarios (nombre completo, nacionalidad, género, edad, telefono) y cuando se unen al club deben especificar cuáles son sus 3 obras literarias preferidas (se debe especificar subgénero narrativo y tipo) indicando el orden de preferencia. Un integrante puede mudarse de ciudad o país y unirse a otro club o simplemente cambiar de club en su misma ciudad.  A medida que hagan vida en los clubes de lectura es importante tener para cada persona un historial que muestre por club antigüedad y lista de libros analizadas en cada uno. Un miembro no puede estar activo en mas de un club a la vez y en cada uno pertenece a un solo grupo de lectura simultáneamente.',
            reading_meetings: 'Reuniones',
            reading_mt1: ' Las reuniones semanales duran un máximo de 2 horas y si son reuniones de niños no deben terminar después de las 7 pm. Por grupo de lectura, el objetivo de cada reunión es analizar un libro previamente acordado entre los lectores – la discusión puede durar de 1 a 3 reuniones máximo dependiendo del tamaño y complejidad de la obra. Muchos clubes y grupos pueden estar analizando simultáneamente el mismo libro. Cuando termine la discusión se debe registrar las conclusiones y la valoración final del libro – un valor entre 1 y 5 acordado entre todos los lectores.  Si una misma obra es analizada por grupos distintos la valoración registrada es el promedio de todos los grupos así que para un mismo club, consultas de esa lista pueden mostrar ordenamientos distintos ya que la valoración de un libro puede cambiar en el tiempo.',
            reading_mt2: 'En cada reunión el moderador pasa asistencia a los presentes, si un integrante deja de asistir a mas del 30% de los encuentros en un bimestre es retirado del club y no se puede volver a unir al mismo. Cada club debe tener las fichas de los libros que han analizado a lo largo de su historia',
            reading_plays:'Obras actuadas',
            reading_p1: 'En estas actuaciones participan indistintamente los miembros del club y también pudieran participar integrantes de otros clubes asociados – usualmente la obra actuada se centra en la historia de algun libro previamente analizado (es como una obra de teatro). El costo de la entrada es fijada por cada club y puede variar de obra a obra. Algunas veces el mismo club tiene espacios físicos que utiliza para la presentación (auditorios o salas) o simplemente los alquilan. La capacidad de asistentes depende del auditorio o sala que tenga disponible el club. ',
            reading_p2: 'De cada obra actuada se debe saber a qué libro(s) hace referencia, tener un resumen de su argumento, el elenco (personajes y actores), calendario de presentaciones (que incluye fecha, lugar, hora inicio y duración total). En cada presentación realizada el público asistente vota por el mejor actor (pueden haber empates) y valora la obra con un máximo de 5 estrellas. Es parte de la información representativa de un club la lista de obras presentadas, su valoración promedio (según la valoración individual obtenida en cada presentación) y el ingreso total percibido hasta el momento de cada consulta realizada (hay obras que se pueden seguir presentando y otras ya tienen estatus de no activas).',
            
            /* Per Capital */
            per_desc: 'Finanzas inteligentes – El momento es ahora – Invierte, avanza',
            per_desc3: 'PER CAPITAL ofrece fácil acceso a oportunidades de inversión Premium en el mercado de Capitales,Inmobiliario y de Capital de Riesgo, previamente evaluadas y aprobadas por nuestros expertos, para inversionistas institucionales y público en general.',
            per_desc4: 'En cualquier economia es importante tomar acciones para proteger el patrimonio, preservar el capital y aprovechar las oportunidades que brinda el mercado.',
            btn_detailsw: 'Ir a sitio web',
            per_date: '22 de enero de 2020',


            /* TT Proto */
            tt_tit: 'Prototipo de sitio web ToyToys',
            tt_desc: 'ToyToys es una tienda ficticia de los Estados Unidos de América fundada en la ciudad de Nueva York. Empezó como una tienda que vendía gran variedad de artículos, no obstante, luego de la Segunda Guerra mundial la venta de juguetes creció considerablemente, gracias a ese auge se le dió, en 1953 el nombre de ToyToys.',
            tt_l1: 'Diseñar un prototipo de sitio web para la juguetería ToyToys centrado al usuario, (sólo interfaz).',
            tt_l2: 'Identificar las necesidades y características principales de los tipos de potenciales usuarios del sitio web.',
            tt_date: '17 de Julio de 2019',
            tt_c: 'Características prototipadas',
            tt_c1: 'Resalta en la página principal las ofertas del día.',
            tt_c2: 'Sistemas de pago',
            tt_c4: 'Usuario registrado',

            tt_docs: 'Documentación',
            tt_docsinfo: 'A pesar de que el sitio web prototipado se centra sólo en la interfaz de usuario la documentación describe toda la funcionalidad y características del sitio web. Dicha documentación se divide en los siguientes puntos: ',
            tt_di1: 'Personas',
            tt_di1d: 'Análisis de los posibles tipos de usuarios que visitarían y utilizarían el sitio web de Toy Toys. Sus características y necesidades',
            tt_di2: 'Competidores',
            tt_di2d: 'Análisis de los sitios web de los competidores directos e indirectos, señalando sus características más resaltantes en la parte de interacción con el usuario',
            tt_di3: 'Diagramas y mapas mentales',
            tt_di4: 'Sesiones de Card Sorting',
            tt_di4d: 'Se entrevistaron a diversas personas para una sesión de card sorting con el fin de obtener pistas de cómo se debería distribuir el sitio web',
            tt_di5: 'Diagramas de flujo de usuario',
            tt_di6: 'Sketches, Wireframes, Storyboards y Mockups',
            tt_di7: 'Pruebas de usabilidad',
            tt_di8: 'Evaluación heurística',
            tt_download: 'Descargar documentación (sólo disponible en español)',
            tt_download1: 'Descargar primera parte de la documentación, la cual contiene: Análisis de personas, análisis de competidores, mapas mentales y diagramas, sesiones de card sorting y flujos de usuario',
            tt_download2: 'Descargar segunda parte de la documentación, la cual contiene: Bosquejos (sketches), storyboards, wireframes, pruebas de usabilidad, mockups, evaluación heurística',
            tt_downloadbtn: 'Descargar',

            /* File system */

            osf_tit: 'Manejo de archivos y señales',
            osf_desc: 'Utilizando las herramientas y llamadas al sistema de UNIX esta aplicación de consola llamada els (enhanced - ls) que imprime archivos reporte con la información más importante de los directorios y subdirectorios donde se encuentre la aplicación',
            osf_date: '7 de Julio de 2019',
            osf_info: 'La información que se mostrará en los archivos reportes generado es la siguiente',
            osf_info1: 'Path absoluto del directorio',
            osf_info2: 'Permisos, tal y como son mostrados cuando ejecutas el comando',
            osf_info3: 'del dueño del directorio',
            osf_info4: 'Fecha de última modificación',
            osf_info5: 'Fecha de último acceso',
            osf_info6: 'Número total de archivos contenidos (incluye subdirectorios)',
            osf_info7: 'Número total de bytes ocupados por el directorio (no incluye subdirectorios)',
            osf_implementation: 'Detalles de implementación',
            osf_im1:'El nombre del archivo reporte de cada proceso hijo se generará con su PID y txt como extensión (PID.txt)',
            osf_im2:'En caso de encontrar un archivo .dmp durante el recorrido, éste deberá ser eliminado y agregar al reporte la información del directorio donde se encontraba, su fecha de modificación y el tamaño.',
            osf_im3: 'El proceso principal deberá crear un proceso por cada subdirectorio que exista en el directorio donde se ejecute el programa. Es decir que deberá existir un proceso hijo por cada subdirectorio existente en el directorio de ejecución.',
            osf_im4: 'Cada proceso hijo deberá generar un reporte con la información descrita en el punto anterior a partir del subdirectorio del cual es responsable. ',
            osf_im5: 'El proceso Padre generará un reporte final con la información de su directorio e información global para cada uno de los subdirectorios',
            osf_im6: 'El proceso Padre deberá instalar un manejador de señales para evitar que sea interrumpido con CTRLC desde la consola.',

            btn_details: 'Ver repositorio',
            resources: 'Recursos',
            screenshots: 'Capturas',
        }
    }
})