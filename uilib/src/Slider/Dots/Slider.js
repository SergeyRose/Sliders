import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map'

import {
  QuoteWrapper,
  StyledSlider,
  PreorderContainer,
    TitleBold,
    Content,
    Text,
    StyledImege
} from './style'

class Slider extends Component {

    generateSlider() {
        // let arr = this.props.sliders;
        const { sliders } = this.props
            return map(sliders, (value, key) => 
                     (
                    <QuoteWrapper key={sliders.id}>
                        <PreorderContainer>
                            
                            <StyledImege src={value.img}/>
                           
                            <Content>
                                <TitleBold>{value.title}</TitleBold>
                                <Text>{value.text}</Text>
                            </Content>              
                        </PreorderContainer>
                    </QuoteWrapper>
                    )
                 )  
             }

    render() {

        let settings = {
            dots: true,
            speed: 2000,
            autoplay: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                  breakpoint: 960,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }
              ]
          }; 
    
    return(
        <StyledSlider {...settings}
        style={{display: 'flex'}}
        >
        
        {this.generateSlider()}
        
        </StyledSlider> 
        )  
           
    }   
}

Slider.propTypes = {
    sliders: PropTypes.array,
};

export {Slider};