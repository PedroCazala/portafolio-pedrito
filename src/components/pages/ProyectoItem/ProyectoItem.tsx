import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../Proyectos/ProyectosDesarrolloWebContainer/arrayProyectos";
import "./ProyectoItem.scss";
import ImgCarrousel from "./imgCarrousel/ImgCarrousel";
import { IProyectoWeb } from "../../../interfaces/proyectoWeb.iterface";

function ProyectoItem() {
    // const clase = `ProyectoItem ${proyecto.clases}`

    const { id } = useParams();
    const [proyect, setProyect] = useState<IProyectoWeb | null>();
    useEffect(() => {
        id &&
            setProyect(
                proyectos.find((proyecto) => proyecto.id === parseInt(id))
            );
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
                        {/* <div>{proyect.}</div> */}
                    </div>
                    <div className="video">
                        <div className="containerVideo">
                            <iframe
                                width="560"
                                height="315"
                                src={proyect.video}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                // allowfullscreen="true"
                            ></iframe>
                        </div>
                    </div>
                    <div className="description">{proyect.description}</div>
                    <div className="btns buttons">
                        <button type="button" className="btn btn-primary">
                            <a
                                href={proyect.link}
                                target="_blank"
                                rel="noreferrer"
                                className="nav-link"
                            >
                                <i className="bi bi-browser-chrome"></i> Ver
                                sitio web
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
                    <div className="technologies">
                        <h3>Tecnologías y habilidades</h3>
                        <ul className="list-group list-group-flush">
                            {proyect.technologies.map(technology=>
                                <li className="list-group-item">{technology}</li>
                                )}
                        </ul>
                    </div>
                    <div className="photos">
                        <ImgCarrousel
                            imgs={proyect.images}
                            nameOfProyect={proyect.title}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default ProyectoItem;
