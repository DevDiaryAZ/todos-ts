import React from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import { TypeTodo } from '../../types/types';


type TypeProps = {
  todos: TypeTodo[];
  toggleItemStatus: (id: string) => void;
};

export const TodoList = ({ todos, toggleItemStatus }: TypeProps) => {
  return (
    <>
      <div>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleItemStatus={toggleItemStatus} />;
        })}
      </div>
    </>
  );
};
