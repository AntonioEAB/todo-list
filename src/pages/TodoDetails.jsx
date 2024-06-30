import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import { useTodoContext } from '../context/TodoContext';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos } = useTodoContext();

  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return <div>404 not found</div>;
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <div className="flex items-start space-x-4">
        <Link
          to="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold mt-8 py-2 px-4 rounded-full transition-colors"
          aria-label="Return to home"
        >
          ← Back
        </Link>
        <div className="flex-grow">
          <TodoForm todo={todo} />
        </div>
      </div>
    </section>
  );
};

export default TodoDetail;
