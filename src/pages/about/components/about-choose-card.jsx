import React from 'react'
import AboutChooseCardIcon from '../../../assets/icon/about-choose-card-icon.svg'
import AboutChooseCardIcon2 from '../../../assets/icon/about-choose-card-icon2.svg'
import AboutChooseCardIcon3 from '../../../assets/icon/about-choose-card-icon3.svg'
import AboutChooseCardIcon4 from '../../../assets/icon/about-choose-card-icon4.svg'

const AboutChooseCard = ({item}) => {
  return (
    <div key={item.id} className='bg-white rounded-[30px] aos-inti aos-animate pt-[50px] pb-[19px] px-[38px]' data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1500">
        {item.id === 1 && (
            <div className='max-w-[95px] mx-auto mb-4'>
                <img src={AboutChooseCardIcon} alt="about choose card icon" />
            </div>
        )}
        {item.id === 2 && (
            <div className='max-w-[95px] mx-auto mb-4'>
                <img src={AboutChooseCardIcon2} alt="about choose card icon2" />
            </div>
        )}
        {item.id === 3 && (
            <div className='max-w-[95px] mx-auto mb-4'>
                <img src={AboutChooseCardIcon3} alt="about choose card icon3" />
            </div>
        )}
        {item.id === 4 && (
            <div className='max-w-[95px] mx-auto mb-4'>
                <img src={AboutChooseCardIcon4} alt="about choose card icon4" />
            </div>
        )}
      <h3 className='text-arapawa font-extrabold text-2xl text-center mb-3'>{item.title}</h3>
      <p className='text-center text-city max-w-[184px] mx-auto font-nromal text-lg'>{item.text}</p>
    </div>
  )
}

export default AboutChooseCard
