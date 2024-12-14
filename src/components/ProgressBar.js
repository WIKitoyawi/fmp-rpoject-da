import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = ({ currentAmount, goal }) => {
  const percentage = (currentAmount / goal) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
