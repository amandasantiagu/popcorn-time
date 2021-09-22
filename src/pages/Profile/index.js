import React from 'react'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import ProfilePessoal from '../../components/ProfilePessoal'
import { ProfileStyle, ProfileTitle, ProfileMainContainer} from './profileStyle'
import {WiStars} from 'react-icons/wi'

const Profile = () => {
    return (
        <>
            <SidebarStyledComponent />
            <HeaderStyledComponent />

            <ProfileStyle>
                <ProfileTitle>
                    <WiStars size={50} style={{color: '#650315'}}/>
                        PERFIL
                </ProfileTitle>
                <ProfileMainContainer>
                    <ProfilePessoal />
                </ProfileMainContainer>

            </ProfileStyle>
           
        </>
    )
}

export default Profile