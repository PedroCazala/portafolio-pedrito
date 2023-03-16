import { NavLink } from "react-router-dom";
import './Header.scss'

function Header() {
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Pedro Cazalá
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/proyectos">
                                    Proyectos
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/habilidades">
                                    Habilidades
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/educacion">
                                    Educación
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sobre-mi">
                                    Sobre mi
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">
                                    Contacto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/curriculum">
                                    Curriculum
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-md-auto">
                            <li className="nav-item">
                                <a
                                    href="https://github.com/PedroCazala"
                                    target="_blank" rel="noreferrer" 
                                    className="nav-link"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://www.linkedin.com/in/pedro-cazal%C3%A1-22563b21a/"
                                    target="_blank" rel="noreferrer" 
                                    className="nav-link"
                                >
                                    <i className="bi bi-linkedin"></i> Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
