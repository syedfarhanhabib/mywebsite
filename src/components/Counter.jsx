import React, { useState, useEffect } from "react";

function Counter() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="text-2xl counter flex flex-col h-screen items-center justify-center">
      <h1 className="text-7xl font-[Nohemi]">Syed Farhan Habib</h1>
      <h3>
        Counter Value: <span className="font-bold text-accent">{counter}</span>
      </h3>
      <div className="flex gap-2 mt-10">
        <button
          onClick={addValue}
          className="p-3 rounded-full border border-depth-light tracking-tightest bg-depth-light active:scale-90 hover:opacity-80 duration-500"
        >
          Add Value
        </button>
        <button
          onClick={removeValue}
          className="p-3 rounded-full border border-depth-light tracking-tightest active:scale-90 hover:opacity-80 duration-500"
        >
          Remove Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
