import styled from 'styled-components'

import { HiArrowRight } from 'react-icons/hi'

export const CardContainer = styled.div`
  width: 100%;    
  background-color: #fff;  
  max-width: 1200px;

  @media screen and (max-width: 300px){    
    height: 31rem;
  }  

  @media screen and (min-width: 780px){  
    height: 28rem;
    z-index: 100;
  }
  
`

export const CardImg = styled.img`  
  @media screen and (min-width: 780px){    
    position: absolute;
    height: 28rem;
    left: 15rem;
    z-index: 120;
  }  
  @media screen and (min-width: 1024px){     
    object-fit: contain;
  }
`

export const HeadLine = styled.h2`
  color: #231f20;
  width: 100%;  
  height: 8.5rem;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 0px;
  text-align: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5% 0;  
  z-index: 150;

  @media screen and (max-width: 300px){    
    font-size: 28px;
    height: 8rem;
  }

  @media screen and (min-width: 780px){    
    position: relative;   
    justify-content: start;
    top: 4rem;
  }

  @media screen and (min-width: 1024px){    
    font-size: 63px;
    max-width: 60%;
    height: 17rem;
    padding: 0 5%;
    top: 0;
  }

  @media screen and (min-width: 1250px){     
    padding: 0 5% 0 0;
    top: 1rem;
  }
`

export const ListContainer = styled.ul`
  width: 100%;  
  height: 10rem;
  padding: 0 5%;
  z-index: 150;    

  @media screen and (min-width: 780px){    
    position: relative;
    top: 4rem;   
  }

  @media screen and (min-width: 1024px){    
    font-size: 32px;
    top: -1rem;
  }

  @media screen and (min-width: 1250px){     
    padding: 0 5% 0 0;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: initial;
  width: 100%;  
  padding: .5rem 0;
  font-size: 18px;
  line-height: 1.75;

  p{
    width: 100%;
    color: #231f20;
  }

  @media screen and (max-width: 300px){    
    font-size: 15px;
  }
`

export const ArrowRight = styled(HiArrowRight)`
  color: #3c6ff6;
  margin-right: 12px;
  width: 20px;
  height: 20px;
`

