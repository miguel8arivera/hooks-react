type Todo = {
  id: string;
  task: string;
  done: boolean;
};

type Action = {
  type: string;
  payload: Todo;
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

export const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case '[TODO] add Todo':
      return [...state, action.payload];
    default:
      return initialState;
  }
};
