import React from 'react'
import { ButtonLogin, ButtonRegister, Header, HomeStyled } from './homeStyles'
import logo from '../../assets/images/pipoca.png'

const Home = () => {
    return (
        <>
            <HomeStyled> 
                <Header>
                    <img src={logo} alt="Logo" style={{width: '5%', height: '90%', paddingLeft: '12px',  paddingTop: '2px'}}/>
                    <div style={{width:'100%', justifyContent: 'flex-end', display: 'flex'}}>
                        <ButtonLogin>ENTRAR</ButtonLogin>
                        <ButtonRegister>Criar conta</ButtonRegister>
                    </div>
                </Header>
            </HomeStyled>
        
        </>
    )
}

export default Home