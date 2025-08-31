import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Hls from "hls.js";

const TVPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = "https://srv5.zcast.com.br/radiozero/radiozero/playlist.m3u8";
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource("https://srv5.zcast.com.br/radiozero/radiozero/playlist.m3u8");
        hls.attachMedia(videoRef.current);
      }
    }
  }, []);

  return (
    <div className="aspect-video max-w-[754px]">
      <video
        ref={videoRef}
        controls
        width="100%"
        height="auto"
        className="rounded-xl"
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};

export default TVPlayer;