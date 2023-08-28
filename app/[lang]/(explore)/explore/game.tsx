"use client";

import { useState } from "react";

export const GameView = () => {
  const [flip, setFlip] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          console.log(flip);
          setFlip(!flip);
        }}
      >
        FLIP
      </button>
    </div>
  );
};
