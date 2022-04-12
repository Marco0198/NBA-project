import React from 'react'
import Slick from 'react-slick'
import './slider.css'
import  {Link} from 'react-router-dom';

export const SliderTemplate = (props) => {
  const settings={
    dots:false,
    infinite:true,
    arrows:false,
    speed:500,
    slideToShow:1,
    slideToScroll:1
  }
  let template=null;
  switch (props.type) {
    case ("feature"):
      template=props.data.map((item,i)=>{
        return(
          <div key={i}>
            
           <div className="featured_item">
           <div className="featured_image"
            style={{background:`url(../../images/articles/${item.image})`,}}>
              {item.image}
                 </div>
                 <Link to={`/articles/${item.id}`}>
                 <div className="featured_caption">
                    <div className="featured_caption">
                   {item.title}
                 </div>
                 </div>
                 </Link>

           </div>
          </div>
        )
      });
      break;
    default:
      template = null;
      break;

  }
  return (
    <Slick {...settings}>
   {template}
    </Slick>
  )
}
