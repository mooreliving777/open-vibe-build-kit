import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  return <main className="shell">
    <p className="eyebrow">Open Vibe · React lab</p>
    <h1>A real first component.</h1>
    <p>React redraws the screen when state changes. Click below and inspect the code.</p>
    <button onClick={() => setCount(previous => previous + 1)}>Count: {count}</button>
    <p className="foot">No external APIs, trackers or accounts. Build locally first.</p>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
