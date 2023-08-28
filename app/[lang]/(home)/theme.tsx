"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [cycle, setCycle] = useState(0);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeCycle = () => {
    if (cycle === 0) {
      setTheme("system");
      setCycle(1);
    } else if (cycle === 1) {
      setTheme("light");
      setCycle(2);
    } else {
      setTheme("dark");
      setCycle(0);
    }
  };

  return (
    <>
      <button onClick={handleThemeCycle}>
        {theme} {cycle}
      </button>
    </>
  );
};

export default ThemeSwitch;
