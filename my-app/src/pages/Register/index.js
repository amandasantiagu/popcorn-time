import React from 'react'
import { GiPopcorn } from 'react-icons/gi'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from '../Login/loginStyles'

const Register = () => {
    return (
        <LoginStyle>
            <CardLogin>
                <GiPopcorn style={{color: 'green'}} size={50}/>
                <LoginText>Crie a sua Conta!</LoginText>
                <InputText> E-mail</InputText>
                <InputLogin type="text" />
                <InputText> Cadastre uma senha</InputText>             
                <InputLogin type="password" />
                <ButtonStyle> PRÓXIMO </ButtonStyle>
                <InputText>Já possui conta?</InputText>
            </CardLogin>
        </LoginStyle>
    )
}

export default Register