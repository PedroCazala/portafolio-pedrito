import { Link } from "react-router-dom";
import "./Curriculum.scss";
import ViewCV from "./ViewCV";

function Curriculum() {
    return (
        <div className="Curriculum">
            <h1>Curriculum</h1>
            <Link to={process.env.PUBLIC_URL +'/cv.pdf'}>
                <button type="button" className="btn btn-dark">
                    <i className="bi bi-file-pdf"></i> Ver
                </button>
            </Link>
            <button type="button" className="btn btn-primary">
                <i className="bi bi-download"></i> Descargar
            </button>
            <ViewCV />
        </div>
    );
}

export default Curriculum;
