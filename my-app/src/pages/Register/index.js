import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/pipoca.png'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from '../Login/loginStyles'

const Register = () => {
    return (
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Crie a sua Conta!</LoginText>
                <InputText> E-mail</InputText>
                <InputLogin type="text" />
                <InputText> Cadastre uma senha</InputText>             
                <InputLogin type="password" />
                <Link to={'/home'} style={{width: '100%', display: 'flex', alignItems: 'center',
                 justifyContent: 'center'}}>
                    <ButtonStyle> PRÓXIMO </ButtonStyle>
                </Link>
                <InputText>Já possui conta?</InputText>
            </CardLogin>
        </LoginStyle>
    )
}

export default Register