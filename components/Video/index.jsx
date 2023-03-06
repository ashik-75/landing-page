"use client";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SectionTitle from "../Common";

function Video() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative px-5  py-16 md:py-20">
      <div className="container mx-auto space-y-10">
        <SectionTitle
          title={"We are ready to help"}
          content="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="relative h-96">
            <Image
              src="/video/video.jpg"
              fill
              className="rounded-xl object-cover"
              alt=""
            />
          </div>

          <div className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center">
            <button
              onClick={handleOpen}
              className="rounded-full bg-gray-300 p-5 shadow"
            >
              <PlayIcon className="h-7 w-7 text-purple-500" />
            </button>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          videoId="gmp0istg5xo"
          isOpen={isOpen}
          onClose={handleClose}
        />
      </div>

      <Image
        fill
        src="/video/shape.svg"
        className="absolute bottom-8 left-0 right-0 z-[-1]"
        alt=""
      />
    </div>
  );
}

export default Video;
