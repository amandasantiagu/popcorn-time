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
                  cookies.set('username', username)
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
      }).catch(function (response) {
        console.log(response);
      });
            })
            .catch((error) => {
              console.error("Error:", error);
              toast.error('Senha ou usuario Invalidos') 
            });
    }

    return (
        <>
        <LoginStyle>
            <CardLogin>
                <img src={logo} alt="Logo" style={{width: '25%', marginBottom: '12px'}}/>
                <LoginText>Fa??a seu Login</LoginText>

                <InputText > Email </InputText>
                <InputLogin id="email" type="text" onChange={(e) => setUsername(e.target.value)} />

                <InputText> Senha </InputText>             
                <InputLogin id="senha" type="password" onChange={(e) => setFieldValuePassword(e.target.value)}/>


                {username && fieldValuePassword ? 
                      <ButtonStyle type="submit" onClick={() => submitLogin()} > ENTRAR </ButtonStyle>
                 : <ButtonStyle disabled style={{backgroundColor:'#008c496b', color:'#008c496b' }}> ENTRAR </ButtonStyle> }                           

                   N??o possui Conta? <Link to={'/register'}>Criar Conta</Link>                
            </CardLogin>
        </LoginStyle>
        </>
    )
}

export default Login