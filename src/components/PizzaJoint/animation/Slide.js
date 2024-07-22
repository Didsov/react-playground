import { delay, easeIn } from "framer-motion"

export const SlideLeft = {
    init: {
      x:'100vw',
      opacity: 0,
      transition:{
        delay:0,
        duration: 0,
  
      }
      
    },
    work: {
      x:0,
      opacity: 1,
      transition:{
          when: 'beforeChildren',
          staggerChildren: 0.5,
          delay: 0.2
      },
      
    },
    exit:{
        x:'-100vw',
        opacity: 0,
        transition:{
          ease: "easeInOut"
      }
        
    }
  
}

export const SlideRight = {
    init: {
      x:'-100vh',
      opacity: 0,
      transition:{
        delay:0,
        duration: 0,
  
      }
      
    },
    work: {
      x:0,
      opacity: 1,
      transition:{
          delay:0.2
      }
    },
    exit:{
        x:'100vh',
        opacity: 1,
        transition:{
            delay:0.2
      }
        
    }
  
}
