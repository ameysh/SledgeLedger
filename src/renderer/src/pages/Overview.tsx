import React from 'react';
import '../assets/base.css';
import '../assets/main.css';
import '../styles/Overview.css';

const Overview: React.FC = () => {
  return (
    <>
      <div className="text">
        <span className="sledgeledger">SledgeLedger</span> Finance Tracker
      </div>

      <div className="text">
        <p className="subtext">Made by Amey Shaligram</p>
      </div>
    </>
  );
};

export default Overview;
