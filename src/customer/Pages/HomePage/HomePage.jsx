import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { WomenClothData } from '../../../Data/WomenClothData'
import { Mens_Kurta } from '../../../Data/Mens_Kurta'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10' >
        <HomeSectionCarousel Data={Mens_Kurta} SectionName={"Men's Kurta"} />
        <HomeSectionCarousel Data={WomenClothData} SectionName={"Women's Deginer Lehnga"} />
        <HomeSectionCarousel Data={WomenClothData} SectionName={"Women's Lehnga"} />
      </div>
      <div>
      </div>
    </div>
  )
}

export default HomePage