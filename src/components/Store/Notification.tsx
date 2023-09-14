import React, { useState, useEffect } from 'react';
import './store-styles/store.css';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`notification ${isVisible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
};

export default Notification;