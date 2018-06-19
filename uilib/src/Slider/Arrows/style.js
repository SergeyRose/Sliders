import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #FBFBFB;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 78px;
  @media all and (max-width: 499px) {
  }
  @media all and (max-width: 420px) {
    background-color: transparent
  }
`

export const Header = styled.h4`
  font-family: brandon-text-regular;
  text-align: center;
  font-size: 34px;
  line-height: 47px;
  margin: 0 0 38px;
  @media all and (max-width: 767px){ 
    font-size: 28px;
    line-height: normal;
  }
  @media all and (max-width: 599px){ 
    font-size: 24px;
    line-height: normal;
  }
`

export const SlideContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #DCD8D6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.13);
  @media all and (max-width: 499px) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
    border: none;
    max-width: 146px;
    margin-left:30px;
  }
`
export const SlideImage = styled.img`
  max-width: 500px;
  width: 100%;

  @media all and (max-width: 499px) {
    height: 80%;
    width: 80%;
  }
`
export const SlideContent = styled.div`
  padding: 0 31px;
`
export const SlideHeader = styled.h5`
  font-size: 21px;
  line-height: 29px;
  color: #262626;
  font-family: brandon-text-medium;
  margin: 0;
  
`
export const SlideText = styled.p`
  margin-top: 6px;
  font-size: 16px;
  line-height: 20px;
  color: #414141;
  font-family: brandon-text-light;

  @media all and (min-width: 960px) and (max-width: 1199px) {
  }

  @media all and (min-width: 885px) and (max-width: 959px) { 
    font-size: 13px;
    line-height: normal;
  }

  @media all and (min-width: 768px) and (max-width: 884px) { 
    font-size: 13px;
    line-height: normal;
  }
  @media all and (min-width: 599px) and (max-width: 767px){ 
    font-size: 13px;
    line-height: normal;
  }

  @media all and (min-width: 480px) and (max-width: 598px){ 
    font-size: 13px;
    line-height: normal;
  }
  @media all and (max-width: 479px){ 
    font-size: 13px;
    line-height: normal;
  }
`


export const PrevArrow = styled.div`
  z-index: 1;
  position: absolute;
  outline: none;
  top: 50%;
  left: 59px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    background-color: #fff;
  }

  @media all and (min-width: 960px) and (max-width: 1199px) {
    left: 39px;
  }
  @media all and (max-width: 959px) { 
    left: 39px;
  }
  @media all and (min-width: 650px) and (max-width: 767px){ 
    width: 40px;
    height: 40px;
  }
  @media all and (max-width: 649px) { 
    display: none;
  }
`
export const NextArrow = PrevArrow.extend`
  top: 50%;
  right: 59px;
  left: auto;
  @media all and (min-width: 960px) and (max-width: 1199px) {
    right: 39px;
    left: auto;
  }

  @media all and (max-width: 959px) { 
    right: 39px;
    left: auto;
  }
`

export const ArrowIcon = styled.i`
  font-size: 28px;
  color: black;

`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  
  @media all and (min-width: 960px) and (max-width: 1199px) {
    max-width: 860px;
  }

  @media all and (min-width: 885px) and (max-width: 959px) { 
    max-width: 720px;
  }

  @media all and (min-width: 768px) and (max-width: 884px) { 
    max-width: 640px;
  }
  @media all and (min-width: 599px) and (max-width: 767px){ 
    max-width: 540px;
  }

  @media all and (min-width: 480px) and (max-width: 598px){ 
    max-width: 450px;
  }
  @media all and (max-width: 479px){ 
    max-width: 100%;
    padding: 0 35px;
  }
`
