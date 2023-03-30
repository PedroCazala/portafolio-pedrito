import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.scss'

function Header() {
    const [collapsed, setCollapsed] = useState<false|'show'>(false)
    const closeMenu = ()=>{
        setCollapsed(false)
    }
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Pedro Cazalá
                    </NavLink>
                    <button
                        className="navbar-toggler"//{`navbar-toggler ${collapsed}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"//{ariaExpanded}
                        aria-label="Toggle navigation"
                        onClick={()=>{setCollapsed(collapsed === false ? 'show':false)}}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${collapsed}`}
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/proyectos" onClick={()=>closeMenu()}>
                                    Proyectos
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/habilidades"onClick={()=>closeMenu()}>
                                    Habilidades
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/educacion"onClick={()=>closeMenu()}>
                                    Educación
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sobre-mi"onClick={()=>closeMenu()}>
                                    Sobre mi
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto"onClick={()=>closeMenu()}>
                                    Contacto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/curriculum"onClick={()=>closeMenu()}>
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
