import React, { createContext, useState, useContext } from 'react';
import Toast from '../atoms/Toast';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: '',
    type: 'info',
    visible: false,
  });

  const showToast = (message, type = 'info') => {
    setToast({ message, type, visible: true });
  };

  const hideToast = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onHide={hideToast}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
