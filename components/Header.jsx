// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-80'>
//     <div className='mt-44'>
//     <Image src={assets.profile_img} alt='' className=' rounded-full w-32 ' />
//     </div>
//      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>
//         Hi!! I am Aarya Bhatt 
//     <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
    
    
//     <h1 className='text-3xl sm:text-6xl lg:text- [66px] font-Ovo'>Software Developer based in California</h1>
//     <p className='max-w-2xl mx-auto font-Ovo'>I am a Software Developer from California having prior Experience in React,Next,Node,SpringBoot. 
//         I have 10 yeras of experience in companies usch as Amazon, Google.</p>

//     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
//         <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
//         <a href="/Aarya Bhatt Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 '>My Resume <Image src={assets.download_icon} alt='' className='w-4' /> </a>
//     </div> 


//     </div>
//   )
// }

// export default Header
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"  

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-start gap-4 pt-20 sm:pt-24 md:pt-28'>
      {/* Enlarged profile image with spacing */} 
      <motion.div
      initial= {{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring', stiffness:100}}
      className='mt-10'>
        <Image
          src={assets.profile_img}
          alt='Profile'
          className='rounded-full w-48 h-60 object-cover' // enlarged and nicely cropped
        />
      </motion.div>

      <motion.h3 
      
      initial= {{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.4}}
      
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi!! I am Aarya Bhatt
        <Image src={assets.hand_icon} alt='Wave' className='w-6' />
      </motion.h3>

      <motion.h1 
      
      initial= {{y:-30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6, delay:0.5}}

      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Software Developer based in California
      </motion.h1>

      <motion.p 

      initial= {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      
      
      className='max-w-2xl mx-auto font-Ovo'>
        I am a Software Developer from California having prior experience in React, Next.js, Node.js, and Spring Boot.
        I have 10 years of experience at companies such as Amazon and Google.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a

      initial= {{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.8}}

          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>
        <motion.a

      initial= {{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.8}}


          href="/Aarya Bhatt Resume.pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '
        >
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
