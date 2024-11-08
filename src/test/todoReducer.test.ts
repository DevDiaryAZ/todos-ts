import { todoReducer, initialState } from '../state/todoReducer';
import { ActionTypes, TypeAction } from '../types/types';

describe('todoReducer', () => {
  it('должен добавлять новое todo', () => {
    const action: TypeAction = {
      type: ActionTypes.ADD_TODO,
      payload: 'Новое задание',
    };
    const newState = todoReducer(initialState, action);
    expect(newState.todos.length).toBe(initialState.todos.length + 1);
    expect(newState.todos[newState.todos.length - 1].text).toBe('Новое задание');
  });

  it('должен переключать статус todo', () => {
    const action: TypeAction = {
      type: ActionTypes.TOGGLE_STATUS_TODO,
      payload: '1',
    };
    const newState = todoReducer(initialState, action);
    const toggledTodo = newState.todos.find((todo) => todo.id === '1');
    expect(toggledTodo?.isCompleted).toBe(true);
  });

  it('должен удалять завершенные todos', () => {
    const action: TypeAction = {
      type: ActionTypes.REMOVE_COMPLETED_TODOS,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.todos.length).toBe(2);
    expect(newState.todos.find((todo) => todo.isCompleted)).toBeUndefined();
  });

  it('должен изменять статус фильтра', () => {
    const action: TypeAction = {
      type: ActionTypes.CHANGE_STATUS_FILTER,
      payload: 'Completed',
    };
    const newState = todoReducer(initialState, action);
    expect(newState.statusFilter).toBe('Completed');
  });
});
