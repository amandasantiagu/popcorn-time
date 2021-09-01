import React from 'react'
import poster20 from '../../assets/images/poster20.jpg'
import poster31 from '../../assets/images/poster31.jpg'
import poster14 from '../../assets/images/poster14.jpg'
import poster23 from '../../assets/images/poster23.jpg'
import poster18 from '../../assets/images/poster18.jpg'
import poster8 from '../../assets/images/poster8.jpg'
import poster9 from '../../assets/images/poster9.jpg'
import poster10 from '../../assets/images/poster10.jpg'
import poster12 from '../../assets/images/poster12.jpg'
import poster19 from '../../assets/images/poster19.jpg'
import poster24 from '../../assets/images/poster24.jpg'
import { CardsStyled } from '../CardDashBoard/CardStyles'


const CardStyled = () => {

    return (
        <>
           <h1> Os filmes mais favoritados da semana!</h1>
       <CardsStyled > 
            <img src={poster20} alt="poster20" className="img"/>
            <img src={poster31} alt="poster31"  className="img"/>
            <img src={poster14} alt="poster14"  className="img"/>
            <img src={poster23} alt="poster23"  className="img"/>
            <img src={poster18} alt="poster18"  className="img"/>
            <img src={poster8} alt="poster8"  className="img"/>
            </CardsStyled>

            <h1>Lançamentos do Mes!</h1>
            <CardsStyled >
                    <img src={poster9} alt="poster17" className="img"/>
                    <img src={poster10} alt="poster18"  className="img"/>
                    <img src={poster12} alt="poster19"  className="img"/>
                    <img src={poster19} alt="poster20"  className="img"/>
                    <img src={poster24} alt="poster21"  className="img"/>
            </CardsStyled>
       </>
    )
}

export default CardStyled