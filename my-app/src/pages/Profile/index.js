import React from 'react'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import { ProfileStyle } from './profileStyle'

const Profile = () => {
    return (
        <>
            <SidebarStyledComponent />
            <HeaderStyledComponent />
            <ProfileStyle></ProfileStyle>
           
        </>
    )
}

export default Profile