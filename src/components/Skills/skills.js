import React from 'react'
import './skills.css'
import Backend from '../../assets/icons8-backend-development.gif'
import Design from '../../assets/icons8-design.gif'
import RestAPI from '../../assets/icons8-rest-api-64.png'
import ecommerce from '../../assets/icons8-e-commerce-48.png'

const skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled Java developer responsible for 
        defining software requirements, writing clean and efficient codes for applications.
        I write tests for applications written and help debug them to improve system functionality.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Backend} alt='Backend design' className='skillBarImg'/>
                <div className='skillBarText'></div>
                <h2>Backend Development</h2>
                <p>event-driven microservices, SQL and NoSQL databases(mysql, postgresql, mongo, oracle),
                    AWS S3, AWS stack and EC2 instances, unit testing and integration testings with Mockito
                ,and JUnit 5 frameworks, CI/CD operations using Jenkins and github actions
                </p>

            </div>
            <div className='skillBar'>
                <img src={Design} alt='Design' className='skillBarImg'/>
                <div className='skillBarText'></div>
                <h2>UI/UX Design</h2>
                <p>For UI/UX designs and references the Figma is a tool that help me  a lot.</p>
            </div>
            <div className='skillBar'>
                <img src={RestAPI} alt='RestAPI' className='skillBarImg'/>
                <div className='skillBarText'></div>
                <h2>API Development</h2>
                <p>I use spring boot 3 and spring version 5 and above for my MVC architecture and APIs creating</p>
            </div>
            </div>
        </section>
  )
}

export default skills
