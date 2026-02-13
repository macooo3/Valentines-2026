

function QuestionPage({ setPage }) {
  return (
    <div className="question-page">
      <h1 className="qtn">Will you be my Valentines?</h1>
      <div className="btn-container">
        <button className="btn yes" onClick={setPage}>Yes</button>
        <button className="btn no">No</button>
      </div>
    </div>
  );
}

export default QuestionPage;