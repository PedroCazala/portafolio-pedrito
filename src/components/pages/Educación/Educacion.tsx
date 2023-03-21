import DesarrolloWebFullStack from "./DesarrolloWebFullStack";
import "./Educacion.scss";

function Educacion() {
    return (
        <div className="Educacion">
            <p> </p>
            <h1>Educación</h1>
            {/* <hr /> */}
            <h2>Carrera de Desarrollo Web Full Stack | Coder House</h2>
            <button type="button" className="btn btn-secondary">
                <a
                    href="https://www.coderhouse.com/certificados/631fbd2820e56600193aa71e"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                >
                    <i className="bi bi-mortarboard-fill"></i> Certificado
                </a>
            </button>
            <h4>Cursos:</h4>
            <DesarrolloWebFullStack />
            <hr />
            <h2>Idiomas</h2>
            <h5>Español</h5>
            <p>Nativo.</p>
            <h5>Ingles</h5>
            <p>Básico, estudiante.</p>
            <hr />
            <h2>Trayectoria artística</h2>
            <h6>Interprete profesional de teatro musical | ISEC</h6>
            <p>Primer año completo.</p>
            <h6>
                Licenciatura en actuación | UNA (Universidad Nacional de las
                Artes)
            </h6>
            <p>Primer año en curso.</p>
            <h6>
                Tecnicatura en Interpretación en Danza | UNA (Universidad
                Nacional de las Artes)
            </h6>
            <p>Ciclo introductorio en curso.</p>
            <hr />
            <h2>
                Bachiller en Ciencias Naturales | Escuela de Educación
                Secundaria N° 2
            </h2>
            <p>Secundario completo.</p>
            <button type="button" className="btn btn-secondary">
                <a
                    //ACOMODARRRRRRRRR
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                >
                    <i className="bi bi-mortarboard-fill"></i> Titulo analítico
                </a>
            </button>
        </div>
    );
}

export default Educacion;
