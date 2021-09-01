import React from 'react'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from './loginStyles'
import logo from '../../assets/images/pipoca.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {

    const [fieldValuePassword, setFieldValuePassword] = React.useState('');
    const [fieldValueEmail, setFieldValueEmail] = React.useState('');

    const handleBlurPassword = (e) => {
        setFieldValuePassword(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um valor no Password!')  
        }
       
    console.log(fieldValuePassword);
}

    const handleBlurEmail = (e) => {
        setFieldValueEmail(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um valor no Email!') 
        }
       
    console.log(fieldValueEmail);
}

    return (
        <>
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Faça seu Login</LoginText>

                <InputText > Email </InputText>
                <InputLogin type="text" onBlur={handleBlurEmail}/>

                <InputText> Senha </InputText>             
                <InputLogin type="password" onBlur={handleBlurPassword}/>

                <Link to={'/home'} style={{width: '100%', display: 'flex', alignItems: 'center',
                 justifyContent: 'center', textDecoration: 'none'}}>
                    <ButtonStyle> ENTRAR </ButtonStyle>
                </Link>
                   Não possui Conta? <Link to={'/register'}>Criar Conta</Link>                
            </CardLogin>
        </LoginStyle>
        </>
    )
}

export default Login