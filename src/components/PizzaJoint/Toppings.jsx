import React from "react";
import Batton from "./Button";
import { motion } from "framer-motion";
import { SlideLeft } from "./animation";

const Toppings = ({ addTopping, pizza, onClick }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={SlideLeft}
      initial={"init"}
      animate={"work"}
      exit={"exit"}
      className="max-container absolute h-full  overflow-hidden  w-full flex justify-center"
    >
      <div className="flex gap-8 flex-col justify-center">
        <h3 className="text-3xl">Step 2: Choose Toppings</h3>
        <ul className="text-xl flex w-full pl-5  flex-col gap-4">
          {toppings.map((topping) => {
            let isActive = pizza.toppings.includes(topping);
            return (
              <motion.li
                key={topping}
                style={{}}
                className={`cursor-pointer ${isActive ? " " : " "} `}
                onClick={() => addTopping(topping)}
                whileHover={{ marginLeft: 20, opacity: 1 }}
              >
                <span
                  className={` ${isActive ? "toppingInclude" : " opacity-70"} `}
                >
                  {topping}
                </span>
              </motion.li>
            );
          })}
        </ul>

        <Batton content={"Order"} handlerClick={onClick} />
      </div>
    </motion.div>
  );
};

export default Toppings;
