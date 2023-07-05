import { Todo, TodoAction } from '../types';

export const initialState: Todo[] = [
  /*  {
    id: crypto.randomUUID(),
    task: 'Aprender React',
    done: false,
  },
  {
    id: crypto.randomUUID(),
    task: 'Aprender Angular',
    done: true,
  },
  {
    id: crypto.randomUUID(),
    task: 'Aprender Typescript',
    done: false,
  }, */
];

export const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case '[TODO] add Todo':
      return [...state, action.payload];
    case '[TODO] delete Todo':
      return state.filter((todo) => todo.id !== action.payload);
    case '[TODO] toggle Todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
