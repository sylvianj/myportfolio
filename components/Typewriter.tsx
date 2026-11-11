"use client";

import { useState, useEffect } from "react";

const words = [
  "Software Developer.",
  "Mobile App Developer.",
  "AI Enthusiast.",
  "Full-Stack Developer."
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="text-white">
      {words[index].substring(0, subIndex)}
      <span className="text-fuchsia-500 font-light ml-1">{blink ? "|" : " "}</span>
    </span>
  );
}