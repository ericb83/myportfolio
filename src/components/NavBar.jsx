"use client";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar bg-primary">
      <input
        type="checkbox"
        value="retro"
        className="  toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
      />
    </div>
  );
}
