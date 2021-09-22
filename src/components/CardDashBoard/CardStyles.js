import styled from 'styled-components';


export const CardsStyled = styled.div`
    width: auto;
    height: auto;
    background-color: #f9e9c1;
    display: flex;
    justify-content: space-evenly;

    .img {
        border: 1px solid white;
        border-radius: 4px;
        padding: 5px;
        background-color: white;
        width: auto;
        height: auto;
        max-width: 10rem;

    }

    .h2{ 
        padding: 3rem
    }

    @media (max-width:768px){ 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`
export const CardsDash = styled.div`
    width: 100%;
    height: auto;
 `
