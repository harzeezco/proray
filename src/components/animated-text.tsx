"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface AnimatedLinkProps {
  letters: string;
  className?: string;
}

const AnimatedLink = ({ letters, className }: AnimatedLinkProps) => {
  const DURATION = 0.13;
  const STAGGER = 0.025;

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <button
      type="button"
      className={twMerge("flex items-center justify-center", className)}
    >
      <motion.span
        initial="initial"
        whileHover="hovered"
        className=" relative block overflow-hidden whitespace-nowrap"
        style={{
          lineHeight: 0.85,
        }}
      >
        <div>
          {capitalize(letters)
            .split("")
            .map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </div>
        <div className="absolute inset-0">
          {capitalize(letters)
            .split("")
            .map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
        </div>
      </motion.span>
    </button>
  );
};

export default AnimatedLink;
