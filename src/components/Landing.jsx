import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen flex flex-col justify-between px-5 font md:px-10 pt-28 md:pt-12 pb-5"
    >
      <div className="top">
        <Button
          text="Syed Farhan Habib"
          customClass="bg-accent text-light border-none"
        />
        <h1 className="mt-5 text-[12.4vw] md:text-[9.1vw] font-[nohemi] leading-none tracking-tight">
          multidisciplinary developer focusing on digital experiences.
        </h1>
      </div>

      {/* <img
        className="object-cover object-center bg-depth-light w-full h-[51vh] mt-9 rounded-xl md:hidden"
        src="./public/farhan.png"
        alt=""
      /> */}
      <div className="bottom-14 bg-accen left-0 w-full absolute px-5 py-5 border-t border-depth-light flex flex-col gap-2 md:flex-row md:items-center justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          "Start the project",
        ].map((item, index) => (
          <a
            key={index}
            className={`w-fit text-lg leading-none cursor-pointer hover:text-depth-light duration-300 ${
              index === 2 &&
              " p-3 rounded-full font-medium border border-depth-light hover:bg-dark"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Landing;
