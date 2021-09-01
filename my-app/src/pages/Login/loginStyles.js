import styled from 'styled-components';

export const LoginStyle = styled.div`
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #650315;
    display: flex;
    align-items: center;
    align-self: center;
    
    @media (min-width:768px){
        justify-content: center;
    }
    
`
export const CardLogin = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: #F9E9C1;
    flex-direction: column;
    width: 23rem;
    height: 35rem;
    border-radius: 4px;
  `
export const LoginText = styled.span`
    font-size: 1.5em;
    margin-bottom: 12px;
    font-weight: 600;
`

export const InputText = styled.span`
    display: flex;
    font-size: 1em;
    width: 100%;
    padding-left: 5rem;
`

export const InputLogin = styled.input`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 70%;
    border: 2px solid #D97777;
    border-radius: 4px;
    font-size: 0.8em;
    padding: 8px;
    margin-top: 3px;
    margin-bottom: 1rem;
    background-color: #F9E9C1;
`
export const ButtonStyle = styled.button`
    color: white;
    font-size: 0.9em;
    width: 76%;
    height: 75%;
    background-color: #008C49;
    margin-top: 16px;
    margin-bottom: 12px;
    border-radius: 4px;
    border: 2px solid #008C49;
    font-weight: 600;
    letter-spacing: 0.5px;
`
