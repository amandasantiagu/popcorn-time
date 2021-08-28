import React from 'react'
import { ButtonsDiv, ButtonsSidebar, HeaderProf, InputLogin, Pipocando, SidebarStyle, MainStyle } from './HeaderMainStyles'
import logo from '../../assets/images/pipoca.png'
import { MdFavorite, MdMovieFilter} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiHomeHeartLine} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'

const HeaderStyledComponent = () => {
    return (
        <>
            <MainStyle>
                <SidebarStyle>
                    <ButtonsDiv>
                        <ButtonsSidebar>
                            <RiHomeHeartLine size={30} style={{color: '#F9E9C1'}} />
                        </ButtonsSidebar>
                        <ButtonsSidebar>
                            <MdFavorite size={30} style={{color: '#F9E9C1'}}/>
                        </ButtonsSidebar>
                        <ButtonsSidebar>
                            <MdMovieFilter size={30} style={{color: '#F9E9C1'}}/>
                        </ButtonsSidebar>
                        <ButtonsSidebar>
                            <CgProfile size={30} style={{color: '#F9E9C1'}}/>
                        </ButtonsSidebar>
                    </ButtonsDiv>
                </SidebarStyle>
                <HeaderProf>
                    <img src={logo} alt="Logo" style={{width: '4%', height:'80%', paddingLeft: '0.7rem' }}/>
                    <Pipocando> Hora da Pipoca </Pipocando>
                    <InputLogin placeholder="Pesquise..." size={10} style={{color: '#F9E9C1'}} />
                   
                    <ImExit size={20} style={{color: '#e48f93' , paddingRight: '3rem', paddingLeft: '3rem'}} />                   
                </HeaderProf>                
            </MainStyle>
        </>
    )
}

export default HeaderStyledComponent