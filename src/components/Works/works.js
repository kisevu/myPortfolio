import React from 'react'
import './works.css'
import B2B from '../../assets/b2b.jpg'
import ecommerce from '../../assets/e-commerce.jpg'
import APIs from '../../assets/APIs.jpg'
import restaurant from '../../assets/uber_eats.jpg'
const works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'></span>
        <div className='worksimgs'>
            <img src={B2B} alt='b2b' className='worksImg'/>
            <img src={ecommerce} alt='ecommerce' className='worksImg'/>
            <img src={APIs} alt='APIs' className='worksImg'/>
            <img src={restaurant} alt='restaurant' className='worksImg'/>
            </div>
            <button className='workBtn'>
                See More
            </button>
    </section>
  )
}

export default works
