import { motion } from 'framer-motion'
import React from 'react'
// import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = ({onClick}) => {
  return (
    <header className='absolute flex max-container z-10 w-full p-10 m-0 '>
        {/* <img src={logo} className='fill-white w-[80px] h-[80px] stroke-white' alt="" /> */} 
         <svg
         onClick={onClick} 
         className="w-[80px] h-[80px] stroke-4 overflow-visible cursor-pointer stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
        {/* <Logo className="stroke-white w-[80px] h-[80px]" /> */}
        <motion.div 
        className="w-full flex justify-start items-center"
        initial={{}}
        animate={{}}
        >
        <h1 className=' ml-5 grow text-white border-b-2 text-xl border-b-[rgba(255,255,255,0.2)] '>Pizza Joint</h1>
        </motion.div>
    </header>
  )
}

export default Header