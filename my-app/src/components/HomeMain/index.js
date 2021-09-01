import React from 'react'
import mvnews1 from '../../assets/images/mvnews1.png'
import mvnews2 from '../../assets/images/mvnews2.png'
import {RowStyle} from './HomeMainStyle'
const HomeMain = () => {

    return (
        <>
       <div>
        <RowStyle>
            <img src={mvnews1} alt="mvNews1"/>
        </RowStyle>
        <RowStyle>
            <img src={mvnews2} alt="mvNews2"/>
        </RowStyle>
       </div>
        </>
    )
}

export default HomeMain