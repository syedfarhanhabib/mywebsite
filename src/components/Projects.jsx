import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <div>
      <div className="text px-5 py-5 md:px-10">
        <h3 className="text-accent text-base md:text-lg">Case studies</h3>
        <h1 className="w-fit text-[7vw] md:text-[5vw] font-[nohemi] leading-none tracking-tight">
          Crafting intuitive interfaces that bring dreams to digital reality.
        </h1>
      </div>
      <div className="h-fit flex flex-col md:flex-row gap-10 w-full md:w-3/4 py-10 px-5 md:px-10">
        <div className="left flex flex-col gap-10 w-full md:w-1/2">
          <Card img="./public/docs.png" title="Docs Application" />
          <Card img="./public/sundown.png" title="Sundown Studio" />
        </div>
        <div className="right md:mt-40 flex flex-col gap-10 w-full md:w-1/2">
          <Card img="./public/rejouice.png" title="Rejouice - Agency" />
          <Card img="./public/docs.png" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
