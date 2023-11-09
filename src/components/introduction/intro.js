import React from 'react'
import './intro.css';
import ameda from '../../assets/kevin.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/icons8-hire-me-50.png';
const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <br/> 
            <span className='introName'>Ameda Kevin, </span> 
            <br/>
            a Java Software Engineer
            </span>
            <p className='introPara'>I am a skilled, passionate and highly self-motivated Java Software Engineer, <br/> who brings ideas 
            to life using cutting-edge technological tools.</p>
            <Link><button className='btn'>
                <img src={btnImg} alt='Hire me' className='btnImg'/>
                Hire me...
                </button></Link>
        </div>
        <img src={ameda} alt='profile' className='ameda'/>
    </section>
  )
}

export default intro
