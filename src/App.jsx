import { useState } from "react";

import "./App.css";
import QuestionPage from "./pages/QuestionPage";
import LovePage from "./pages/LovePage";

function App() {
  const [showLovePage, setShowLovePage] = useState(false);

  const handleYesClick = () => {
    setShowLovePage(true);
  };

  return (
    <>
      {!showLovePage ? <QuestionPage setPage={handleYesClick} /> : <LovePage />}
    </>
  );
}

export default App;
