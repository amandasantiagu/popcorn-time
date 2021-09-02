import React from 'react'
import { CardsDash, CardsStyled } from './CardStyles'
import poster1 from '../../assets/images/poster1.jpg'
import poster5 from '../../assets/images/poster5.jpg'
import poster6 from '../../assets/images/poster6.jpg'
import poster7 from '../../assets/images/poster7.jpg'
import poster8 from '../../assets/images/poster8.jpg'
import poster9 from '../../assets/images/poster9.jpg'
import poster10 from '../../assets/images/poster10.jpg'
import poster11 from '../../assets/images/poster11.jpg'
import poster12 from '../../assets/images/poster12.jpg'
import poster13 from '../../assets/images/poster13.jpg'
import poster17 from '../../assets/images/poster17.jpg'
import poster18 from '../../assets/images/poster18.jpg'
import poster19 from '../../assets/images/poster19.jpg'
import poster20 from '../../assets/images/poster20.jpg'
import poster21 from '../../assets/images/poster21.jpg'
import poster25 from '../../assets/images/poster25.jpg'
import poster26 from '../../assets/images/poster26.jpg'
import poster27 from '../../assets/images/poster27.jpg'
import poster28 from '../../assets/images/poster28.jpg'
import poster29 from '../../assets/images/poster29.jpg'


const CardStyledComponent = () => {
    return (
        <>
        <CardsDash>
            <CardsStyled >
                <h2 className="h2">Aqui voce pode fazer um favorito de todos os generos de Filmes!</h2>
            </CardsStyled>
            <CardsStyled >
                <h2>Animação</h2>
            </CardsStyled>
            <CardsStyled > 
                    <img src={poster1} alt="poster1" className="img"/>
                    <img src={poster5} alt="poster5"  className="img"/>
                    <img src={poster6} alt="poster6"  className="img"/>
                    <img src={poster7} alt="poster7"  className="img"/>
                    <img src={poster8} alt="poster8"  className="img"/>
            </CardsStyled>
            <CardsStyled >
                    <h2>Ação</h2>
            </CardsStyled>
            <CardsStyled >
                    <img src={poster9} alt="poster9" className="img"/>
                    <img src={poster10} alt="poster10"  className="img"/>
                    <img src={poster11} alt="poster11"  className="img"/>
                    <img src={poster12} alt="poster12"  className="img"/>
                    <img src={poster13} alt="poster13"  className="img"/>
            </CardsStyled>
            <CardsStyled >
                    <h2>  Romance</h2>
            </CardsStyled>
            <CardsStyled >
                    <img src={poster17} alt="poster17" className="img"/>
                    <img src={poster18} alt="poster18"  className="img"/>
                    <img src={poster19} alt="poster19"  className="img"/>
                    <img src={poster20} alt="poster20"  className="img"/>
                    <img src={poster21} alt="poster21"  className="img"/>
            </CardsStyled>
            <CardsStyled >
                    <h2>  Terror</h2>
            </CardsStyled>
            <CardsStyled >
                    <img src={poster25} alt="poster25" className="img"/>
                    <img src={poster26} alt="poster26"  className="img"/>
                    <img src={poster27} alt="poster27"  className="img"/>
                    <img src={poster28} alt="poster28"  className="img"/>
                    <img src={poster29} alt="poster29"  className="img"/>
            </CardsStyled>
        </CardsDash>
        </>
    )}

export default CardStyledComponent