import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Home from './pages/Home';
import TodoDetail from './pages/TodoDetails';
import Notification from './components/Notification';

const App = () =>{
  return (
    <TodoProvider>
      <Router>
        <main className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <section className="relative py-3 sm:max-w-xl sm:mx-auto">
            <header className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></header>
            <article className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <Notification />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo/:id" element={<TodoDetail />} />
              </Routes>
            </article>
          </section>
        </main>
      </Router>
    </TodoProvider>
  );
}

export default App;