import { useEffect, useRef } from "react";

export function useOutisideClick(close, listenCapturing = true) {
  // console.log(close);
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log(e.target);
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close, listenCapturing]
  );

  return ref;
}
