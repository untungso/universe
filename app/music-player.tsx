"use client";

import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const [sourceObject] = useState([
    {
      title: "Cyber War",
      artist: "AlexiAction",
      url: "/music/cyber-war-126419.mp3",
    },
    {
      title: "Space",
      artist: "Music Unlimited",
      url: "/music/space-120280.mp3",
    },
    {
      title: "Snow",
      artist: "DubDown",
      url: "/music/snow-132947.mp3",
    },
  ]);

  const [sourceIndex, setSourceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef(new Audio());

  const playMusic = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };
  const pauseMusic = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const playNext = () => {
    if (sourceIndex === sourceObject.length - 1) {
      setSourceIndex(0);
    } else {
      setSourceIndex(sourceIndex + 1);
    }
  };
  const playPrevious = () => {
    if (sourceIndex === 0) {
      setSourceIndex(sourceObject.length - 1);
    } else {
      setSourceIndex(sourceIndex - 1);
    }
  };

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(sourceObject[sourceIndex].url);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [sourceIndex, isPlaying, sourceObject]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.addEventListener("ended", () => playNext());
    }
    return audioRef.current.removeEventListener("ended", () =>
      audioRef.current.pause()
    );
  });

  return (
    <div className="z-70 fixed bottom-8 right-0 hidden px-8 sm:block">
      <div className="relative duration-100 ">
        <button className="absolute -top-5 -right-5 z-30 flex h-10 w-10 transform items-center justify-center overflow-hidden rounded-full border-2 border-slate-12 bg-slate-1 text-slate-12 duration-300 hover:scale-110 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current w-3"
            viewBox="0 0 24 24"
          >
            <path d="M0 10h24v4h-24z"></path>
          </svg>
        </button>
        <div className="relative flex h-14 rounded-md  border-2 border-slate-12 bg-slate-1 shadow-md duration-300">
          <div className="flex">
            <svg
              className={`m-4 h-5 w-5 bg-slate-12 ${
                isPlaying ? "motion-safe:animate-spin" : ""
              }`}
              viewBox="0 0 24 24"
            >
              {`className`}
            </svg>
            <div className="flex w-40 flex-col justify-center pl-4 text-left">
              <h3 className="text-md z-50 truncate font-sans font-bold uppercase text-slate-12">
                {sourceObject[sourceIndex].title}
              </h3>
              <h4 className="0 z-50 truncate font-mono text-xs uppercase text-slate-10">
                {sourceObject[sourceIndex].artist}
              </h4>
            </div>
            <div className="mr-2 grid w-36 grid-cols-3 rounded-md">
              <div className="flex items-center justify-center">
                <button
                  className="flex h-8 w-8 transform items-center justify-center hover:scale-110 active:scale-95"
                  onClick={playPrevious}
                >
                  <SkipBackIcon />
                </button>
              </div>
              <div id="pause" className="flex items-center justify-center">
                <button
                  className="flex h-10 w-10 transform items-center justify-center rounded-full hover:scale-110 active:scale-95"
                  onClick={isPlaying ? pauseMusic : playMusic}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="flex h-8 w-8 transform items-center justify-center hover:scale-110 active:scale-95"
                  onClick={playNext}
                >
                  <SkipForwardIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayIcon = () => {
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
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};

const PauseIcon = () => {
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
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  );
};

const SkipBackIcon = () => {
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
      <polygon points="19 20 9 12 19 4 19 20"></polygon>
      <line x1="5" y1="19" x2="5" y2="5"></line>
    </svg>
  );
};

const SkipForwardIcon = () => {
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
      <polygon points="5 4 15 12 5 20 5 4"></polygon>
      <line x1="19" y1="5" x2="19" y2="19"></line>
    </svg>
  );
};

export default MusicPlayer;
