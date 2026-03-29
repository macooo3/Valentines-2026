import { useEffect, useState } from "react";
import loveSong from "../assets/v26/wave_to_earth_-_love._(Official_Lyric_Video)_128k.mp3";

function LovePage() {
  const [lightsOn, setLightsOn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let blinkCount = 0;

    const interval = setInterval(() => {
      setLightsOn((prev) => !prev);
      blinkCount++;

      if (blinkCount === 6) {
        clearInterval(interval);
        setLightsOn(true);

        setTimeout(() => {
          setShowContent(true);
        }, 800);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const particlesContainer = document.querySelector(".particles");

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = 8 + Math.random() * 8 + "s";
      particle.style.animationDelay = Math.random() * 10 + "s";
      particlesContainer.appendChild(particle);
    }

    // Play audio after 1.5s delay
    const timeout = setTimeout(() => {
      const audio = new Audio(loveSong);
      audio.volume = 0.7;
      audio.play();
      // Store audio on window for cleanup
      window._loveAudio = audio;
    }, 1500);

    return () => {
      clearTimeout(timeout);
      if (window._loveAudio) {
        window._loveAudio.pause();
        window._loveAudio.currentTime = 0;
        window._loveAudio = null;
      }
    };
  }, []);
  return (
    <div className="love-page">
      <div className={`overlay ${showContent ? "fade-out" : ""}`} />

      <div className="lights">
        <div className="wire" />

        {[...Array(5)].map((_, i) => (
          <div key={i} className="light-wrapper">
            <div className="string" />
            <div className={`bulb ${lightsOn ? "on" : ""}`} />
          </div>
        ))}
      </div>

      <div className="particles" />

      <div className={`content ${showContent ? "visible" : ""}`}>
        <h1 className="happy">Happy Valentine's Day! ❤️</h1>
        <div className="outer-frame">
          <div className="inner-frame">
            <img
              className="red-grid-corner"
              src="src\assets\v26-stickers\flower-corner.png"
            ></img>
            <img
              className="love-corner"
              src="src\assets\v26-stickers\love-corner.png"
            ></img>
            <img
              className="monkey"
              src="src\assets\v26-stickers\monke-flw.png"
            ></img>
            <img
              className="snoopy-flw"
              src="src\assets\v26-stickers\snoopy-flw.png"
            ></img>
            <img
              className="couple"
              src="src\assets\v26-stickers\newspaper-kiss-draw.png"
            ></img>
            <img
              className="red-ribbon"
              src="src\assets\v26-stickers\red-ribbon.png"
            ></img>
            <img
              className="bouquet"
              src="src\assets\v26-stickers\bouquet.png"
            ></img>
            <div className="love-letter"></div>
            <div className="photo-card"></div>
            <div className="photo-card2"></div>
            <div className="photo-heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LovePage;
