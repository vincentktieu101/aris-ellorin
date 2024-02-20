"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import ArisSleepy from "../../public/aris-sleepy.jpg";
import ArisLove from "../../public/aris-love.jpg";

function isTouchDevice() {
  if (typeof window !== "undefined") {
    return false;
  }
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [moveNoButton, setMoveNoButton] = useState(false);
  const [xNoButton, setXNoButton] = useState(0);
  const [yNoButton, setYNoButton] = useState(0);
  const [isYes, setIsYes] = useState(false);

  const handleHover = () => {
    setXNoButton(Math.floor(Math.random() * 95));
    setYNoButton(Math.floor(Math.random() * 95));
  };

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  if (isMobile === undefined) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div>App only works on desktop. Sorry!</div>
        <a href="aris-ellorin.netlify.app" className="text-blue-300 underline">
          aris-ellorin.netlify.app
        </a>
      </div>
    );
  }

  if (!isMobile) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="mb-4">Is Aris handsome?</div>
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
              } p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white`}
              onMouseOver={() => setMoveNoButton(true)}
            >
              No
            </button>
            <button
              className="p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => setIsYes(true)}
            >
              Yes
            </button>
          </div>
        )}
        {moveNoButton && (
          <button
            className="absolute p-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white"
            style={{ left: `${xNoButton}%`, top: `${yNoButton}%` }}
            onMouseOver={handleHover}
          >
            No
          </button>
        )}
      </div>
    );
  }
}
