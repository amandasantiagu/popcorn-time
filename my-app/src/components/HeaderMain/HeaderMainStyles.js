import styled from 'styled-components';

export const MainStyle = styled.main`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
`
export const HeaderProf = styled.header`
    width: auto;
    height: 10vh;
    min-width: 100vw;
    background-color: #650315;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    @media (max-width:768px){ 
        width: 6rem;
        padding: 3px;
        font-size: 0.9em;
    }
`

export const Pipocando = styled.div`
    font-size: 1.3rem;
    font-family: 'Lucida Handwriting';
    font-weight: 700;
    color: #e48f93;
    display: flex;
`