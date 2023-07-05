import { Todo } from '../types';
import { TodoItem } from './TodoItem';

export type TodoProps = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

export function TodoList({ todos, onDeleteTodo, onToggleTodo }: TodoProps) {
  return (
    <ul className="list-group">
      {todos?.map(({ id, task, done }) => (
        <TodoItem
          key={id}
          task={task}
          id={id}
          done={done}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
        /*  <li key={id} className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{task}</span>
          <button className="btn btn-danger">Eliminar</button>
        </li> */
      ))}
    </ul>
  );
}
