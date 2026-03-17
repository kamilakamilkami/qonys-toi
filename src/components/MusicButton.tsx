import { useState, useRef } from "react";
import { Music, Pause } from "lucide-react";

const MusicButton = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-md border border-gold/30 p-3 rounded-full shadow-card hover:scale-110 transition-transform"
        aria-label="Әуенді қосу"
      >
        {playing ? (
          <Pause className="w-5 h-5 text-gold" />
        ) : (
          <Music className="w-5 h-5 text-gold" />
        )}
      </button>
      <audio ref={audioRef} loop preload="none">
        <source
          src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/nLHfVnQaTJHFW8GkjyzR4bMwxGesx0VuiCaYRE3t.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default MusicButton;
