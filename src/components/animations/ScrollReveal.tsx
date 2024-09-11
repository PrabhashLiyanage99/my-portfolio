import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right';
}

export default function SlideInSection({ children, direction = 'left' }: SlideInSectionProps) {
  const variants = {
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
