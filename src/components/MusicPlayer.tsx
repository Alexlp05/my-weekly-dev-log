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
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [forceOverlay, setForceOverlay] = useState(true);

  // Read dismissal flag from localStorage on mount (safe-guard for SSR)
  useEffect(() => {
    try {
      const v = localStorage.getItem("music_banner_dismissed");
      if (v === "1") setBannerDismissed(true);
    } catch (e) {
      // ignore (no localStorage)
    }
  }, []);

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
      {/* Full-width unmute banner (sliding) */}
      {/**
       * visibleBanner: banner is shown when not dismissed AND the audio is muted or not playing
       * we render the banner and a spacer so the page content is pushed down (better UX)
       */}
      {(() => {
        // Show the banner unless the user dismissed it. Keep logic simple so the banner
        // reliably appears and forces the unmute overlay when requested.
        const visibleBanner = !bannerDismissed && showBanner;
        return (
          <>
            {/* Forceful full-screen overlay to demand unmute ("clickbait" style) */}
            {forceOverlay && !bannerDismissed && showBanner && (
              <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6">
                <div className="max-w-2xl text-center">
                  <h2 className="text-4xl font-extrabold text-white mb-4 animate-pulse">UNMUTE NOW TO EXPERIENCE THE PROJECT</h2>
                  <p className="text-white/80 mb-6">Sound is a key part of this demo — click the button below to unmute and continue.</p>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        // unmute and start playback
                        toggleMute();
                        try {
                          localStorage.setItem("music_banner_dismissed", "1");
                        } catch (e) {}
                        setBannerDismissed(true);
                        setForceOverlay(false);
                      }}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                      UNMUTE NOW
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div
              aria-hidden={!visibleBanner}
              className={
                `fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ease-out ` +
                (visibleBanner ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none")
              }
            >
              <div className="bg-primary text-primary-foreground py-2 px-4 flex items-center justify-between">
                <div className="text-sm">Please unmute for a better experience</div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      toggleMute();
                      // dismiss after user explicitly unmuted
                      try {
                        localStorage.setItem("music_banner_dismissed", "1");
                      } catch (e) {}
                      setBannerDismissed(true);
                    }}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary-foreground text-primary"
                  >
                    Unmute
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        localStorage.setItem("music_banner_dismissed", "1");
                      } catch (e) {}
                      setBannerDismissed(true);
                    }}
                    aria-label="Close banner"
                    className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-secondary/20 text-secondary-foreground"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* spacer: push page content down when banner visible to avoid overlap */}
            <div className={visibleBanner ? "h-12" : "h-0"} aria-hidden />
          </>
        );
      })()}
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
