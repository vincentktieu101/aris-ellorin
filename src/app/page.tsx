"use client";

import Image from "next/image";
import React, { useState } from "react";

import ArisSleepy from "../../public/aris-sleepy.jpg";
import ArisLove from "../../public/aris-love.jpg";

export default function Home() {
  const [moveNoButton, setMoveNoButton] = useState(false);
  const [xNoButton, setXNoButton] = useState(0);
  const [yNoButton, setYNoButton] = useState(0);
  const [isYes, setIsYes] = useState(false);

  const handleHover = () => {
    setXNoButton(Math.floor(Math.random() * 95));
    setYNoButton(Math.floor(Math.random() * 95));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="mb-2">Is Aris handsome?</div>
      <div className="mb-4">
        {!isYes ? (
          <div>🤔🤔🤔🤔🤔🤔🤔</div>
        ) : (
          <div>😍😍😍😍😍😍😍</div>
        )}
      </div>
      <Image
        alt="aris-sleepy"
        src={isYes ? ArisLove : ArisSleepy}
        width="300"
        className="mb-4"
      />
      {!isYes && (
        <div className="flex gap-8">
          <button
            className={`${
              moveNoButton ? "opacity-0 cursor-default" : ""
            } mb-4 p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white`}
            onMouseOver={() => setMoveNoButton(true)}
            onClick={() => setMoveNoButton(true)}
          >
            No
          </button>
          <button
            className="mb-4 p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => setIsYes(true)}
          >
            Yes
          </button>
        </div>
      )}
      {!isYes && moveNoButton && (
        <button
          className="absolute mb-4 p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white duration-100"
          style={{ left: `${xNoButton}%`, top: `${yNoButton}%` }}
          onMouseOver={handleHover}
          onClick={handleHover}
        >
          No
        </button>
      )}
    </div>
  );
}
