import React, { createContext, useState, useContext, useEffect } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [notification, setNotification] = useState(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
    showNotification('Todo added successfully');
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo));
    showNotification('Todo updated successfully');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showNotification('Todo deleted successfully');
  };

  const showNotification = (message) => {
    setNotification(message);
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
      setTimeout(() => setNotification(null), 300); // Espera a que termine la animación
    }, 3000);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, notification, isNotificationVisible }}>
      {children}
    </TodoContext.Provider>
  );
};