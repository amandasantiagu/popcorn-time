import React from 'react'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from './loginStyles'
import { GiPopcorn } from 'react-icons/gi'

const Login = () => {
    return (
        <>
        <LoginStyle>
            <CardLogin>
                <GiPopcorn style={{color: 'green'}} size={50}/>
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