import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from "react-responsive";
import map from 'lodash/map'

import {
  SlideContainer,
  SlideImage,
  SlideContent,
  SlideHeader,
  SlideText,
  CarouselContainer,
  Header,
  PrevArrow,
  NextArrow,
  ArrowIcon,
  Content
} from './style'

import './materialize.css'

class ArrowsSlider extends Component {

    renderMinSlide() {
  const { minSlide } = this.props;
        return map(minSlide, (value,key) => (
          <div key = { minSlide.id } className="carousel-item">
                <SlideContainer>
                  <SlideImage src={value} />
                </SlideContainer>
          </div>
        )
      ) 
    }

    renderMaxSlide() {
      const { maxSlide } = this.props;
      return map(maxSlide, (value,key) => (
        <div key = {maxSlide.id} className="carousel-item" style={value.size}>
                <SlideContainer style={value.disign}>
                  <SlideImage  style={value.size} src={value.img} /> 
                  <SlideContent style={value.disign} >
                    <SlideHeader style={value.disign}>
                      {value.title}
                    </SlideHeader >
                    <SlideText style={value.disign}>
                      {value.text}
                    </SlideText>
                  </SlideContent>
                </SlideContainer>
              </div>
          )
       )
    }
    renderArrows() {
      const { arrows } = this.props
      if( arrows.default === true) {
        return (
          <div>
        <PrevArrow onClick={this.props.onPrev}>
        <ArrowIcon
          className={`fa fa-angle-left `} aria-hidden="true" 
        />
      </PrevArrow>
      <NextArrow onClick={this.props.onNext}>
        <ArrowIcon
          className={`fa fa-angle-right `} aria-hidden="true" 
        />
      </NextArrow>
      </div>
        )
      } else if(!arrows.circle) {
        return(
          <div>
          <PrevArrow style={{backgroundColor:'transparent',boxShadow:'none'}} onClick={this.props.onPrev}>
          <ArrowIcon
            style={arrows.arrowsStyle} className={`fa fa-angle-left `} aria-hidden="true" 
          />
        </PrevArrow>
        <NextArrow style={{backgroundColor:'transparent',boxShadow:'none'}} onClick={this.props.onNext}>
          <ArrowIcon
            style={arrows.arrowsStyle}
            className={`fa fa-angle-right `} aria-hidden="true" 
          />
        </NextArrow>
        </div>
        )
      } else {
        return(
        <div>
        <PrevArrow onClick={this.props.onPrev}>
        <ArrowIcon
          style={arrows.arrowsStyle} className={`fa fa-angle-left `} aria-hidden="true" 
        />
      </PrevArrow>
      <NextArrow onClick={this.props.onNext}>
        <ArrowIcon
          style={arrows.arrowsStyle}
          className={`fa fa-angle-right `} aria-hidden="true" 
        />
      </NextArrow>
      </div>
        )
      }
    }
  render() {
    return (
      <CarouselContainer>
        <MediaQuery maxDeviceWidth={499}>
            <div className="carousel" style={{width: '100%', height: '230px'}}>

            {this.renderMinSlide()}

            </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={500}>
          {/* <Header>Apple MacBooks</Header> */}
               {this.renderArrows()}
          <Content>
            <div className="carousel" style={{width: '100%', height: '600px'}}>

              {this.renderMaxSlide()}

            </div>
          </Content>
        </MediaQuery>
      </CarouselContainer>
    );
  }
}

ArrowsSlider.propTypes = {
  type: PropTypes.string,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};

export { ArrowsSlider };