import React from 'react'
import { ButtonStyle, CardLogin, InputLogin, InputText, LoginStyle, LoginText } from './loginStyles'
import logo from '../../assets/images/pipoca.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

export const Login = () => {

  let history = useHistory();

    const [username, setUsername] = React.useState('');
    const [fieldValuePassword, setFieldValuePassword] = React.useState('');
    const [token, setToken] = React.useState('');

    const cookies = new Cookies();

   const submitLogin = () => { 
        axios.post('https://powerful-garden-24200.herokuapp.com/login/', new URLSearchParams({
            username: username, //gave the values directly for testing
            password: fieldValuePassword ,
          }))
            .then((response) => {
                setToken(response.data.access_token)
                if(response.data.access_token) {
                  cookies.set('myToken', response.data.access_token)
                  history.push("/home");
                }                  
            })
            .then((data) => {
              console.log("Success:", data)
              fetch('https://powerful-garden-24200.herokuapp.com/users-me', {
              method: 'GET',
              headers: {
              'Authorization': 'Bearer ' + cookies.get('myToken')
            }
    })
      .then(function (response) {
        console.log(response);
        cookies.set('username', response.username)
      }).catch(function (response) {
        console.log(response);
      });
            })
            .catch((error) => {
              console.error("Error:", error);
              toast.error('Senha ou usuario Invalidos') 
            });
    }

  
    


//     const [fieldValuePassword, setFieldValuePassword] = React.useState('');
//     const [fieldValueEmail, setFieldValueEmail] = React.useState('');

//     const handleBlurPassword = (e) => {
//         setFieldValuePassword(e.target.value);
//         if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
//             toast.error('Voce precisa colocar um valor no Password!')  
//         }
       
//     console.log(fieldValuePassword);
// }

//     const handleBlurEmail = (e) => {
//         setFieldValueEmail(e.target.value);
//         if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
//             toast.error('Voce precisa colocar um valor no Email!') 
//         }
       
//     console.log(fieldValueEmail);
// }

    return (
        <>
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Faça seu Login</LoginText>

                <InputText > Email </InputText>
                <InputLogin id="email" type="text" onChange={(e) => setUsername(e.target.value)} />

                <InputText> Senha </InputText>             
                <InputLogin id="senha" type="password" onChange={(e) => setFieldValuePassword(e.target.value)}/>


                {username && fieldValuePassword ? 
                      <ButtonStyle type="submit" onClick={() => submitLogin()} > ENTRAR </ButtonStyle>
                 : <ButtonStyle disabled style={{backgroundColor:'#008c496b', color:'#008c496b' }}> ENTRAR </ButtonStyle> }                           

                   Não possui Conta? <Link to={'/register'}>Criar Conta</Link>                
            </CardLogin>
        </LoginStyle>
        </>
    )
}

export default Login