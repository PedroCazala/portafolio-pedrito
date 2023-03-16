import React from "react";
import { Link } from "react-router-dom";
// import ProyectoItem from '../ProyectoItem/ProyectoItem'
import { proyectos } from "./arrayProyectos";
import "./ProyectosDesarrolloWebContainer.scss";

function ProyectosContainer() {
    return (
        <div className="ProyectoContainer">
            {proyectos.map((proyecto) => {
                return (
                    <Link to={`/proyecto/${proyecto.id}`} key={proyecto.id}>
                        <div
                            className="card border-primary mb-3"
                            style={{ maxWidth: "20rem" }}
                        >
                            <div className="card-header">
                                {proyecto.imgLogo ?
                                <img
                                    src={proyecto.imgLogo}
                                    alt={`Logo de ${proyecto.title}`}
                                    style={{
                                        width:'40%'
                                    }}
                                />
                                :
                                proyecto.title
                                }
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    {proyecto.description.title}
                                </h4>
                                <p className="card-text">
                                    {proyecto.description.body}
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
