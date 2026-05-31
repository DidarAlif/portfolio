"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="text-accent-blue">{currentText}</span>
      <span
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-accent-blue"
        style={{ animation: "cursor-blink 1s step-end infinite" }}
      />
    </span>
  );
}
