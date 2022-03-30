import styled from 'styled-components'

export const HomeCarouselSection = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
  max-width: 1200px;  

  @media screen and (min-width: 780px){ 
    margin-top: 7rem;     
    height: 30rem;
  }
  @media screen and (min-width: 1024px){     
    margin-top: 8rem;
  } 
  @media screen and (min-width: 1200px){     
    margin: 8rem auto;
  } 
`

export const BtnWrapper = styled.div`
  width: 100%;  
  height: 3rem;
  display: flex;
  justify-content: center; 

  @media screen and (min-width: 780px){ 
    justify-content: start;     
  }
`

export const HomeSliderBtn = styled.a`
    border: 2px solid #0072f0;
    border-radius: 12px;
    padding: 6px 24px;
    color: #0072f0;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;

    &:hover{
      background: #0072f0;
      color: #fff;
    }

    @media screen and (min-width: 780px){ 
    position: relative;
    bottom: 6rem;
    left: 3rem;
    }

    @media screen and (min-width: 1024px){    
      bottom: 4rem;
      left: 3.5rem;
    }

    @media screen and (min-width: 1250px){     
      left: 0;
    }
`