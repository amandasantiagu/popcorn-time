import React from 'react'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from './loginStyles'
import logo from '../../assets/images/pipoca.png'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Faça seu Login</LoginText>
                <InputText> Email</InputText>
                <InputLogin type="text" />
                <InputText> Senha </InputText>             
                <InputLogin type="password" />
                <Link to={'/home'} style={{width: '100%', display: 'flex', alignItems: 'center',
                 justifyContent: 'center'}}>
                    <ButtonStyle> ENTRAR </ButtonStyle>
                </Link>
                <InputText>Não possui Conta?</InputText>
            </CardLogin>
        </LoginStyle>
        </>
    )
}

export default Login