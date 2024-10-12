'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface AnimatedLinkProps {
  className?: string;
  letters: string;
}

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const AnimatedLink = ({ className, letters }: AnimatedLinkProps) => {
  const DURATION = 0.13;
  const STAGGER = 0.025;

  return (
    <button
      className={twMerge(
        'flex items-center justify-center',
        className,
      )}
      type='button'
    >
      <motion.span
        className=' relative block overflow-hidden whitespace-nowrap'
        initial='initial'
        style={{
          lineHeight: 0.85,
        }}
        whileHover='hovered'
      >
        <div>
          {capitalize(letters)
            .split('')
            .map((char, i) => (
              <motion.span
                key={i}
                className='inline-block'
                transition={{
                  duration: DURATION,
                  ease: 'easeInOut',
                  delay: STAGGER * i,
                }}
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: '-100%',
                  },
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
        </div>
        <div className='absolute inset-0'>
          {capitalize(letters)
            .split('')
            .map((char, i) => (
              <motion.span
                key={i}
                className='inline-block'
                transition={{
                  duration: DURATION,
                  ease: 'easeInOut',
                  delay: STAGGER * i,
                }}
                variants={{
                  initial: {
                    y: '100%',
                  },
                  hovered: {
                    y: 0,
                  },
                }}
              >
                {char === ' ' ? '\u00A0' : char}{' '}
              </motion.span>
            ))}
        </div>
      </motion.span>
    </button>
  );
};

export default AnimatedLink;
