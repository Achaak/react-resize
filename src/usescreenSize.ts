import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenWidth, setscreenWidth] = useState({
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  });

  const updateScreenSize = () => {
    setscreenWidth({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    })
  };

  useEffect(() => {
    updateScreenSize()

    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenWidth;
};

export default useScreenSize;