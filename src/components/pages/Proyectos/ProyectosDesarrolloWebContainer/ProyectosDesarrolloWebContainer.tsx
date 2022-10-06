import React from 'react'
import { IProyectoWeb } from '../../../../interfaces/proyectoWeb.iterface'
import ProyectoItem from '../ProyectoItem/ProyectoItem'
import './ProyectosDesarrolloWebContainer.scss'

const proyectos:IProyectoWeb[] =[
    {
        title:'Rayuela',
        imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/fCtrKym8Y0U',
        images:['',''],
        clases:'ProyectoItem1',
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
    },
    {
        title:'No tan macho',
        // imgLogo:'https://pedrocazala.github.io/Rayuela/images/Logo_3D_1920x1080p.png',
        video:'https://www.youtube.com/embed/juxZrOVtg-c',
        images:['',''],
        clases:'ProyectoItem2',
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
function ProyectosContainer() {
    return (
        <div className='ProyectoContainer'>
            {/* <h1>Proyectos de desarrollo web</h1> */}
            {proyectos.map((proyecto)=>{
                return(
                    <ProyectoItem /* classNumber={'ProyectoItem1'} */ proyecto={proyecto}/>
                )
            })}
            {/* <ProyectoItem classNumber={'ProyectoItem2'}/>
            <ProyectoItem classNumber={'ProyectoItem3'}/> */}
        </div>
    )
}  

export default ProyectosContainer