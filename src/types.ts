export type Todo = {
  id: string;
  task: string;
  done: boolean;
};

export const initialState: Todo[] = [];
export interface AddTodoAction {
  type: '[TODO] add Todo';
  payload: {
    id: string;
    task: string;
    done: boolean;
  };
}

export interface ToggleTodoAction {
  type: '[TODO] toggle Todo';
  payload: string;
}

export interface DeleteTodoAction {
  type: '[TODO] delete Todo';
  payload: string;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
