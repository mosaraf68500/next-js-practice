"use client"

import React from "react";
import { useState } from "react";

const Counter = () => {
    const [counter,setCounter]=useState(0);
  return (
    <div>
      <h1 className="text-5xl">clinet component</h1>
      <h1 className="text-4xl">counter={counter}</h1>
      <button className="btn border border-amber-100 p-2" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button className="btn border border-amber-300 p-2" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
