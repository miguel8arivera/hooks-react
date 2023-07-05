import { useForm } from '../hooks';

type TodoAddProps = {
  onNewTodo: (todo: Todo) => void;
};

export function TodoAdd({ onNewTodo }: TodoAddProps) {
  const { task, handleInputChange, onResetForm } = useForm({
    task: '',
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim().length <= 0) return;

    const newTodo = {
      id: crypto.randomUUID(),
      task,
      done: false,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="task" className="form-label">
        tarea a realizar
      </label>
      <input
        onChange={handleInputChange}
        id="task"
        name="task"
        type="text"
        className="form-control"
        value={task}
        placeholder="que tengo que hacer?"
      />
      <button className="btn btn-outline-primary m-2">Agregar</button>
    </form>
  );
}
