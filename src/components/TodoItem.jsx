import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodoContext();

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <Link to={`/todo/${todo.id}`} className="flex-grow">
        {todo.title}
      </Link>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white p-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;