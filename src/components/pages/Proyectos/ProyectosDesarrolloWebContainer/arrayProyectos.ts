import { IProyectoWeb } from '../../../../interfaces/proyectoWeb.iterface'

export const proyectos:IProyectoWeb[] =[
    {
        id:1,
        title:'Rayuela',
        imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/fCtrKym8Y0U',
        images:['',''],
        link:'https://pedrocazala.github.io/Rayuela/',
        github:"https://github.com/PedroCazala/Rayuela",
        description:{
            title:'html + css + js',
            body:'Cree dos versiones del mismo proyecto esta es la que se creó con javaScript, como parte de los dos primeros cursos de la carrera de Desarrollo Web Full Stack. En el primero "Desarrollo Web", se maquetó y diseñó el sitio utilizando "HTML" y "CSS" con utilización del preprocesador de css "SASS" y luego en el segundo curso, "JavaScript", se utilizó dicho lenguaje de programación para dotar al sitio de funcionalidad, particularmente en la sección "catálogo", como un buscador que permite filtrar por nombre, la opción de ordenar por precio o alfabéticamente, y en el "carrito" con almacenamiento en storage y la posibilidad de aumentar/disminuir la cantidad de un producto, borrarlo o vaciar todo el carrito. Como proyecto personal, se está trabajando en una versión mas actualizada con "React Js"'
        },
        technologies:[
            {
                name:'html',
                imgLogo:'',
                description:'html es un lenguaje de maquetado que se utiliza en la creación de sitios web...'
            }
        ]
    },
    {
        id:2,
        title:'No tan macho',
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/juxZrOVtg-c',
        images:['',''],
        link:'https://notanmacho.netlify.app/',
        github:'https://github.com/PedroCazala/notanmacho',
        description:{
            title:'html + css + js',
            body:'En este proyecto...'
        },
        technologies:[
            {
                name:'html',
                imgLogo:'',
                description:'html es un lenguaje de maquetado que se utiliza en la creación de sitios web...'
            }
        ]
    }
]

