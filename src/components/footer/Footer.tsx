import React from 'react'
import { Link } from 'react-router-dom'
import Button1 from '../buttons/Button1/Button1'
import './Footer.scss'
function Footer() {
    return (
        <footer>
            <div>
                <Link to='/'>Home</Link>
                Sobre mi
            </div>
            <div>
                <h2>Social Media</h2>
                <ul>
                    <li>linkedin</li>
                    <li>instagram</li>
                    <li>github</li>
                </ul>
            </div>
            <div>
                <h2>contacto</h2>
                email
                <br />
                <Button1 text={'enviar'}></Button1>
            </div>
        </footer>
    )
}

export default Footer