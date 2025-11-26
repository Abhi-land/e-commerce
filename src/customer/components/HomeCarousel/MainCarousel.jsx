import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './MainCarousel.css'

function MainCarousel() {
  const items = MainCarouselData.map((item, i) => (
    <img
      key={i}
      className="carousel-image cursor-pointer"
      role="presentation"
      src={item.image}
      alt={`Slide ${i}`}
      sx={{height:"100px"}}
    />
  ))

  return (
    <div className="w-full overflow-hidden">
      <AliceCarousel
        items={items}
        disableButtonsControls
        // disableDotsControls
        autoPlay
        autoPlayInterval={1800}
        infinite
      />
    </div>
  )
}

export default MainCarousel
