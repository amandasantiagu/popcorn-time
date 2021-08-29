import React from 'react'
import {  HeaderProf, InputLogin, Pipocando, MainStyle, ButtonSearch, AlignItems } from './HeaderMainStyles'
import logo from '../../assets/images/pipoca.png'
import {ImExit} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'

const HeaderStyledComponent = () => {
    return (
        <>
            <MainStyle>
                <HeaderProf>
                    <img src={logo} alt="Logo" style={{width: '3.5%', height:'75%', paddingLeft: '0.5rem' }}/>
                    <Pipocando> Hora da Pipoca </Pipocando>
                    <ImExit size={20} style={{color: '#e48f93' , paddingRight: '3rem', paddingLeft: '3rem'}} />   
                </HeaderProf>                
            </MainStyle>
        </>
    )
}

export default HeaderStyledComponent