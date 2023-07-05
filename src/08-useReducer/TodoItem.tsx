type TodoItemProps = {
  task: string;
  id: string;
  done: boolean;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

export function TodoItem({
  task,
  onDeleteTodo,
  id,
  done,
  onToggleTodo,
}: TodoItemProps) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            done ? 'text-decoration-line-through' : ''
          }`}
          onClick={() => onToggleTodo(id)}
        >
          {task}
        </span>
        <button onClick={() => onDeleteTodo(id)} className="btn btn-danger">
          Eliminar
        </button>
      </li>
    </>
  );
}
