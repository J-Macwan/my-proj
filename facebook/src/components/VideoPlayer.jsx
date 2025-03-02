import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Autoplay blocked:", err);
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="video-player"
      src={src}
      controls
      muted
    />
  );
}

export default VideoPlayer;
