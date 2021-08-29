import React from 'react'
import { ButtonsDiv, ButtonsSidebar, SidebarStyle,} from './SidebarStyles'
import { MdFavorite, MdMovieFilter} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiHomeHeartLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


const SidebarStyledComponent = () => {


    return (
        <>
            <SidebarStyle>
                <ButtonsDiv>
                    <ButtonsSidebar>
                        <RiHomeHeartLine size={30} style={{color: '#F9E9C1'}} />
                    </ButtonsSidebar>
                    <ButtonsSidebar>
                        <Link to={'/favorites'}>
                            <MdFavorite size={30} style={{color: '#F9E9C1'}}/>
                        </Link>
                    </ButtonsSidebar>
                    <ButtonsSidebar>
                        <Link to={'/movies'}>
                            <MdMovieFilter size={30} style={{color: '#F9E9C1'}} />
                        </Link>
                    </ButtonsSidebar>
                    <ButtonsSidebar>
                        <Link to={'/profile'}>
                            <CgProfile size={30} style={{color: '#F9E9C1'}} />
                        </Link>
                    </ButtonsSidebar>
                </ButtonsDiv>
            </SidebarStyle>
        </>
    )}

export default SidebarStyledComponent