import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

interface MusicPlayerProps {
  src?: string;
}

export default function MusicPlayer({ src = '/sound.mp3' }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      
      // Muted autoplay biasanya selalu diizinkan browser
      audioRef.current.muted = true;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("Muted autoplay started. Waiting for interaction to unmute.");
        })
        .catch((err) => {
          console.log("Muted autoplay pun diblokir, menunggu interaksi:", err);
        });
    }

    const handleFirstInteraction = () => {
      if (audioRef.current) {
        // Saat user berinteraksi, kita unmute suaranya
        audioRef.current.muted = false;
        
        // Jika karena suatu hal tadi belum sempat play, kita play sekarang
        if (audioRef.current.paused) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.error("Gagal play:", e));
        }
      }
      
      // Bersihkan listener
      const events = ['click', 'keydown', 'mousedown', 'touchstart'];
      events.forEach(evt => document.removeEventListener(evt, handleFirstInteraction));
    };

    const events = ['click', 'keydown', 'mousedown', 'touchstart'];
    events.forEach(evt => document.addEventListener(evt, handleFirstInteraction, { passive: true }));

    return () => {
      events.forEach(evt => document.removeEventListener(evt, handleFirstInteraction));
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pastikan saat tombol manual ditekan, suara tidak ter-mute
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Gagal memutar musik:", error);
      });
    }
  };

  return (
    <div className="music-player-container">
      <audio ref={audioRef} src={src} loop preload="auto" />
      
      <button 
        className="nav-social-icon music-toggle-btn" 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          // Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}

        {/* Animated equalizer bars */}
        {isPlaying && (
          <div className="equalizer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </button>
    </div>
  );
}
