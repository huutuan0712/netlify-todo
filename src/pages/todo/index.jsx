import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import useTodo from './todo.hook';

export default function Todo() {
  const { todos } = useSelector((state) => state.todo);
  const { clearAll } = useTodo();
  console.log('🚀 ~ file: TodoItem.jsx ~ line 7 ~ TodoItem ~ todos', todos);
  const { getTodo } = useTodo();
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <AddTodo />
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <button
          disabled={!todos?.length}
          onClick={() => clearAll(todos)}
          className="btn ml-auto block"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
