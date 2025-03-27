import HeroSlider from '@/components/Slider/HeroSlider'
import TimelineSlider from '@/components/Slider/TimelineSlider'
import { newsRoomSlides } from '@/constant/global.constant'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <HeroSlider slides={newsRoomSlides} sliderBtn={true} timeline={true} />
    </>
  )
}

export default AboutPage
