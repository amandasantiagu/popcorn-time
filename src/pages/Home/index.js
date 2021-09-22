import React from 'react'
import CardStyled from '../../components/CardStyled'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import { HomeTitle,HomeStyle } from './homeStyles'
import {WiStars} from 'react-icons/wi'
import Cookies from 'universal-cookie';


const Home = () => {
    const cookies = new Cookies();
    return (
        <>  
            <SidebarStyledComponent />
            <HeaderStyledComponent />
            <HomeStyle>
                <HomeTitle>
                    <WiStars size={50} style={{color: '#650315'}}/>
                    Bem Vindo, {cookies.get('username')}!
                </HomeTitle>
                <CardStyled />
            </HomeStyle>
            
        </>
    )

}

export default Home