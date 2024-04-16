// import { easeInOut, motion } from "framer-motion";
import React from "react";
import { IoReorderTwoOutline } from "react-icons/io5";

function Nav() {
  let NavisOn = "false";
  const navFunction = () => {
    if (NavisOn === "false") {
      console.log("nav is on");
      NavisOn = "true";
    } else {
      console.log("nav is off");
      NavisOn = "false";
    }
  };
  return (
    <>
      <header className="bg-light/10 backdrop-blur z-50 transition-all duration-500 w-full px-5 py-2 font-light flex md:items-center justify-between text-base md:text-lg leading-none">
        <h3 className="cursor-pointer font-medium">syedFarhan</h3>
        <div className="mid flex gap-2 leading-none">
          <div className="line mt-2 w-6 h-[1px] bg-dark"></div>
          <h3>
            Designer & developer <br />
            based in Pakistan
          </h3>
        </div>
        <div className="icon md:hidden text-3xl">
          <IoReorderTwoOutline />
        </div>
        <div className="end items-center justify-between md:flex gap-3 hidden">
          {["Work", "About", "Let's chat"].map((item, index) => (
            <a
              key={index}
              className={`leading-none cursor-pointer hover:text-depth-light duration-300 ${
                index === 2 &&
                " p-3 rounded-full font-medium border border-depth-light hover:bg-dark"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}

export default Nav;
