import React from 'react'
import gallerImg from '../../assets/img/gallery.png'
import gallerImg2 from '../../assets/img/gallery2.png'
import gallerImg3 from '../../assets/img/gallery3.png'

const Gallery = () => {
  return (
    <>
    <div className='relative px-[146px] py-[244px] aos-init aos-animate' data-aos='fade-up-right' data-aos-duration='1500'>
      <div className='absolute z-0 inset-0'>
        <img src={gallerImg} alt='img' />
      </div>
      <div className='absolute left-[70px] z-10 bg-white rounded-[20px] py-[33px] px-[83px]'>
        <span className='font-medium text-2xl text-arapawa'>Organic Juice</span>
      </div>
    </div>
    <div className='relative px-[146px] py-[244px] aos-init aos-animate' data-aos='fade-up' data-aos-duration='1500'>
      <div className='absolute z-0 inset-0'>
        <img src={gallerImg2} alt='img' />
      </div>
      <div className='absolute left-[70px] z-10 bg-white rounded-[20px] py-[33px] px-[83px]'>
        <span className='font-medium text-2xl text-arapawa'>Organic Juice</span>
      </div>
    </div>
    <div className='relative px-[146px] py-[244px] aos-init aos-animate' data-aos='fade-up-left' data-aos-duration='1500'>
      <div className='absolute z-0 inset-0'>
        <img src={gallerImg3} alt='img' />
      </div>
      <div className='absolute left-[70px] z-10 bg-white rounded-[20px] py-[33px] px-[83px]'>
        <span className='font-medium text-2xl text-arapawa'>Organic Juice</span>
      </div>
    </div>
    
    </>
  )
}

export default Gallery
