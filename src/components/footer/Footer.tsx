import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../buttons/Button1/Button1";
import "./Footer.scss";
function Footer() {
    return (
        <footer className="bg-dark">
            <div>
                <Link to="/">Home</Link>
                Sobre mi
            </div>
            <nav>
                <h2>Social Media</h2>
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
            </nav>
            <div>
                <h2>contacto</h2>
                <p>cazalapedro@gmail.com</p>
                <div className="btns">
                            <button type="button" className="btn btn-outline-primary">
                                <Link to="/contacto" >
                                    <i className="bi bi-envelope"></i> Contacto
                                </Link>
                            </button>
                        </div>
            </div>
        </footer>
    );
}

export default Footer;
