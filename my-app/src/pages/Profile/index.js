import React from 'react'
import { Header } from '../Home/homeStyles'
import { ButtonsDiv, ButtonsSidebar, InputLogin, Pipocando, ProfileStyle, SidebarStyle } from './profileStyle'
import logo from '../../assets/images/pipoca.png'
import { MdFavorite, MdMovieFilter} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiHomeHeartLine} from 'react-icons/ri'
import {BiSearchAlt2} from 'react-icons/bi'
import {ImExit} from 'react-icons/im'

const Profile = () => {
    return (
        <>
            <ProfileStyle>
                <SidebarStyle>
                    <img src={logo} alt="Logo" style={{width: '65%', paddingLeft: '10px',  paddingTop: '6px'}}/>
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
                <Header>
                    <Pipocando> Hora da Pipoca </Pipocando>
                    <InputLogin placeholder="Pesquise" size={10} style={{color: '#F9E9C1'}} />
                    <BiSearchAlt2 size={20} style={{color: '#F9E9C1', marginTop:'16px', marginLeft:'5px'}}/>    
                    <ImExit size={20} style={{color: '#e48f93', marginTop:'16px', marginLeft:'5px'}} />                   
                </Header>                
            </ProfileStyle>
        </>
    )
}

export default Profile