import React from 'react';
import { useDateFormat } from '../contexts/DateFormatContext';
import '../styles/overview.css';

const Overview: React.FC = () => {
  const { dateFormat } = useDateFormat();

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    switch (dateFormat) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      default: // DD/MM/YYYY
        return `${day}/${month}/${year}`;
    }
  };

  return (
    <div className="overview-container">
      <h1>Overview</h1>
      <div className="card">
        <h2>Total Balance</h2>
        <div className="card-content">
          <p className="balance">$1,234.56</p>
          <p className="date">Last updated: {formatDate(new Date())}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
