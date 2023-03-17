import "./Contacto.scss";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

export default function Contacto() {
    return (
        <div className="Contacto">
            <h1>Contacto</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu e-mail"
                    />
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Mensaje:">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                    />
                </FloatingLabel>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </Form>
            <hr />
            <div className="page-header">
                <h2>También puedes contactarme a traves de:</h2>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            href="https://github.com/PedroCazala"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link"
                        >
                            <i className="bi bi-github"></i> GitHub
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.linkedin.com/in/pedro-cazal%C3%A1-22563b21a/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link"
                        >
                            <i className="bi bi-linkedin"></i> Linkedin
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.instagram.com/pedrocazala/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link"
                        >
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}