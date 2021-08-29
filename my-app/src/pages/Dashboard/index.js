import React from 'react'
import { ButtonLogin, ButtonRegister, Header, DashboardStyled, HeaderDiv } from './DashboardStyles'
import logo from '../../assets/images/pipoca.png'
import { Link } from 'react-router-dom'
import CustomCarousel from '../../components/CustomCarousel'

const Dashboard = () => {
    return (
        <>
            <DashboardStyled> 
                <Header>
                    <img src={logo} alt="Logo" style={{width: '4%', height: '80%', paddingLeft: '12px',  paddingTop: '5px'}}/>
                    <HeaderDiv>
                        <Link to={'/login'} >
                            <ButtonLogin>ENTRAR</ButtonLogin>
                        </Link>
                        <Link to={'/register'} >
                            <ButtonRegister>Criar conta</ButtonRegister>
                        </Link>  
                    </HeaderDiv>
                </Header>

                <CustomCarousel />
            </DashboardStyled>

        </>
    )
}

export default Dashboard