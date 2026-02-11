function QuestionPage({ setPage }) {
  return (
    <>
      <h1 className="qtn">Will you be my Valentines?</h1>
      <div className="btn-container">
        <button className="btn yes" onClick={setPage}>Yes</button>
        <button className="btn no">No</button>
      </div>
    </>
  );
}

export default QuestionPage;