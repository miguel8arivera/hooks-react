import { useEffect, useReducer } from 'react';
import { initialState, todoReducer } from '../08-useReducer/todoReducer';
import { Todo } from '../types';

const init = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo: Todo) => {
    dispatch({
      type: '[TODO] add Todo',
      payload: newTodo,
    });
    //!Otra forma de hacerlo es asi:
    /* const action = {
      type: '[TODO] add Todo',
      payload: newTodo,
    };
    dispatch(action); */
  };
  const handleDeleteTodo = (id: string) => {
    console.log(id);
    dispatch({
      type: '[TODO] delete Todo',
      payload: id,
    });
    //!Otra forma de hacerlo es asi:
    /* const action = {
     type: '[TODO] delete Todo',
     payload: id,
   };
   dispatch(action); */
  };
  const handleToggleTodo = (id: string) => {
    dispatch({
      type: '[TODO] toggle Todo',
      payload: id,
    });
  };

  const allTodo = todos.length;
  const todoPending = () => {
    const todosPending = todos.filter((todo) => !todo.done); // otra manera seria todos.filter(todo => todo.done === false)
    return todosPending.length;
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    allTodo,
    todoPending,
  };
};
