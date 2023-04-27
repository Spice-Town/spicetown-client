import React, { useEffect } from 'react';

const CustomModal = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleCloseOnOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="custom-modal-overlay"
      onClick={handleCloseOnOverlayClick}
      onTouchStart={handleCloseOnOverlayClick}
    >
      <div className="custom-modal">
        <button className="custom-modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="custom-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
