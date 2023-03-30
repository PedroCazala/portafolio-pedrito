import { ISkill } from "../../../interfaces/skill.interface";

const arraySkillsDev: ISkill[] = [
    {
        id: 1,
        name: "javascript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        description:
            "Es un lenguaje de programación dinámico que se utiliza principalmente para agregar interactividad y comportamiento a las páginas web. Con JavaScript, se pueden crear efectos visuales, realizar validaciones de formularios, manipular datos, interactuar con servidores web, y muchas otras funcionalidades que mejoran la experiencia del usuario en la web.",
    },
    {
        id: 2,
        name: "html",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
        description:
            " (Hypertext Markup Language) es el lenguaje de marcado utilizado para estructurar y dar formato al contenido de una página web. Con HTML, se pueden definir elementos como encabezados, párrafos, listas, imágenes, enlaces y muchos otros, y organizarlos en una jerarquía estructurada para que los navegadores web puedan interpretarlos y mostrarlos de forma adecuada.",
    },
    {
        id: 3,
        name: "css",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        description:
            "(Cascading Style Sheets) es un lenguaje de hojas de estilo que se utiliza para definir el aspecto y el diseño de un documento HTML. Permite controlar la presentación visual de las páginas web, incluyendo el estilo de texto, colores, tamaños, márgenes, posiciones y otros efectos visuales. CSS funciona separando el contenido de un documento HTML de su presentación visual, lo que permite que el diseño y el contenido se gestionen de manera independiente.",
    },
    {
        id: 4,
        name: "scss",
        logo: "https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png",
        description:
            "(Syntactically Awesome Style Sheets) es una extensión de CSS que agrega características y sintaxis adicionales al lenguaje, lo que permite escribir hojas de estilo de manera más fácil, organizada y mantenible. SCSS se compila en CSS puro antes de ser interpretado por el navegador web.",
    },
    {
        id: 5,
        name: "react",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
        description:
            "Es una biblioteca de JavaScript de código abierto diseñada para construir interfaces de usuario. React se utiliza para crear componentes reutilizables que se combinan para formar una interfaz de usuario completa. Al utilizar la virtualización del DOM, React es capaz de renderizar cambios de forma eficiente y rápida, lo que lo hace ideal para aplicaciones de una sola página.",
    },
    {
        id: 6,
        name: "typescript",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTme0Edea2c-lrICFBC4THipnrMXf8DFgwV0MLlPDRVFw&s",
        description:
            "TypeScript es un lenguaje de programación de código abierto diseñado y mantenido por Microsoft. Es un superconjunto de JavaScript que agrega tipado estático opcional y otros features orientados a objetos. TypeScript se compila a JavaScript, lo que lo hace compatible con cualquier navegador o entorno de ejecución que soporte JavaScript.",
    },
    {
        id: 7,
        name: "bootstrap",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2048px-Bootstrap_logo.svg.png",
        description:
            "Bootstrap es un framework front-end gratuito y de código abierto para diseño de sitios web y aplicaciones. Contiene plantillas de diseño basadas en HTML y CSS, y también JavaScript para implementar componentes interactivos. Bootstrap es uno de los frameworks más populares en el mundo del desarrollo web, utilizado por desarrolladores y empresas de todo el mundo.",
    },
    {
        id: 8,
        name: "git",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2000px-Git-logo.svg.png",
        description:
            "Git es un sistema de control de versiones distribuido y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes con rapidez y eficiencia. Git fue creado por Linus Torvalds en 2005 para el desarrollo del kernel de Linux, pero se ha convertido en una herramienta esencial para cualquier desarrollador que necesite controlar el historial de cambios en su código.",
    },
    {
        id: 9,
        name: "github",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
        description:
            "GitHub es una plataforma web de alojamiento y colaboración para proyectos de software que utiliza el sistema de control de versiones Git. Permite a los desarrolladores almacenar y gestionar sus proyectos, colaborar con otros desarrolladores y realizar un seguimiento de las diferentes versiones de su código. Además, cuenta con herramientas de integración y despliegue continuo que facilitan el proceso de publicación de software.",
    },
    {
        id: 10,
        name: "netlify",
        logo: "https://devopedia.org/images/article/397/9618.1642936094.png",
        description:
            "Netlify es una plataforma de alojamiento de sitios web que permite a los desarrolladores implementar, construir y gestionar sus sitios web estáticos y aplicaciones web de forma rápida y sencilla. Con Netlify, los desarrolladores pueden aprovechar herramientas de integración y despliegue continuo, así como también colaborar con otros desarrolladores y equipos.",
    },
    {
        id: 11,
        name: "node.js",
        logo: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
        description:
            "Node.js es un entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript fuera de un navegador web. Node.js se utiliza principalmente para crear aplicaciones de red escalables, que pueden incluir servidores web, aplicaciones de chat, API y muchas otras funcionalidades que requieren comunicación en tiempo real y manejo de múltiples solicitudes de usuarios simultáneos. Node.js también es conocido por su arquitectura basada en eventos, que lo hace muy eficiente y escalable.",
    },
    {
        id: 12,
        name: "express",
        logo: "https://expressjs.com/images/express-facebook-share.png",
        description:
            "Express es un framework para Node.js que se utiliza para crear aplicaciones web y API de manera sencilla y rápida. Express es conocido por su simplicidad y flexibilidad, lo que lo hace ideal para crear aplicaciones de cualquier tamaño y complejidad. Entre las características de Express se encuentran el enrutamiento, la gestión de middleware, la integración con motores de plantillas y la manipulación de solicitudes y respuestas HTTP.",
    },
    {
        id: 13,
        name: "firebase",
        logo: "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png",
        description:
            "Firebase es una plataforma de desarrollo de aplicaciones móviles y web que proporciona una variedad de herramientas y servicios en la nube para ayudar a los desarrolladores a crear aplicaciones de alta calidad de manera más rápida y sencilla. Firebase proporciona herramientas para la autenticación de usuarios, almacenamiento en la nube, base de datos en tiempo real, análisis de usuario, notificaciones push y muchos otros servicios que hacen que la creación de aplicaciones sea más fácil y eficiente.",
    },
    {
        id: 14,
        name: "axios",
        logo: "https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png",
        description:
            "Axios es un cliente HTTP basado en promesas para Node.js y el navegador. Se utiliza para realizar solicitudes HTTP a servidores web y API, y procesar las respuestas devueltas por el servidor. Entre las características de Axios se encuentran el soporte para solicitudes concurrentes, la gestión de cookies y la interceptación de solicitudes y respuestas HTTP.",
    },
    {
        id: 15,
        name: "mongoDB",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
        description:
            "Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. Está diseñado para almacenar, recuperar y gestionar información de manera eficiente, escalable y flexible. MongoDB utiliza un modelo de datos flexible y dinámico que permite manejar una gran variedad de tipos de datos y es utilizado en aplicaciones modernas y escalables.",
    },
    {
        id: 16,
        name: "mongoose",
        logo: "https://velog.velcdn.com/images/jaeyoon321/post/04003572-e2ce-41b6-990f-4484a2157065/image.png",
        description:
            "Mongoose es una biblioteca de Node.js que permite modelar objetos de datos MongoDB. Proporciona una solución sencilla y elegante para manejar la conexión, validación, consultas y lógica del negocio en la base de datos MongoDB. Mongoose también cuenta con funciones avanzadas como middleware, plugins y transformaciones para hacer que el modelado de objetos en Node.js sea más fácil y eficiente.",
    },
    {
        id: 17,
        name: "passport",
        logo: "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc_400x400.png",
        description:
            "Passport es una biblioteca de autenticación para Node.js que se utiliza para autenticar solicitudes entrantes. Proporciona una forma sencilla de autenticar usuarios a través de diferentes estrategias de autenticación, como la autenticación local, la autenticación basada en tokens y la autenticación de terceros, como Facebook o Google. Passport es muy modular y personalizable, lo que lo hace fácil de usar en una amplia variedad de aplicaciones web.",
    },
    {
        id: 18,
        name: "socket.io",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1280px-Socket-io.svg.png",
        description:
            "Socket.IO es una biblioteca de JavaScript que proporciona una API para la comunicación bidireccional en tiempo real entre clientes y servidores web. Utiliza el protocolo WebSocket, pero también puede funcionar con otras técnicas de transporte como HTTP polling y long-polling. Socket.IO es muy popular para aplicaciones web en tiempo real como chats, juegos y otras aplicaciones que requieren una comunicación rápida y en tiempo real.",
    },
    {
        id: 19,
        name: "swagger",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
        description:
            "Swagger es una herramienta de software de código abierto que se utiliza para documentar y probar las API RESTful. Proporciona una forma sencilla de crear documentación precisa y actualizada de las API, lo que facilita la comprensión y el uso de la API por parte de otros desarrolladores. Swagger también permite probar las API y genera automáticamente el código del cliente y del servidor en diferentes lenguajes de programación.",
    },
    {
        id: 20,
        name: "twilio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png",
        description:
            "Twilio es una plataforma de comunicaciones en la nube que permite a los desarrolladores incorporar funciones de voz, video y mensajería en sus aplicaciones web o móviles mediante una API sencilla y escalable. Con Twilio, los desarrolladores pueden crear experiencias de comunicación personalizadas y en tiempo real para sus usuarios, integrando funciones como llamadas, mensajes SMS, videoconferencias, chatbots y mucho más.",
    },
    {
        id: 21,
        name: "nodemailer",
        logo: "https://nodemailer.com/nm_logo_200x136.png",
        description:
            "Nodemailer es un módulo de Node.js que permite el envío de correos electrónicos. Es fácil de usar, y es compatible con una variedad de servicios de correo electrónico, incluyendo Gmail, Yahoo, Outlook, etc. Además, ofrece muchas opciones para personalizar y controlar el contenido y el formato de los correos electrónicos que se envían.",
    },
    {
        id: 22,
        name: "Visual Studio Code",
        logo: "https://code.visualstudio.com/assets/favicon.ico",
        description:
            "Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para depuración, control de código fuente Git incorporado, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.",
    },
];

//     { id: , name: "twilio", logo: "", description: ""}
// ];

const arraySkillsDesing: ISkill[] = [
    {
        id: 1,
        name: "Adobe Photoshop",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
        description:
            "Adobe Photoshop es una herramienta de diseño gráfico y edición de imágenes que permite a los usuarios crear y manipular imágenes digitales para su uso en medios impresos o digitales.",
    },
    {
        id: 2,
        name: "Adobe Lightroom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Adobe_Photoshop_Lightroom_Classic_CC_icon.svg/400px-Adobe_Photoshop_Lightroom_Classic_CC_icon.svg.png",
        description:
            "Adobe Lightroom es una aplicación de edición de fotos diseñada para fotógrafos profesionales y aficionados. Con Lightroom, puedes editar tus fotos, organizarlas y compartirlas desde cualquier lugar.",
    },
    {
        id: 3,
        name: "Adobe Illustrator",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
        description:
            "Adobe Illustrator es una herramienta de diseño vectorial utilizada para crear gráficos e ilustraciones. Con Illustrator, puedes crear diseños para su uso en medios impresos y digitales.",
    },
    {
        id: 4,
        name: "Cinema 4D",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/C4D_Logo.png/240px-C4D_Logo.png",
        description:
            "Cinema 4D es una aplicación de modelado, animación y renderización 3D utilizada en la creación de efectos visuales, videojuegos, animaciones y más.",
    },
    {
        id: 5,
        name: "Adobe After Effects",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_After_Effects_CS6_Icon.png",
        description:
            "Adobe After Effects es una herramienta de postproducción utilizada en la creación de efectos visuales y gráficos animados para películas, videos, televisión y más.",
    },
    {
        id: 6,
        name: "Sony Vegas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Vegas_Pro_15.0.png",
        description:
            "Sony Vegas es un programa de edición de video utilizado para crear películas, videos musicales y más. Con Vegas, puedes agregar efectos especiales, música y títulos a tus videos.",
    },
    {
        id: 7,
        name: "Adobe XD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1024px-Adobe_XD_CC_icon.svg.png",
        description:
            "Adobe XD es una aplicación de diseño de experiencias de usuario (UX) y diseño de interfaces (UI) utilizada para crear diseños para aplicaciones móviles y web.",
    },
    {
        id: 8,
        name: "Adobe Premiere",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1024px-Adobe_Premiere_Pro_CC_icon.svg.png",
        description:
            "Adobe Premiere es un programa de edición de video utilizado en la producción de películas, videos, televisión y más. Con Premiere, puedes editar y organizar tus clips de video y agregar efectos, títulos y música.",
    },
    {
        id: 9,
        name: "Canva",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Canva_logo.png",
        description:
            "Canva es una plataforma de diseño gráfico en línea que permite a los usuarios crear gráficos, presentaciones, carteles, invitaciones y otros contenidos visuales. Ofrece una variedad de herramientas de diseño, plantillas y elementos gráficos predefinidos para ayudar a los usuarios a crear diseños profesionales de manera rápida y sencilla.",
    },
];

const arraySkillsArtistic: ISkill[] = [
    { id: 1, name: "js", logo: "", description: "" },
];
const arraySkillsExtra: ISkill[] = [
    { id: 1, name: "js", logo: "", description: "" },
];
export {
    arraySkillsDev,
    arraySkillsDesing,
    arraySkillsArtistic,
    arraySkillsExtra,
};
