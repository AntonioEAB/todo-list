import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Home = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm onSubmit={() => {}} />
        <TodoList />
      </div>
    );
  };
  
  export default Home;