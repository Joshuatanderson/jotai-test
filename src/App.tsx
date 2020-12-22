import React from 'react';
import {useAtom} from "jotai";
import './App.css';
import { countAtom } from './Atom';

function App() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="App">
      <h1>Jotai</h1>
      <button onClick={()=> setCount((c: number) => c - 1)}>-</button>
      <input value={count} type="number" readOnly></input>
      <button onClick={() => setCount((c: number) => c + 1)}>+</button>
    </div>
  );
}

export default App;
