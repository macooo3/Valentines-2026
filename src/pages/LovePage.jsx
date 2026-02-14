import { useEffect, useState } from "react";

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
            <img className="red-grid-corner" src="src\assets\v26-stickers\red-grid-corner.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LovePage;
