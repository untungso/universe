"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

const MusicPlayer = dynamic(() => import("./music-player"), { ssr: false });

export const Loader = () => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="z-70 fixed bottom-8 right-0 hidden px-8 sm:block">
      <div className="relative duration-100 ">
        <button
          onClick={() => setExpand(!expand)}
          className="absolute -right-5 -top-5 z-30 flex h-10 w-10 transform items-center justify-center overflow-hidden rounded-full border-2 border-slate-12 bg-slate-1 text-slate-12 duration-300 hover:scale-110 active:scale-95 dark:border-slate-1 dark:bg-slate-12 dark:text-slate-1"
        >
          {expand ? <MinusIcon /> : <PlusIcon />}
        </button>
        <div className="relative flex h-14 rounded-md  border-2 border-slate-12 bg-slate-1 shadow-md duration-300 dark:border-slate-1 dark:bg-slate-12">
          {expand ? (
            <Suspense fallback={<></>}>
              <MusicPlayer />
            </Suspense>
          ) : (
            <div className="flex flex-row items-center justify-center px-4">
              <MusicIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

const MusicIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  );
};
