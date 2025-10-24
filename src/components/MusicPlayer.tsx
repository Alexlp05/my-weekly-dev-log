import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src?: string;
  loop?: boolean;
  className?: string;
};

export default function MusicPlayer({ src = "/Its A Small World Disney repeat 1 hour music.mp3", loop = true, className = "" }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = loop;
    audio.preload = "auto";

    // Try to autoplay unmuted. If blocked, try muted autoplay (some browsers allow it).
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsMuted(audio.unmuted);
        setAutoplayBlocked(false);
        return;
      } catch (err) {
        // Unmuted autoplay blocked — try muted autoplay as a fallback
      }

      try {
        audio.muted = true;
        await audio.play();
        setIsPlaying(true);
        setIsMuted(true);
        setAutoplayBlocked(false);
      } catch (err) {
        // Muted autoplay also blocked. We'll show a control so the user can start audio.
        setIsPlaying(false);
        setAutoplayBlocked(true);
      }
    };

    tryAutoplay();

    // Cleanup on unmount
    return () => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (e) {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, loop]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setIsMuted(audio.muted);
      setAutoplayBlocked(false);
    } catch (err) {
      setIsPlaying(false);
      setAutoplayBlocked(true);
    }
  };

  const handleUnmute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    setIsMuted(false);
    // If audio was not playing, try to play now that it's unmuted
    if (!isPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setAutoplayBlocked(true));
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <audio ref={audioRef} loop={loop} preload="auto" aria-hidden="true">
        <source src={src} type="audio/mpeg" />
        {/* Fallback text for very old browsers */}
        Your browser does not support audio playback.
      </audio>

      <button
        type="button"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className={`inline-flex items-center px-3 py-2 rounded-md shadow-sm text-sm font-medium bg-primary text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50`}
      >
        <span className="mr-2">{isPlaying ? "🔊" : "🔇"}</span>
        <span>{isPlaying ? "Pause" : "Play"}</span>
      </button>

      {/* If autoplay worked but audio is muted (muted autoplay fallback), allow unmute */}
      {isMuted && isPlaying && (
        <button
          type="button"
          onClick={handleUnmute}
          aria-label="Unmute music"
          className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-secondary text-secondary-foreground"
        >
          🔈 Unmute
        </button>
      )}

      {/* If autoplay was blocked entirely, hint the user to click to enable audio */}
      {autoplayBlocked && (
        <div className="text-sm text-muted-foreground">Autoplay blocked by browser — click Play to enable audio.</div>
      )}
    </div>
  );
}
