import React from 'react'
import { GiPopcorn } from 'react-icons/gi'
import { ButtonLogin, ButtonRegister, Header, HomeStyled } from './homeStyles'

const Home = () => {
    return (
        <>
            <HomeStyled> 
                <Header>
                    <GiPopcorn style={{color: 'white', marginTop: '2px'}} size={40}/>
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