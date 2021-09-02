import styled from 'styled-components';

export const ContainerMovies = styled.div`
    margin-top: 2em;
    margin-left: 2.3em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 30px;
`;

export const Card = styled.article`
  transition: transform ease-in-out .5s;
  color: #ab1a49;
  position: relative;
  filter: blur(1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:768px){ 
        width: 80%;
    }

  a{
    text-decoration: none;
  }
 
  &:hover{
      transform: scale(1.02);
      cursor: pointer;
      filter: blur(0);
  }

  &:hover .card-content{
    bottom: 0 !important;
    left:0;
    width: 101%;
    @media (max-width:768px){ 
        width: 70%;
    }
  }

  .card-content h2{
    margin-left: 0.5em;
    font-size: 1.1em;
    color: white;
    
  }
  .card-content p{
    line-height: 38px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    @media (max-width:768px){ 
        width: 80%;
    }
  }
  .card-content p span svg{
    margin-right: 10px;
    color: var(--color-theme)
  
  }
  .card-content p span{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    @media (max-width:768px){ 
        width: 80%;
    }
  }
  .card-content{
      position: absolute;
      bottom: -141px;
      background-color: #a5152fdb;
      width: 100%;
      transition: all .4s;
      left: 0;
      @media (max-width:768px){ 
        width: 80%;
    }
     
  }

  .card-thumb img{
      max-width: 100%;

      @media (max-width:768px){ 
        width: 80%;
    }
  }
`;