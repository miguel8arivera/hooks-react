import { CounterApp } from './01-useState/CounterApp';
import CounterAppWithCustomHook from './01-useState/CounterAppWithCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import SimpleFormWithHook from './02-useEffect/SimpleFormWithHook';
import MultipleCoostomHooks from './03-examples/MultipleCoostomHooks';
import FocusInput from './04-useRef/FocusInput';
import Posts from './05-useLayoutEffect/Posts';
import Memorize from './06-useMemo/Memorize';
import MemoHook from './06-useMemo/MemoHook';
import CallbackHook from './06-useMemo/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
import { TodoApp } from './08-useReducer/TodoApp';

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
      <hr />
      <MultipleCoostomHooks />
      <hr />
      <FocusInput />
      <hr />
      <Posts />
      <hr />
      <Memorize />
      <hr />
      <MemoHook />
      <hr />
      <CallbackHook />
      <hr />
      <Padre />
      <hr />
      <TodoApp />
    </>
  );
}
