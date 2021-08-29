import styled from 'styled-components';

export const LoginStyle = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #650315;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
`
export const CardLogin = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: #F9E9C1;
    flex-direction: column;
    width: 25%;
    height: 80%;
    border-radius: 4px;

`
export const LoginText = styled.span`
    font-size: 1.5em;
    margin-bottom: 12px;
    font-weight: 600;
`

export const InputText = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    width: 100%;
    margin: 6px 0em 0px 5em;
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
    margin-top: 4px;
    background-color: #F9E9C1;
`
export const ButtonStyle = styled.button`
    color: white;
    font-size: 0.7em;
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
