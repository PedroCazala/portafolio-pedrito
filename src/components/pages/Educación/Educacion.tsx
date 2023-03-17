import "./Educacion.scss";

function Educacion() {
    return (
        <div className="Educacion">
            <p> </p>
            <h1>Educación</h1>
            <hr />
            <h2>Desarrollo Web Full Stack | Coder House</h2>
            <p><b>Cursos:</b></p>
            <h3>Desarrollo web</h3>
            <p>En este curso aprendí sobre maquetado y diseño de un sitio web.</p>
            <h5>Proyecto final</h5>
            <p>Como proyecto final se diseñó y maquetó un e-commerce, este no contaba con funcionalidad.</p>
            <div className="btns">
                <button type="button" className="btn btn-primary">
                    <a
                        href="https://pedrocazala.github.io/Rayuela/"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link"
                    >
                        <i className="bi bi-browser-chrome"></i> Ver Proyecto Final
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
                        <i className="bi bi-mortarboard-fill"></i> Certificado
                    </a>
                </button>
            </div>
            <h3>JavaScript</h3>
            <p>En este curso, adquirí las habilidades necesarias para crear aplicaciones web interactivas y dinámicas.</p>
            <h5>Proyecto final</h5>
            <p>Tomando como punto de partida el proyecto anterior, se han agregado nuevas funcionalidades en la sección del catálogo, como un buscador que permite filtrar por nombre, la opción de ordenar por precio o alfabéticamente, y una mejora en el carrito con almacenamiento en storage y la posibilidad de aumentar/disminuir la cantidad, borrar un producto o vaciar todo el carrito. Estas mejoras buscan mejorar la experiencia del usuario al buscar, ordenar y comprar productos de manera eficiente.</p>
            <div className="btns">
                <button type="button" className="btn btn-primary">
                    <a
                        href="https://pedrocazala.github.io/Rayuela/pages/catalogo.html"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link"
                    >
                        <i className="bi bi-browser-chrome"></i> Ver Catálogo
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
                        <i className="bi bi-mortarboard-fill"></i> Certificado
                    </a>
                </button>
            </div>
            <h3>React. Js</h3>
            <h3>Programación BackEnd</h3>
            <hr />
        </div>
    );
}

export default Educacion;
