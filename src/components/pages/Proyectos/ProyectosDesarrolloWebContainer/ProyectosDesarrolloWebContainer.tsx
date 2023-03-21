import React from "react";
import { Link } from "react-router-dom";
import { IProyectoWeb } from "../../../../interfaces/proyectoWeb.iterface";
// import ProyectoItem from '../ProyectoItem/ProyectoItem'
import { proyectos } from "./arrayProyectos";
import "./ProyectosDesarrolloWebContainer.scss";

function ProyectosContainer() {
    return (
        <div className="ProyectoContainer">
            {proyectos.map((proyecto: IProyectoWeb) => {
                return (
                    <Link to={`/proyecto/${proyecto.id}`} key={proyecto.id}>
                        <div
                            className="card border-primary mb-3"
                            style={{ maxWidth: "20rem" }}
                        >
                            <div className="card-header">
                                {proyecto.imgLogo ? (
                                    <img
                                        src={proyecto.imgLogo}
                                        alt={`Logo de ${proyecto.title}`}
                                        style={{
                                            width: "40%",
                                        }}
                                    />
                                ) : (
                                    proyecto.title
                                )}
                            </div>
                            <img
                                src={proyecto.images[0]}
                                alt="Imagen de proyecto"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="skills">

                                        {proyecto.technologies.map((technology) => (
                                            <span className="badge bg-dark">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProyectosContainer;
