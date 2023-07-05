// Intro Reducer - Reducer con un solo estado

import { Todo } from '../types';
// crear el tipo de dato que va a recibir el reducer

/* type Todo = {
  id: string;
  task: string;
  done: boolean;
}; */

//1.crear el estado inicial
const initialState: Todo[] = [
  {
    id: crypto.randomUUID(),
    task: 'Learn React',
    done: false,
  },
];

//2. Crear el reducer que recibe como parametro el estado y el action y siempre debe retornar un estado;

const todoReducer = (
  state = initialState,
  action = { type: '', payload: {} }
) => {
  if (action?.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
};

//3. crear una tarea para probar el reducer

const newTodo = {
  id: crypto.randomUUID(),
  task: 'Learn typescript',
  done: true,
};

//4. crear un action para agregar una nueva tarea al reducer (el action debe tener un type y un payload) el type debe ser un string y el payload puede ser cualquier cosa (objeto, string, number, etc) pero es recomendable que sea un objeto para que sea mas facil de leer, en conclusion el action es un objeto que tiene un type y un payload.

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

//5. llamar al reducer con el action

const todos = todoReducer(initialState, addTodoAction);

console.log({ state: todos });
