import React from 'react'
import poster1 from '../../assets/images/poster1.jpg'
import poster2 from '../../assets/images/poster2.jpg'
import poster3 from '../../assets/images/poster3.jpg'
import poster4 from '../../assets/images/poster4.jpg'


const CardStyled = () => {

    return (
        <>
       <div>

            <img src={poster1} alt="poster1" className="img"/>
                    <img src={poster2} alt="poster2"  className="img"/>
                    <img src={poster3} alt="poster3"  className="img"/>
                    <img src={poster4} alt="poster4"  className="img"/>
       </div>
        </>
    )
}

export default CardStyled