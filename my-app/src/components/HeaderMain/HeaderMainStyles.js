import styled from 'styled-components';

export const MainStyle = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
`
export const SidebarStyle = styled.div`
    height: 100%;
    width: 13vh;
    background-color: #650315;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: center;
`
export const HeaderProf = styled.header`
    width: 100%;
    height: 10%;
    background-color: #650315;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
`

export const Pipocando = styled.div`
    font-size: 1.3rem;
    font-family: 'Lucida Handwriting';
    font-weight: 700;
    color: #e48f93;
    display: block;
`
export const ButtonsDiv = styled.div`
    width: 100%;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    
`
export const ButtonsSidebar = styled.button`
    width: 100%;
    height: 8%;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0px;
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    
`
export const InputLogin = styled.input`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 50%;
    border: 2px solid #F9E9C1;
    border-radius: 4px;
    font-size: 0.8em;
    padding: 2px;
    margin-left: 3rem;
    background-color: #F9E9C1;
`