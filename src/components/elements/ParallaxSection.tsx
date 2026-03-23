import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  id?: string;
}

export default function ParallaxSection({ 
  children, 
  offset = 50, 
  className = "",
  id
}: ParallaxSectionProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, position: 'relative' }} 
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
