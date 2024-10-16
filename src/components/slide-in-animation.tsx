'use client';

import * as React from 'react';
// Importing twMerge
import { motion, useInView } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface Props<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
  className?: string;
}

type ContainerTypes<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

const SlideInAnimation = <C extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...otherProps
}: ContainerTypes<C>) => {
  const Component = as ?? 'div';
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container}>
      {isInView && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        >
          <Component {...otherProps} className={twMerge(className)}>
            {children}
          </Component>
        </motion.div>
      )}
    </div>
  );
};

export default SlideInAnimation;
