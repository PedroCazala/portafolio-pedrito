import { IProyectoWeb } from '../../../../interfaces/proyectoWeb.iterface'

export const proyectos:IProyectoWeb[] =[
    {
        id:1,
        title:'Rayuela',
        imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/fCtrKym8Y0U',
        images:['',''],
        link:'https://pedrocazala.github.io/Rayuela/',
        github:"lala",
        description:{
            title:'html + css + js',
            body:'Cree dos versiones del mismo proyecto esta es la que se creó con javaScript. Mientras que hay una mas actualizada hecha con React Js'
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
        link:'sas',
        github:'asdas',
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

