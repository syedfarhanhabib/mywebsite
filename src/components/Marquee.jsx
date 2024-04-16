import React from "react";
import { motion } from "framer-motion";
import Icon from "./Marqueeicon.jsx/Icon";
// import 'node_modules/locomotive-scroll/dist/locomotive-scroll';

function Marquee() {
  const icons = [
    {
      figma: "./public/farhan.png",
      reactjs: "./public/icons/reactjs.svg",
    },
  ];
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".02" className="">
      <div className="rounded-t-3xl w-full flex overflow-hidden whitespace-nowrap py-5 gap-5  bg-dark">
        <motion.div
          // initial={{ x: "0%" }}
          // animate={{ x: "10%" }}
          // transition={{
          //   ease: "linear",
          //   repeat: Infinity,
          //   duration: 1,
          //   delay: 0,
          //   restSpeed: -7,
          // }}
          className="icons w-full px-10 flex items-center justify-between gap-16"
        >
          <Icon img="./public/Icons/figma.png" />
          <Icon img="./public/Icons/html.png" />
          <Icon img="./public/Icons/illustrator.png" />
          <Icon img="./public/Icons/tailwind.png" />
          <Icon img="./public/Icons/react.png" />
          <Icon img="./public/Icons/js.png" />{" "}
          <Icon img="./public/Icons/figma.png" />
          <Icon img="./public/Icons/html.png" />
          <Icon img="./public/Icons/illustrator.png" />
          <Icon img="./public/Icons/tailwind.png" />
          <Icon img="./public/Icons/react.png" />
          <Icon img="./public/Icons/js.png" />{" "}
        </motion.div>
      </div>
      <div className="w-full flex overflow-hidden whitespace-nowrap py-5 gap-0  bg-accent text-light">
        {["designdevelopment", "designdevelopment", "designdevelopment"].map(
          (item, index) => (
            <motion.h1
              key={index}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 20,
                stiffness: 50,
                velocity: 2,
                restSpeed: 0.5,
              }}
              className={`pt-5 text-[14vw] font-[Nohemi] tracking-tight leading-none ${
                index === 1 && "text-dar"
              }`}
            >
              {item}
            </motion.h1>
          )
        )}
      </div>
    </div>
  );
}

export default Marquee;
