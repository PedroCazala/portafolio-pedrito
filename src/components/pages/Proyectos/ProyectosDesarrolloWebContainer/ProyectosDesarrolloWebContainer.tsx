import React from "react";
import { Link } from "react-router-dom";
import { IProyectoWeb } from "../../../../interfaces/proyectoWeb.interface";
// import ProyectoItem from '../ProyectoItem/ProyectoItem'
import { proyectos } from "./arrayProyectos";
import "./ProyectosDesarrolloWebContainer.scss";

function ProyectosContainer() {
    const proyectosArray = proyectos.map((proyecto: IProyectoWeb) => {
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
                        <div className="card-text">
                            {
                                proyecto.estado === "En proceso" ? (
                                    <span className="badge bg-danger w-100 p-2 state">
                                        En proceso
                                    </span>
                                ) : proyecto.estado === "Por iniciar" ? (
                                    <span className="badge bg-success w-100 p-2 state">
                                        Por iniciar
                                    </span>
                                ) : (
                                    false
                                )
                            }
                            <div className="skills">
                                {proyecto.technologies.map(
                                    (technology) => (
                                        <span
                                            className="badge bg-dark"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    })
    return (
        <div className="ProyectoContainer">
            {
                proyectosArray.reverse()
            }
        </div>
    );
}

export default ProyectosContainer;
