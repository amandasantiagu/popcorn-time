import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { CarouselDiv, ImageStyle, StyledH2, StyledP } from './CarouselStyles'

const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
        <div className="carrousel" style={{ color:`red`, marginTop: '2rem', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex'}} >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item >
                        <div>
                            <img
                                src="https://www.listchallenges.com/f/items2020/9e6deb54-526d-4ce6-81a8-e1597ae5eef9.jpg"
                                alt="Relembre os filmes da sua infancia"
                            />
                            <img
                                src="https://www.listchallenges.com/f/items2020/7eea7023-0f83-457e-99ec-24f2d21570dc.jpg"
                                alt="First slide"
                            />
                            <img
                                src="https://www.listchallenges.com/f/items2020/b4254a8a-e5c8-4d2c-b09f-c065029336e3.jpg"
                                alt="First slide"
                            />
                            <img
                                src="https://www.listchallenges.com/f/items2020/0413fd4b-8f31-4de2-a264-4a787adf2665.jpg"
                                alt="First slide"
                            />
                           
                        </div>

                        <Carousel.Caption>
                            <StyledH2>Faça um favorito seus filmes da Infancia</StyledH2>
                            <StyledP>Toda coleçao da Barbie Disponivel</StyledP>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <div >
                            <img
                              src="https://www.listchallenges.com/f/items2020/38553af3-c2e0-442a-8b38-1b5b11652715.jpg"
                              alt="First slide"
                            />
                            <img
                                src="https://www.listchallenges.com/f/items2020/aa0f4dda-1b2e-4cf6-8164-5a8abf0f72db.jpg"
                                alt="First slide"
                            />
                            <img
                                src="https://www.listchallenges.com/f/items2020/463394ee-dd78-4b74-9822-71a66c3f16ba.jpg"
                                alt="First slide"
                            />
                            <img
                               
                                src="https://www.listchallenges.com/f/items2020/6c396a91-e8ce-4ab6-b138-d0a1ab108ef3.jpg"
                                alt="First slide"
                            />
                           
                        </div>

                        <Carousel.Caption>
                            <StyledH2>Faça um favorito seus filmes da Infancia</StyledH2>
                            <StyledP>Toda coleçao da Barbie Disponivel</StyledP>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default CustomCarousel
