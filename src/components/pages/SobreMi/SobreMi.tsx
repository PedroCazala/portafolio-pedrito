import "./SobreMi.scss";

function SobreMi() {
    return (
        <div className="SobreMi">
            <h1>Sobre mi</h1>
            <div className="contenido">
                <img src="/PedroSeñalando.png" alt="" />
                <p>
                    ¡Hola! Mi nombre es <b>Pedro</b>, soy desarrollador web.
                    Nací en San Andrés de Giles, Buenos Aires, Argentina, el 13
                    de septiembre de 1998 como el primer hijo de una familia que
                    me educó en valores, por los que siempre estaré agradecido.
                    Desde pequeño siempre he estado interesado en aprender cosas
                    nuevas.
                </p>
                <p>
                    Actualmente resido en la Ciudad Autónoma de Buenos Aires. Estudié{" "}
                    <b>Desarrollo Web Full Stack</b> en Coder House, donde
                    adquirí conocimientos en diferentes áreas de{" "}
                    <b>programación</b>,<b>diseño</b> y <b>desarrollo web</b>.
                </p>
                <p>
                    Además de mi pasión por el <b>desarrollo web</b> y el{" "}
                    <b>diseño</b>, también tengo una gran pasión por las{" "}
                    <b>artes escénicas</b>. Actualmente, estoy estudiando{" "}
                    <b>Licenciatura en Actuación</b> y{" "}
                    <b>Tecnicatura en Danza</b> en la Universidad Nacional de las
                    Artes. Me encanta la emoción de actuar y la belleza del
                    movimiento en la danza, lo que me ha llevado a explorar
                    diferentes formas de arte en el escenario.
                </p>
                <p>
                    También me gusta <b>emprender</b> y explorar nuevas
                    oportunidades. Me interesa trabajar en proyectos independientes
                    y desarrollar mis habilidades en diferentes áreas. En
                    ocasiones, trabajo como{" "}
                    <b>fotógrafo</b>, capturando momentos únicos y emocionantes,
                    y me encanta el desafío de crear imágenes que cuenten una
                    historia.
                </p>
                <p>
                    Creo que mi experiencia en diferentes áreas de la
                    creatividad me ha ayudado a desarrollar una perspectiva
                    única y un enfoque creativo para mi trabajo en el{" "}
                    <b>desarrollo web</b>. Me encanta encontrar soluciones
                    innovadoras y creativas a los problemas y desafíos que
                    enfrento, y estoy emocionado de seguir creciendo y
                    aprendiendo en todas las áreas que me apasionan.
                </p>
                <p>
                    Mi objetivo como <b>desarrollador web</b> es crear
                    soluciones creativas y funcionales para problemas reales en
                    línea. Siempre busco trabajar en proyectos interesantes y
                    emocionantes, y estoy disponible para colaborar en cualquier
                    proyecto que requiera mis habilidades y conocimientos.
                </p>
                <p>
                    ¡Gracias por visitar mi sitio web, espero poder trabajar
                    contigo en el futuro!
                </p>
                <hr />
                <h2>Proyectos personales</h2>
                <h3>pedrito.fotografia</h3>
                <p>
                    Se trata de una cuanta de instagram en donde comparto
                    trabajos relacionados a video y fotografía
                </p>
                <div className="btns">
                    <button type="button" className="btn btn-primary">
                        <a
                            href="https://www.instagram.com/pedrito.fotografia/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link"
                        >
                            <i className="bi bi-instagram"></i>
                            pedrito.fotografia
                        </a>
                    </button>
                    <button type="button" className="btn btn-info">
                        <a
                            href="https://web.facebook.com/PedroCazalaFotografia"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-link"
                        >
                            <i className="bi bi-facebook"></i> Facebook
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
