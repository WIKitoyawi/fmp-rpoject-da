import React from "react";
import "../styles/progressBar.css";

const ProgressBar = ({ current, goal }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
      <div className="progress-info">
        <span>Собрано: ${current.toLocaleString()}</span>
        <span>Необходимо: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
