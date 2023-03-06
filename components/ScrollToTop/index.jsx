"use client";

import useScroll from "@/hooks/useScroll";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function ScrollToTop() {
  const visible = useScroll(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8  right-8 flex items-center justify-center rounded bg-purple-500 p-3 text-white shadow transition-all hover:scale-105 hover:bg-purple-600"
      >
        <ChevronUpIcon className="icon" />
      </button>
    )
  );
}

export default ScrollToTop;
