// import React, { useEffect } from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../Proyectos/ProyectosDesarrolloWebContainer/arrayProyectos";
import Button1 from "../../buttons/Button1/Button1";
// import ImgCarrousel from './imgCarrousel/ImgCarrousel'
import './ProyectoItem.scss'
import ImgCarrousel from "./imgCarrousel/ImgCarrousel";

function ProyectoItem() {
    // const clase = `ProyectoItem ${proyecto.clases}`

    const { id } = useParams();
    const [proyect, setProyect] = useState();
    useEffect(() => {
        setProyect(proyectos.find((proyecto) => proyecto.id === parseInt(id)));
    }, [id]);
    return (
        <div className="ProyectoItem">
            {proyect && (
                <>
                    <div className="logoTitle">
                        {proyect.imgLogo ? (
                            <img
                                src={proyect.imgLogo}
                                alt={`Logo de ${proyect.title}`}
                            />
                        ) : (
                            <h1>{proyect.title}</h1>
                        )}
                        <div className='video'>
                            <div className="containerVideo">
                                <iframe width="560" height="315" src={proyect.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                        {/* <div>{proyect.}</div> */}
                    </div>
                    <div>{proyect.description.body}</div>
                    <hr/>
                    <div className="btns">
                            <button type="button" className="btn btn-primary">
                                <a
                                    href={proyect.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-browser-chrome"></i> Ver
                                    Proyecto Final
                                </a>
                            </button>
                            <button type="button" className="btn btn-dark">
                                <a
                                    href={proyect.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </button>
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
                </>
            )}
        </div>
        //     <div>

        //     {/* tecnologías usadas */}
        //     <div className='technologies'>
        //         TECNOLOGIAS logos, con componentes cada uno que al abrirse explica el programa o lenguaje y habilidad personal en la misma
        //     </div>
        //     {/* descripción del sitio */}
        //     <div className='description'>
        //         DESCRIPCION logos, con componentes cada uno que al abrirse explica el programa o lenguaje y habilidad personal en la misma
        //     </div>
        //     <div className="buttons">
        //         <Button1 className='visitSite' text={'Visitar sitio'} link={proyect.link}/>
        //     </div>
        //     {/* <div className='redSocial'>
        //         <RedSocial redSocial={}/>
        //     </div> */}
        //     {/* <div>flecha abajo</div> */}
        // </div>
    );
}

export default ProyectoItem;
