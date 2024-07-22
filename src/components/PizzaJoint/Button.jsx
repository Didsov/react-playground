import { motion } from 'framer-motion'
import React from 'react'

const Button = ({content, handlerClick, className, initial, animate, hover, transition}) => {

  return (
   (content && <motion.button 
    className={className+' py-2 px-7 border rounded-[50px] cursor-pointer text-2xl  hover:opacity-70 m-0 leading-normal'} 
    onClick={handlerClick} 
    animate= {animate?animate:{}}
    initial= {initial?initial:{}}
    whileHover={hover?hover:{scale:1.1}}
    transition={transition?transition:{}}
    >
          {content}
    </motion.button>
    )
  )
}

export default Button