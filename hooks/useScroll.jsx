import { useEffect, useState } from "react";

function useScroll(height = 300) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // this function handle show button when scrool up to or equal to 300
    const handler = () => {
      if (window.scrollY >= height) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [height]);
  return visible;
}

export default useScroll;
