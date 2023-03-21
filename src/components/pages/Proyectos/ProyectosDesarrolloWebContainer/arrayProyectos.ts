import { IProyectoWeb } from "../../../../interfaces/proyectoWeb.iterface";

export const proyectos: IProyectoWeb[] = [
    {
        id: 1,
        title: "Rayuela",
        imgLogo:
            "https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png",
        video: "https://www.youtube.com/embed/fCtrKym8Y0U",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://pedrocazala.github.io/Rayuela/",
        github: "https://github.com/PedroCazala/Rayuela",
        description:'Cree dos versiones del mismo proyecto esta es la que se creó con javaScript, como parte de los dos primeros cursos de la carrera de Desarrollo Web Full Stack. En el primero "Desarrollo Web", se maquetó y diseñó el sitio utilizando "HTML" y "CSS" con utilización del preprocesador de css "SASS" y luego en el segundo curso, "JavaScript", se utilizó dicho lenguaje de programación para dotar al sitio de funcionalidad, particularmente en la sección "catálogo", como un buscador que permite filtrar por nombre, la opción de ordenar por precio o alfabéticamente, y en el "carrito" con almacenamiento en storage y la posibilidad de aumentar/disminuir la cantidad de un producto, borrarlo o vaciar todo el carrito. Como proyecto personal, se está trabajando en una versión mas actualizada con "React Js"',
        technologies: ["html","css","javascript","bootstrap","scss","git","github","github pages", "responsive"],
        estado:'Finalizado'
    },
    {
        id: 2,
        title: "No tan macho",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://notanmacho.netlify.app/",
        github: "https://github.com/PedroCazala/notanmacho",
        description: "En este proyecto...",
        technologies: ["react","firebase","react-router-dom","sass","netlify"],
        estado:'Finalizado'
    },
    {
        id: 3,
        title: "Proyecto Backend",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "/Subir-nuevamenteeeeeeeee",
        github: "https://github.com/PedroCazala/proyectoFinal-backend_CoderHouse",
        description: "En este proyecto...",
        technologies: ["nodeJs","express","axios","dotenv","firebase","mongoDB","mongoose","passport","socket.io","swagger","twilio","cookie-session","log4js","nodemailer","SQL","noSQL"],
        estado:'Finalizado'
    },
    {
        id: 4,
        title: "App Financiera",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://notanmacho.netlify.app/",
        github: "https://github.com/PedroCazala/notanmacho",
        description: "En este proyecto...",
        technologies: ["react","typescript","css", "bootstrap","scss","git","github","netlify", "responsive"],
        estado:'En proceso'
    },
    {
        id: 5,
        title: "Portafolio Personal",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: ["react","typescript","css", "bootstrap","scss","git","github","netlify", "responsive"],
        estado:'En proceso'
    },
    {
        id: 6,
        title: "Rayuela con React",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: ["react","typescript","css", "bootstrap","scss","git","github","netlify", "responsive"],
        estado:'En proceso'
    },
    {
        id: 7,
        title: "Backend de Rayuela",
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video: "https://www.youtube.com/embed/juxZrOVtg-c",
        images: ["https://fondosmil.com/fondo/29366.jpg", "https://images4.alphacoders.com/936/thumb-1920-936378.jpg"],
        link: "https://pedrocazala.netlify.app",
        github: "https://github.com/PedroCazala/portafolio-pedrito",
        description: "En este proyecto...",
        technologies: ["react","typescript","css", "bootstrap","scss","git","github","netlify", "responsive"],
        estado:'Por iniciar'
    },
];
