import styled from 'styled-components';

export const ContainerDetailSec = styled.section`
    width: auto;
    height: auto;
    background-color: #F9E9C1;
    min-height: 100vh;
    margin-left: 3.5rem;
    max-width: 100vw;
    @media (max-width:768px){ 
      display: flex;
      flex-direction: column;
    }
`
export const TextDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    align-self: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 600;    
    padding-top: 1rem;

    @media (max-width:768px){ 
      font-size: 0.8rem;
    }
`
export const h2Div= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const ContainerDetailMovie = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width:768px){ 
        flex-direction: column;
    }

    .col-2{
      padding-right: 4rem;
      width: 100%;
    }

    .img-col{
      width: auto;
      padding-left: 8rem;
      padding-right: 4rem;
      padding-top: 1.7rem;
      @media (max-width:768px){ 
        width: 85%;
        padding-left: 1rem;
        padding-right: 0px;
        padding-top: 0px;
    }
    }

    .label-details{
      color: var(--color-theme);
      font-weight: 400;
      display: flex;
      align-items: center;

      @media (max-width:768px){ 
        font-size: 1em;
    }

      svg{
        margin-right: 0.5em;
        font-size: 1.5em;
        @media (max-width:768px){ 
        width: 80%;
        font-size: 1em;
    }
      }
    }

`;