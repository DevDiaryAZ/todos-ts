export type TypeTodo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TypeStatus = 'All' | 'Active' | 'Completed';

export type TypeInitialState = {
  todos: TypeTodo[];
  statusFilter: TypeStatus;
};

export type TypeAction =
  | TypeActionWithStringPayload
  | TypeActionWithoutPayload
  | TypeActionWithStatusPayload;

export type TypeActionWithStringPayload = {
  type: ActionTypes.ADD_TODO | ActionTypes.TOGGLE_STATUS_TODO;
  payload: string;
};

export type TypeActionWithoutPayload = {
  type: ActionTypes.REMOVE_COMPLETED_TODOS;
};

export type TypeActionWithStatusPayload = {
  type: ActionTypes.CHANGE_STATUS_FILTER;
  payload: TypeStatus;
};

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO',
  REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS',
  CHANGE_STATUS_FILTER = 'CHANGE_STATUS_FILTER',
}