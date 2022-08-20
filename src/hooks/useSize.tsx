import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState } from "react";

export const useSize = (target: any) => {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect));
  return size;
};
