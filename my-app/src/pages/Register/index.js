import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assets/images/pipoca.png'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from '../Login/loginStyles'

const Register = () => {

    const [fieldValuePassword, setFieldValuePassword] = React.useState('');
    const [fieldValueEmail, setFieldValueEmail] = React.useState('');

    const handleBlurPassword = (e) => {
        setFieldValuePassword(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um Password para se Cadastrar!')  
        }
       
    console.log(fieldValuePassword);
}

    const handleBlurEmail = (e) => {
        setFieldValueEmail(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um Email para se cadastrar!') 
        }
       
    console.log(fieldValueEmail);
}

    return (
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Crie a sua Conta!</LoginText>

                <InputText> Cadastre seu E-mail</InputText>
                <InputLogin type="text" onBlur={handleBlurEmail}/>

                <InputText> Cadastre uma senha</InputText>             
                <InputLogin onBlur={handleBlurPassword} type="password" />

                <Link to={'/home'} style={{width: '100%', display: 'flex', alignItems: 'center',
                 justifyContent: 'center', textDecoration: 'none'}}>
                    <ButtonStyle> PRÓXIMO </ButtonStyle>
                </Link>
                    Já possui conta?
                        <Link to={'/login'}>Entrar</Link>
                   
            </CardLogin>
        </LoginStyle>
    )
}

export default Register