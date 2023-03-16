import { Link } from "react-router-dom";
import "./IndexContainer.scss";

function IndexContainer() {
    return (
        <div className="IndexContainer">
            <div className="imgBtns">
                <img
                    src="/ImgCel.png"
                    alt="Imagen de Pedro Cazalá"
                    className="ImgPedro cel"
                />
                <img
                    src="/ImgPc.png"
                    alt="Imagen de Pedro Cazalá"
                    className="ImgPedro pc"
                />
                <div className="btnIndex">
                    <Link to="/proyectos" className="btnProyectos">
                        <button type="button" className="btn btn-primary">
                            Proyectos
                        </button>
                    </Link>
                    <Link to="/habilidades" className="btnHabilidades">
                        <button type="button" className="btn btn-dark">
                            Habilidades
                        </button>
                    </Link>
                </div>
            </div>
            {/* <h1>HOLA</h1>
                <p>PORTAFOLIO DE PEDRO</p>
                <Button1 text='Enviar'/> */}
            {/* <Link to="/habilidades"><TextButton text='habilidades'/></Link>
                <Link to="/desarrolloWeb"><TextButton text='desarrollo web'/></Link>
                <Link to="/diseño"><TextButton text='Diseño'/></Link>
                <Link to="/contacto"><TextButton text='contacto'/></Link> */}
        </div>
    );
}

export default IndexContainer;
