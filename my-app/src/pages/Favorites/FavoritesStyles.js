import styled from 'styled-components';


export const FavoriteStyle = styled.div`
    width: auto;
    height: auto;
    background-color: #F9E9C1;
    min-height: 100vh;
    margin-left: 3.5rem;
    max-width: 100vw;
`
export const FavoritesDiv = styled.span`
    margin-left: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    height: auto;
    width: auto;
    align-items: center;
    justify-content: flex-start;
    display: flex ;
    
    @media (max-width:768px){ 
        padding-left: 2rem;
    }
    
`
export const FavoritesList = styled.h1`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    font-style: italic;
    align-items: center;
    justify-content: center;
    align-self: center;

    @media (max-width:768px){ 
        padding-left: 2rem;
        font-size: 1rem;
    }
`
export const FavoritesListStyles = styled.span`
    align-items: center;
    justify-content: center;
    align-self: center;
    display: inline;
    width: 100%;
`
