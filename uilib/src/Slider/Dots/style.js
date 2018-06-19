import styled from 'styled-components'
import Slider from "react-slick";

//Slider
export const StyledSlider = styled(Slider)`
height:400px;
display:block;
margin:0 auto;
@media all and (max-width: 420px) {
  height: 120px !important;
  margin:0 auto;
  width:100%
}
`
export const QuoteWrapper = styled.div`
  margin: 0 auto;
`

//Content
export const PreorderContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  padding: 0px 25px 0 10px;
  max-width: 100%;
` 
export const TitleBold = styled.span`
  font-family:brandon-text-bold;
  font-size:34px;
  display:flex;
  @media all and (max-width: 420px) {
    font-size:22px
  }

`
export const TitleReg = styled.span`
  font-family:brandon-text-regular;
  font-size:34px;
  display:flex;
  margin-bottom:20px;
`
export const Content = styled.div`
  margin-left:150px;
  display:flex;
  flex-direction:column;
  @media all and (max-width: 420px) {
    margin-left:70px;
  }

`
export const Text = styled.p`
  font-family:brandon-text-regular;
  font-size:17px;
  @media all and (max-width: 420px) {
    font-size:14px
  }
`

export const StyledImege = styled.img`
  width:500px;
  height:400px;

  @media all and (max-width: 499px ) {
    height:60%;
    width:60%;
  }
`
