import { IProyectoWeb } from '../../../../interfaces/proyectoWeb.iterface'

export const proyectos:IProyectoWeb[] =[
    {
        id:1,
        title:'Rayuela',
        imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/fCtrKym8Y0U',
        images:['',''],
        clases:'',
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
        clases:'',
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

let estado:number =0
for(let proyecto of proyectos){
    if(estado === 0|| estado ===3){
        estado = 1
        proyecto.clases =' ProyectoItem1 '
    }else if(estado === 1){
        estado = 2
        proyecto.clases =' ProyectoItem2 '
    }else if(estado === 2){
        estado = 3
        proyecto.clases =' ProyectoItem3 '
    }
}
console.log(proyectos);
