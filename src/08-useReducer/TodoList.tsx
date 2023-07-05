import { TodoItem } from './TodoItem';

type TodoProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoProps) {
  return (
    <ul className="list-group">
      {todos?.map(({ id, task }) => (
        <TodoItem key={id} task={task} />
        /*  <li key={id} className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{task}</span>
          <button className="btn btn-danger">Eliminar</button>
        </li> */
      ))}
    </ul>
  );
}
