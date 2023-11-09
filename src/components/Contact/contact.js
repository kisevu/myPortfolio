import React, { useRef } from 'react';
import './contact.css'
import boot1 from '../../assets/sboot1.png'
import boot2 from '../../assets/sboot2.png'
import continous from '../../assets/successful build.PNG'
import tarajia from '../../assets/phase3.png'
import github from '../../assets/icons8-github-64 (1).png'
import instagram from '../../assets/icons8-instagram-64.png'
import linkedin from '../../assets/icons8-linkedin-50.png'
import emailjs from '@emailjs/browser';
const contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kgamjgk', 'template_cpduyt9', form.current, 'vhVP6YmIRWXcfWK8x')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Work</h1>
            <p className='clientDesc'>
                I have had an opportunity to work on various projects and are shown below
            </p>
            <div className='clientImgs'>
                <img src={boot1} alt='spring boot project' className='clientImg'/>
                <img src={boot2} alt='spring boot project' className='clientImg'/>
                <img src={continous} alt='CI/CD' className='clientImg'/>
                <img src={tarajia} alt='tarajia beauty' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill the form below to discuss future work opportunities
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name='your_name'/>
                <input type='email' className='email' placeholder='your email' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={github} alt='github' className='link'/>
                    <img src={instagram} alt='instagram' className='link'/>
                    <img src={linkedin} alt='linkedin' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default contact
