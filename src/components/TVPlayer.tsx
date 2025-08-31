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
    <div className="w-full max-w-[754px] p-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/50">
        <video
          ref={videoRef}
          controls
          className="w-full h-full"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            aspectRatio: '16/9'
          }}
        >
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </div>
  );
};

export default TVPlayer;