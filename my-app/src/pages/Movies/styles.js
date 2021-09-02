import styled from 'styled-components';

export const ContainerFormSearch = styled.div`
    background-color: #F9E9C1;
    width: auto;
    height: auto;
    min-height: 100vh;
    margin-left: 3.5rem;
    max-width: 100vw;
`;

export const AlignItems = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    align-self: center;
    justify-content: center;
`
export const InputLogin = styled.input`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 40%;
    height: 50%;
    border: 2px solid black;
    border-radius:  4px 0px 0px 4px;
    font-size: 0.8em;
    padding: 5px;
    margin-left: 3rem;
    margin-top: 1rem;
    background-color: #F9E9C1;

    @media (max-width:768px){ 
        width: 7rem;
        align-items: center;
        display: flex;
        margin-left: 0;
    }
`
export const ButtonSearch = styled.button`
    width: 10%;
    height: 5%;
    align-items: center;
    justify-content: center;
    background: #b1aeae8f;
    border: 2px solid black;
    border-left-width: 0px;
    border-radius: 0px 4px 4px 0px;
    display: flex;
    padding: 5px ;
    margin-top: 1rem;
    @media (max-width:768px){ 
        width: 5rem;
    }
`
export const Results = styled.h1`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 5px ;
    margin-top: 1rem;
`

export const ResultsFor = styled.h2`
    align-items: center;
    justify-content: center;
    display: flex;
`