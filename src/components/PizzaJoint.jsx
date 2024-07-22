import React, { useState } from "react";
import Home from "./PizzaJoint/Home";
import Header from "./PizzaJoint/Header";
import Toppings from "./PizzaJoint/Toppings";
import Base from "./PizzaJoint/Base";
import Order from "./PizzaJoint/Order";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PizzaJoint = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const clearPizza = () => {
    setPizza({ base: "", toppings: [] });
  };
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const [activeBlock, setActiveBlock] = useState("home");
  const renderBlock = () => {
    switch (activeBlock) {
      case "home":
        return <Home onClick={() => setActiveBlock("base")} />;
      case "base":
        return (
          <Base
            addBase={addBase}
            pizza={pizza}
            onClick={() => setActiveBlock("toppings")}
          />
        );
      case "toppings":
        return (
          <Toppings
            addTopping={addTopping}
            pizza={pizza}
            onClick={() => setActiveBlock("order")}
          />
        );
      case "order":
        return (
          <Order
            pizza={pizza}
            clearPizza={clearPizza}
            onClick={() => setActiveBlock("home")}
          />
        );
      default:
        return <div>Select a block</div>;
    }
  };

  const [flag, setFlag] = useState(true);
  setTimeout(() => {
    setFlag(!flag);
  }, 1000);

  return (
    <section className="w-screen overflow-hidden main-bg h-screen m-0 p-0 relative   flex flex-col text-white">
      <div className="max-container h-full w-full ">
        <Header onClick={() => setActiveBlock("home")} />

        <div className="h-full flex justify-center ">
          <AnimatePresence>
            {activeBlock == "home" && (
              <Home key="home" onClick={() => setActiveBlock("base")} />
            )}

            {activeBlock == "base" && (
              <Base
                key="base"
                addBase={addBase}
                pizza={pizza}
                onClick={() => setActiveBlock("toppings")}
              />
            )}

            {activeBlock == "toppings" && (
              <Toppings
                key="topping"
                addTopping={addTopping}
                pizza={pizza}
                onClick={() => setActiveBlock("order")}
              />
            )}

            {activeBlock == "order" && (
              <Order
                key="order"
                pizza={pizza}
                clearPizza={clearPizza}
                onClick={() => setActiveBlock("home")}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PizzaJoint;
