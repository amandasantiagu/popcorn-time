import styled from 'styled-components';

export const DashboardStyled = styled.body`
    width: 100vw;
    height: 100vh;
    background-color: #F9E9C1;
`

export const HeaderDiv = styled.div`
    width:100%;
    justify-content: flex-end;
    display: flex;
    text-decoration: none;
    margin-right: 2rem;

    @media (max-width:768px){ 
        width:auto
    }

`

export const Header = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: #650315;
    display: flex;
`
export const ButtonLogin = styled.button`
    color: white;
    font-size: 1em;
    margin-top: 12px;
    width: 7rem;
    height: 2rem;
    background-color: transparent;
    border: 0px;
    padding-left: 1rem; 
    padding-right: 1rem; 
    font-weight: 600;
    letter-spacing: 0.6px;
    border: 1px solid white;

    @media (max-width:768px){ 
        font-size: 0.8em;
        width: 8rem;
        height: 2rem;
        margin-left: 1rem
    }
`
export const ButtonRegister = styled.button`
    color: white;
    font-size: 1em;
    width: 7rem;
    height: 2rem;
    background-color: green;
    margin-top: 12px;
    margin-right: 12px;
    margin-left: 12px;
    border-radius: 4px;
    border: 0px solid white;
    font-weight: 600;
    letter-spacing: 0.6px;
    
    @media (max-width:768px){ 
        font-size: 0.8em;
        width: 8rem;
        height: 2rem;
    }
`
