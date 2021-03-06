import React from 'react'
import {  HeaderProf, Pipocando, MainStyle,} from './HeaderMainStyles'
import logo from '../../assets/images/pipoca.png'
import {ImExit} from 'react-icons/im'
import { Link } from 'react-router-dom'

const HeaderStyledComponent = () => {
    return (
        <>
            <MainStyle>
                <HeaderProf>
                    <img src={logo} alt="Logo" style={{width: 'auto', height:'75%', paddingLeft: '0.5rem' }}/>
                    <Pipocando> Hora da Pipoca </Pipocando>
                    <Link to={'/'}>
                        <ImExit size={30} style={{color: '#e48f93' , paddingRight: '3rem',}} /> 
                    </Link>
                </HeaderProf>                
            </MainStyle>
        </>
    )
}

export default HeaderStyledComponent