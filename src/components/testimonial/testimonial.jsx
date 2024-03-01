import React from 'react'

const Testimonial = ({item}) => {
  return (
    <div key={item.id} className='rounded-full border-4 border-padua w-[211px] h-[211px] overflow-hidden aos-init aos-animate' data-aos={item.id % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-duration='1500'>
      <div className=' bg-[#F1F1F1] rounded-full w-[201px] h-[201px] border-4 border-white'>
            <h2 className='text-center font-extrabold text-arapawa text-5xl pt-[54px]'>{item.title}</h2>
            <p className='text-center text-arapawa text-lg text-semibold'>{item.text}</p>
      </div>
    </div>
  )
}

export default Testimonial
