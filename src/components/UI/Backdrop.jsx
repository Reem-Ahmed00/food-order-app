import React from 'react';
import './Backdrop.css';

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

export default Backdrop;