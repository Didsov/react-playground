import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { SlideLeft } from './animation'


const showingVariables = {
  init: {
    opacity: 0
  },
  work: {
    opacity: 0.7,
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren',

    }
    
  }
}

const Order = ({ pizza, clearPizza, onClick }) => {
    // // clearPizza()
    
    return (

      <motion.div 
      variants={SlideLeft}
      initial={'init'}
      animate={'work'}
      exit={'exit'}
      
      
      
      className="  max-container  absolute  h-full w-full">

        <div className="items-center flex h-full overflow-hidden  flex-col justify-center text-xl">

        <h2 className='text-3xl'>Thank you for your order :)</h2>
        <motion.p 
          variants={showingVariables} 
          className= 'my-4'>You ordered a {pizza.base} pizza with:
          </motion.p>

        <motion.div className="flex flex-col justify-center items-center" variants={showingVariables}>
        {pizza.toppings.map(topping => <motion.div className='opacity-70' key={topping}>{topping}</motion.div>)}

        </motion.div>

          </div>

      </motion.div>
    )
  }

export default Order