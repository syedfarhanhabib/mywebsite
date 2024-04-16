import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-between bg-accent text-light h-screen px-5 md:px-10 py-10">
      <div className="top w-full flex justify-between">
        <div className="para flex flex-col gap-3">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-light ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-light ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-light ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-light ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 ms-1 text-depth-light dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <p className="w-72 leading-none tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit explicabo, sint tempora obcaecati maxime quasi
            quisquam optio repellat.
          </p>
          <div className="name leading-none">
            <h1 className="text-xl text-light font-medium">Matt Vazquez</h1>
            <h2 className="text-sm -mt-1 text-depth-light">CEO & Co-Founder</h2>
          </div>
        </div>
        <div className="social flex flex-col gap-1 items-end">
          <a href="" className="flex gap-2 text-lg items-center underline">
            Twitter <FaXTwitter />
          </a>{" "}
          <a href="" className="flex gap-2 text-lg items-center underline">
            LinkedIn <FaLinkedin />
          </a>{" "}
          <a href="" className="flex gap-2 text-lg items-center underline">
            GitHub <FaGithub />
          </a>
        </div>
      </div>
      <div className="mid -mt-20 flex relative flex-col justify-center">
        <div className="bg blur-[14vw] w-[70vw] h-[30vh] rounded-full bg-light -rotate-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <h1 className="text-[11.5vw] font-[Nohemi] mix-blend-overlay text-light leading-none">
          syedFarhanHabib
        </h1>
        <p className="text-end relative pr-3 leading-none">
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit.Nobis
          <br /> enim tenetur reprehenderit!
          <div className="w-[.5px] h-10 absolute right-0 top-1 bg-depth-light"></div>
        </p>
      </div>
      <div className="btm flex justify-between items-end">
        <div className="flex flex-col gap-3">
          <Button text="Case Studies" customClass="text-lg"></Button>
          <Button
            text="Get a FREE analysis"
            customClass="md:text-5xl text-xl bg-light text-dark"
          ></Button>
        </div>
        <h3 className="text-right">Copyright © 2024 Syed Farhan</h3>
      </div>
    </div>
  );
}

export default Footer;
