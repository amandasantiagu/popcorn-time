import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assets/images/pipoca.png'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from '../Login/loginStyles'
import { useHistory } from "react-router-dom";


const Register = () => {

  let history = useHistory();

    const [nickName, setNickName] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [fieldValueEmail, setFieldValueEmail] = React.useState('');
    const [fieldValuePassword, setFieldValuePassword] = React.useState('');

  
    const submitRegister = () => { 
        fetch(`${process.env.REACT_APP_API_OMD_BASE_URL}/users`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            mode:"cors",
            body: JSON.stringify({
              nick_name: nickName,
              full_name: fullName,
              email: fieldValueEmail,
              password: fieldValuePassword
            })
          })

            .then((response) =>             
            response.json())
            .then((data) => {
              if(data) { 
                history.push("/login");
              }
              console.log("Success:", data)
            })
            
            .catch((error) => {
              console.error("Error:", error);
            }); 
              
    }
    

    const handleBlurPassword = (e) => {
        if (setFieldValuePassword(e.target.value));
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um Password para se Cadastrar!')  
        }
       
    console.log(fieldValuePassword);
}

    const handleBlurFullName = (e) => {
        setFullName(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar um Email para se cadastrar!') 
        }
       
    console.log(fieldValueEmail);
}

    const handleBlurNickName = (e) => {
      setNickName(e.target.value);
      if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
          toast.error('Por favor coloque um nickName!')  
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
                <form></form>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Crie a sua Conta!</LoginText>
                <InputText>Nome Completo</InputText>
                <InputLogin id="fullName" type="text" onBlur={handleBlurFullName} onChange={(e) => setFullName(e.target.value)} />
               
                <InputText>Apelido</InputText>
                <InputLogin id="nickName" type="text" onBlur={handleBlurNickName} onChange={(e) => setNickName(e.target.value)} />

                <InputText> Cadastre seu E-mail</InputText>
                <InputLogin id="valueEmail" type="text" onBlur={handleBlurEmail} onChange={(e) => setFieldValueEmail(e.target.value)}/>
               
                <InputText>Senha</InputText>             
                <InputLogin id="valuePassword" onBlur={handleBlurPassword} onChange={(e) => setFieldValuePassword(e.target.value)} type="password" />
                
                {fullName && nickName && fieldValueEmail && fieldValuePassword ? 
                      <ButtonStyle type="submit" onClick={() => submitRegister()} > CRIAR </ButtonStyle>
                 : <ButtonStyle disabled style={{backgroundColor:'#008c496b', color:'#008c496b' }}> CRIAR </ButtonStyle>}            
                    Já possui conta?
                        <Link to={'/login'}>Entrar</Link>
                   
            </CardLogin>
        </LoginStyle>
    )
}

export default Register