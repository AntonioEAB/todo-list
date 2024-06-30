import React from 'react';
import { useTodoContext } from '../context/TodoContext';

const Notification = () => {
  const { notification, isNotificationVisible } = useTodoContext();

  if (!notification) return null;

  return (
    <div
      className={`
        fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md
        transition-opacity duration-300 ease-in-out
        ${isNotificationVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {notification}
    </div>
  );
};

export default Notification;