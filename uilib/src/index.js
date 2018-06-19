import React,{Component} from 'react'
import {Slider} from './Slider/Dots/Slider'
import {StyleContainer} from './style'
import audi from './img/first/audi.jpg'
import {render} from 'react-dom'
import mercedes from './img/first/mercedes.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ArrowsSlider} from './Slider/Arrows/Slider'
import $ from 'jquery'
import debounce from 'lodash/debounce'
import './Slider/Arrows/materialize.css'
import mac from './img/second/mac.jpg'
import mac_pro from './img/second/mac_pro.jpg'
import mac_air from './img/second/mac_air.jpg'

const CAROUSEL_OPTIONS = {
  numVisible: 3,
  padding: -300,
};

const CAROUSEL_OPTIONS_2 = {
  numVisible: 3,
  padding: -100,
};

  class App extends Component {
    
    isTablet = false
  componentDidMount() {
    window.addEventListener('resize', debounce(this.handleResize, 16))
    /* eslint-disable */
    const elems = $(".carousel");
    if(window.innerWidth < 500 && !this.isTablet) {
      M.Carousel.init(elems, CAROUSEL_OPTIONS_2);
    } else {
      M.Carousel.init(elems, CAROUSEL_OPTIONS);
    }
    var elem = document.getElementsByClassName('carousel');
    this.carousel = M.Carousel.getInstance(elem[0]);
    /*  eslint-enable */
  }

  componentWillUnmount() {
    this.carousel.destroy()
    return window.removeEventListener('resize', debounce(this.handleResize, 16));
  }

  handleResize = () => {
    if(window.innerWidth < 500 && !this.isTablet) {
      this.isTablet = true
      this.carousel.destroy();
      /* eslint-disable */
      const elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, CAROUSEL_OPTIONS_2);

      var elem = document.getElementsByClassName('carousel');
      this.carousel = M.Carousel.getInstance(elem[0]);
    }  
  }

  onNextToolSlide = () => {
    this.carousel.next()
  }
  
  onPrevToolSlide = () => {
    this.carousel.prev()
  }
      render(){

        const CarouselDesign = {
          color:"white",
          background:"grey",
          "font-family":'cursive'
        }

        const CarouselSize = {
          width:500,
          height:350
        }

        return(
        <div>
         <StyleContainer>
             <Slider
            sliders={ 
            [{
                img: audi,
                title : 'Audi',
                text: "love audi"
            },
            {
                img: mercedes,
                title : "Mercedes",
                text: "love mercedes"
            }]   
            } 
             />
        </StyleContainer>


        <ArrowsSlider onNext={this.onNextToolSlide} onPrev={this.onPrevToolSlide}

          minSlide={[mac,mac_air,mac_pro]}
          arrows={{
              default:true,
              arrowsStyle:{color:'black'}
          }}
          maxSlide={[{
            img: mac,
            title: "it is mac",
            text: "cool, it is mac",
            size: CarouselSize,
            disign: CarouselDesign
          },
          {
            img: mac_air,
            title: "it is mac air",
            text: "cool, it is mac air",
            size: CarouselSize, 
            disign: CarouselDesign
          },
          {
            img: mac_pro,
            title: "it is mac pro",
            text: "cool, it is mac pro",
            size: CarouselSize,
            disign: CarouselDesign
          }
          ]}
          />
        </div>
        )}
      }
 render(
   <App />,
   document.getElementById('root')
 )