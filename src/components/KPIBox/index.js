import React from 'react';
import './index.css';

const KPIBox = ({ title, value, colorClass, onClick }) => {
  return (
    <div className={`kpi-box ${colorClass}`} onClick={onClick}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KPIBox;
