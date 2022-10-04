import React from 'react'
import './IndexContainer.scss'
// import Button1 from '../buttons/Button1/Button1'
import {Link} from 'react-router-dom'
import TextButton from '../buttons/TextButton/TextButton'

function IndexContainer() {
    return (
            <div className='IndexContainer'>
                {/* <h1>HOLA</h1>
                <p>PORTAFOLIO DE PEDRO</p>
                lals
                <Button1 text='Enviar'/> */}
                <Link to="/habilidades"><TextButton text='habilidades'/></Link>
                <Link to="/desarrolloWeb"><TextButton text='desarrollo web'/></Link>
                <Link to="/diseño"><TextButton text='Diseño'/></Link>
                <Link to="/contacto"><TextButton text='contacto'/></Link>
            </div>
    )
}

export default IndexContainer