"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const LazySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return <div ref={ref}>{isVisible && <div>Lazy Section</div>}</div>;
};
