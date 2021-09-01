import React from 'react'
import CardStyled from '../../components/CardStyled'
import HomeMain from '../../components/HomeMain'
import HomeRankList from '../../components/HomeRankList'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import { HomeTitle,HomeStyle, HomeMainContainer, HomeNews, HomeRankings, Main } from './homeStyles'
import {WiStars} from 'react-icons/wi'


const Home = () => {
    return (
        <>  
            <SidebarStyledComponent />
            <HeaderStyledComponent />
            <HomeStyle>
                <HomeTitle>
                    <WiStars size={50} style={{color: '#650315'}}/>
                    Bem Vindo, -username-!
                </HomeTitle>
                <CardStyled />
                {/* <HomeMainContainer>

                    <HomeNews>
                        <HomeMain />
                    </HomeNews>

                    <HomeRankings>
                        <HomeRankList />
                    </HomeRankings>

                </HomeMainContainer>  */}
            </HomeStyle>
            
        </>
    )

}

export default Home