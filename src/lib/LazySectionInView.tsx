"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export const LazySection = ({ children }: Props) => {
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

  return <div ref={ref}>{isVisible && children}</div>;
};
