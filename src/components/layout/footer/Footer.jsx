import React from 'react'
import './Footer.css'

import {FaFacebookF, FaInstagram} from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='ufscar'>
                <img src="../src/assets/logos/ufscar.png" alt="UfSCar" />
            </div>
            <div className='contact'>
                <h4>Contato:</h4>
                <p>pomardocerrado@gmail.com</p>
            </div>
            <div className='icons'>
                <a href="https://www.facebook.com/AArcadoCerrado">
                    <FaFacebookF/>
                </a>
                <a href="https://www.instagram.com/aarcadocerrado/">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    )
}

export default Footer