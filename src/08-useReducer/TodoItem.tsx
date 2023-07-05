export function TodoItem({ task }: { task: string }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{task}</span>
        <button className="btn btn-danger">Eliminar</button>
      </li>
    </>
  );
}
