import React from "react";
import Button from "./Button.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { SlideLeft } from "./animation/Slide.js";




const Home = ({ onClick }) => {
  return (
      <motion.div
        className=" absolute overflow-hidden w-full h-full  text-center gap-8 max-container items-center flex flex-1  flex-col justify-center "
        variants={SlideLeft}
        initial={'init'}
        animate={'work'}
        exit={'exit'}
      >
        <motion.h2 className="text-3xl   " animate={{}}>
          Welcome to Pizza Joint
        </motion.h2>

        <Button content={"Create Your Pizza"} handlerClick={() => onClick()} />
        {/* <button className='py-2 px-7 border rounded-[50px] flex justify-center items-center cursor-pointer text-2xl hover:opacity-70 m-0' onClick={} >
          Create Your Pizza
          </button> */}
      </motion.div>
  );
};

export default Home;
