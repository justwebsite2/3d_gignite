import React from 'react'
import Icon from '../assets/icon.png';
import { styles } from '../styles';

const Infographic = () => {
    return (
        
      <div className='w-full bg-zinc-900 bg-opacity-75 py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='mx-auto my-4' src={Icon} alt="laptop"/>
            <div
             className='flex flex-col justify-center mx-6'>
                  <h1 className={`${styles.heroHeadText} text-white`}>Our Mission</h1>
                  <h2 className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                  At Gignite, our mission is to simplify project management and documentation through our AI-driven project intelligence platform. We believe in empowering teams to work smarter and more efficiently by automating document generation, ensuring consistency across the organization, and streamlining project workflows. Our goal is to revolutionize how businesses approach project management and collaboration, and we're dedicated to providing cutting-edge solutions that help organizations achieve greater success. Join us on our mission to transform the way businesses manage projects and deliver exceptional results.
                  </h2>
                  
                  <button className='bg-white text-[#0F41F8] rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3 hover:bg-slate-600 hover:text-white'>Get Started</button>
              </div>
              
          </div>
      </div>
    )
  }

export default Infographic