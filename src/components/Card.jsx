import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
// import { motion } from "framer-motion";

function Card(props) {
  return (
    <div className="w-full flex items-center justify-center shadow-xl active:scale-75 hover:scale-95 duration-300 h-fit relative rounded-3xl overflow-hidden before:content-[''] before:absolute top-0 left-0 before:bg-dark/20 before:w-full before:h-full before:backdrop-blur before:opacity-0 hover:before:opacity-100 before:duration-300">
      <Button
        customClass={`border-depth-light/50 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 hover:opacity-100 hover:scale-[300%] before:absolute before:w-[1000%] before:scale-[300%] before:opacity-0 before:h-[1000%]`}
        text={<FaArrowRightLong />}
      />
      <img className="shadow-xl" src={props.img} alt="" />
      <h1 className="bg-dar absolute bottom-0 left-0 rounded-tr-3xl p-3 w-fit text-5xl text-light tracking-tight font-[Nohemi]">
        {props.title || "Nothing"}
      </h1>
    </div>
  );
}

export default Card;
