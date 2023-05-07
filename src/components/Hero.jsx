import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Icon from '../assets/icon.png';
import { ComputersCanvas } from './canvas';
import { fadeIn, textVariant } from "../utils/motion";
import { faUser, faBarsProgress, faArrowUp, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgImg from '../assets/icon1.png';


const Hero = () => {
  return (
    <section className="relative xl:flex-row flex-col flex w-full h-screen mx-auto mt-10 justify-between">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-y-6 grid-flow-row-dense grid-cols-3`}>
        <div className=" z-10 flex flex-col justify-end md:items-start w-full py-8 col-span-2 -mx-12 ">
          <h1 className="text-[#0F41F8] text-2xl font-bold">Transform Your Project</h1>
          <h1 className="py-3 text-5xl md:text-7xl font-bold col-span-2">
          Project Intelligence<br className="sm:block hidden "/>Platform
          </h1>
          <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
          Streamline Your Documentation Process and Collaborate Seamlessly  <br />with Gignite's AI-driven Project Intelligence Platform
          </p>
        </div>
        
        <motion.div 
        
          variants={fadeIn("right", "spring", 0.75)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
                <img className='z-1 absolute w-full -mx-[640px] -my-[200px] scale-95 sm:block hidden' src={bgImg} alt="/" />
        </motion.div> 
        
        <div className='absolute flex-col py-4 md:min-w-[760px] bottom-[16%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border bg-opacity-90 border-slate-300 rounded-xl text-center shadow-2xl sm:block hidden'>
                <h2 className='text-black font-black text-2xl'><FontAwesomeIcon icon="fa-brands fa-font-awesome" />Key Benefits</h2>
                <div className='flex justify-between flex-wrap px-4 mt-4'>
                  <p className='flex px-4 py-2 text-slate-600'><FontAwesomeIcon icon={faUser} className='h-6 text-[#0F41F8] mr-4'/>Collaboration</p>
                  <p className='flex px-4 py-2 text-slate-600'><FontAwesomeIcon icon={faBarsProgress} className='h-6 text-[#0F41F8] mr-4'/>Productivity</p>
                  <p className='flex px-4 py-2 text-slate-600'><FontAwesomeIcon icon={faArrowUp} className='h-6 text-[#0F41F8] mr-4'/>Success</p>
                  <p className='flex px-4 py-2 text-slate-600'><FontAwesomeIcon icon={faAnglesRight} className='h-6 text-[#0F41F8] mr-4'/>Early Access</p>
                </div>
            </div>

      </div>

  
      
      {/* <ComputersCanvas />*/}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate = {{
                y: [0, 24, 0]
              }} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero