import { IProyectoWeb } from "../../../../interfaces/proyectoWeb.iterface";

export const proyectos: IProyectoWeb[] = [
    {
        id: 1,
        title: "Rayuela",
        imgLogo:
            "https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png",
        video: "https://www.youtube.com/embed/fCtrKym8Y0U",
        images: [
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0000.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0001.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0002.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0003.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0004.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0005.png",
            "/images/proyectos/RayuelaJavascript/RayuelaJavascript_0006.png"
        ],
        link: "https://pedrocazala.github.io/Rayuela/",
        github: "https://github.com/PedroCazala/Rayuela",
        description:
        'Cree dos versiones del mismo proyecto esta es la que se creó con javaScript, como parte de los dos primeros cursos de la carrera de Desarrollo Web Full Stack. En el primero "Desarrollo Web", se maquetó y diseñó el sitio utilizando "HTML" y "CSS" con utilización del preprocesador de css "SASS" y luego en el segundo curso, "JavaScript", se utilizó dicho lenguaje de programación para dotar al sitio de funcionalidad, particularmente en la sección "catálogo", como un buscador que permite filtrar por nombre, la opción de ordenar por precio o alfabéticamente, y en el "carrito" con almacenamiento en storage y la posibilidad de aumentar/disminuir la cantidad de un producto, borrarlo o vaciar todo el carrito. Como proyecto personal, se está trabajando en una versión mas actualizada con "React Js"',
        technologies: [
            "html",
            "css",
            "javascript",
            "bootstrap",
            "scss",
            "git",
            "github",
            "github pages",
            "responsive",
        ],
        estado: "Finalizado",
    },
    {
        id: 2,
        title: "No tan macho",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "/images/proyectos/NoTanMacho/NoTanMacho_0000.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0001.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0002.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0003.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0004.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0005.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0006.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0007.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0008.png",
            "/images/proyectos/NoTanMacho/NoTanMacho_0009.png",
        ],
        link: "https://notanmacho.netlify.app/",
        github: "https://github.com/PedroCazala/notanmacho",
        description: "No tan macho es el proyecto final de un curso sobre React.Js, y su objetivo principal fué demostrar las habilidades y conocimientos adquiridos durante el curso. Aunque originalmente no se creó para funcionar como un negocio real, quizas en un futuro me plantee continuar dándole forma. Este proyecto es una excelente muestra de lo que se aprendió para desarrollar aplicaciones web interactivas y dinámicas con una alta eficiencia y calidad utilizando React y Firebase. ",
        technologies: [
            "react",
            "firebase",
            "react-router-dom",
            "sass",
            "netlify",
        ],
        estado: "Finalizado",
    },
    {
        id: 3,
        title: "Proyecto Final Backend CoderHouse",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "/images/proyectos/ProyectoFinalBackendCoderhouse/ProyectoFinalBackendCoderhouse_0000.png",
            "/images/proyectos/ProyectoFinalBackendCoderhouse/ProyectoFinalBackendCoderhouse_0001.png",
            "/images/proyectos/ProyectoFinalBackendCoderhouse/ProyectoFinalBackendCoderhouse_0002.png",
            "/images/proyectos/ProyectoFinalBackendCoderhouse/ProyectoFinalBackendCoderhouse_0003.png"
        ],
        link: "https://proyectofinal-backendcoderhouse-production.up.railway.app/",
        github: "https://github.com/PedroCazala/proyectoFinal-backend_CoderHouse",
        description: "En este proyecto...",
        technologies: [
            "nodeJs",
            "express",
            "axios",
            "dotenv",
            "firebase",
            "mongoDB",
            "mongoose",
            "passport",
            "socket.io",
            "swagger",
            "twilio",
            "cookie-session",
            "log4js",
            "nodemailer",
            "SQL",
            "noSQL",
        ],
        estado: "Finalizado",
    },
    {
        id: 4,
        title: "App Financiera",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "/images/proyectos/appFinanciera_0001.png",
            "/images/proyectos/appFinanciera_0002.png",
            "/images/proyectos/appFinanciera_0003.png",
            "/images/proyectos/appFinanciera_0004.png",
            "/images/proyectos/appFinanciera_0005.png",
            "/images/proyectos/appFinanciera_0006.png",
            "/images/proyectos/appFinanciera_0007.png",
            "/images/proyectos/appFinanciera_0008.png",
            "/images/proyectos/appFinanciera_0009.png",
        ],
        link: "https://control-de-finanzas.netlify.app/",
        github: "https://github.com/PedroCazala/finanzas",
        description:
            "Esta aplicación cuenta con varias paginas que les servirán al usuario con su economía. Es una herramienta que permitirá administrar sus finanzas y hacer planes a largo plazo. Además podría ser útil tanto para individuos como para empresas que quieren tener una visión clara y completa de sus finanzas y hacer planes para el futuro. Todavía está en proceso, la idea es agregarle mas secciones, en el caso de dividir gastos todavía no funciona.",
        technologies: [
            "react",
            "typescript",
            "css",
            "bootstrap",
            "scss",
            "git",
            "github",
            "netlify",
            "responsive",
        ],
        estado: "En proceso",
    },
    {
        id: 5,
        title: "Portafolio Personal",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "https://fondosmil.com/fondo/29366.jpg",
            "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
        ],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: [
            "react",
            "typescript",
            "css",
            "bootstrap",
            "scss",
            "git",
            "github",
            "netlify",
            "responsive",
        ],
        estado: "En proceso",
    },
    {
        id: 6,
        title: "Rayuela con React",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "https://fondosmil.com/fondo/29366.jpg",
            "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
        ],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: [
            "react",
            "typescript",
            "css",
            "bootstrap",
            "scss",
            "git",
            "github",
            "netlify",
            "responsive",
        ],
        estado: "En proceso",
    },
    {
        id: 7,
        title: "Backend de Rayuela",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: [
            "https://fondosmil.com/fondo/29366.jpg",
            "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
        ],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: [
            "react",
            "typescript",
            "css",
            "bootstrap",
            "scss",
            "git",
            "github",
            "netlify",
            "responsive",
        ],
        estado: "Por iniciar",
    },
];
