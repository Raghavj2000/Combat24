import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ 
  src, 
  width = "100%", 
  height = "100%", 
  controls = true, 
  loop = true, 
  preload = "metadata",
  className = "",
  ...props 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleFullscreenChange = () => {
      // Add/remove fullscreen class for additional styling if needed
      if (document.fullscreenElement === video || 
          document.webkitFullscreenElement === video ||
          document.mozFullScreenElement === video ||
          document.msFullscreenElement === video) {
        video.classList.add('is-fullscreen');
      } else {
        video.classList.remove('is-fullscreen');
      }
    };

    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      controls={controls}
      loop={loop}
      preload={preload}
      controlsList="nodownload"
      className={`custom-video-player ${className}`}
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer; 