import React from 'react'
import Button1 from '../../../buttons/Button1/Button1'
import ImgCarrousel from './imgCarrousel/ImgCarrousel'
import './ProyectoItem.scss'

function ProyectoItem({proyecto}) {
    const clase = `ProyectoItem ${proyecto.clases}`

    return (
        <div className={clase}>
            <div className='logoTitle'>
                {
                    proyecto.imgLogo ?
                        <img src={proyecto.imgLogo} alt={`Logo de ${proyecto.title}`} />
                    :
                        <h1>{proyecto.title}</h1>
                }
            </div>
            <div className='video'>
                <div className="containerVideo">
                    <iframe width="560" height="315" src={proyecto.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
            </div>
            {/* <iframe className='video' width="560" height="560" src="https://www.youtube.com/embed/Cr8K88UcO0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* carrusel de imágenes */}
            <div className='carouselPhotos'>
                {/* <img
                    className='imgFluid'
                    src="https://www.thisiscolossal.com/wp-content/uploads/2022/07/vogelsang-1.jpg"
                    alt="Third slide"
                /> */}
                <ImgCarrousel/>
            </div>
            {/* tecnologías usadas */}
            <div className='technologies'>
                TECNOLOGIAS logos, con componentes cada uno que al abrirse explica el programa o lenguaje y habilidad personal en la misma
            </div>
            {/* descripción del sitio */}
            <div className='description'>
                DESCRIPCION logos, con componentes cada uno que al abrirse explica el programa o lenguaje y habilidad personal en la misma
            </div>
            <div className="buttons">
                <Button1 className='visitSite' text={'Visitar sitio'}/>
            </div>
            {/* <div>flecha abajo</div> */}
        </div>
    )
}

export default ProyectoItem