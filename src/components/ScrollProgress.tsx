import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollProgress({ containerRef }: ScrollProgressProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateProgress = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = (container.scrollLeft / scrollWidth) * 100;
      setWidth(progress);
    };

    container.addEventListener('scroll', updateProgress);
    return () => container.removeEventListener('scroll', updateProgress);
  }, [containerRef]);

  const scaleX = useSpring(width, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full h-[1px] bg-white/10">
      <motion.div
        className="h-full bg-white"
        style={{ scaleX, transformOrigin: 'left' }}
      />
    </div>
  );
} 