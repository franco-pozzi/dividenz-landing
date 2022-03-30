import styled from 'styled-components'

export const HomeCarouselSection = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 5rem;  
`

export const BtnWrapper = styled.div`
  width: 100%;  
  height: 3rem;
  display: flex;
  justify-content: center; 
`

export const CardBtn = styled.a`
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