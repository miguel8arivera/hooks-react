import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export function TodoApp() {
  const {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    allTodo,
    todoPending,
  } = useTodo();

  return (
    <div className="container">
      <h3> TodoAPP con el hook useReducer</h3>
      <h5>Descripcion</h5>
      <p>
        el useReducer es un hook que nos ayuda a manejar estados complejos de
        una manera mas sencilla y ordenada ya que nos permite manejar estados de
        una manera mas parecida a como lo hacemos con redux.
      </p>
      <h5>Partes del hook useReducer</h5>
      <ul>
        <li>
          el useReducer recibe dos argumentos y un tercero opcional, el primero
          es una funcion reducer que se encarga de manejar los estados y el
          segundo es el estado inicial del reducer.
        </li>
      </ul>
      <div>
        <code>
          const [state, dispatch] = useReducer(Reducer, initialState, init);
        </code>
      </div>
      <ul>
        <li>
          el primer argumento de la funcion reducer es el estado actual y el
          segundo es la accion que se va a ejecutar.
        </li>
      </ul>
      <div>
        <h6>partes de la funcion Reducer</h6>
        <ul>
          <li>state</li>
          <li>action</li>
        </ul>
      </div>
      <div>
        en las action se manejan los tipos de acciones que se van a ejecutar es
        un objeto que tiene un tipo y un payload
      </div>
      <ul>
        <li>type</li>
        <li>payload</li>
      </ul>

      <hr />
      <h3>
        Todo APP: {allTodo}, <small>pendientes: {todoPending()}</small>
      </h3>
      <div className="row">
        <div className="col-7">
          <h3>Lista de Tareas</h3>

          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h3>Agregar Tarea</h3>
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
}
