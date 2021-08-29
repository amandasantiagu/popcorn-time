import styled from 'styled-components';

export const ContainerDetailSec = styled.section`
    width: auto;
    height: auto;
    background-color: #F9E9C1;
    min-height: 100vh;
    margin-left: 3.5rem;
    max-width: 100vw;
    
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
`

export const ContainerDetailMovie = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    .col-2{
      padding-right: 4rem;
      width: 100%;
    }

    .img-col{
      width: auto;
      padding-left: 8rem;
      padding-right: 4rem;
      padding-top: 1.7rem;
    }

    .label-details{
      color: var(--color-theme);
      font-weight: 400;
      display: flex;
      align-items: center;
      svg{
        margin-right: .5em;
        font-size: 1.5em;
      }
    }

`;