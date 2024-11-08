import React, { useCallback, useMemo, useReducer } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoListBar } from './components/TodoListBar/TodoListBar';
import { initialState, todoReducer } from './state/todoReducer';
import { ActionTypes, TypeAction, TypeInitialState, TypeStatus } from './types/types';

export const App = () => {
  const [state, dispatch] = useReducer<React.Reducer<TypeInitialState, TypeAction>>(
    todoReducer,
    initialState,
  );

  const addTodo = useCallback((text: string) => {
    if (text) {
      dispatch({ type: ActionTypes.ADD_TODO, payload: text });
    }
  }, []);

  const toggleItemStatus = (id: string) => {
    dispatch({ type: ActionTypes.TOGGLE_STATUS_TODO, payload: id });
  };

  const removeCompletedTodos = useCallback(() => {
    dispatch({ type: ActionTypes.REMOVE_COMPLETED_TODOS });
  }, []);

  const changeStatus = useCallback((status: TypeStatus) => {
    dispatch({ type: ActionTypes.CHANGE_STATUS_FILTER, payload: status });
  }, []);

  const filterByStatusTodos = useMemo(() => {
    switch (state.statusFilter) {
      case 'Active':
        return state.todos.filter((todo) => !todo.isCompleted);
      case 'Completed':
        return state.todos.filter((todo) => todo.isCompleted);
      case 'All':
      default:
        return state.todos;
    }
  }, [state.todos, state.statusFilter]);

  return (
    <>
      <main className="main">
        <h1>TODOS</h1>
        <div className="container">
          <AddTodoForm addTodo={addTodo} />
          <TodoList todos={filterByStatusTodos} toggleItemStatus={toggleItemStatus} />
          <TodoListBar
            todos={state.todos}
            status={state.statusFilter}
            changeStatus={changeStatus}
            removeCompletedTodos={removeCompletedTodos}
          />
        </div>
      </main>
    </>
  );
};
