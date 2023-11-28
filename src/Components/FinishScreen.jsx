/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 30 && percentage < 50) emoji = "🤔";
  if (percentage < 30) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored {points} out of {maxPoints} ({Math.round(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
