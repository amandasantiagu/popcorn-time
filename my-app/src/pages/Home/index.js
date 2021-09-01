import React from 'react'
import CardStyled from '../../components/CardStyled'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'


const Home = () => {
    return (
        <>   
            <SidebarStyledComponent />
            <HeaderStyledComponent />   
            <CardStyled /> 
            
        </>
    )
}

export default Home