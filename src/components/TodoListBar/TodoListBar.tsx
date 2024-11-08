import React from 'react';
import { LeftTodosText } from './LeftTodosText/LeftTodosText';
import { StatusButton } from './StatusButton/StatusButton';
import { Button } from '../common/Button/Button';
import { TypeStatus, TypeTodo } from '../../types/types';

type TypeProps = {
  todos: TypeTodo[];
  status: TypeStatus;
  changeStatus: (status: TypeStatus) => void;
  removeCompletedTodos: () => void;
};

export const TodoListBar = ({ todos, status, changeStatus, removeCompletedTodos }: TypeProps) => {
  return (
    <div className="todo-list__btn-block">
      <LeftTodosText todos={todos} />
      <div className="todo-list__btn todo-list__status-btn-container">
        <StatusButton status={status} label={'All'} changeStatus={changeStatus} />
        <StatusButton status={status} label={'Active'} changeStatus={changeStatus} />
        <StatusButton status={status} label={'Completed'} changeStatus={changeStatus} />
      </div>
      <Button className="button_white todo-list__btn" onClick={removeCompletedTodos}>
        Clear completed
      </Button>
    </div>
  );
};
