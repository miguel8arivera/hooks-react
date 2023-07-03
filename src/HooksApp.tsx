import { CounterApp } from './01-useState/CounterApp';
import CounterAppWithCustomHook from './01-useState/CounterAppWithCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import SimpleFormWithHook from './02-useEffect/SimpleFormWithHook';

export function HooksApps() {
  return (
    <>
      <h3 className="text-center">Hello Hooks App</h3>
      <hr />
      <CounterApp />
      <hr />
      <CounterAppWithCustomHook />
      <hr />
      <SimpleForm />
      <hr />
      <SimpleFormWithHook />
    </>
  );
}
