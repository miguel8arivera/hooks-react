import { CounterApp } from './01-useState/CounterApp';
import CounterAppWithCustomHook from './01-useState/CounterAppWithCustomHook';

export function HooksApps() {
  return (
    <>
      <h3 className="text-center">Hello Hooks App</h3>
      <hr />
      <CounterApp />
      <hr />
      <CounterAppWithCustomHook />
    </>
  );
}
