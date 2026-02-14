import { useState } from "react";

import "./App.css";
import QuestionPage from "./pages/QuestionPage";
import LovePage from "./pages/LovePage";

function App() {
  const [showLovePage, setShowLovePage] = useState(false);
  const [bgColor, setBgColor] = useState("#ff83bf");
  const handleYesClick = () => {
    setShowLovePage(true);
    setBgColor("#f5dcdf");
  };

  return (
    <>
      <div className="app" style={{ backgroundColor: bgColor }}>
        {!showLovePage ? (
          <QuestionPage setPage={handleYesClick} />
        ) : (
          <LovePage />
        )}
      </div>
    </>
  );
}

export default App;
