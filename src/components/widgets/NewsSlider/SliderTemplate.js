import React from 'react'
import Slick from 'react-slick'
export const SliderTemplate = (props) => {
  const settings={
    dots:true,
    infinite:true,
    arrows:false,
    speed:500,
    slideToShow:1,
    slideToScroll:1
  }
  return (
    <Slick {...settings}>
    <div>slider_template</div>
    <div>slider_template</div>
    </Slick>
  )
}
