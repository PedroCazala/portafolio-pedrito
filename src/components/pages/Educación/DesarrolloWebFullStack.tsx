import "./DesarrolloWebFullStack.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";

function DesarrolloWebFullStack() {
    return (
        <div className="accordion DesarrolloWebFullStack" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        Desarrollo web <AiFillHtml5 /> <DiCss3 />
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <p>
                            En este curso aprendí sobre maquetado y diseño de un
                            sitio web.
                        </p>
                        <h5>Proyecto final</h5>
                        <p>
                            Como proyecto final se diseñó y maquetó un
                            e-commerce, este no contaba con funcionalidad.
                        </p>
                        <div className="btns">
                            <button type="button" className="btn btn-primary">
                                <a
                                    href="https://pedrocazala.github.io/Rayuela/"
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
                                    href="https://github.com/PedroCazala/Rayuela"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <a
                                    href="https://www.coderhouse.com/certificados/614927f6ccf3e100571cffa8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-mortarboard-fill"></i>{" "}
                                    Certificado
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        JavaScript <SiJavascript /> 
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <p>
                            En este curso, adquirí las habilidades necesarias
                            para crear aplicaciones web interactivas y
                            dinámicas.
                        </p>
                        <h5>Proyecto final</h5>
                        <p>
                            Tomando como punto de partida el proyecto anterior,
                            se han agregado nuevas funcionalidades en la sección
                            del catálogo, como un buscador que permite filtrar
                            por nombre, la opción de ordenar por precio o
                            alfabéticamente, y una mejora en el carrito con
                            almacenamiento en storage y la posibilidad de
                            aumentar/disminuir la cantidad, borrar un producto o
                            vaciar todo el carrito. Estas mejoras buscan mejorar
                            la experiencia del usuario al buscar, ordenar y
                            comprar productos de manera eficiente.
                        </p>
                        <div className="btns">
                            <button type="button" className="btn btn-primary">
                                <a
                                    href="https://pedrocazala.github.io/Rayuela/pages/catalogo.html"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-browser-chrome"></i> Ver
                                    Catálogo
                                </a>
                            </button>
                            <button type="button" className="btn btn-primary">
                                <a
                                    href="https://pedrocazala.github.io/Rayuela/pages/carrito.html"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-cart"></i> Ver carrito
                                </a>
                            </button>
                            <button type="button" className="btn btn-dark">
                                <a
                                    href="https://github.com/PedroCazala/Rayuela"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <a
                                    href="https://www.coderhouse.com/certificados/614927f6ccf3e100571cffa8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-mortarboard-fill"></i>{" "}
                                    Certificado
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        React js <FaReact />
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <p>
                            Aprendí a crear componentes en JavaScript, consumir
                            datos con Firebase y construir Single Page
                            Applications (SPA). Ahora puedo diseñar y
                            desarrollar aplicaciones web interactivas y
                            dinámicas con mayor eficiencia y calidad.
                        </p>
                        <h5>Proyecto final</h5>
                        <p>
                            Como proyecto final se realizó un e-commerce, en el
                            cual no se hizo énfasis en el diseño, sino en la
                            utilización de la librería React.
                        </p>
                        <div className="btns">
                            <button type="button" className="btn btn-primary">
                                <a
                                    href="https://notanmacho.netlify.app/"
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
                                    href="https://github.com/PedroCazala/notanmacho"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <a
                                    href="https://www.coderhouse.com/certificados/62150820209568002e07ac9a"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-mortarboard-fill"></i>{" "}
                                    Certificado
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        Programación Backend <GrNode />
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <p>
                            Aprendí a crear componentes en JavaScript, consumir
                            datos con Firebase y construir Single Page
                            Applications (SPA). Ahora puedo diseñar y
                            desarrollar aplicaciones web interactivas y
                            dinámicas con mayor eficiencia y calidad.
                        </p>
                        <h5>Proyecto final</h5>
                        <p>
                            Como proyecto final se realizó un e-commerce, en el
                            cual no se hizo énfasis en el diseño, sino en la
                            utilización de la librería React.
                        </p>
                        <div className="btns">
                            <button type="button" className="btn btn-primary">
                                <a
                                    //SLUCIONARRRRRRRRRRR, FALTA SUBIR A OTRA plataforma xq heroku no es mas gratis
                                    href="/"
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
                                    href="https://github.com/PedroCazala/proyectoFinal-backend_CoderHouse"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <a
                                    href="https://www.coderhouse.com/certificados/6316b2ce6f0d1200193d8737"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-link"
                                >
                                    <i className="bi bi-mortarboard-fill"></i>{" "}
                                    Certificado
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesarrolloWebFullStack;
