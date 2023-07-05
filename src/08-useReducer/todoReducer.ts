type Todo = {
  id: string;
  task: string;
  done: boolean;
};

export const initialState: Todo[] = [
  {
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
  },
];

export const todoReducer = (state = initialState, action = {}) => {
  return state;
};
