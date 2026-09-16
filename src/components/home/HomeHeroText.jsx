import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
      <div className='font-[font1] pt-5 text-center text-white'>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>The spark for</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>all 
        <div className='h-[8vw] w-[18vw]  rounded-full  overflow-hidden mb-4'><Video /></div>  
      things</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>creative</div>
    </div>
  )
}

export default HomeHeroText
