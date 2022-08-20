import { useEffect, useLayoutEffect, useState } from "react";

export const useHeight = (target: any) => {
  const [size, setSize] = useState<any>(null);

  function doTheSizing(target: any) {
    setSize(target.current.getBoundingClientRect());
  }
  useLayoutEffect(() => {
    doTheSizing(target);
  }, [target]);

  useEffect(() => {
    function resize() {
      doTheSizing(target);
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [target]);

  return size?.height;
};
