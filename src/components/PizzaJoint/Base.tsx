import React from "react";
import Button from "./Button";
import { AnimatePresence, delay, motion } from "framer-motion";
import { SlideLeft } from "./animation";

const Base = ({ addBase, pizza, onClick }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={SlideLeft}
      initial={"init"}
      animate={"work"}
      exit={'exit'}
      className="max-container overflow-hidden absolute  h-full flex flex-col justify-center items-start   gap-8"
    >
      <div className="">
        <h3 className="text-3xl">Step 1: Choose Your Base</h3>
        <ul className="text-xl flex  pl-5 pt-5  flex-col gap-4 relative">
          {bases.map((base) => {
            let isActive = pizza.base === base;
            return (
              <motion.li
                className=" cursor-pointer "
                whileHover={{ marginLeft: 20 }}
                key={base}
                onClick={() => addBase(base)}
              >
                <span className={` ${isActive ? "active" : ""}  opacity-70`}>
                  {base}
                </span>
              </motion.li>
            );
          })}
          {pizza.base && (
            <Button
              className={"absolute bottom-[-100px] "}
              content={"Next"}
              handlerClick={() => onClick()}
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              hover={{ scale: 1.1 }}
              transition={{ delay: 0 }}
            />
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Base;
