import { v4 as uuidv4 } from 'uuid';
import { ActionTypes, TypeAction, TypeInitialState } from "../types/types";

export const initialState: TypeInitialState = {
  todos: [
    { id: '1', text: 'Тестовое задание', isCompleted: true },
    { id: '2', text: 'Прекрасный код', isCompleted: true },
    { id: '3', text: 'Покрытие тестами', isCompleted: true },
    { id: '4', text: 'Оффер :)', isCompleted: false },
  ],
  statusFilter: 'All',
};

export const todoReducer = (state: TypeInitialState, action: TypeAction): TypeInitialState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: action.payload, isCompleted: false }],
      };
    case ActionTypes.TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      };
    case ActionTypes.REMOVE_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    case ActionTypes.CHANGE_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    default:
      return state;
  }
};