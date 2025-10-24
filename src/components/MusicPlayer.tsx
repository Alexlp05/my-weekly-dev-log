import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src?: string;
  loop?: boolean;
  className?: string;
};

export default function MusicPlayer({ src = "/Its A Small World Disney repeat 1 hour music.mp3", loop = true, className = "" }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = loop;
    audio.preload = "auto";

    // Force audio to be unmuted and attempt autoplay on mount.
    // Note: browsers may still block unmuted autoplay despite this attempt.
    try {
      audio.muted = false; // ensure audio is unmuted
    } catch (e) {
      // ignore if property cannot be set
    }
    // Hint to browsers/players for inline playback on mobile (some TS setups don't include playsInline)
    try {
      // @ts-ignore
      audio.playsInline = true;
    } catch (e) {
      // ignore
    }
    audio.autoplay = true;
    try {
      audio.volume = 1;
    } catch (e) {
      // ignore
    }

    // Try to autoplay unmuted on mount. If the browser blocks it, there's no programmatic bypass.
      const tryAutoplay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          setIsMuted(!!audio.muted);
        } catch (err) {
          // Autoplay was blocked by browser policy. Audio will not start until user interaction.
          console.warn("Autoplay blocked by browser:", err);
          setIsPlaying(false);
        }
      };

    tryAutoplay();

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

  // Toggle mute/unmute without pausing playback. If playback is not started yet,
  // attempting to unmute will also try to start playback (user gesture will allow it).
  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      const newMuted = !audio.muted;
      audio.muted = newMuted;
      setIsMuted(newMuted);

      // If audio isn't playing yet and user just attempted to unmute, start playback.
      if (!isPlaying && !newMuted) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          console.warn("Play blocked on unmute:", err);
          setIsPlaying(false);
        }
      }
    } catch (err) {
      console.warn("Toggle mute failed:", err);
    }
  };

  return (
    <>
      {/* Full-width unmute banner */}
      {showBanner && (isMuted || !isPlaying) && (
        <div className="fixed top-0 left-0 w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-between z-50">
          <div className="text-sm">Please unmute for a better experience</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary-foreground text-primary"
            >
              Unmute
            </button>
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              aria-label="Close banner"
              className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-secondary/20 text-secondary-foreground"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    <div className={`flex items-center space-x-3 ${className}`}>
      <audio ref={audioRef} loop={loop} preload="auto" aria-hidden="true">
        <source src={src} type="audio/mpeg" />
        {/* Fallback text for very old browsers */}
        Your browser does not support audio playback.
      </audio>

      <button
        type="button"
        onClick={toggleMute}
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className={`inline-flex items-center px-3 py-2 rounded-md shadow-sm text-sm font-medium bg-primary text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50`}
      >
        <span className="mr-2">{isMuted ? "🔇" : "🔊"}</span>
        <span>{isMuted ? "Unmute" : "Mute"}</span>
      </button>
    </div>
    </>
  );
}
