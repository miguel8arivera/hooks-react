import { useReducer } from 'react';
import { todoReducer, initialState } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (newTodo: Todo) => {
    console.log(newTodo);
  };

  return (
    <div className="container">
      <h3> TodoAPP con el hook useReducer</h3>
      <h5>Descripcion</h5>
      <p>
        el useReducer es un hook que nos ayuda a manejar estados complejos de
        una manera mas sencilla y ordenada ya que nos permite manejar estados de
        una manera mas parecida a como lo hacemos con redux.
      </p>
      <hr />
      <h3>
        Todo APP: 10 , <small>pendientes: 2</small>
      </h3>
      <div className="row">
        <div className="col-7">
          <h3>Lista de Tareas</h3>

          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h3>Agregar Tarea</h3>
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </div>
  );
}
