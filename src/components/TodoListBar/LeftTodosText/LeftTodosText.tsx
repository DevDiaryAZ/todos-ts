import React, { useMemo } from 'react';
import { TypeTodo } from '../../../types/types';

type TypeProps = {
  todos: TypeTodo[];
};

export const LeftTodosText = React.memo(function ({ todos }: TypeProps) {

  const leftTodos = useMemo(() => todos.filter((todo) => !todo.isCompleted).length, [todos]);

  return (
    <span
      className={`todo-list__btn todo-list__btn-left ${
        !leftTodos ? ' todo-list__btn-left_hidden' : ''
      }`}>
      {leftTodos} items left
    </span>
  );
});
