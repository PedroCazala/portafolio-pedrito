import React from 'react'
import './Button1.scss'
function Button1({text,link}) {
    return (
        <button className='button1'>
            <a href={link} target='_blank' rel="noreferrer">
                {text}
            </a>
        </button>
    )
}

export default Button1