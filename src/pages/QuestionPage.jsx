import { useState } from "react";

function QuestionPage({ setPage }) {
  const [noCount, setNoCount] = useState(1);
  const [message, setMessage] = useState("No");
  function handleNo() {
    setNoCount((prev) => prev + 1);

    if (noCount === 1) {
      setMessage("Please? You dont mean that right! 🥺");
    } else if (noCount === 2) {
      setMessage("I promise I'll make it worth your while! 😘");
    } else if (noCount === 3) {
      setMessage("YOU have no choice! 😤");
    }
  }
  console.log(noCount);
  return (
    <div className="question-page">
      <h1 className="qtn">Will you be my Valentines?</h1>
      <div className="btn-container">
        <button className="btn yes" onClick={setPage}>
          Yes
        </button>
        <button className="btn no" onClick={noCount < 4 ? handleNo : setPage}>
          {message}
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
