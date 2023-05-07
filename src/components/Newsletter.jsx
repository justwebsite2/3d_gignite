import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Newsletter = () => {
    return (
        <div className='w-full bg-zinc-900 bg-opacity-75 py-16 px-4'>
            <div className='flex flex-col max-w-[1240px] mx-auto lg:grid-cols-3 content-center'>
                <div className='lg:col-1'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get early access!</h1>
                    <p>Sign up to our newsletter to stay up to date!</p>
                </div>
                <div className=''>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-gray-800 bg-gray-300' type="email" placeholder='Enter Email' />
                        <button className='bg-white text-[#0F41F8] rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3 hover:bg-slate-600 hover:text-white'>Sign Up</button>
                    </div>
                    <p>
                        We care about the protection of your data. Read our <span className='text-[#0F41F8]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Newsletter;