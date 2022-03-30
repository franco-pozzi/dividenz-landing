import styled from 'styled-components'

import { Link as LinkR } from 'react-router-dom'

import { HiArrowRight } from 'react-icons/hi'

export const CardContainer = styled.div`
  width: 100%;  
  background-color: #fff;  
`

export const CardImg = styled.img`
  width: 200px;
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
  padding: 2rem 5% 0;  
`

export const ListContainer = styled.ul`
  width: 100%;  
  height: 10rem;
  padding: 0 5%;
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
`

export const ArrowRight = styled(HiArrowRight)`
  color: #3c6ff6;
  margin-right: 12px;
  width: 20px;
  height: 20px;
`

export const BtnWrapper = styled.div`
  width: 100%;  
  height: 3rem;
  display: flex;
  justify-content: center; 
`

export const CardBtn = styled(LinkR)`
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
`
