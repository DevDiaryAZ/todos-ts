import React from 'react';
import { TypeTodo } from '../../../types/types';


type TypeProps = {
  todo: TypeTodo;
  toggleItemStatus: (id: string) => void;
};

export const TodoItem = ({ todo, toggleItemStatus }: TypeProps) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <label className="custom-checkbox">
        <input type="checkbox" onChange={() => toggleItemStatus(todo.id)} />
        <span className="checkmark"></span>
        <span className="todo-item__text">{todo.text}</span>
      </label>
    </div>
  );
};
