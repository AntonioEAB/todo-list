import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { Link } from 'react-router-dom';

const TodoForm = ({ todo, onSubmit }) => {
  const { addTodo, updateTodo } = useTodoContext();
  const [title, setTitle] = useState(todo ? todo.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (todo) {
      updateTodo(todo.id, { title });
    } else {
      addTodo({ title });
    }
    setTitle('');
  };

  return (
    <section className="max-w-md mx-auto mt-8 relative">
      <form onSubmit={handleSubmit} className="relative flex items-center">
     
        <input
          type="text"
          className="flex-1 pl-5 pr-16 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Insert your text'
          required
          aria-label="Todo input"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-2 bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition-colors"
          aria-label={todo ? 'Update todo' : 'Add todo'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {todo 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            }
          </svg>
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
