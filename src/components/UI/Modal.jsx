import React from 'react';
import './Modal.css';
import { motion } from 'framer-motion';

const Modal = ({ children, onClose }) => {
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;