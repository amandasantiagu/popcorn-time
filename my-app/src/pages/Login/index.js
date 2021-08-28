import React from 'react'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from './loginStyles'
import logo from '../../assets/images/pipoca.png'


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
                <ButtonStyle> ENTRAR </ButtonStyle>
                <InputText>Não possui Conta?</InputText>
            </CardLogin>
        </LoginStyle>
        </>
    )
}

export default Login