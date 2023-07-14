import React from "react";

export default function VideoPlayer({ videoClass, videoRef }) {
  return (
    <video
      className={videoClass}
      src=""
      loop={true}
      autoPlay={true}
      muted={true}
      ref={videoRef}
    ></video>
  );
}
