"use client";

import { useEffect } from "react";

export const CloseSheetWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>CloseSheetWrapper</div>;
};
