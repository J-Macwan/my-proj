// src/components/VideoPlayer.jsx
import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay as soon as source changes
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Some browsers block autoplay without user gesture
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
