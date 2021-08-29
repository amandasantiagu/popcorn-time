import React from 'react'
import { ButtonLogin, ButtonRegister, Header, HomeStyled } from './homeStyles'
import logo from '../../assets/images/pipoca.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <HomeStyled> 
                <Header>
                    <img src={logo} alt="Logo" style={{width: '5%', height: '90%', paddingLeft: '12px',  paddingTop: '2px'}}/>
                    <div style={{width:'100%', justifyContent: 'flex-end', display: 'flex'}}>
                        <Link to={'/login'}>
                            <ButtonLogin>ENTRAR</ButtonLogin>
                        </Link>
                        <Link to={'/register'}>
                            <ButtonRegister>Criar conta</ButtonRegister>
                        </Link>  
                    </div>
                </Header>
            </HomeStyled>
        
        </>
    )
}

export default Home