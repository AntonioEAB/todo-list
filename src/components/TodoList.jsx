import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Pagination from './Paginations';
import { useTodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos } = useTodoContext();
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
    return (
      <div>
      {currentTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Pagination
        totalTodos={todos.length}
        todosPerPage={todosPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </div>
    );
  };
  
  export default TodoList;